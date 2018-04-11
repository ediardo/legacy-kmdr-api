module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    userId: {
      type: DataTypes.INTEGER
    },
    entityId: {
      type: DataTypes.INTEGER
    },
    entityType: {
      type: DataTypes.STRING
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE
    }
  });

  Activity.associate = models => {
    Activity.belongsTo(models.EntityType, { foreignKey: "entityTypeId" });
    Activity.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Activity;
};
