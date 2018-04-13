"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stars", [
      {
        id: 1,
        userId: 1
      },
      {
        id: 2,
        userId: 1
      },
      {
        id: 3,
        userId: 1
      },
      {
        id: 4,
        userId: 1
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
