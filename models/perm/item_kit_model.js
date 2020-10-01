const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemKit = sequelize.define("ItemKit", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
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
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    kitPricingMethod: {
      type: DataTypes.STRING
    },
    minAddonCount: {
      type: DataTypes.NUMBER
    },
    minComponentCount: {
      type: DataTypes.STRING
    },
    isKit: {
      type: DataTypes.BOOLEAN
    }
    
  });

  return ItemKit;
};
