module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          username: "kommandr",
          name: "kommandr",
          email: "kmdr@kommandr.com",
          websiteUrl: "https://kommandr.com",
          twitterHandle: "@kmdr_sh",
          status: 1,
          lastLogin: new Date(),
          lastLoginIpAddress: "127.0.0.1",
          githubId: "1195596",
          githubHandle: "ediardo",
          avatarUrl: "https://avatars1.githubusercontent.com/u/9919?s=200&v=4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          username: "tldr-pages",
          name: "TLDR Pages",
          email: "tldr@kommandr.com",
          websiteUrl: "https://tldr.sh/",
          twitterHandle: "",
          status: 2,
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
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
