"use strict";
module.exports = function(sequelize, DataTypes) {
  var Guide = sequelize.define("Guide", {
    name: {
      type: DataTypes.STRING(65),
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING(500),
      validate: {
        notEmpty: true
      }
    },
    userId: DataTypes.INTEGER,
    vanityUrl: DataTypes.STRING(65),
    hashUrl: DataTypes.STRING(9),
    listed: DataTypes.BOOLEAN,
    status: DataTypes.INTEGER,
    totalStars: DataTypes.INTEGER,
    totalViews: DataTypes.INTEGER,
    totalComments: DataTypes.INTEGER,
    totalCommands: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  Guide.associate = models => {
    Guide.belongsToMany(models.Kommandr, {
      foreignKey: "collectionId",
      through: "KommandrCollection"
    });
    Guide.belongsTo(models.User, { foreignKey: "userId" });
  };

  Guide.afterCreate((collection, options) => {
    const { id, userId } = collection;
    // Anon user is always 0, do not log activity
    if (userId !== 0) {
      sequelize.models.Activity.create({
        userId,
        targetId: id,
        targetType: "collection"
      });
    }
  });

  return Guide;
};
