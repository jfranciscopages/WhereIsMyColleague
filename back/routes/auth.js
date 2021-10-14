const express = require(`express`);
const router = express.Router();
const passport = require(`passport`);
const auth_controller = require("../controllers/authController");

const { login, logout, me } = auth_controller;

router.post("/login", passport.authenticate(`local`), login);

router.post("/logout", logout);

module.exports = router;
