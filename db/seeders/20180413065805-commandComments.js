module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CommandComments", [
      {
        id: 1,
        commentId: 2,
        commandId: 2183
      },
      {
        id: 2,
        commentId: 3,
        commandId: 2183
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
