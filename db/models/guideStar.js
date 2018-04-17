module.exports = function(sequelize, DataTypes) {
  var GuideStar = sequelize.define(
    "GuideStar",
    {
      guideId: {
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

  GuideStar.associate = models => {
    GuideStar.belongsTo(models.User, {
      foreignKey: "userId"
    });
    GuideStar.belongsTo(models.Guide, {
      foreignKey: "guideId"
    });
  };
  /*
  GuideStar.afterCreate((star, options) => {
    const { guideId } = star;
    
    // Log activity if
    sequelize.models.Activity.create({
      userId,
      entityId: id,
      targetTypeId: 2
    });
    
    sequelize.models.Guide.update(
      { totalStars: sequelize.literal("totalStars + 1") },
      { where: { id: guideId }, silent: true }
    );
  });

  
  GuideStar.beforeBulkDestroy(options => {
    options.individualHooks = true;
    return options;
  });
  

  GuideStar.afterDestroy((star, options) => {
    const { guideId } = star;
    
    sequelize.models.Activity.destroy({
      where: {
        userId,
        targetId: id,
        targetType: 2
      }
    });
    
    sequelize.models.Guide.update(
      { totalStars: sequelize.literal("totalStars - 1") },
      { where: { id: guideId }, silent: true }
    );
  });
  */
  return GuideStar;
};
