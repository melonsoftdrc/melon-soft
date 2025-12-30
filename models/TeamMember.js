module.exports = (sequelize, DataTypes) => {
    const TeamMember = sequelize.define('TeamMember', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        linkedinUrl: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        displayOrder: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return TeamMember;
};
