const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const itemSettings = sequelize.define("ItemSettings", {
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
      type: DataTypes.STRING
    }
  });
  return itemSettings ;
};
 