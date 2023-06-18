
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

router.route("/createPost")
    .get(siteController.createPost_get)
    .post(siteController.createPost_post);

//Location Routes
router.route("/location1")
    .get(siteController.location1)
// .post(siteController.location1_post);

router.route("/location2")
    .get(siteController.location2);

router.route("/location3")
    .get(siteController.location3)

router.route("/location4")
    .get(siteController.location4)

router.route("/location5")
    .get(siteController.location5)



// Google OAuth Routes

router.route('/auth/google')
    .get(siteController.google_get)

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get)


module.exports = router;
