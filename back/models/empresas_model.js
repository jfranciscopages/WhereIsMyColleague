const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Empresas_model extends Sequelize.Model {}
Empresas_model.init(
  {
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
  { sequelize: db, modelName: "empresas_model" }
);

module.exports = Empresas_model;
