module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("GuideCommands", {
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
      guideId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Guides",
          key: "id"
        }
      },
      step: {
        type: DataTypes.INTEGER
      },
      stepDescription: {
        type: DataTypes.STRING(250)
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("GuideCommands");
  }
};
