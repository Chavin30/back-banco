'use strict';
require("dotenv").config()
const executive = require('../models').Executive
const branch = require('../models').Branch
const area = require('../models').Area
const {branch_name} = require('./global-info/variables')
module.exports = {
  async up (queryInterface, Sequelize) {
    let areaF = await area.findOne({where:{name:'manager-module'}})
      let executives = [
          {
            name:process.env.NAME_USER,
            lastname:process.env.LASTNAME_USER,
            userid:process.env.USERID_USER,
            password:process.env.PASSWORD_USER,
            AreaId:areaF.id,
        },{
            name:'Alex Salvador',
            lastname:'Jose reyes',
            userid:'alex',
            password:'12345678',
            AreaId:4,
        },
      ]
  
      let branchF = await branch.findOne({where:{name:branch_name}})
      let executiveM = await executive.create(executives[0])
      let executiveC = await executive.create(executives[1])
      let executiveBranchM = await executiveM.addBranch(branchF,{through:{date_init: '2022-04-08'}})               
      let executiveBranchC = await executiveC.addBranch(branchF,{through:{date_init: '2022-04-08'}})               
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BranchExecutives', null, {});
    await queryInterface.bulkDelete('Executives', null, {});
     
  }
};
