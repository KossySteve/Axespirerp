const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockOpening = sequelize.define("stockOpening", {
        no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        branch: {
            type: DataTypes.STRING,
        },
        adjustedBy: {
            type: DataTypes.STRING
        },
        remark: {
            type: DataTypes.STRING
        },
    });
    return stockOpening ;
};
