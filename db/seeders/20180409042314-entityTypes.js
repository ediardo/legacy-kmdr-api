"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("EntityTypes", [
      {
        id: 1,
        name: "command"
      },
      {
        id: 2,
        name: "guide"
      },
      {
        id: 3,
        name: "comment"
      },
      {
        id: 4,
        name: "star"
      },
      {
        id: 5,
        name: "report"
      },
      {
        id: 6,
        name: "program"
      },
      {
        id: 7,
        name: "var"
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
