const express = require(`express`);
const { User_Profile, Branches, Workspaces } = require("../models/index");
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
  User_Profile.findByPk(req.params.id)
    .then((user) => res.send(user))
    .catch((err) => next(err));
});

router.post("/create", (req, res, next) => {
  const user = req.body;
  console.log(user);
  User_Profile.findOne({ where: { workspaceId: user.workspaceId } })
    .then((data) => {
      if (data) res.sendStatus(404);
      else
        User_Profile.create(user).then((data) => {
          return res.status(200).send(data);
        });
    })
    .catch((e) => next(e));
});

router.get("/findUserInWorkspace/:id", (req, res, next) => {
  const id = req.params.id;
  User_Profile.findOne({ where: { workspaceId: id } })
    .then((data) => {
      if (data) res.sendStatus(500);
      else return res.sendStatus(200);
    })
    .catch((e) => next(e));
});

router.put("/editUser", (req, res, next) => {
  const user = req.body;
  User_Profile.findOne({ where: { workspaceId: user.workspaceId } })
    .then((data) => {
      if (data) res.sendStatus(404);
      else
        User_Profile.update(user, {
          where: { id: user.id },
          returning: true,
        }).then(([n, data]) => {
          return res.status(201).send(data);
        });
    })
    .catch((e) => next(e));
});

module.exports = router;
