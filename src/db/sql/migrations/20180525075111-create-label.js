module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Labels",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true
        }
      },
      {
        charset: "utf8",
        timestamps: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Labels");
  }
};
