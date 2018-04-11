module.exports = function(sequelize, DataTypes) {
  var GuideCommand = sequelize.define("GuideCommand", {
    commandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    guideId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    step: {
      type: DataTypes.INTEGER
    },
    stepDescription: {
      type: DataTypes.STRING(250)
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  GuideCommand.associate = models => {
    GuideCommand.belongsTo(models.Command, {
      foreignKey: "commandId"
    });
    GuideCommand.belongsTo(models.Guide, {
      foreignKey: "guideId"
    });
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
  return GuideCommand;
};
