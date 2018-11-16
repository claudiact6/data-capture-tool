module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    group_name: {
      type: DataTypes.STRING
    },
    group_logo: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });
  return Group;
};
