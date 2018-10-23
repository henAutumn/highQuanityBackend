module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },

    prod_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    credit_card: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isCreditCard: true,       // check for valid credit card numbers
        // custom validations are also possible:
        isEven(value) {
          if (parseInt(value) % 2 != 0) {
            throw new Error('Only even values are allowed!')
          }
        }
      }
    },

    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },

    transaction_id: {

      type: DataTypes.INTEGER,
      allowNull: false,

    }
  });
  
  Transaction.associate = function (models) {
    // associations can be defined here
    Transaction.hasMany(models.Transaction);
  };
  return Transaction;
};