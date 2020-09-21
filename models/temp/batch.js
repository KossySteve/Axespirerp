const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const batch = sequelize.define("batch", {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        serialNo: {
            type: DataTypes.INTEGER,
        },
        mfgDate: {
            type: DataTypes.DATE,
        },
        expiryDate: {
            type: DataTypes.DATE,
        },
        sellByDate: {
            type: DataTypes.DATE
        },
        mrp: {
            type: DataTypes.STRING
        },
        item: {
            type: DataTypes.STRING
        },
        colorVariant: {
            type: DataTypes.STRING
        },
        variant2: {
            type: DataTypes.STRING
        },
        variant3: {
            type: DataTypes.STRING
        },
        batchNo1: {
            type: DataTypes.INTEGER
        },
        batchNo2: {
            type: DataTypes.INTEGER
        },
        refCode: {
            type: DataTypes.STRING
        },
        dimension1:{
            type: DataTypes.STRING
        },
        dimension2:{
            type: DataTypes.STRING
        },
        dimension3:{
            type: DataTypes.STRING
        },
        isAllowNegativeSale:{
            type: DataTypes.BOOLEAN
        }
    });
    return batch ;
};
