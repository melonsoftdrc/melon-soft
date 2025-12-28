const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const { URL } = require("url");

const PROJECT_ROOT = __dirname;
const DB_PATH = path.join(PROJECT_ROOT, "data", "db.json");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon",
};

function sendJson(res, statusCode, body) {
  const payload = JSON.stringify(body);
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(payload),
    "cache-control": "no-store",
  });
  res.end(payload);
}

function sendText(res, statusCode, body) {
  res.writeHead(statusCode, {
    "content-type": "text/plain; charset=utf-8",
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-store",
  });
  res.end(body);
}

function safeJoin(rootDir, urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const normalized = path
    .normalize(decoded)
    .replace(/^([/\\])+/, "")
    .replace(/^(\.\.[/\\])+/, "");
  return path.join(rootDir, normalized);
}

function createId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function asNonEmptyString(value, maxLen) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return maxLen ? trimmed.slice(0, maxLen) : trimmed;
}

function ensureDbShape(db) {
  const meta = db && typeof db === "object" ? db.meta : null;
  const version = meta && typeof meta.version === "number" ? meta.version : 1;

  const normalized = {
    meta: {
      version,
      updatedAt:
        meta && typeof meta.updatedAt === "string" ? meta.updatedAt : new Date().toISOString(),
    },
    blogPosts: Array.isArray(db?.blogPosts) ? db.blogPosts : [],
    projects: Array.isArray(db?.projects) ? db.projects : [],
    faqs: Array.isArray(db?.faqs) ? db.faqs : [],
    jobs: Array.isArray(db?.jobs) ? db.jobs : [],
    contactMessages: Array.isArray(db?.contactMessages) ? db.contactMessages : [],
  };

  return normalized;
}

