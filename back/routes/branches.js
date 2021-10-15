const express = require(`express`);
const router = express.Router();
const {
  Branches,
  Floors,
  Workspaces,
  User_Profile,
} = require("../models/index");

/* GET empresas listing. */
router.get("/", function (req, res, next) {
  Branches.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log(e.response));
});

router.get("/byCountry/:country", (req, res, next) => {
  Branches.findAll({
    where: { country: req.params.country },
  })
    .then((countries) => res.send(countries))
    .catch((e) => console.log(e));
});

router.post("/newBranch", (req, res, next) => {
  const { country, city, address, CP, floor, phone, image } = req.body;
  Branches.findOrCreate({
    where: { address } /* CHEQUEAR */,
    defaults: {
      country,
      city,
      address,
      CP,
      floor,
      phone,
      image,
    },
  })
    .then((branch) => res.send(branch))
    .catch((e) => console.log(e));
});

router.put("/editBranch/:id", (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  Branches.update({
    address: req.body.address,
    country: req.body.country,
    city: req.body.city,
    CP: req.body.CP,
    phone: req.body.phone,
    image: req.body.image,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(([n, editedBranch]) => res.status(201).send(editedBranch))
    .catch((e) => console.log(e))
});

router.delete("/deleteBranch/:id", (req, res, next) => {
  Branches.destroy({
    where: { id: req.params.id },
  }).then(() => res.status(204).end());
});

router.get("/singleBranch/:id", async function (req, res, next) {
  try {
    const branchs = await Branches.findOne({
      where: { id: req.params.id },
      include: {
        model: Floors,
        include: {
          model: Workspaces,
          include: {
            model: User_Profile,
          },
        },
      },
    });
    res.send(branchs);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
