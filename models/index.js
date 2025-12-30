const { Sequelize } = require('sequelize');
const path = require('path');

// Use environment variables for connection or default to local postgres
const sequelize = new Sequelize(
    process.env.DB_NAME || 'melon_clean',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASS || 'password',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: false,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Service = require('./Service')(sequelize, Sequelize);
db.Project = require('./Project')(sequelize, Sequelize);
db.ContactMessage = require('./ContactMessage')(sequelize, Sequelize);
db.PageContent = require('./PageContent')(sequelize, Sequelize);
db.TeamMember = require('./TeamMember')(sequelize, Sequelize);
db.BlogPost = require('./BlogPost')(sequelize, Sequelize);
db.Job = require('./Job')(sequelize, Sequelize);
db.Faq = require('./Faq')(sequelize, Sequelize);

module.exports = db;
