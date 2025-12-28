// Melon-Soft - JavaScript Principal

let animationObserver = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation
    initializeTheme();
    initializeAnimations();
    initializeScrollEffects();
    initializeDataPages();
});

// Gestion du thème (clair/sombre)
function initializeTheme() {
    // Vérifier le thème sauvegardé ou la préférence système
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Appliquer les corrections spécifiques au thème
    applyThemeCorrections();
    
    // Ajouter un bouton de basculement de thème si nécessaire
    addThemeToggle();
}

function addThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
    themeToggle.className = 'fixed top-20 right-4 z-40 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all';
    themeToggle.setAttribute('aria-label', 'Basculer le thème');
    themeToggle.onclick = toggleTheme;
    
    document.body.appendChild(themeToggle);
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Mettre à jour l'icône du bouton
    const themeToggle = document.querySelector('[aria-label="Basculer le thème"] span');
    if (themeToggle) {
        themeToggle.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
    
    // Appliquer les corrections immédiatement
    applyThemeCorrections();
}

// Appliquer les corrections de thème spécifiques
function applyThemeCorrections() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Mettre à jour le logo selon le thème
    updateLogoTheme(isDark);
    
    // Supprimer les styles dynamiques précédents pour éviter les conflits
    const existingStyles = document.querySelectorAll('style[data-theme-correction]');
    existingStyles.forEach(style => style.remove());
    
    if (isDark) {
        // Créer un style unique pour toutes les corrections en mode sombre
        const darkStyle = document.createElement('style');
        darkStyle.setAttribute('data-theme-correction', 'dark');
        darkStyle.textContent = `
            /* Corrections générales */
            .bg-white:not(.navbar):not(.footer) { background-color: var(--surface-dark) !important; }
            .text-\\[\\#111318\\] { color: var(--text-white) !important; }
            .text-\\[\\#616f89\\] { color: #9ca3af !important; }
            
            /* Bordures */
            .border-\\[\\#dbdfe6\\], .border-\\[\\#e5e7eb\\] { border-color: var(--border-dark) !important; }
            .border-\\[\\#f0f2f4\\] { border-color: var(--border-dark) !important; }
            .border-\\[\\#2a303c\\] { border-color: #4b5563 !important; }
            
            /* Fond gris */
            .bg-gray-50, .bg-gray-100 { background-color: #1f2937 !important; }
            
            /* Textes gris */
            .text-gray-400 { color: #9ca3af !important; }
            .text-gray-300 { color: #d1d5db !important; }
            .text-gray-200 { color: #e5e7eb !important; }
            
            /* Hover states */
            .dark .hover\\:bg-gray-50:hover { background-color: #374151 !important; }
            .dark .hover\\:bg-gray-800:hover { background-color: #374151 !important; }
            .dark .hover\\:border-gray-700:hover { border-color: #4b5563 !important; }
            .dark .hover\\:text-gray-800:hover { color: #e5e7eb !important; }
            
            /* Groupes */
            .group .border-\\[\\#dbdfe6\\] { 
                border-color: var(--border-dark) !important; 
                background-color: var(--surface-dark) !important; 
            }
            .group:hover .border-\\[\\#dbdfe6\\] { border-color: var(--primary) !important; }
            
            /* Fonds colorés */
            .group .bg-blue-50 { background-color: #1e3a8a !important; }
            .group .bg-green-50 { background-color: #064e3b !important; }
            .group .bg-red-50 { background-color: #7f1d1d !important; }
            .group .bg-purple-50 { background-color: #581c87 !important; }
            .group .bg-orange-50 { background-color: #9a3412 !important; }
            
            /* Hover des fonds colorés */
            .dark .group:hover .bg-blue-50 { background-color: var(--primary) !important; }
            .dark .group:hover .bg-green-50 { background-color: #059669 !important; }
            .dark .group:hover .bg-red-50 { background-color: #dc2626 !important; }
            .dark .group:hover .bg-purple-50 { background-color: #9333ea !important; }
            .dark .group:hover .bg-orange-50 { background-color: #ea580c !important; }
            
            /* Footer */
            .footer { background-color: var(--background-dark) !important; }
            .footer .text-gray-400 { color: #9ca3af !important; }
            .footer .footer-link { color: #9ca3af !important; }
            .footer .footer-link:hover { color: var(--primary) !important; }
        `;
        document.head.appendChild(darkStyle);
    } else {
        // Réinitialiser les styles en mode clair
        const lightStyle = document.createElement('style');
        lightStyle.setAttribute('data-theme-correction', 'light');
        lightStyle.textContent = `
            /* Réinitialisation des styles en mode clair */
            .bg-white:not(.navbar):not(.footer) { background-color: var(--surface-light) !important; }
            .text-\\[\\#111318\\] { color: #111318 !important; }
            .text-\\[\\#616f89\\] { color: #616f89 !important; }
            
            .border-\\[\\#dbdfe6\\], .border-\\[\\#e5e7eb\\] { border-color: #dbdfe6 !important; }
            .border-\\[\\#f0f2f4\\] { border-color: #f0f2f4 !important; }
            .border-\\[\\#2a303c\\] { border-color: #2a303c !important; }
            
            .bg-gray-50 { background-color: #f9fafb !important; }
            .bg-gray-100 { background-color: #f3f4f6 !important; }
            
            .text-gray-400 { color: #9ca3af !important; }
            .text-gray-300 { color: #d1d5db !important; }
            .text-gray-200 { color: #e5e7eb !important; }
            
            .group .border-\\[\\#dbdfe6\\] { 
                border-color: #dbdfe6 !important; 
                background-color: #ffffff !important; 
            }
            
            .group .bg-blue-50 { background-color: #eff6ff !important; }
            .group .bg-green-50 { background-color: #f0fdf4 !important; }
            .group .bg-red-50 { background-color: #fef2f2 !important; }
            .group .bg-purple-50 { background-color: #faf5ff !important; }
            .group .bg-orange-50 { background-color: #fff7ed !important; }
            
            .footer { background-color: var(--background-dark) !important; }
            .footer .text-gray-400 { color: #9ca3af !important; }
            .footer .footer-link { color: #9ca3af !important; }
            .footer .footer-link:hover { color: var(--primary) !important; }
        `;
        document.head.appendChild(lightStyle);
    }
}

