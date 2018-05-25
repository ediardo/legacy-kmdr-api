module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CommandComments", [
      {
        id: 1,
        userId: 1,
        commandId: 2133,
        comment: "This is very useful, ty.",
        isPartial: false,
        status: 1,
        createdAt: new Date()
      },
      {
        id: 2,
        userId: 1,
        commandId: 654,
        comment: "Is this working?",
        isPartial: false,
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
