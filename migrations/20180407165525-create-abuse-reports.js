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
        validate: {
          notEmpty: true
        }
      },
      status: {
        type: DataTypes.INTEGER
      },
      entityTypeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "EntityTypes",
          key: "id"
        }
      },
      entityId: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
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