// Animations au scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observer les éléments qui doivent animer
    observeAnimations(document);
}

function observeAnimations(root) {
    if (!animationObserver || !root) return;
    const scope = root instanceof Element ? root : document;
    scope.querySelectorAll('[data-animate]').forEach(el => {
        animationObserver.observe(el);
    });
}

// Effets de scroll
function initializeScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scroll vers le bas
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scroll vers le haut
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
}

// Fonctions utilitaires
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Gestion du menu mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        
        // Fermer tous les sous-menus quand on ferme le menu principal
        if (menu.classList.contains('hidden')) {
            const submenus = menu.querySelectorAll('[id$="-submenu"]');
            submenus.forEach(submenu => {
                submenu.classList.add('hidden');
            });
            
            // Réinitialiser les icônes des sous-menus
            const submenuButtons = menu.querySelectorAll('button[onclick^="toggleMobileSubmenu"] span');
            submenuButtons.forEach(icon => {
                icon.textContent = 'expand_more';
            });
        }
        
        // Mettre à jour l'icône du bouton hamburger
        const menuButton = document.querySelector('button[onclick="toggleMobileMenu()"] span');
        if (menuButton) {
            menuButton.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
        }
    }
}

function toggleMobileSubmenu(submenuId) {
    const submenu =
        document.getElementById(submenuId) ||
        document.getElementById(`${submenuId}-submenu`);
    if (submenu) {
        submenu.classList.toggle('hidden');
        
        // Mettre à jour l'icône du sous-menu
        const submenuButton =
            document.querySelector(`button[onclick="toggleMobileSubmenu('${submenuId}')"] span`) ||
            document.querySelector(`button[onclick="toggleMobileSubmenu('${submenu.id}')"] span`);
        if (submenuButton) {
            submenuButton.textContent = submenu.classList.contains('hidden') ? 'expand_more' : 'expand_less';
        }
    }
}

if (typeof window !== "undefined") {
    window.toggleMobileMenu = toggleMobileMenu;
    window.toggleMobileSubmenu = toggleMobileSubmenu;
}

async function fetchCollection({ apiPath, collectionKey }) {
    try {
        const response = await fetch(apiPath, { headers: { "accept": "application/json" } });
        if (response.ok) {
            const json = await response.json();
            if (json && Array.isArray(json.items)) return json.items;
        }
    } catch {}

    try {
        const response = await fetch("data/db.json", { headers: { "accept": "application/json" } });
        if (!response.ok) return [];
        const db = await response.json();
        return Array.isArray(db?.[collectionKey]) ? db[collectionKey] : [];
    } catch {
        return [];
    }
}

