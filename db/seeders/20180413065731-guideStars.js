module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("GuideStars", [
      {
        id: 1,
        guideId: 1,
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
