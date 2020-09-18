const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Item = sequelize.define("Item", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    group: {
      type: DataTypes.STRING,
    },
    isGroup: {
      type: DataTypes.BOOLEAN,
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

  return Item;
};
