const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockCount = sequelize.define("stockCount", {
        no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        cycleCountBy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        remarks: {
            type: DataTypes.STRING,
        },
        group: {
            type: DataTypes.STRING
        },
        item: {
            type: DataTypes.STRING
        },
        itemLike: {
            type: DataTypes.STRING
        },
        noOfItems: {
            type: DataTypes.INTEGER
        },
        location: {
            type: DataTypes.STRING
        },
        variant1: {
            type: DataTypes.STRING
        },
        variant2: {
            type: DataTypes.STRING
        },
        variant3: {
            type: DataTypes.STRING
        },
        make: {
            type: DataTypes.STRING
        },
        fromStockQuantity:{
            type: DataTypes.INTEGER
        },
        toStockQuantity:{
            type: DataTypes.INTEGER
        },
        includeZeroOrNegativeStock: {
            type: DataTypes.BOOLEAN
        },
        showOnlyZeroStockItem: {
            type: DataTypes.BOOLEAN
        },
        abcCategory: {
            type: DataTypes.STRING
        },
        fsnCategory: {
            type: DataTypes.STRING
        }
    });
    return stockCount ;
};
