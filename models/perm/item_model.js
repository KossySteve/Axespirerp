const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  const Item = sequelize.define("Item", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    isGroup: {
      type: DataTypes.BOOLEAN,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    isBatch: {
      type: DataTypes.BOOLEAN
    },
    isAuto: {
      type: DataTypes.BOOLEAN
    },
    isFavorite: {
      type: DataTypes.BOOLEAN
    },
    base: {
      type: DataTypes.STRING
    },
    hsn: {
      type: DataTypes.STRING
    },
    standardCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    saleRate: {
      type: DataTypes.DECIMAL,
    },
    purchaseRate: {
      type: DataTypes.DECIMAL,
    },
    minRate: {
      type: DataTypes.DECIMAL,
    },
    maxRate: {
      type: DataTypes.DECIMAL,
    },
    saleRev: {
      type: DataTypes.INTEGER
    },
    purchaseRev: {
      type: DataTypes.INTEGER
    }
  });

  return Item;
};
