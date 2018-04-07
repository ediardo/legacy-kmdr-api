import bcrypt from "bcrypt";
import { reservedUsernames } from "../config/reservedUsernames";

const hashPassword = password => bcrypt.hashSync(password, 1);

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
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
    status: DataTypes.INTEGER,
    lastLogin: DataTypes.DATE,
    lastLoginIpAddress: DataTypes.STRING(15),
    githubId: DataTypes.STRING,
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
    User.hasMany(models.CommandStars, { foreignKey: "userId" });
    User.hasMany(models.GuideStars, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Guide, { foreignKey: "userId" });
    User.hasMany(models.Command, { foreignKey: "userId" });
  };

  return User;
};
