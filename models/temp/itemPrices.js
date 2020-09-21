const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemPrices = sequelize.define("ItemPrices", {
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
  });
  return ItemPrices;
};
