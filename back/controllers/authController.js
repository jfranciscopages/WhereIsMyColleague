const { User_Profile } = require(`../models/index`);

const auth_controller = {
  login: async (req, res, next) => {
    const { email } = req.body;
    try {
      const user = await User_Profile.findOne({
        where: { email },
      });
      const userLogged = {
        access: user.access,
        email: user.email,
        address: user.address,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        city: user.city,
        phone: user.phone,
        job: user.job,
        latitude: user.latitude,
        longitude: user.longitude,
        id: user.id,
      };
      return res.status(200).json(userLogged);
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
