module.exports = function(sequelize, DataTypes) {
  var Star = sequelize.define("Star", {
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE
  });

  Star.associate = models => {
    Star.belongsTo(models.User, { foreignKey: "userId" });
    Star.belongsToMany(models.Command, {
      through: {
        model: models.CommandStar
      },
      foreignKey: "starId"
    });
  };

  Star.afterDestroy((star, options) => {
    const { guideId } = star;
    sequelize.models.Command.update(
      { totalStars: sequelize.literal("totalStars - 1") },
      { where: { id: guideId }, silent: true }
    );
  });

  return Star;
};
