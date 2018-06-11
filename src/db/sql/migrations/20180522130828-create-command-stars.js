module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("CommandStars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      commandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Commands",
          key: "id"
        }
      },
      createdAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("CommandStars");
  }
};
