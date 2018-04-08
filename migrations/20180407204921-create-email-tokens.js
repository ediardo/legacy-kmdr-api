module.exports = {
  up: (sequelize, DataTypes) => {
    return sequelize.createTable("EmailTokens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      token: {
        type: DataTypes.STRING(64)
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: (sequelize, DataTypes) => {
    return sequelize.dropTable("EmailTokens");
  }
};
