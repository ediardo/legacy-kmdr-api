var Hashids = require("hashids");

module.exports = function(sequelize, DataTypes) {
  var Command = sequelize.define("Command", {
    programId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    },
    sourceId: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        min: 1
      }
    },
    rawContent: {
      type: DataTypes.STRING(500),
      validate: {
        notEmpty: true,
        min: 2
      }
    },
    description: {
      type: DataTypes.STRING(500)
    },
    hashUrl: {
      type: DataTypes.STRING(9)
    },
    forkFrom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vanityUrl: {
      type: DataTypes.STRING(65)
    },
    totalViews: {
      type: DataTypes.INTEGER
    },
    totalStars: {
      type: DataTypes.INTEGER
    },
    totalComments: {
      type: DataTypes.INTEGER
    },
    totalForks: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  Command.associate = models => {
    Command.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Command.belongsTo(models.Program, {
      foreignKey: "programId"
    });
    Command.hasMany(models.Var, {
      foreignKey: "commandId"
    });
    Command.hasMany(models.Comment, {
      foreignKey: "kommandrId",
      onDelete: "CASCADE"
    });
    Command.hasMany(models.Star, { foreignKey: "kommandrId" });
    Command.hasMany(models.Command, {
      foreignKey: "forkFrom",
      as: "Fork",
      onDelete: "SET NULL"
    });
    Command.belongsToMany(models.Guide, {
      foreignKey: "commandId",
      through: "GuideCommand"
    });
  };

  Command.beforeCreate((kommandr, options) => {
    return Command.max("id").then(max => {
      var hashId = new Hashids("kommandr", 6);
      return (kommandr.hashId = hashId.encode(max + 1));
    });
  });

  Command.afterCreate((kommandr, options) => {
    const { id, userId } = kommandr;
    // Anon user is always 0, do not log activity
    if (userId !== 0) {
      sequelize.models.Activity.create({
        userId,
        targetId: id,
        targetType: "kommandr"
      });
    }
    if (options.isForked) {
      const { forkFrom } = kommandr;
      sequelize.models.Kommandr.update(
        { totalForks: sequelize.literal("totalForks + 1") },
        { where: { id: forkFrom }, silent: true }
      );
    }
  });

  Command.beforeBulkDestroy(options => {
    options.individualHooks = true;
    return options;
  });

  Command.afterDestroy((kommandr, options) => {
    const { id, userId, forkFrom } = kommandr;
    // Anon user is always 0, do not log activity
    if (userId !== 0) {
      sequelize.models.Activity.destroy({
        where: {
          userId,
          targetId: id,
          targetType: "kommandr"
        }
      });
    }
    if (forkFrom) {
      sequelize.models.Kommandr.update(
        { totalForks: sequelize.literal("totalForks - 1") },
        { where: { id: forkFrom }, silent: true }
      );
    }
  });
  return Command;
};
