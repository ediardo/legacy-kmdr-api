module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    userId: DataTypes.INTEGER,
    entityId: DataTypes.INTEGER,
    entityType: DataTypes.STRING,
    isPrivate: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE
  });

  Activity.associate = models => {
    Activity.belongsTo(models.EntityType, { foreignKey: "entityTypeId" });
    Activity.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Activity;
};
