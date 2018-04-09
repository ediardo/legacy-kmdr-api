module.exports = function(sequelize, DataTypes) {
  var Guide = sequelize.define("Guide", {
    name: {
      type: DataTypes.STRING(65),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 65]
      }
    },
    description: {
      type: DataTypes.STRING(500)
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vanityUrl: {
      type: DataTypes.STRING(65)
    },
    hashUrl: {
      type: DataTypes.STRING(9)
    },
    listed: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    status: {
      type: DataTypes.INTEGER
    },
    totalStars: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalViews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalComments: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalCommands: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: DataTypes.DATE
  });

  Guide.associate = models => {
    Guide.belongsToMany(models.Command, {
      foreignKey: "guideId",
      through: "GuideCommand"
    });
    Guide.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Guide.belongsToMany(models.Star, {
      through: {
        model: "GuideStar"
      },
      foreignKey: "guideId"
    });
  };

  /*
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
  */
  return Guide;
};
