module.exports = (sequelize, DataTypes) => {
  var Label = sequelize.define(
    "Label",
    {
      name: DataTypes.STRING(60),
      allowNull: false
    },
    {
      description: DataTypes.STRING(150),
      allowNull: true
    },
    {
      timestamps: false
    }
  );

  Label.associate = models => {
    Label.hasMany(models.ProgramLabel, {
      foreignKey: "labelId"
    });
  };
  return Label;
};
