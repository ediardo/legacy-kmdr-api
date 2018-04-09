module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Programs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      programId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Programs",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      createdAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("Programs");
  }
};
