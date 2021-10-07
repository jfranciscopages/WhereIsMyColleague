const express = require(`express`);
const router = express.Router();
const { Branches, Floors, Workspaces } = require("../models/index");

router.get("/", function (req, res, next) {
  res.send("VIVA PERON A RE QUE NO");
});

router.get("/searchOneBranchFloors/:id", function (req, res, next) {
  Branches.findByPk(req.params.id, {
    include: [
      {
        model: Floors,
      },
    ],
  })
    .then((branch) => {
      res.status(200).send(branch);
    })
    .catch(next);
});

router.get("/searchFloorWorkspaces/:id", function (req, res, next) {
  Floors.findByPk(req.params.id, {
    include: [
      {
        model: Workspaces,
      },
    ],
  })
    .then((branch) => {
      res.status(200).send(branch);
    })
    .catch(next);
});

module.exports = router;
