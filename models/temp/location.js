const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const location = sequelize.define("location", {
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
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Color should not be empty'
        }
      },
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
    isGroup: {
      type: DataTypes.BOOLEAN
    },
    additionalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Additional Code should not be empty'
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
          msg: 'Additional Name should not be empty'
        }
      },
    },
    additionalDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Additional Description should not be empty'
        }
      },
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Group should not be empty'
        }
      }
    },
    otherRefCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Other Ref Code should not be empty'
        }
      }
    }
  });
  return location;
};
