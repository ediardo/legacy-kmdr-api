"use strict";
module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Comments", {
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
      replyTo: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      comment: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
      isPartial: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      posStart: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      posEnd: {
        type: DataTypes.INTEGER,
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
    return sequelize.dropTable("Comments");
  }
};
