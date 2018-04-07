module.exports = function(sequelize, DataTypes) {
  var CommandStar = sequelize.define("CommandStar", {
    commandId: DataTypes.INTEGER,
    starId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE
  });

  CommandStar.associate = models => {
    CommandStar.belongsTo(models.Star, { foreignKey: "starId" });
    CommandStar.belongsTo(models.Command, { foreignKey: "commandId" });
  };

  CommandStar.afterCreate((star, options) => {
    const { commandId } = star;
    /*
    // Log activity if
    sequelize.models.Activity.create({
      userId,
      entityId: id,
      targetTypeId: 1
    });
    */
    sequelize.models.Command.update(
      { totalStars: sequelize.literal("totalStars + 1") },
      { where: { id: commandId }, silent: true }
    );
  });

  /*
  CommandStar.beforeBulkDestroy(options => {
    options.individualHooks = true;
    return options;
  });
  */

  CommandStar.afterDestroy((star, options) => {
    const { commandId } = star;
    /*
    sequelize.models.Activity.destroy({
      where: {
        userId,
        targetId: id,
        targetType: "star"
      }
    });
    */
    sequelize.models.Command.update(
      { totalStars: sequelize.literal("totalStars - 1") },
      { where: { id: commandId }, silent: true }
    );
  });

  return CommandStar;
};