function getUrlParam(key) {
    try {
        const url = new URL(window.location.href);
        return url.searchParams.get(key);
    } catch {
        return null;
    }
}

function escapeHtml(value) {
    const str = typeof value === "string" ? value : "";
    return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function formatDateFr(isoDate) {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("fr-FR", { year: "numeric", month: "long", day: "2-digit" }).format(date);
}

function renderBlogPosts({ container, posts, selectedSlug }) {
    const safePosts = Array.isArray(posts) ? posts : [];
    const selected = selectedSlug ? safePosts.find(p => p?.slug === selectedSlug) : null;

    if (selected) {
        container.innerHTML = `
            <article class="mx-auto w-full max-w-[900px] px-4 sm:px-10 lg:px-20 py-10">
                <div class="flex flex-col gap-4">
                    <a href="blog.html" class="text-primary font-bold">← Retour</a>
                    <h1 class="text-3xl sm:text-4xl font-black text-text-dark dark:text-white">${escapeHtml(selected.title)}</h1>
                    <div class="flex flex-wrap gap-3 text-sm text-text-grey dark:text-gray-400">
                        <span>${escapeHtml(selected.author || "")}</span>
                        <span>${escapeHtml(formatDateFr(selected.publishedAt || ""))}</span>
                    </div>
                    ${selected.coverImageUrl ? `<img src="${escapeHtml(selected.coverImageUrl)}" class="w-full rounded-xl border border-gray-100 dark:border-gray-700" alt="${escapeHtml(selected.title)}">` : ""}
                    <div class="prose prose-blue max-w-none dark:prose-invert">
                        <p class="text-base text-text-grey dark:text-gray-300 leading-relaxed whitespace-pre-line">${escapeHtml(selected.content || "")}</p>
                    </div>
                </div>
            </article>
        `;
        return;
    }

    const itemsHtml = safePosts
        .slice()
        .sort((a, b) => String(b?.publishedAt || "").localeCompare(String(a?.publishedAt || "")))
        .map(p => {
            const title = escapeHtml(p?.title || "");
            const excerpt = escapeHtml(p?.excerpt || "");
            const date = escapeHtml(formatDateFr(p?.publishedAt || ""));
            const author = escapeHtml(p?.author || "");
            const slug = encodeURIComponent(String(p?.slug || ""));
            const cover = p?.coverImageUrl ? String(p.coverImageUrl) : "";
            return `
                <a href="blog.html?slug=${slug}" class="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg transition-all dark:border-gray-700 dark:bg-gray-800">
                    ${cover ? `<div class="h-44 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
                        <img src="${escapeHtml(cover)}" class="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" alt="${title}">
                    </div>` : ""}
                    <div class="flex flex-col gap-2">
                        <h3 class="text-lg font-bold text-text-dark group-hover:text-primary transition-colors dark:text-white">${title}</h3>
                        <p class="text-sm text-text-grey dark:text-gray-400 line-clamp-3">${excerpt}</p>
                        <div class="flex flex-wrap gap-3 text-xs text-text-grey dark:text-gray-500 pt-1">
                            <span>${author}</span>
                            <span>${date}</span>
                        </div>
                    </div>
                </a>
            `;
        })
        .join("");

    container.innerHTML = `
        <div class="mx-auto w-full max-w-[1280px] px-4 sm:px-10 lg:px-20 py-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${itemsHtml || `<div class="text-text-grey dark:text-gray-400">Aucun article pour le moment.</div>`}
            </div>
        </div>
    `;
}

function renderFaqs({ container, faqs }) {
    const items = Array.isArray(faqs) ? faqs : [];
    container.innerHTML = `
        <div class="mx-auto w-full max-w-[900px] px-4 sm:px-10 lg:px-20 py-10">
            <div class="flex flex-col gap-4">
                ${(items.length ? items : []).map((f, idx) => {
                    const q = escapeHtml(f?.question || "");
                    const a = escapeHtml(f?.answer || "");
                    const id = `faq_${idx}`;
                    return `
                        <div class="rounded-xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                            <button type="button" class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" data-faq-toggle="${id}">
                                <span class="font-bold text-text-dark dark:text-white">${q}</span>
                                <span class="material-symbols-outlined text-text-grey dark:text-gray-400">expand_more</span>
                            </button>
                            <div id="${id}" class="hidden px-5 pb-5 text-text-grey dark:text-gray-300 whitespace-pre-line">${a}</div>
                        </div>
                    `;
                }).join("") || `<div class="text-text-grey dark:text-gray-400">Aucune question pour le moment.</div>`}
            </div>
        </div>
    `;

    container.querySelectorAll("[data-faq-toggle]").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-faq-toggle");
            const panel = targetId ? container.querySelector(`#${CSS.escape(targetId)}`) : null;
            if (!panel) return;
            panel.classList.toggle("hidden");
        });
    });
}

