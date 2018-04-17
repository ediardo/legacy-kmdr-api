module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Vars", [
      {
        id: 1,
        userId: 1,
        name: "testPath",
        defaultValue: "path/to/test",
        createdAt: new Date()
      },
      {
        id: 2,
        userId: 1,
        name: "username",
        defaultValue: "default",
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
