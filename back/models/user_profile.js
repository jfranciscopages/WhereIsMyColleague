const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class User_Profile extends Sequelize.Model {}
User_Profile.init(
  {
    // access: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   defaultValue: "user",
    // },
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
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // phone: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    latitude: {
      type: Sequelize.FLOAT,
    },
    longitude: {
      type: Sequelize.FLOAT
    }
  },
  { sequelize: db, modelName: "user_profile" }
);

module.exports = User_Profile;