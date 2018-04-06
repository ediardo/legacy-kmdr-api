module.exports = (sequelize, DataTypes) => {
  var ProgramPlatform = sequelize.define("ProgramPlatform", {
    programId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER
  });

  ProgramPlatform.associate = models => {
    ProgramPlatform.belongsTo(models.Program, { foreignKey: "programId" });
    ProgramPlatform.belongsTo(models.Platform, { foreignKey: "platformId" });
  };

  return ProgramPlatform;
};
