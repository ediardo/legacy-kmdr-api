module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        id: 1,
        userId: 1,
        comment: "This is very useful, ty.",
        isPartial: false,
        status: 1
      },
      {
        id: 2,
        userId: 1,
        comment: "Is this working?",
        isPartial: false,
        status: 1
      },
      {
        id: 3,
        userId: 1,
        comment: "Just what I was looking for",
        isPartial: false,
        status: 1
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
