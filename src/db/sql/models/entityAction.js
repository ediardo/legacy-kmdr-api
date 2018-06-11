module.exports = function(sequelize, DataTypes) {
  var EntityAction = sequelize.define("EntityAction", {
    name: {
      type: DataTypes.STRING(45)
    }
  });

  EntityAction.associate = models => {
    EntityAction.hasMany(models.Activity, {
      foreignKey: "entityActionId"
    });
  };

  return EntityAction;
};
