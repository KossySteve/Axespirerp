const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockConfirmation = sequelize.define("stockConfirmation", {
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
          msg: ' should not be empty'
        }
      },
        },
        stockCount:{
            type: DataTypes.INTEGER
        },
        confirmedBy: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        remarks: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
    });
    return stockConfirmation ;
};
