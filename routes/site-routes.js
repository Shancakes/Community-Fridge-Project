
const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");

//making a route looking in siteController file for index controller function
//.about and .index will be linked to the names given in the site controller file, make sure they are the same :)
router.route("/").get(siteController.index);

router.route("/about").get(siteController.about);

router.route("/login").get(siteController.login);


//export

module.exports = router;