module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        icon: {
            type: DataTypes.STRING, // Store icon class or url
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.ENUM('technique', 'securite', 'numerique', 'general'),
            allowNull: false,
            defaultValue: 'general'
        },
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
        features: {
            // Store list of features as simple JSON array
            type: DataTypes.JSONB,
            defaultValue: []
        }
    });

    return Service;
};
