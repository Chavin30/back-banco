'use strict';
const account = require('../models').Account
module.exports = {
  async up (queryInterface, Sequelize) {
    let accounts = [
      {
        no_acc:(Date.now()).toString(),
        type:"debit",
        amount: "20000",
        ExecutiveId: "1",
        ClientId: "1",
      },
      {
        no_acc:(Date.now()+3).toString(),
        type:"credit",
        amount: "10000",
        ExecutiveId: "1",
        ClientId: "2",
      },
      {
        no_acc:(Date.now()+4).toString(),
        type:"mortgage",
        amount: "500000",
        ExecutiveId: "1",
        ClientId: "3",
      }
    ]

    
    await account.bulkCreate(accounts);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Accounts", null, {});
  }
};

