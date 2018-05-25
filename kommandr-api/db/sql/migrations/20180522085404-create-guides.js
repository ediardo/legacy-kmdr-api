module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Guides", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id"
        }
      },
      name: {
        type: DataTypes.STRING(65),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      vanityUrl: {
        type: DataTypes.STRING(65)
      },
      hashUrl: {
        type: DataTypes.STRING(9)
      },
      listed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      totalStars: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalCommands: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalViews: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalComments: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("Guides");
  }
};
