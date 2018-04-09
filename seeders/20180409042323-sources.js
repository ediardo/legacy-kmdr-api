module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sources",
      [
        {
          id: 1,
          name: "users"
        },
        {
          id: 2,
          name: "tldr"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Person", null, {});
  }
};
