'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('Airports',{
      type:'FOREIGN KEY',
      name:'fkey',
      fields:['cityId'],
      references:{
        table:'Cities',
        field:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('Airports','fkey')
  }
};
