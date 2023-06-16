
const express = require('express');
const router = express.Router();
const siteController = require('../controller/siteController'); //linking the controller


//User


//Site Routes
router.route('/')
    .get(siteController.home_get);

router.route('/home')
    .get(siteController.home_get);

router.route("/locationMap")
    .get(siteController.locationMap_get);

router.route("/resources")
    .get(siteController.resources_get)


router.route("/signup")
    .get(siteController.signup_get)
    .post(siteController.signup_post);

router.route("/login")
    .get(siteController.login_get)
    .post(siteController.login_post);

// router.route("/logout")
//     .get(siteController.logout)

router.route("/location1")
    .get(siteController.location1)
    .post(siteController.location1_post);

// router.route("/location2")
//     .get(siteController.location2_get)
//     .post(siteController.location2_post);

// router.route("/location3")
//     .get(siteController.location3_get)
//     .post(siteController.location3_post);

// router.route("/location4")
//     .get(siteController.location4_get)
//     .post(siteController.location4_post);

// router.route("/location5")
//     .get(siteController.location5_get)
//     .post(siteController.location5_post);



// router.route('/auth/google')
//     .get(siteController.google_get);

// router.route('/auth/google/admin')
//     .get(siteController.google_redirect_get);


module.exports = router;
