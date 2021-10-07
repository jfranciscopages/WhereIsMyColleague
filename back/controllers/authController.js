const { User_Profile } = require(`../models/index`);
// const jwt = require("jsonwebtoken");

// const checkJWT = (req, res, next) => {
//   if (!req.headers.authorization) return res.status(401).send("No autorizado");

//   const token = req.headers.authorization.split(" ")[1];
//   const data = jwt.verify(token, "ClaveSecreta", (err, decoded) => {
//     if (err) res.status(401).send("No permitido");
//     return decoded;
//   });
//   if (data) {
//     User_Profile.findByPk(data.id).then((user) => {
//       req.user = data;
//       next();
//     });
//   }
// };

// module.exports = checkJWT;

const auth_controller = {
  login: (req, res, next) => {
    const user = {
      access: req.user.access,
      email: req.user.email,
      address: req.user.address,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      country: req.user.country,
      city: req.user.city,
      phone: req.user.phone,
      job: req.user.job,
      latitude: req.user.latitude,
      longitude: req.user.longitude,
      id: req.user.id,
    };
    try {
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  },

  logout: (req, res, next) => {
    try {
      req.logout();
      return res.redirect("/");
    } catch (err) {
      next(err);
    }
  },

  me: (req, res, next) => {
    try {
      if (!req.user) {
        return res.sendStatus(401);
      } else {
        const userLogged = {
          access: req.user.access,
          email: req.user.email,
          address: req.user.address,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          country: req.user.country,
          city: req.user.city,
          phone: req.user.phone,
          job: req.user.job,
          latitude: req.user.latitude,
          longitude: req.user.longitude,
          id: req.user.id,
        };
        return res.send(userLogged);
      }
    } catch (err) {
      next(err);
    }
  },
};

module.exports = auth_controller;
