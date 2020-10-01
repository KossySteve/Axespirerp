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
            validate: {
                notEmpty: {
                    msg: 'Purchase Request should not be empty'
                }
            },
            allowNull: false,
        },
        tax: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Tax should not be empty'
                }
            },
        },
        issuedBy: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Issued By should not be empty'
                }
            }
        },
        fromBranch: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'From Branch should not be empty'
                }
            }
        },
        toBranch: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'To Branch should not be empty'
                }
            }
        },
        transporterName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Transporter Name should not be empty'
                }
            }
        },
        shipmentType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Shipment Type should not be empty'
                }
            }
        },
        transferRemarks: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Transfer Remarks should not be empty'
                }
            }
        },
        toBranch: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'To Branch should not be empty'
                }
            }
        },
    });
    return stockTransferOutward;
};
