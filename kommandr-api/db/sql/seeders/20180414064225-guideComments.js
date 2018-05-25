module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("GuideComments", [
      {
        id: 3,
        guideId: 1,
        userId: 1,
        comment: "Just what I was looking for",
        status: 1,
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
