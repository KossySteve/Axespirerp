const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemGroup = sequelize.define("ItemGroup", {
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
    groupType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    taxGroup: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
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
