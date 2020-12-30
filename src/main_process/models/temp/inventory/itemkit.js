const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const ItemKit = sequelize.define("ItemKit", {
        applicableUOM1: {
            type: DataTypes.STRING
        },
        applicableUOM2: {
            type: DataTypes.STRING
        },
        code: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Code Cannot be empty"
                },
                notEmpty: {
                    msg: "Code Cannot be empty"
                },
            }
        },
        code1: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Code1 Cannot be empty"
                },
                notEmpty: {
                    msg: "Code1 Cannot be empty"
                },
            }
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Company Cannot be empty"
                },
                notEmpty: {
                    msg: "Company Cannot be empty"
                },
            }
        },
        conversionRate: {
            type: DataTypes.NUMBER
        },
        conversionType: {
            type: DataTypes.STRING
        },
        defaultPurchase1: {
            type: DataTypes.STRING
        },
        defaultPurchase2: {
            type: DataTypes.STRING
        },
        defaultSale: {
            type: DataTypes.STRING
        },
        defaultSale2: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Description Cannot be empty"
                },
                notEmpty: {
                    msg: "Description Cannot be empty"
                },
            }
        },
        isKit: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "isKit Cannot be empty"
                },
                notEmpty: {
                    msg: "Description Cannot be empty"
                },
            }
        },
        kitPricingMethod: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "kitPricing Cannot be empty"
                },
                notEmpty: {
                    msg: "kitPricing Cannot be empty"
                },
            }
        },
        minAddOnCount: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "minAddOnCount Cannot be empty"
                },
                notEmpty: {
                    msg: "minAddOnCount Cannot be empty"
                },
            }
        },
        minComponentCount:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "minComponentCount Cannot be empty"
                },
                notEmpty: {
                    msg: "minComponentCount Cannot be empty"
                },
            }
        },
        select1: {
            type: DataTypes.BOOLEAN
        },
        select2: {
            type: DataTypes.BOOLEAN
        },
        type: {
            type: DataTypes.STRING
        }
    })
    await ItemKit.sync();
    return ItemKit;
}
