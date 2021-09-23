const Sequelize = require("sequelize");

const db = new Sequelize("colleague", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
