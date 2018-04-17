module.exports = (sequelize, DataTypes) => {
  var EmailToken = sequelize.define(
    "EmailToken",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: true
    }
  );

  EmailToken.associate = models => {
    EmailToken.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return EmailToken;
};
