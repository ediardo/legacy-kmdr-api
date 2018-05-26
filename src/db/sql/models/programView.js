module.exports = function(sequelize, DataTypes) {
  var ProgramView = sequelize.define(
    "ProgramView",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      programId: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: true,
      updatedAt: false
    }
  );

  ProgramView.associate = models => {
    ProgramView.belongsTo(models.Program, { foreignKey: "programId" });
    ProgramView.belongsTo(models.User, { foreignKey: "userId" });
  };

  return ProgramView;
};
