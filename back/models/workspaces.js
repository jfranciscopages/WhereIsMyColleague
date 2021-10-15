const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Workspaces extends Sequelize.Model { }
Workspaces.init(
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
  { sequelize: db, modelName: "workspaces" }
);

module.exports = Workspaces;
