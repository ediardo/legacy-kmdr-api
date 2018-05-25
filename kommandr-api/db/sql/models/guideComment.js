module.exports = function(sequelize, DataTypes) {
  var GuideComment = sequelize.define(
    "GuideComment",
    {
      guideId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      replyTo: {
        type: DataTypes.INTEGER
      },
      comment: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      status: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true
    }
  );

  GuideComment.associate = models => {
    GuideComment.belongsTo(models.User, { foreignKey: "userId" });
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
