const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockCount = sequelize.define("stockCount", {
        no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        cycleCountBy: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Cycle Count By should not be empty'
                }
            },
            allowNull: false,
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Remarks should not be empty'
                }
            },
        },
        group: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Group should not be empty'
                }
            }
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Item should not be empty'
                }
            }
        },
        itemLike: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Item Like should not be empty'
                }
            }
        },
        noOfItems: {
            type: DataTypes.INTEGER
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Location should not be empty'
                }
            }
        },
        variant1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Variant 1 should not be empty'
                }
            }
        },
        variant2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Variant 2 should not be empty'
                }
            }
        },
        variant3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Variant 3 should not be empty'
                }
            }
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Make should not be empty'
                }
            }
        },
        fromStockQuantity: {
            type: DataTypes.INTEGER
        },
        toStockQuantity: {
            type: DataTypes.INTEGER
        },
        includeZeroOrNegativeStock: {
            type: DataTypes.BOOLEAN
        },
        showOnlyZeroStockItem: {
            type: DataTypes.BOOLEAN
        },
        abcCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'ABC should not be empty'
                }
            }
        },
        fsnCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'FSN should not be empty'
                }
            }
        }
    });
    return stockCount;
};
