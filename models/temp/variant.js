const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const variant = sequelize.define("variant", {
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
        variantType: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING
        },
        thirdVariant: {
            type: DataTypes.BOOLEAN
        },
        refCode: {
            type: DataTypes.STRING
        },
    });
    return variant ;
};
