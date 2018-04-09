module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Platforms",
      [
        {
          id: 1,
          name: "Common"
        },
        {
          id: 2,
          name: "Linux"
        },
        {
          id: 3,
          name: "macOS"
        },
        {
          id: 4,
          name: "Windows"
        }
      ],
      {}
    );
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
