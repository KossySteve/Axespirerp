const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const variant = sequelize.define("variant", {
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
    variantType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Variant Type should not be empty'
        }
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Color should not be empty'
        }
      }
    },
    thirdVariant: {
      type: DataTypes.BOOLEAN
    },
    refCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Ref Code should not be empty'
        }
      }
    },
  });
  return variant;
};
