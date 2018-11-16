module.exports = function(sequelize, DataTypes) {
  var Form = sequelize.define({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    form_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Form;
};
