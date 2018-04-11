module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("GuideStars", {
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
    return sequelize.dropTable("GuideStars");
  }
};
