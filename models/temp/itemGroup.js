const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemGroup = sequelize.define("ItemGroup", {
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
    groupType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Group Type should not be empty'
        }
      },
    },
    taxGroup: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Tax Group should not be empty'
        }
      },
    },
    taxAuthority: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Tax Authority should not be empty'
        }
      },
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
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Vat Gts Type should not be empty'
          }
        },
    }
    
  });

  return ItemGroup;
};
