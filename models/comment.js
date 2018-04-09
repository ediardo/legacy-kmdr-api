module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    userId: {
      type: DataTypes.INTEGER
    },
    replyTo: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    posStart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        min: 0
      }
    },
    posEnd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        min: 1
      }
    },
    isPartial: {
      type: DataTypes.BOOLEAN,
      defaultFalue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Comment.hasOne(models.GuideComment, {
      foreignKey: "commentId"
    });
    Comment.HasOne(models.CommandComment, {
      foreignKey: "commentId"
    });
  };

  /*
  Comment.afterCreate((comment, options) => {
    const { id, userId, kommandrId } = comment;
    // Anon user is always 0, do not log activity
    if (userId !== 0) {
      sequelize.models.Activity.create({
        userId,
        targetId: id,
        targetType: "comment"
      });
    }
    sequelize.models.Kommandr.update(
      { totalComments: sequelize.literal("totalComments + 1") },
      { where: { id: kommandrId }, silent: true }
    );
  });

  Comment.beforeBulkDestroy(options => {
    options.individualHooks = true;
    return options;
  });

  Comment.afterDestroy((fav, options) => {
    const { id, kommandrId, userId } = fav;
    // Anon user is always 0, do not log activity
    if (userId !== 0) {
      sequelize.models.Activity.destroy({
        where: {
          userId,
          targetId: id,
          targetType: "comment"
        }
      });
    }
    sequelize.models.Kommandr.update(
      { totalComments: sequelize.literal("totalComments - 1") },
      { where: { id: kommandrId }, silent: true }
    );
  });
  */
  return Comment;
};
