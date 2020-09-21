const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockConfirmation = sequelize.define("stockConfirmation", {
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
        stockCount:{
            type: DataTypes.INTEGER
        },
        confirmedBy: {
            type: DataTypes.STRING
        },
        remarks: {
            type: DataTypes.STRING
        },
    });
    return stockConfirmation ;
};
