const express = require(`express`);
const Workspaces = require("../models/workspaces");
const router = express.Router();

router.put("/editWorkSpace", function (req, res, next) {
  Workspaces.update({});
});

module.exports = router;
