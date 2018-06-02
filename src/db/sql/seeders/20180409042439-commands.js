const commandSamples = require("../seeds/commands")["commands"];
const slugify = require("slugify");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const commands = commandSamples.map(command => {
      command.userId = 2;
      command.sourceId = 2;
      command.status = 1;
      command.slugTitle = slugify(command.title, {
        remove: /[$*_+~.()'"!\-:@]/g
      });
      console.log(command.slugTitle);
      command.createdAt = new Date();
      if (command.id === 2183 || command.id === 3326) {
        command.userId = 1;
      }
      return command;
    });
    return queryInterface.bulkInsert("Commands", commands);
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
