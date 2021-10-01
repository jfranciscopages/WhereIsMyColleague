const express = require(`express`);
const router = express.Router();
const passport = require("passport");
//import controllers
const auth_controller = require("../controllers/authController");
//Controlers llamados por destructuracion
const { login, logout } = auth_controller;

router.post(`/login`, passport.authenticate("local"), login);

router.post(`/logout`);
/* 
router.get("/me", me);
 */
module.exports = router;
