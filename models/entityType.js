module.exports = function(sequelize, DataTypes) {
  var EntityType = sequelize.define("EntityType", {
    name: DataTypes.STRING(45)
  });

  EntityType.associate = models => {
    EntityType.hasMany(models.AbuseReport, { foreignKey: "entityTypeId" });
    EntityType.hasMany(models.Activity, { foreignKey: "entityTypeId" });
  };

  return EntityType;
};
