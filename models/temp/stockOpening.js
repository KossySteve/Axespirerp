const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const stockOpening = sequelize.define("stockOpening", {
    no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Branch should not be empty'
        }
      },
    },
    adjustedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Adjusted By should not be empty'
        }
      }
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Remark should not be empty'
        }
      }
    },
  });
  return stockOpening;
};
