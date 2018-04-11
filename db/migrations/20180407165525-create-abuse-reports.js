module.exports = {
  up: (sequelize, DataTypes) => {
    return sequelize.createTable("AbuseReports", {
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
      reason: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      entityTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "EntityTypes",
          key: "id"
        }
      },
      entityId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: (sequelize, DataTypes) => {
    return sequelize.dropTable("AbuseReports");
  }
};
