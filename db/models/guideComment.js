module.exports = function(sequelize, DataTypes) {
  var GuideComment = sequelize.define("GuideComment", {
    guideId: {
      type: DataTypes.INTEGER
    },
    commmentId: {
      type: DataTypes.INTEGER
    }
  });

  GuideComment.associate = models => {
    GuideComment.belongsTo(models.Comment, { foreignKey: "starId" });
    GuideComment.belongsTo(models.Guide, { foreignKey: "guideId" });
  };

  /*
  GuideComment.afterCreate((comment, options) => {
    const { guideId } = comment;

    sequelize.models.Guide.update(
      { totalComments: sequelize.literal("totalComments + 1") },
      { where: { id: guideId }, silent: true }
    );
  });

  GuideComment.afterDestroy((comment, options) => {
    const { guideId } = comment;

    sequelize.models.Command.update(
      { totalComments: sequelize.literal("totalComments - 1") },
      { where: { id: guideId }, silent: true }
    );
  });
  */
  return GuideComment;
};
