"use strict";
module.exports = {
  up: (sequelize, DataTypes) => {
    return sequelize.createTable("Activities", {
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
      entityId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      entityTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: (sequelize, DataTypes) => {
    return sequelize.dropTable("Activities");
  }
};
