module.exports = (sequelize, DataTypes) => {
  var EmailToken = sequelize.define("EmailToken", {
    userId: {
      type: DataTypes.INTEGER
    },
    token: {
      type: DataTypes.STRING(64),
      validate: {
        notEmpty: true
      }
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  EmailToken.associate = models => {
    EmailToken.belongsTo(models.User, { foreignKey: "userId" });
  };

  return EmailToken;
};
