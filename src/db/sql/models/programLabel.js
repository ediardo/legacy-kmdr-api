module.exports = (sequelize, DataTypes) => {
  var ProgramLabel = sequelize.define("ProgramLabel", {
    programId: DataTypes.INTEGER,
    labelId: DataTypes.INTEGER
  });

  ProgramLabel.associate = models => {
    ProgramLabel.belongsTo(models.Program, {
      foreignKey: "programId"
    });
    ProgramLabel.belongsTo(models.Label, {
      foreignKey: "labelId"
    });
  };
  return ProgramLabel;
};
