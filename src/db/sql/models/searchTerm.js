module.exports = (sequelize, DataTypes) => {
  var SearchTerm = sequelize.define(
    "SearchTerm",
    {
      query: DataTypes.STRING(500),
      sessionId: DataTypes.STRING(100)
    },
    {
      timestamps: true,
      updatedAt: false
    }
  );
  return SearchTerm;
};
