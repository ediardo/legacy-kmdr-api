module.exports = {
  up: (sequelize, DataTypes) => {
    return sequelize.createTable("Activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      entityId: {
        type: DataTypes.INTEGER
      },
      entityTypeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "EntityTypes",
          key: "id"
        }
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: (sequelize, DataTypes) => {
    return sequelize.dropTable("Activities");
  }
};
