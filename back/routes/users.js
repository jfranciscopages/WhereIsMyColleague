const express = require(`express`);
const router = express.Router();
const User = require('../models/user_profile')

/* GET users listing. */
router.get("/users", function (req, res, next) {
  User.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch(e => console.log(e.response))
});

module.exports = router;