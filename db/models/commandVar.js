module.exports = function(sequelize, DataTypes) {
  var CommandVar = sequelize.define(
    "CommandVar",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(65)
      },
      defaultValue: {
        type: DataTypes.STRING(250)
      },
      sequence: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true
    }
  );

  CommandVar.associate = models => {
    CommandVar.belongsTo(models.User, {
      foreignKey: "userId"
    });
    CommandVar.belongsTo(models.Var, {
      foreignKey: "varId"
    });
    CommandVar.belongsTo(models.Command, {
      foreignKey: "guideId"
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
  return CommandVar;
};
