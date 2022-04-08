'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inicial_amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      final_amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      ExecutiveId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Executives',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      CommissionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Commissions',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      ConceptId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Concepts',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      CashboxeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Cashboxes',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      deleteAt:{
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};