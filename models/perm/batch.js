const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const batch = sequelize.define("batch", {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        serialNo: {
            type: DataTypes.INTEGER,
        },
        mfgDate: {
            type: DataTypes.DATE,
        },
        expiryDate: {
            type: DataTypes.DATE,
        },
        sellByDate: {
            type: DataTypes.DATE
        },
        mrp: {
               type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        item: {
               type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        colorVariant: {
               type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        variant2: {
               type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        variant3: {
               type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        batchNo1: {
            type: DataTypes.INTEGER
        },
        batchNo2: {
            type: DataTypes.INTEGER
        },
        refCode: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        dimension1:{
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        dimension2:{
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        dimension3:{
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        isAllowNegativeSale:{
            type: DataTypes.BOOLEAN
        }
    });
    return batch ;
};
