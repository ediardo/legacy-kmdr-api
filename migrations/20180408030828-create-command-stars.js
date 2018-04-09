module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("CommandStars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      commandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Commands",
          key: "id"
        }
      },
      starId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Stars",
          key: "id"
        }
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("CommandStars");
  }
};
