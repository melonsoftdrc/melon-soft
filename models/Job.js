module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define('Job', {
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
        department: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
            defaultValue: 'Remote'
        },
        type: {
            type: DataTypes.ENUM('full-time', 'part-time', 'contract', 'internship'),
            defaultValue: 'full-time'
        },
        postedAt: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        applicationUrl: {
            type: DataTypes.STRING,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    return Job;
};
