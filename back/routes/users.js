const express = require(`express`);
const { User_Profile, Branches } = require("../models/index");
const router = express.Router();
const { Op } = require("sequelize");

/* GET users listing. */
router.get("/getAll", function (req, res, next) {
  User_Profile.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log(e.response));
});

router.get("/search/:name", (req, res, next) => {
  const name = req.params.name;
  User_Profile.findAll({
    where: {
      [Op.or]: {
        firstName: {
          [Op.iLike]: `%${name}%`,
        },
        lastName: {
          [Op.iLike]: `%${name}%`,
        },
      },
    },
    order: [["firstName", "ASC"]],
  })
    .then((users) => res.status(200).json(users))
    .catch((err) => next(err));
});

router.get("/byId/:id", (req, res, next) => {
  User_Profile.findOne({
    where: { id: req.params.id },
    include: Branches
  })
    .then((user) => res.send(user))
    .catch((err) => next(err));
});

router.post("/create", (req, res, next) => {
  User_Profile.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    city: req.body.city,
    phone: req.body.phone,
  })
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((e) => console.log(e.response));
});

module.exports = router;
