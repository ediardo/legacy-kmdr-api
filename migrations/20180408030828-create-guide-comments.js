module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("CommandComments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      guideId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Guides",
          key: "id"
        }
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "commentId",
          key: "id"
        }
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("CommandComments");
  }
};
