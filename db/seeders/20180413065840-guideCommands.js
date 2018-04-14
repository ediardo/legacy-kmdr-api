module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("GuideCommands", [
      {
        id: 1,
        guideId: 1,
        commandId: 2183,
        step: 1,
        stepDescription: "Generate a SSH Key"
      },
      {
        id: 2,
        guideId: 1,
        commandId: 3326,
        step: 2,
        stepDescription: "Add the key to the SSH Agent"
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
