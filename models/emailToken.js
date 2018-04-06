module.exports = (sequelize, DataTypes) => {
  var EmailToken = sequelize.define("EmailToken", {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING(64),
    status: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  EmailToken.associate = models => {
    EmailToken.belongsTo(models.User, { foreignKey: "userId" });
  };

  return EmailToken;
};
