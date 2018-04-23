module.exports = function(sequelize, DataTypes) {
  var Var = sequelize.define(
    "Var",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(65)
      },
      defaultValue: {
        type: DataTypes.STRING(250)
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );

  Var.associate = models => {
    Var.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Var.hasMany(models.CommandVar, {
      foreignKey: "varId"
    });
    Var.hasMany(models.GuideVar, {
      foreignKey: "varId"
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
  return Var;
};
