module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("EntityTypes", [
      {
        id: 1,
        name: "command"
      },
      {
        id: 2,
        name: "guide"
      },
      {
        id: 3,
        name: "guideComment"
      },
      {
        id: 4,
        name: "commandComment"
      },
      {
        id: 5,
        name: "guideStar"
      },
      {
        id: 6,
        name: "commandStar"
      },
      {
        id: 7,
        name: "report"
      },
      {
        id: 8,
        name: "program"
      },
      {
        id: 9,
        name: "var"
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
