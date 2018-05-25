module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("GuideVars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      varId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Vars",
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
      defaultValue: {
        type: DataTypes.STRING(250),
        allowNull: true
      },
      sequence: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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
    return sequelize.dropTable("GuideVars");
  }
};
