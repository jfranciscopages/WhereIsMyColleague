const express = require(`express`);
const router = express.Router();
//import controllers
//Controlers llamados por destructuracion

router.post(`/login`);

router.post(`/logout`);
/* 
router.get("/me", me);
 */
module.exports = router;
