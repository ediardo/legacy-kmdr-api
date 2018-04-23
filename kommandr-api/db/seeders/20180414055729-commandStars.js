module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CommandStars", [
      {
        id: 1,
        userId: 1,
        commandId: 3800,
        createdAt: new Date()
      },
      {
        id: 2,
        userId: 1,
        commandId: 1256,
        createdAt: new Date()
      },
      {
        id: 3,
        userId: 1,
        commandId: 2445,
        createdAt: new Date()
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
