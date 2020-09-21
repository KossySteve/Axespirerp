const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemKit = sequelize.define("ItemKit", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    company: {
      type: DataTypes.STRING,
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
