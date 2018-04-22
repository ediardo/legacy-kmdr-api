module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("EntityActions", [
      {
        id: 1,
        name: "create"
      },
      {
        id: 2,
        name: "update"
      },
      {
        id: 3,
        name: "report"
      },
      {
        id: 4,
        name: "delete"
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
