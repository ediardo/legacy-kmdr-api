module.exports = (sequelize, DataTypes) => {
  var AbuseReport = sequelize.define(
    "AbuseReport",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      reason: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      status: {
        type: DataTypes.INTEGER
      },
      entityTypeId: {
        type: DataTypes.INTEGER
      },
      entityId: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true
    }
  );

  AbuseReport.associate = models => {
    AbuseReport.belongsTo(models.User, { foreignKey: "userId" });
    AbuseReport.belongsTo(models.EntityType, { foreignKey: "entityTypeId" });
  };

  return AbuseReport;
};
