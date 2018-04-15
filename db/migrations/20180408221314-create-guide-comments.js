module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("GuideComments", {
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
        references: {
          model: "Guides",
          key: "id"
        }
      },
      replyTo: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      comment: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("GuideComments");
  }
};
