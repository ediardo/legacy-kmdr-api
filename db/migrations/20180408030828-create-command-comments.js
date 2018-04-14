module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("CommandComments", {
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
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Comments",
          key: "id"
        }
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("CommandComments");
  }
};
