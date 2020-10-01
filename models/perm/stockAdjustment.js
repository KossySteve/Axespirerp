const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockAdjustment = sequelize.define("stockAdjustment", {
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
        purchaseRequest:{
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        adjustedBy: {
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
        refNo: {
            type: DataTypes.INTEGER
        }
    });
    return stockAdjustment ;
};
