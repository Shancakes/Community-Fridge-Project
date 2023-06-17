const express = require('express');

const siteRoutes = require('./siteRoutes');
const postRoutes = require('./postRoutes');

const router = express.Router();

router.use('/', siteRoutes)
router.use('/posts', postRoutes)


module.exports = router;

