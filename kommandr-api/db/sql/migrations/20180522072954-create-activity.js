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
          key: "id",
          onDelete: "cascade"
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
      entityActionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "EntityActions",
          key: "id"
        }
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
    return sequelize.dropTable("Activities");
  }
};
