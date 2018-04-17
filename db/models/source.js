module.exports = (sequelize, DataTypes) => {
  var Source = sequelize.define(
    "Source",
    {
      name: {
        type: DataTypes.STRING(45)
      },
      description: {
        type: DataTypes.STRING(150)
      }
    },
    {
      timestamps: true,
      updatedAt: false
    }
  );

  Source.associate = models => {
    Source.hasMany(models.Program, {
      foreignKey: "sourceId"
    });
  };
  return Source;
};
