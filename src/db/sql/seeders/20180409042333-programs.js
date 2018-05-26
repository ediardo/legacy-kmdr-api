const programSamples = require("../seeds/programs")["programs"];

module.exports = {
  up: (queryInterface, Sequelize) => {
    const programs = programSamples.map(program => {
      program.sourceId = 2;
      program.createdAt = new Date();
      return program;
    });
    return queryInterface.bulkInsert("Programs", programs, {});
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
