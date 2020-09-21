const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockAdjustment = sequelize.define("stockAdjustment", {
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
        purchaseRequest:{
            type: DataTypes.STRING
        },
        adjustedBy: {
            type: DataTypes.STRING
        },
        remarks: {
            type: DataTypes.STRING
        },
        refNo: {
            type: DataTypes.INTEGER
        }
    });
    return stockAdjustment ;
};
