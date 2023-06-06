
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
})

module.exports = router;




// const postRouter = require('./postRoutes');
// const router = express.Router();
// router.use('/', siteRouter);  //if it has a '/', look at the siteRouter
// router.use('/posts', postRouter); //if it has a '/posts', look at the postRouter
// //** use get methods */

// //?????might need to add more ??????
// // const authorsRouter = require('./authorsRouter');
// // const adminRouter = require('./adminRouter');


// // router.use('/authors', authorsRouter);
// // router.use('/admin', adminRouter);

