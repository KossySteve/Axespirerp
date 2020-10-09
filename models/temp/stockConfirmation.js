const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const stockConfirmation = sequelize.define("stockConfirmation", {
    no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "code already exists"
      }
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
    stockCount: {
      type: DataTypes.INTEGER
    },
    confirmedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Confirmed By should not be empty'
        }
      }
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Remarks should not be empty'
        }
      }
    },
  });
  return stockConfirmation;
};
