module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Activities", [
      {
        id: 1,
        userId: 1,
        entityTypeId: 1,
        entityId: 1,
        entityActionId: 1,
        isPrivate: false,
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
