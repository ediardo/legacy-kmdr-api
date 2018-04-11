module.exports = function(sequelize, DataTypes) {
  var GuideVar = sequelize.define("GuideVar", {
    userId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(65)
    },
    defaultValue: {
      type: DataTypes.STRING(250)
    },
    sequence: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  GuideVar.associate = models => {
    GuideVar.belongsTo(models.User, {
      foreignKey: "userId"
    });
    GuideVar.belongsTo(models.Var, {
      foreignKey: "varId"
    });
    GuideVar.belongsTo(models.Guide, {
      foreignKey: "guideId"
    });
  };

  /*
  Star.afterDestroy((star, options) => {
    const { guideId } = star;
    sequelize.models.Command.update(
      { totalStars: sequelize.literal("totalStars - 1") },
      { where: { id: guideId }, silent: true }
    );
  });
  */
  return GuideVar;
};