async function readJsonFile(filePath) {
  const raw = await fsp.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJsonAtomic(filePath, value) {
  const dir = path.dirname(filePath);
  await fsp.mkdir(dir, { recursive: true });
  const tempPath = path.join(dir, `.tmp_${path.basename(filePath)}_${Date.now()}_${Math.random()}`);
  const payload = JSON.stringify(value, null, 2);
  await fsp.writeFile(tempPath, payload, "utf8");
  await fsp.rename(tempPath, filePath);
}

function createDbStore() {
  let cache = null;
  let cacheMtimeMs = null;
  let writeChain = Promise.resolve();

  async function loadDb() {
    try {
      const stat = await fsp.stat(DB_PATH);
      if (cache && cacheMtimeMs === stat.mtimeMs) return cache;
      const parsed = await readJsonFile(DB_PATH);
      cache = ensureDbShape(parsed);
      cacheMtimeMs = stat.mtimeMs;
      return cache;
    } catch (err) {
      if (err && err.code === "ENOENT") {
        cache = ensureDbShape({});
        cacheMtimeMs = null;
        await persistDb(cache);
        return cache;
      }
      throw err;
    }
  }

  async function persistDb(nextDb) {
    const normalized = ensureDbShape(nextDb);
    normalized.meta.updatedAt = new Date().toISOString();
    writeChain = writeChain.then(async () => {
      await writeJsonAtomic(DB_PATH, normalized);
      try {
        const stat = await fsp.stat(DB_PATH);
        cacheMtimeMs = stat.mtimeMs;
      } catch {
        cacheMtimeMs = null;
      }
      cache = normalized;
    });
    return writeChain;
  }

  async function addContactMessage(input) {
    const name = asNonEmptyString(input?.name, 120);
    const phone = asNonEmptyString(input?.phone, 40);
    const email = asNonEmptyString(input?.email, 160);
    const subject = asNonEmptyString(input?.subject, 120);
    const message = asNonEmptyString(input?.message, 4000);

    const errors = [];
    if (!name) errors.push("name");
    if (!email) errors.push("email");
    if (!subject) errors.push("subject");
    if (!message) errors.push("message");

    if (errors.length) {
      const error = new Error("validation_error");
      error.statusCode = 400;
      error.details = { missingOrInvalid: errors };
      throw error;
    }

    const db = await loadDb();
    const entry = {
      id: createId("msg"),
      createdAt: new Date().toISOString(),
      name,
      phone: phone || null,
      email,
      subject,
      message,
      status: "new",
    };
    const nextDb = { ...db, contactMessages: [entry, ...db.contactMessages] };
    await persistDb(nextDb);
    return entry;
  }

  return {
    loadDb,
    addContactMessage,
  };
}

function getCollectionPublic(db, key) {
  const value = db[key];
  if (!Array.isArray(value)) return [];
  return value;
}

async function readRequestBodyJson(req, maxBytes) {
  const contentType = String(req.headers["content-type"] || "");
  if (!contentType.includes("application/json")) return null;

  const limit = typeof maxBytes === "number" ? maxBytes : 100_000;
  let received = 0;
  const chunks = [];

  for await (const chunk of req) {
    received += chunk.length;
    if (received > limit) {
      const error = new Error("payload_too_large");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  if (!chunks.length) return null;
  const raw = Buffer.concat(chunks).toString("utf8");
  try {
    return JSON.parse(raw);
  } catch {
    const error = new Error("invalid_json");
    error.statusCode = 400;
    throw error;
  }
}

function serveStatic(req, res) {
  const url = new URL(req.url, "http://localhost");
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = safeJoin(PROJECT_ROOT, pathname);

  if (!filePath.startsWith(PROJECT_ROOT)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      sendText(res, 404, "Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    const noCacheExts = new Set([".html", ".js", ".css", ".json"]);
    res.writeHead(200, {
      "content-type": contentType,
      "content-length": stat.size,
      "cache-control": noCacheExts.has(ext) ? "no-cache" : "public, max-age=3600",
    });

    const stream = fs.createReadStream(filePath);
    stream.on("error", () => sendText(res, 500, "Server Error"));
    stream.pipe(res);
  });
}

function createServer() {
  const store = createDbStore();

  return http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    const method = String(req.method || "GET").toUpperCase();

    if (url.pathname === "/api/health" && method === "GET") {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (url.pathname === "/api/blog-posts" && method === "GET") {
      const db = await store.loadDb();
      sendJson(res, 200, { items: getCollectionPublic(db, "blogPosts") });
      return;
    }

    if (url.pathname === "/api/projects" && method === "GET") {
      const db = await store.loadDb();
      sendJson(res, 200, { items: getCollectionPublic(db, "projects") });
      return;
    }

    if (url.pathname === "/api/faqs" && method === "GET") {
      const db = await store.loadDb();
      sendJson(res, 200, { items: getCollectionPublic(db, "faqs") });
      return;
    }

    if (url.pathname === "/api/jobs" && method === "GET") {
      const db = await store.loadDb();
      sendJson(res, 200, { items: getCollectionPublic(db, "jobs") });
      return;
    }

    if (url.pathname === "/api/contact-messages" && method === "POST") {
      try {
        const payload = await readRequestBodyJson(req, 80_000);
        const saved = await store.addContactMessage(payload);
        sendJson(res, 201, { ok: true, item: { id: saved.id, createdAt: saved.createdAt } });
      } catch (err) {
        const status = err?.statusCode || 500;
        sendJson(res, status, { ok: false, error: err?.message || "server_error", details: err?.details || null });
      }
      return;
    }

    if (url.pathname.startsWith("/api/")) {
      sendJson(res, 404, { ok: false, error: "not_found" });
      return;
    }

    if (method !== "GET" && method !== "HEAD") {
      sendText(res, 405, "Method Not Allowed");
      return;
    }

    serveStatic(req, res);
  });
}

function startServer({ port } = {}) {
  const server = createServer();
  const chosenPort = typeof port === "number" ? port : Number(process.env.PORT || 5173);
  server.listen(chosenPort, () => {
    process.stdout.write(`Server running on http://localhost:${chosenPort}/\n`);
  });
  return server;
}

module.exports = { createServer, startServer };

if (require.main === module) {
  startServer();
}

