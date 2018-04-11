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
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: (sequelize, DataTypes) => {
    return sequelize.dropTable("EmailTokens");
  }
};
