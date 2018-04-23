module.exports = {
  up: function(sequelize, DataTypes) {
    return sequelize.createTable("EntityActions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    });
  },
  down: function(sequelize, DataTypes) {
    return sequelize.dropTable("EntityActions");
  }
};
