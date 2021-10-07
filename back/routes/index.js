const express = require("express");
const router = express.Router();
const searchRouter = require("./search");
const authRouter = require("./auth");
const users = require("./users");
const branches = require("./branches");
const floors = require("./floors");
const workSpace = require("./workSpace");

/* GET home page. */
router.use("/users", users);
router.use("/branches", branches);
router.use("/search", searchRouter);
router.use("/auth", authRouter);
router.use("/floors", floors);
router.use("/editWorkSpace", workSpace);

module.exports = router;
