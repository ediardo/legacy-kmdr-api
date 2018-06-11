const labelSamples = require("../seeds/labels")["labels"];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Labels", labelSamples, {});
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
