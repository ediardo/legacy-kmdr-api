module.exports = (sequelize, DataTypes) => {
  var Program = sequelize.define("Program", {
    sourceId: DataTypes.INTEGER,
    cliName: DataTypes.STRING(64),
    name: DataTypes.STRING(64),
    rawManPage: DataTypes.STRING,
    linkUrl: {
      type: DataTypes.STRING(250),
      validate: {
        isUrl: true
      }
    },
    shortDescription: DataTypes.STRING(300),
    totalViews: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  Program.associate = models => {
    Program.belongsTo(models.Source, { foreignKey: "sourceId" });
    Program.belongsToMany(models.Platform, {
      through: {
        model: models.ProgramPlatform
      },
      foreignKey: "programId"
    });
    Program.hasMany(models.Command, { foreignKey: "programId" });
    Program.hasMany(models.ProgramView, { foreignKey: "programId" });
  };

  return Program;
};
