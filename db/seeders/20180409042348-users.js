module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          username: "test",
          name: "Test User",
          email: "test@test.com",
          websiteUrl: "https://example.com/website",
          twitterHandle: "@kmdr_sh",
          status: 1,
          lastLogin: Date(),
          lastLoginIpAddress: "127.0.0.1",
          githubId: "1195596",
          githubHandle: "ediardo",
          avatarUrl: "https://avatars1.githubusercontent.com/u/9919?s=200&v=4",
          createdAt: Date(),
          updatedAt: Date()
        }
      ],
      { skip: ["username", "password"] }
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
