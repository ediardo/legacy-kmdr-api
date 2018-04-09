module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Commands", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Programs",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id"
        }
      },
      sourceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Sources",
          key: "id"
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rawContent: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      hashUrl: {
        type: DataTypes.STRING(9)
      },
      forkFrom: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      vanityUrl: {
        type: DataTypes.STRING(65)
      },
      totalViews: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalStars: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalComments: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalForks: {
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
    return sequelize.dropTable("Commands");
  }
};
