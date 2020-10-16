const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const purchaseReturnModel = sequelize.define("purchaseReturn", {
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
        paymentType: {
            type: DataTypes.STRING,
            
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'account should not be empty'
                }
            }
        },
        supplier: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'supplier should not be empty'
                }
            }
        },
        paymentType2: {
            type: DataTypes.STRING,
           
        },
        priceColumn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'priceColumn should not be empty'
                }
            }
        },
        supInvNo: {
            type: DataTypes.STRING,
          
        },
        cancelInvoice: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'cancelInvoice should not be empty'
                }
            }
        },
        
    });
    return purchaseReturnModel;
};
