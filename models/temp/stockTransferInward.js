const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockTransferInward = sequelize.define("stockTransferInward", {
        no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        outward: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tax: {
            type: DataTypes.STRING,
        },
        inwardedBy: {
            type: DataTypes.STRING
        },
        toBranch: {
            type: DataTypes.STRING
        },
        fromBranch: {
            type: DataTypes.STRING
        },
        lorryNo: {
            type: DataTypes.INTEGER
        },
        expectedDeliveryDate: {
            type: DataTypes.DATE
        },
        // headerCharges: {
        //     type: DataTypes.STRING
        // },
        // distributeCharges: {
        //     type: DataTypes.STRING
        // },
    });
    return stockTransferInward ;
};
