const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const variant = sequelize.define("variant", {
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
        variantType: {
            type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
        }
      },
        },
        color: {
             type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ' should not be empty'
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
          msg: ' should not be empty'
        }
      }
},
    });
    return variant ;
};
