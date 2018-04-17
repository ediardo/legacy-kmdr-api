module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CommandVars", [
      {
        id: 1,
        varId: 1,
        commandId: 400,
        sequence: 1,
        createdAt: new Date()
      },
      {
        id: 2,
        varId: 2,
        commandId: 400,
        sequence: 2,
        defaultValue: "override",
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
