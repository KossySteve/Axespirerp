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
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
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
  });

  return ItemKit;
};
