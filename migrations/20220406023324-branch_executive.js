'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BranchExecutives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      date_init: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_end: {
        allowNull: true,
        type: Sequelize.DATE
      },
      ExecutiveId: {
        primaryKey:true,
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Executives',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      BranchId: {
        primaryKey:true,
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Branches',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BranchExecutives');
  }
};