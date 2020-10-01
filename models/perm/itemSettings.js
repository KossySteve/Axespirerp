const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const itemSettings = sequelize.define("ItemSettings", {
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
    },
    company: {
      type: DataTypes.STRING
    }
  });
  return itemSettings ;
};
 