const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const stockTransferInward = sequelize.define("stockTransferInward", {
        no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        outward: {
            type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
            allowNull: false,
        },
        tax: {
            type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        inwardedBy: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        toBranch: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        fromBranch: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        lorryNo: {
            type: DataTypes.INTEGER
        },
        expectedDeliveryDate: {
            type: DataTypes.DATE
        },
        headerCharges: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        distributeCharges: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
    });
    return stockTransferInward ;
};
