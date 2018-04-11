module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Vars", {
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
      name: {
        type: DataTypes.STRING(65),
        allowNull: false
      },
      defaultValue: {
        type: DataTypes.STRING(200),
        allowNull: true
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
    return sequelize.dropTable("Vars");
  }
};
