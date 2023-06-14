const express = require('express');

const adminRoutes = require('./adminRoutes');
const siteRoutes = require('./siteRoutes');
const postRoutes = require('./postRoutes');

const router = express.Router();

router.use('/', siteRoutes)
router.use('/posts', postRoutes)
router.use('/admin', adminRoutes)


module.exports = router;

