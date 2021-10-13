const express = require(`express`);
const router = express.Router();
const { User_Profile } = require("../models/index");
// const jwt = require("jsonwebtoken");
// const checkJWT = require('../controllers/authController')

const passport = require("passport");

// import controllers
const auth_controller = require("../controllers/authController");
// Controlers llamados por destructuracion
const { login, logout } = auth_controller;

router.post(`/login`, passport.authenticate("local"), login);
router.post(`/logout`);
/* 
router.get("/me", me);
 */

// router.post("/login", checkJWT, (req, res, next) => {
//   const { email, password } = req.body;
//   User_Profile.findOne({
//     where: { email },
//   }).then((user) => {
//     if (!user) return res.status(400).send("No user");
//     if (!user.validPassword(password)) return res.status(401).send("Credenciales invalidas");

//     const token = jwt.sign({ id: user.id }, "ClaveSecreta");
//     return res.status(200).send({ user, token })
//   });
// });

// router.get('/priv', checkJWT, (req, res)=> {
//     res.status(200).send(req.user)
// })

module.exports = router;
