module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Programs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sourceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Sources",
          key: "id"
        }
      },
      programId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Platforms",
          key: "id"
        }
      },
      cliName: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false
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
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("Programs");
  }
};
