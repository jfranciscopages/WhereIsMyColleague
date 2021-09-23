const express = require(`express`);
const User_Profile = require("../models/user_profile");
const router = express.Router();
const User = require("../models/user_profile");
const { Op } = require("sequelize");

/* GET users listing. */
router.get("/getAll", function (req, res, next) {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log(e.response));
});

router.get(`/search/:name`, (req, res, next) => {
  const name = req.params.name;
  console.log(name);
  User_Profile.findAll({
    where: {
      [Op.or]: {
        firstName: {
          [Op.iLike]: `%${name}%`,
        },
        lastName: {
          [Op.iLike]: `%${name}%`,
        },
        email: {
          [Op.iLike]: `%${name}%`,
        },
      },
    },
  })
    .then((users) => res.status(200).json(users))
    .catch((err) => next(err));
});

router.post("/create", (req, res, next) => {
  console.log(req.body);
  User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    city: req.body.city,
    phone: req.body.phone,
  })
    .then((data) => {
      console.log(data);
      return res.status(200).send(data);
    })
    .catch((e) => console.log(e.response));
});

module.exports = router;
