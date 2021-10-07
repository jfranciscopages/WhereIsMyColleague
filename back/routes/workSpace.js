const express = require("express");
const Workspaces = require("../models/workspaces");
const router = express.Router();
const { Op } = require("sequelize");
const { User_Profile } = require("../models");

router.post("/findWorkspace", function (req, res, next) {
  const { floorId, name } = req.body;
  console.log(name);
  Workspaces.findAll({
    where: {
      [Op.and]: {
        floorId: floorId,
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    },
    include: {
      model: User_Profile,
    },
    order: [["name", "ASC"]],
  })
    .then((Workspaces) => res.status(200).json(Workspaces))
    .catch((err) => next(err));
});

router.put("/editWorkSpace", function (req, res, next) {
  Workspaces.update({});
});

module.exports = router;
