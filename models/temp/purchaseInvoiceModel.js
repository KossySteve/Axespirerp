const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const purchaseInvoiceModel = sequelize.define("purchaseInvoice", {
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
        purchaseReceiptOrder: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'purchaseReceiptOrder should not be empty'
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
        validTillDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'validTillDate should not be empty'
                }
            }
        },
        supplierName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'supplierName should not be empty'
                }
            }
        },
        billingAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'billingAddress should not be empty'
                }
            }
        },
        paymentType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'paymentType should not be empty'
                }
            }
        },
        
    });
    return purchaseInvoiceModel;
};
