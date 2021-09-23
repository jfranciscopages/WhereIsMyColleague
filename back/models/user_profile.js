const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class User_Profile extends Sequelize.Model {}
User_Profile.init(
  {
    access: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user_profile" }
);

module.exports = User_Profile;
