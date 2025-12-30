module.exports = (sequelize, DataTypes) => {
    const PageContent = sequelize.define('PageContent', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        page: {
            type: DataTypes.STRING, // e.g., 'index', 'apropos'
            allowNull: false,
        },
        sectionKey: {
            type: DataTypes.STRING, // e.g., 'hero_title', 'mission_text'
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT, // The actual text or HTML content
        },
        contentType: {
            type: DataTypes.ENUM('text', 'html', 'image', 'video'),
            defaultValue: 'text'
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    return PageContent;
};
