module.exports = (sequelize, DataTypes) => {
  var Platform = sequelize.define("Platform", {
    name: {
      type: DataTypes.STRING(50)
    },
    description: {
      type: DataTypes.STRING(15)
    }
  });

  Platform.associate = models => {
    Platform.hasMany(models.Program, {
      foreignKey: "platformId"
    });
  };

  return Platform;
};
