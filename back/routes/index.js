const express = require("express");
const router = express.Router();
const searchRouter = require("./search");
const authRouter = require("./auth");
const users = require("./users");
const branches = require("./branches");

/* GET home page. */
router.use("/users", users);
router.use("/branches", branches);
router.use("/search", searchRouter);
router.use("/auth", authRouter);

module.exports = router;
