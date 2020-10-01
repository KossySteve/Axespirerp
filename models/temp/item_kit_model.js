const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemKit = sequelize.define("ItemKit", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Code should not be empty'
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
          msg: 'Name should not be empty'
        }
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description should not be empty'
        }
      },
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Type should not be empty'
        }
      },
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Company should not be empty'
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
      type: DataTypes.NUMBER
    },
    isKit: {
      type: DataTypes.BOOLEAN
    }
    
  });

  return ItemKit;
};
