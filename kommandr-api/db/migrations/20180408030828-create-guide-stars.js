module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("GuideStars", {
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
      guideId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Guides",
          key: "id"
        }
      },
      createdAt: {
        type: DataTypes.INTEGER
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("GuideStars");
  }
};
