const express = require(`express`);
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("VIVA PERON A RE QUE NO");
});

module.exports = router;
