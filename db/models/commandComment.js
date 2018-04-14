module.exports = function(sequelize, DataTypes) {
  var CommandComment = sequelize.define("CommandComment", {
    commandId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  });

  CommandComment.associate = models => {
    CommandComment.belongsTo(models.Comment, { foreignKey: "commentId" });
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
