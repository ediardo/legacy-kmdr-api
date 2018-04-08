import bcrypt from "bcrypt";
import { reservedUsernames } from "../config/reservedUsernames";

const hashPassword = password => bcrypt.hashSync(password, 1);

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING(22),
      validate: {
        min: 3,
        isLowercase: true,
        notIn: [reservedUsernames]
      }
    },
    name: {
      type: DataTypes.STRING(45),
      validate: {
        min: 3
      }
    },
    email: {
      type: DataTypes.STRING(70),
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(100),
      validate: {
        min: 6,
        max: 32
      }
    },
    websiteUrl: {
      type: DataTypes.STRING(100),
      validate: {
        isUrl: true
      }
    },
    twitterHandle: {
      type: DataTypes.STRING(40)
    },
    status: {
      type: DataTypes.INTEGER
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    lastLoginIpAddress: {
      type: DataTypes.STRING(15)
    },
    githubId: {
      type: DataTypes.INTEGER
    },
    githubHandle: {
      type: DataTypes.STRING(50)
    },
    avatarUrl: {
      type: DataTypes.STRING(500),
      validate: {
        isUrl: true
      }
    },
    hasSeenWelcome: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  User.hook("beforeBulkUpdate", user => {
    const { username, name, password } = user.attributes;
    if (username) {
      user.attributes.username = username.trim().toLowerCase();
    }
    if (name) {
      user.attributes.name = name.trim();
    }
    if (password) {
      user.attributes.password = hashPassword(password);
    }
    return user;
  });

  User.associate = models => {
    User.hasMany(models.Activity, { foreignKey: "userId" });
    User.hasMany(models.EmailToken, { foreignKey: "userId" });
    User.hasMany(models.AbuseReport, { foreignKey: "userId" });
    User.hasMany(models.ProgramView, { foreignKey: "userId" });
    User.hasMany(models.Star, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Guide, { foreignKey: "userId" });
    User.hasMany(models.Command, { foreignKey: "userId" });
  };

  return User;
};
