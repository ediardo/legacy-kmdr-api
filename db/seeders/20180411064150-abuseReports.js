module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("AbuseReports", [
      {
        id: 1,
        userId: 1,
        reason: "spam",
        status: 1,
        entityTypeId: 2,
        entityId: 1
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
