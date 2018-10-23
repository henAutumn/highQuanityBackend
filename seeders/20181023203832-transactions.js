module.exports = {
  up: (queryInterface, Sequelize) => {
    const transArray = [];
    for (let i = 0; i < 100; i++){
      transArray.push({
        customer_name: chance.name(),
        email: chance.email(),
        prod_id: chance.integer(),
        credit_card: chance.cc,
        price: $5,
        transaction_id: chance.integer,
        createdAt: chance.date(),
        updatedAt: chance.date()
      })
    }
    return queryInterface.bulkInsert('transaction', transArray, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transaction', null, {})
  }
};
