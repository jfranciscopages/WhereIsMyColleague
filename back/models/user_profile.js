const Sequelize = require(`sequelize`);
const db = require("../db/db");
const crypto = require(`bcrypt`);

//-- User Model
class User_Profile extends Sequelize.Model { }
User_Profile.init(
  {
    access: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
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
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    job: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profilePhoto: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user_profile" }
);

//hookardos!
User_Profile.addHook(`beforeCreate`, function (user) {
  return crypto
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hashPass(user.password, user.salt);
    })
    .then((hash) => (user.password = hash));
});

//instance method
User_Profile.prototype.hashPass = function (password, salt) {
  return crypto.hash(password, salt);
};

User_Profile.prototype.validPassword = function (password, salt) {
  return this.hashPass(password, salt).then((pass) => {
    return this.password === pass;
  });
};

module.exports = User_Profile;
