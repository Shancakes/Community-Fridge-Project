const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// ADMIN ROUTES
router.route('/')
    .get(adminController.admin)

router.route('/admin-posts')
    .get(adminController.admin_post)

router.route('/create-posts')
    .get(adminController.create_post)

router.route('/:_id/edit-posts')
    .get(adminController.post_update_get)




module.exports = router;