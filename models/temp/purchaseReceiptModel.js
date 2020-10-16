const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const purchaseReceiptModel = sequelize.define("purchaseReceipt", {
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
        importNo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'importNo should not be empty'
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
        orderInvoice: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'orderInvoice should not be empty'
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
        supplierName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'supplierName should not be empty'
                }
            }
        },
        dmNo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'dmNo should not be empty'
                }
            }
        },
        dmDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'dmDate should not be empty'
                }
            }
        },
        
    });
    return purchaseReceiptModel;
};
