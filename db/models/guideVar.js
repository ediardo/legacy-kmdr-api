module.exports = function(sequelize, DataTypes) {
  var GuideVar = sequelize.define(
    "GuideVar",
    {
      defaultValue: {
        type: DataTypes.STRING(250)
      },
      sequence: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true
    }
  );

  GuideVar.associate = models => {
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
