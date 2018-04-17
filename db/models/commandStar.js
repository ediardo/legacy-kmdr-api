module.exports = function(sequelize, DataTypes) {
  var CommandStar = sequelize.define(
    "CommandStar",
    {
      commandId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true,
      updatedAt: false
    }
  );

  CommandStar.associate = models => {
    CommandStar.belongsTo(models.User, {
      foreignKey: "userId"
    });
    CommandStar.belongsTo(models.Command, {
      foreignKey: "commandId"
    });
  };

  /*
  CommandStar.afterCreate((star, options) => {
    const { commandId } = star;
    
    // Log activity if
    sequelize.models.Activity.create({
      userId,
      entityId: id,
      targetTypeId: 1
    });
    
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
  

  CommandStar.afterDestroy((star, options) => {
    const { commandId } = star;
    
    sequelize.models.Activity.destroy({
      where: {
        userId,
        targetId: id,
        targetType: "star"
      }
    });
    
    sequelize.models.Command.update(
      { totalStars: sequelize.literal("totalStars - 1") },
      { where: { id: commandId }, silent: true }
    );
  });
  */
  return CommandStar;
};
