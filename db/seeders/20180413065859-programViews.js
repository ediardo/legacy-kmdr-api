module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ProgramViews", [
      {
        id: 1,
        programId: 472,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 2,
        programId: 472,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 3,
        programId: 473,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 4,
        programId: 473,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 5,
        programId: 472,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 6,
        programId: 472,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 7,
        programId: 473,
        userId: 1,
        createdAt: new Date()
      },
      {
        id: 8,
        programId: 474,
        userId: 1,
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
