module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "ProgramLabels",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        programId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Programs",
            key: "id"
          }
        },
        labelId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Labels",
            key: "id"
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        charset: "utf8"
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ProgramLabels");
  }
};
