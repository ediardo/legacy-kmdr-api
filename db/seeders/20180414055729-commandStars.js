module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CommandStars", [
      {
        id: 1,
        starId: 1,
        commandId: 3800
      },
      {
        id: 2,
        starId: 2,
        commandId: 1256
      },
      {
        id: 3,
        starId: 3,
        commandId: 2445
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
