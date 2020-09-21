const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockTransferOutward = sequelize.define("stockTransferOutward", {
        no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        purchaseRequest: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tax: {
            type: DataTypes.STRING,
        },
        issuedBy: {
            type: DataTypes.STRING
        },
        fromBranch: {
            type: DataTypes.STRING
        },
        toBranch: {
            type: DataTypes.STRING
        },
        transporterName: {
            type: DataTypes.STRING
        },
        shipmentType: {
            type: DataTypes.STRING
        },
        transferRemarks: {
            type: DataTypes.STRING
        },
        deliveryToBranch: {
            type: DataTypes.STRING
        },
    });
    return stockTransferOutward ;
};
