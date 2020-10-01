const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Item = sequelize.define("Item", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: 'code',
        msg: "code already exists"
      },
      validate: {
      notNull: {
        msg: "Code Cannot be empty"
      },
      notEmpty: {
        msg: "Code Cannot be empty"
      },
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'name should not be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description should not be empty'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Type should not be empty'
        }
      }
    },
    group: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Group should not be empty'
        }
      }
    },
    isGroup: {
      type: DataTypes.BOOLEAN,
    },
    company: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Company should not be empty'
        }
      }
    },
    brand: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Brand should not be empty'
        }
      }
    },
    model: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Model should not be empty'
        }
      }
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
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Base should not be empty'
        }
      }
    },
    hsn: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'HSN should not be empty'
        }
      }
    },
    standardCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Standard should not be empty'
        }
      }
    },
    saleRate: {
      type: DataTypes.DECIMAL,
      validate: {
        notEmpty: {
          msg: 'Sale Rate should not be empty'
        }
      }
    },
    purchaseRate: {
      type: DataTypes.DECIMAL,
      validate: {
        notEmpty: {
          msg: 'Purchase Rate should not be empty'
        }
      }
    },
    minRate: {
      type: DataTypes.DECIMAL,
      validate: {
        notEmpty: {
          msg: 'Min Rate should not be empty'
        }
      }
    },
    maxRate: {
      type: DataTypes.DECIMAL,
      validate: {
        notEmpty: {
          msg: 'Max Rate should not be empty'
        }
      }
    },
    saleRev: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Sale Rev should not be empty'
        }
      }
    },
    purchaseRev: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Purchase Rev should not be empty'
        }
      }
    }
  });

  return Item;
};
