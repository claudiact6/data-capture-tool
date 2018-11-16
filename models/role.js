module.exports = function(sequelize, DataTypes) {
  var Role = sequelize.define({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Role;
};
