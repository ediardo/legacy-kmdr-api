module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Guides", [
      {
        id: 1,
        userId: 1,
        name: "Generating a new SSH key and adding it to the ssh-agent",
        description:
          "After you've checked for existing SSH keys, you can generate a new SSH key to use for authentication, then add it to the ssh-agent.",
        status: 1,
        listed: true,
        vanityUrl: "generating-new-ssh-key-adding-it-to-ssh-agent",
        hashUrl: "xAm10912"
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
