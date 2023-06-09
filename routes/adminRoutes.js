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

// router.route('/admin-authors')
//     .get(adminController.admin_authors)

// router.route('/create-author')
//     .get(adminController.create_author)

router.route('/:_id/edit-posts')
    .get(adminController.post_update_get)

// router.route('/:_id/edit-author')
//     .get(adminController.author_update_get)


module.exports = router;