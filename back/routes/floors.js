const express = require(`express`);
const Floors = require("../models/floors");
const router = express.Router();

router.post("/createFloor", function (req, res, next) {
    Floors.create({
        branchId: req.body.branchId,
        name: req.body.name,
        image: req.body.image
    })
        .then((data) => {
            res.send(data)
            console.log('lo creaste!', data)
        })
        .catch((e) => console.log(e))
});

router.put('/editFloor/:id', (req, res, next) => {
    Floors.update({
        name: req.body.name,
        image: req.body.image,
    }, { where: { id: req.params.id }, returning: true, })
        .then((data) => res.status(201).send(data))
        .catch((e) => console.log(e))
})

module.exports = router;
