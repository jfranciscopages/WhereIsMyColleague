const express = require(`express`);
const Workspaces = require("../models/workspaces");
const router = express.Router();

router.post("/createWorkSpace/:id", (req, res, next) => {
    Workspaces.create({
        floorId: req.params.id,
        name: req.body.name,
    })
        .then((data) => {
            res.send(data)
        })
        .catch(e => console.log(e))
});

router.put('/editWorkSpace/:id', (req, res, next) => {
    Workspaces.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.id
        }, returning: true
    })
        .then((data) => res.status(201).send(data))
        .catch((e) => console.log(e))
})

module.exports = router;
