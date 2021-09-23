const express = require(`express`);
const router = express.Router();
const User = require("../models/user_profile");
const Empresa = require("../models/empresas_model");

/* GET empresas listing. */
router.get("/empresas", function (req, res, next) {
  Empresa.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log(e.response));
});

module.exports = router;
