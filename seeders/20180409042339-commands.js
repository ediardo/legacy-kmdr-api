const commandSamples = require("../config/commands.example");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const commands = commandSamples.map(command => {
      command.sourceId = 2;
      return command;
    });
    return queryInterface.bulkInsert("Commands", commands, {});
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
