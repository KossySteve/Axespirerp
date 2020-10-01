const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const location = sequelize.define("location", {
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
        color: {
            type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
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
        isGroup: {
            type: DataTypes.BOOLEAN
        },
        additionalCode: {
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
        additionalName: {
            type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        additionalDescription: {
            type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
            allowNull: false,
        },
        group: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
},
        otherRefCode: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      }
}
    });
    return location ;
};