function renderJobs({ container, jobs }) {
    const items = (Array.isArray(jobs) ? jobs : []).filter(j => j?.isActive !== false);
    container.innerHTML = `
        <div class="mx-auto w-full max-w-[1000px] px-4 sm:px-10 lg:px-20 py-10">
            <div class="flex flex-col gap-4">
                ${items.map(j => {
                    const title = escapeHtml(j?.title || "");
                    const location = escapeHtml(j?.location || "");
                    const type = escapeHtml(j?.type || "");
                    const dept = escapeHtml(j?.department || "");
                    const postedAt = escapeHtml(formatDateFr(j?.postedAt || ""));
                    const desc = escapeHtml(j?.description || "");
                    const email = escapeHtml(j?.applyEmail || "recrutement@melon-soft.cd");
                    const mailto = `mailto:${encodeURIComponent(String(j?.applyEmail || "recrutement@melon-soft.cd"))}?subject=${encodeURIComponent(`Candidature - ${j?.title || ""}`)}`;
                    return `
                        <div class="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div>
                                        <h3 class="text-xl font-black text-text-dark dark:text-white">${title}</h3>
                                        <div class="flex flex-wrap gap-2 pt-2 text-sm text-text-grey dark:text-gray-400">
                                            <span>${location}</span>
                                            <span>•</span>
                                            <span>${type}</span>
                                            ${dept ? `<span>•</span><span>${dept}</span>` : ""}
                                            ${postedAt ? `<span>•</span><span>${postedAt}</span>` : ""}
                                        </div>
                                    </div>
                                    <a class="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 font-bold text-white hover:bg-primary/90 transition-colors" href="${mailto}">
                                        Postuler
                                    </a>
                                </div>
                                ${desc ? `<p class="text-sm text-text-grey dark:text-gray-300 whitespace-pre-line">${desc}</p>` : ""}
                                <p class="text-xs text-text-grey dark:text-gray-500">Email: ${email}</p>
                            </div>
                        </div>
                    `;
                }).join("") || `<div class="text-text-grey dark:text-gray-400">Aucune offre ouverte pour le moment.</div>`}
            </div>
        </div>
    `;
}

function normalizeProjectCategory(value) {
    const v = String(value || "").trim();
    if (!v) return "Autre";
    return v;
}

