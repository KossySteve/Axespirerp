const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const location = sequelize.define("location", {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
        },
        refCode: {
            type: DataTypes.STRING
        },
        isGroup: {
            type: DataTypes.BOOLEAN
        },
        additionalCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        additionalName: {
            type: DataTypes.STRING,
        },
        additionalDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        group: {
            type: DataTypes.STRING
        },
        otherRefCode: {
            type: DataTypes.STRING
        }
    });
    return location ;
};
