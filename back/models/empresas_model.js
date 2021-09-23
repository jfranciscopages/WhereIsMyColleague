const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class empresas_model extends Sequelize.Model {}
empresas_model.init(
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

module.exports = empresas_model;