function renderProjects({ container, projects, activeFilter }) {
    const items = Array.isArray(projects) ? projects : [];
    const filter = String(activeFilter || "").trim();
    const filtered = filter && filter !== "Tout"
        ? items.filter(p => normalizeProjectCategory(p?.category) === filter)
        : items;

    const cards = filtered.map(p => {
        const title = escapeHtml(p?.title || "");
        const category = escapeHtml(normalizeProjectCategory(p?.category));
        const summary = escapeHtml(p?.summary || "");
        const imageUrl = escapeHtml(p?.imageUrl || "");
        return `
            <div class="group flex flex-col gap-4 bg-white dark:bg-[#1A202C] p-3 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 cursor-pointer" data-animate>
                <div class="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
                    ${imageUrl ? `<img src="${imageUrl}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" alt="${title}">` : ""}
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div class="px-2 pb-2">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <p class="text-primary text-xs font-bold uppercase tracking-wide mb-1">${category}</p>
                            <h3 class="text-[#111318] dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">${title}</h3>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full text-gray-600 dark:text-gray-300">
                            <span class="material-symbols-outlined text-[20px]">arrow_outward</span>
                        </div>
                    </div>
                    <p class="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">${summary}</p>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = cards || `<div class="text-text-grey dark:text-gray-400">Aucun projet trouvé.</div>`;
    observeAnimations(container);
}

async function initializeDataPages() {
    const blogContainer = document.querySelector("[data-blog-container]");
    if (blogContainer) {
        const posts = await fetchCollection({ apiPath: "/api/blog-posts", collectionKey: "blogPosts" });
        const slug = getUrlParam("slug");
        renderBlogPosts({ container: blogContainer, posts, selectedSlug: slug });
    }

    const faqContainer = document.querySelector("[data-faq-container]");
    if (faqContainer) {
        const faqs = await fetchCollection({ apiPath: "/api/faqs", collectionKey: "faqs" });
        renderFaqs({ container: faqContainer, faqs });
    }

    const jobsContainer = document.querySelector("[data-jobs-container]");
    if (jobsContainer) {
        const jobs = await fetchCollection({ apiPath: "/api/jobs", collectionKey: "jobs" });
        renderJobs({ container: jobsContainer, jobs });
    }

    const projectsGrid = document.getElementById("project-grid");
    if (projectsGrid) {
        const projects = await fetchCollection({ apiPath: "/api/projects", collectionKey: "projects" });
        const filtersRoot = document.getElementById("project-filters");
        const filterButtons = filtersRoot ? Array.from(filtersRoot.querySelectorAll("[data-project-filter]")) : [];

        let activeFilter = "Tout";
        const setActive = (value) => {
            activeFilter = value || "Tout";
            filterButtons.forEach(btn => {
                const isActive = btn.getAttribute("data-project-filter") === activeFilter;
                btn.classList.toggle("bg-primary", isActive);
                btn.classList.toggle("ring-1", isActive);
                btn.classList.toggle("ring-primary", isActive);
                btn.classList.toggle("bg-white", !isActive);
                btn.classList.toggle("border", !isActive);
                btn.classList.toggle("border-gray-200", !isActive);
                btn.classList.toggle("dark:bg-gray-800", !isActive);
                btn.classList.toggle("dark:border-gray-700", !isActive);
                const label = btn.querySelector("p");
                if (label) {
                    label.classList.toggle("text-white", isActive);
                    label.classList.toggle("text-[#111318]", !isActive);
                    label.classList.toggle("dark:text-gray-200", !isActive);
                }
            });
            renderProjects({ container: projectsGrid, projects, activeFilter });
        };

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                setActive(btn.getAttribute("data-project-filter") || "Tout");
            });
        });

        projectsGrid.innerHTML = "";
        setActive(activeFilter);
    }

    const contactForm = document.querySelector("[data-contact-form]");
    if (contactForm) {
        const submitButton = contactForm.querySelector("[data-contact-submit]");
        const statusEl = contactForm.querySelector("[data-contact-status]");
        const getValue = (selector) => {
            const el = contactForm.querySelector(selector);
            return el ? String(el.value || "").trim() : "";
        };

        const setStatus = (text, kind) => {
            if (!statusEl) return;
            statusEl.textContent = text;
            statusEl.className = kind === "ok"
                ? "text-sm text-green-600 dark:text-green-400"
                : "text-sm text-red-600 dark:text-red-400";
        };

        if (submitButton) {
            submitButton.addEventListener("click", async () => {
                setStatus("", "ok");
                const payload = {
                    name: getValue("[data-contact-name]"),
                    phone: getValue("[data-contact-phone]"),
                    email: getValue("[data-contact-email]"),
                    subject: getValue("[data-contact-subject]"),
                    message: getValue("[data-contact-message]"),
                };

                try {
                    const response = await fetch("/api/contact-messages", {
                        method: "POST",
                        headers: { "content-type": "application/json", "accept": "application/json" },
                        body: JSON.stringify(payload),
                    });
                    const json = await response.json().catch(() => null);
                    if (!response.ok) {
                        const details = json?.details?.missingOrInvalid?.join(", ") || "";
                        setStatus(`Erreur: veuillez compléter ${details || "les champs obligatoires"}.`, "error");
                        return;
                    }
                    contactForm.reset();
                    setStatus("Message envoyé. Merci, nous vous répondrons rapidement.", "ok");
                } catch {
                    try {
                        const queue = JSON.parse(localStorage.getItem("contact_messages_queue") || "[]");
                        localStorage.setItem("contact_messages_queue", JSON.stringify([payload, ...queue].slice(0, 20)));
                        contactForm.reset();
                        setStatus("Message enregistré localement. Lancez le serveur pour l’envoyer.", "ok");
                    } catch {
                        setStatus("Impossible d’envoyer le message pour le moment.", "error");
                    }
                }
            });
        }
    }
}

// Fermer le menu mobile quand on clique en dehors
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const menuButton = event.target.closest('button[onclick="toggleMobileMenu()"]');
    const submenuButton = event.target.closest('button[onclick^="toggleMobileSubmenu"]');
    
    // Ne fermer le menu que si on clique en dehors et qu'aucun bouton de menu n'est cliqué
    if (menu && !menu.contains(event.target) && !menuButton && !submenuButton && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        
        // Fermer tous les sous-menus
        const submenus = menu.querySelectorAll('[id$="-submenu"]');
        submenus.forEach(submenu => {
            submenu.classList.add('hidden');
        });
    }
});

// Validation de formulaire simple
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Animation de chargement
function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    loader.innerHTML = '<div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>';
    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.remove();
    }
}

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Fonction pour mettre à jour le logo selon le thème
function updateLogoTheme(isDark) {
    const logoImages = document.querySelectorAll('.navbar-logo');
    const footerLogo = document.querySelector('.footer-logo');
    
    // Chemins des logos
    const lightLogo = 'assets/images/logo.png';
    const darkLogo = 'assets/images/logo1.png';
    
    // Mettre à jour les logos de la navbar
    logoImages.forEach(logo => {
        if (isDark) {
            logo.src = darkLogo;
        } else {
            logo.src = lightLogo;
        }
    });
    
    // Mettre à jour le logo du footer (toujours logo1.png comme dans le code actuel)
    if (footerLogo) {
        footerLogo.src = 'assets/images/logo1.png';
    }
}

// Fonction pour mettre à jour les couleurs de la charte graphique
function updateCharteColors(colors) {
    // Mettre à jour les variables CSS
    const root = document.documentElement;
    
    if (colors.primary) {
        root.style.setProperty('--primary', colors.primary);
        root.style.setProperty('--primary-dark', colors.primaryDark || colors.primary);
        root.style.setProperty('--primary-light', colors.primaryLight || colors.primary);
    }
    
    if (colors.accent) {
        root.style.setProperty('--accent-yellow', colors.accent);
    }
    
    if (colors.backgroundLight) {
        root.style.setProperty('--background-light', colors.backgroundLight);
    }
    
    if (colors.backgroundDark) {
        root.style.setProperty('--background-dark', colors.backgroundDark);
    }
    
    if (colors.textDark) {
        root.style.setProperty('--text-dark', colors.textDark);
    }
    
    if (colors.textGrey) {
        root.style.setProperty('--text-grey', colors.textGrey);
    }
    
    if (colors.textLight) {
        root.style.setProperty('--text-light', colors.textLight);
    }
    
    if (colors.borderLight) {
        root.style.setProperty('--border-light', colors.borderLight);
    }
    
    if (colors.borderDark) {
        root.style.setProperty('--border-dark', colors.borderDark);
    }
    
    // Mettre à jour la configuration Tailwind si nécessaire
    if (typeof tailwind !== 'undefined' && tailwind.config) {
        const config = tailwind.config();
        if (colors.primary) {
            config.theme.extend.colors.primary = colors.primary;
        }
        if (colors.accent) {
            config.theme.extend.colors['accent-yellow'] = colors.accent;
        }
        // ... autres couleurs
    }
}

// Fonction pour appliquer les couleurs par défaut (peut être modifiée avec les vraies couleurs)
function applyDefaultCharteColors() {
    const defaultColors = {
        primary: '#0a2463',
        primaryDark: '#071a47',
        primaryLight: '#e0e7ff',
        accent: '#ffd700',
        backgroundLight: '#f6f6f8',
        backgroundDark: '#030129',
        textDark: '#030129',
        textGrey: '#A2B5D7',
        textLight: '#616f89',
        borderLight: '#e5e7eb',
        borderDark: '#2a303c'
    };
    
    updateCharteColors(defaultColors);
}

// Exporter les fonctions pour l'utilisation globale
window.MelonSoft = {
    toggleTheme,
    smoothScrollTo,
    validateForm,
    showLoader,
    hideLoader,
    toggleMobileMenu,
    toggleMobileSubmenu,
    updateLogoTheme
};
