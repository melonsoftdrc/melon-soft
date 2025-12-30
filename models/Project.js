module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
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
        },
        client: {
            type: DataTypes.STRING,
        },
        technologies: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        projectUrl: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        completionDate: {
            type: DataTypes.DATEONLY,
        },
        category: {
            type: DataTypes.STRING, // e.g., 'Web', 'Mobile', 'Security'
        }
    });

    return Project;
};
