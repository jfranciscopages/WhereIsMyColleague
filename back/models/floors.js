const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Floors extends Sequelize.Model { }
Floors.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "floors" }
);

module.exports = Floors;
