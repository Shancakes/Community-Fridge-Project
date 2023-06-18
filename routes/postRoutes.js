const express = require('express');
const postController = require('../controller/postController');
const router = express.Router();

// // POST ROUTES
router.route('/')
    .get(postController.all_post)
    .post(postController.post_create_post)

router.route('/:_id')
    .get(postController.post_detail)
    .put(postController.post_update_put)
    .delete(postController.post_delete)



module.exports = router;
