const express = require('express');
const router = express.Router();
const adminRoutes = require('./adminRoutes');
const siteRoutes = require('./siteRoutes');
const postRoutes = require('./postRoutes');



router.use('/', siteRoutes)
router.use('/posts', postRoutes)
router.use('/admin', adminRoutes)
// router.use('/authors', authorsRouter);

module.exports = router;

