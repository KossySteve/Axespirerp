const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const purchaseRequisitionModel = sequelize.define("purchaseRequisition", {
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
        requirementDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'requirementDate should not be empty'
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
        purchaseMgr: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'purchaseMgr should not be empty'
                }
            }
        },
        
    });
    return purchaseRequisitionModel;
};
