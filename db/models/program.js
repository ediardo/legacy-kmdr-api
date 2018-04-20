module.exports = (sequelize, DataTypes) => {
  var Program = sequelize.define(
    "Program",
    {
      sourceId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      platformId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cliName: {
        type: DataTypes.STRING(64)
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      rawManPage: {
        type: DataTypes.STRING
      },
      linkUrl: {
        type: DataTypes.STRING(250),
        validate: {
          isUrl: true
        }
      },
      shortDescription: {
        type: DataTypes.STRING(300)
      },
      totalViews: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalCommands: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      status: {
        type: DataTypes.INTEGER
      }
    },
    {
      paranoid: true,
      timestamps: true
    }
  );

  Program.associate = models => {
    Program.belongsTo(models.Source, {
      foreignKey: "sourceId"
    });
    Program.belongsTo(models.Platform, {
      foreignKey: "platformId"
    });
    Program.hasMany(models.Command, {
      foreignKey: "programId"
    });
    Program.hasMany(models.ProgramView, {
      foreignKey: "programId"
    });
  };

  return Program;
};
