const express = require("express");
const router = express.Router();
const searchRouter = require("./search");
const users = require("./users");
const empresas = require("./empresas");

/* GET home page. */
router.use("/users", users);
router.use("/empresas", empresas);
router.use("/search", searchRouter);

module.exports = router;
