module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING(22),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(45)
      },
      email: {
        type: DataTypes.STRING(70),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100)
      },
      websiteUrl: {
        type: DataTypes.STRING(100)
      },
      twitterHandle: {
        type: DataTypes.STRING(40)
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      lastLogin: {
        type: DataTypes.DATE
      },
      lastLoginIpAddress: {
        type: DataTypes.STRING(15)
      },
      githubId: {
        type: DataTypes.STRING(20)
      },
      githubHandle: {
        type: DataTypes.STRING(50)
      },
      avatarUrl: {
        type: DataTypes.STRING(500)
      },
      hasSeenWelcome: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("Users");
  }
};
