module.exports = function(sequelize, DataTypes) {
  var ProgramView = sequelize.define("ProgramView", {
    userId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER
  });

  ProgramView.associate = models => {
    ProgramView.belongsTo(models.Program, { foreignKey: "programId" });
    ProgramView.belongsTo(models.User, { foreignKey: "userId" });
  };

  return ProgramView;
};
