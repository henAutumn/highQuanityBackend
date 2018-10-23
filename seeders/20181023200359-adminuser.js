'use strict';
const uuid = require('uuid');
const chance = require('chance')()
const db = require('../models/index').sequelize;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      uid: uuid(),
      first_name: chance.first(),
      last_name: chance.last(),
      email: chance.email(),
      password: 'test',
      role: 'admin',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
};
