'use strict';
const branch = require('../models').Branch
const {branch_name} = require('./global-info/variables')
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await branch.create({
      name: branch_name,
      address: '5th floor, Av. Patria 888-4th, Loma Real, 45129 Zapopan, Jal',
      ceo:'Ing. Hector Ivan Yboa Espinoza',
      description:'We are the best option',
      security:'Comisión Nacional Bancaria y de Valores CNBV',
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Branches', null, {});
    
  }
};
