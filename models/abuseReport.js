module.exports = (sequelize, DataTypes) => {
  var AbuseReport = sequelize.define("AbuseReport", {
    userId: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    status: DataTypes.INTEGER,
    entityType: DataTypes.INTEGER,
    entityId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  AbuseReport.associate = models => {
    AbuseReport.belongsTo(models.User, { foreignKey: "userId" });
    AbuseReport.belongsTo(models.EntityType, { foreignKey: "entityTypeId" });
  };

  return AbuseReport;
};
