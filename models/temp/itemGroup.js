const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemGroup = sequelize.define("ItemGroup", {
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
    groupType: {
      type: DataTypes.STRING,
    },
    taxGroup: {
      type: DataTypes.STRING,
    },
    taxAuthority: {
      type: DataTypes.STRING
    },
    percentage: {
      type: DataTypes.NUMBER
    },
    refCode: {
      type: DataTypes.NUMBER
    },
    isGtsGroup: {
      type: DataTypes.BOOLEAN
    },
    isGroup: {
        type: DataTypes.BOOLEAN
    },
    vatGtsType: {
        type: DataTypes.STRING
    }
    
  });

  return ItemGroup;
};
