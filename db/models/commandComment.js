module.exports = function(sequelize, DataTypes) {
  var CommandComment = sequelize.define(
    "CommandComment",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      commandId: {
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
      posStart: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {
          min: 0
        }
      },
      posEnd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {
          min: 1
        }
      },
      isPartial: {
        type: DataTypes.BOOLEAN,
        defaultFalue: false
      }
    },
    {
      timestamps: true
    }
  );

  CommandComment.associate = models => {
    CommandComment.belongsTo(models.User, { foreignKey: "userId" });
    CommandComment.belongsTo(models.Command, { foreignKey: "commandId" });
  };

  CommandComment.afterCreate((comment, options) => {
    const { commandId } = comment;

    sequelize.models.Command.update(
      { totalComments: sequelize.literal("totalComments + 1") },
      { where: { id: commandId }, silent: true }
    );
  });

  CommandComment.afterDestroy((comment, options) => {
    const { commandId } = comment;

    sequelize.models.Command.update(
      { totalComments: sequelize.literal("totalComments - 1") },
      { where: { id: commandId }, silent: true }
    );
  });

  return CommandComment;
};
