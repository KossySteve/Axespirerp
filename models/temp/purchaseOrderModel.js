const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const purchaseOrderModel = sequelize.define("purchaseOrder", {
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
        serviceOrder: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'serviceOrder should not be empty'
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
        purchaseMgr: {
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
        requirementDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        
    });
    return purchaseOrderModel;
};
