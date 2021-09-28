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
    order: [
      ["firstName", "ASC"],
      ["lastName", "ASC"],
    ],
  })
    .then((users) => res.status(200).json(users))
    .catch((err) => next(err));
});

router.get(`/search/id/:id`,(req, res, next)=>{
  const id = req.params.id;
  User_Profile.findByPk(id)
  .then(data=>{
    res.status(200).send(data)
  })
  .catch((err)=>next(err))
})

router.post("/create", (req, res, next) => {
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
      return res.status(200).send(data);
    })
    .catch((e) => console.log(e.response));
});

module.exports = router;
