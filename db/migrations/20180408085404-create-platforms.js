module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("Platforms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(150)
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("Platforms");
  }
};
