module.exports = (sequelize, DataTypes) => {
  var Platform = sequelize.define("Platform", {
    name: DataTypes.STRING(50),
    description: DataTypes.STRING(15)
  });

  Platform.associate = models => {
    Platform.belongsToMany(models.Program, {
      through: {
        model: models.ProgramPlatform
      },
      foreignKey: "platformId"
    });
  };

  return Platform;
};
