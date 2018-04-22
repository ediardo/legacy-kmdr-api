module.exports = {
  up: (sequelize, DataTypes) => {
    return sequelize.createTable("EmailTokens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      token: {
        type: DataTypes.STRING(64),
        allowNull: false
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
