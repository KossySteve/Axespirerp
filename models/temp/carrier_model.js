const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const carrierModel = sequelize.define("carrier", {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Code should not be empty'
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Name should not be empty'
                }
            }
        },

        searchName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'searchName should not be empty'
                }
            }
        },

        contactType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'contactType should not be empty'
                }
            }
        },

        taxAuthorities: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'taxAuthorities should not be empty'
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

        logisticsProvider: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'logisticsProvider should not be empty'
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
    });
    return carrierModel;
};
