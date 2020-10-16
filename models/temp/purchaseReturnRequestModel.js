const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const purchaseReturnRequestModel = sequelize.define("purchaseReturnRequest", {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Code should not be empty'
                }
            }
        },
        no: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'no should not be empty'
                }
            }
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'date should not be empty'
                }
            }
        },
        branch: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'branch should not be empty'
                }
            }
        },
        invoiceSupplier: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'invoiceSupplier should not be empty'
                }
            }
        },
        purchaseInvoice: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'purchaseInvoice should not be empty'
                }
            }
        },
        tax: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'tax should not be empty'
                }
            }
        },
        purchaseMgr: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'purchaseMgr should not be empty'
                }
            }
        },
        returnRequestRemark: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'returnRequestRemark should not be empty'
                }
            }
        },
        
    });
    return purchaseReturnRequestModel;
};
