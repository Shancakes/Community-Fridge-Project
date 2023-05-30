const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin-controller");


router.route("/").get(adminController.admin);

router.route("/create-post").get(adminController.adminCreate);

//add additional methods to this route(.put and .delete) (HW12P2)
//method override in app.js
router.route("/update-post/:_id").get(adminController.update)




module.exports = router;