const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const supplierModel = sequelize.define("supplier", {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Code should not be empty'
                }
            }
        },
        salutation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'salutation should not be empty'
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'firstName should not be empty'
                }
            }
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'middleName should not be empty'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'lastName should not be empty'
                }
            }
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Company should not be empty'
                }
            }
        },
        contactType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'ContactType should not be empty'
                }
            }
        },
        foreignCurrency: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'foreignCurrency should not be empty'
                }
            }
        },
        defaultExecutive: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'defaultExecutive should not be empty'
                }
            }
        },
        payTo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'payTo should not be empty'
                }
            }
        },
        inactive: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'inactive should not be empty'
                }
            }
        },
        creditPurAllow: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'creditPurAllow should not be empty'
                }
            }
        },
        isSmsAllowed: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'isSmsAllowed should not be empty'
                }
            }
        },
        isEmailAllowed: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'isEmailAllowed should not be empty'
                }
            }
        },
        
    });
    return supplierModel;
};
