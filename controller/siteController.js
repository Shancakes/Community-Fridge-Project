// const User = require('../models/userModel');
// const siteData = require('./data/siteData');
// const passport = require('passport');


// module.exports = {
//     index: (request, response) => {
//         response.render('views/home', {
//             name: siteData.userName,
//             copyrightYear: siteData.year,
//             signedIn: siteData.signedIn
//         });
//     },
//     signup_get: (request, response) => {
//         response.render('views/signup', {
//             copyrightYear: siteData.year
//         });
//     },
//     signup_post: (request, response) => {
//         const { username, password } = request.body;
//         User.register({ username: username }, password, (error, user) => {
//             if (error) {
//                 console.log(error);
//                 response.redirect('/signup');
//             } else {
//                 passport.authenticate('local')(request, response, () => {
//                     response.redirect('/login');
//                 });
//             }
//         });
//     },
//     login_get: (request, response) => {
//         response.render('views/login', {
//             copyrightYear: siteData.year
//         });
//     },
//     login_post: (request, response) => {
//         const { username, password } = request.body;
//         const user = new User({
//             username: username,
//             password: password
//         });

//         request.login(user, (error) => {
//             if (error) {
//                 console.log(error)
//                 response.redirect('/login');
//             } else {
//                 passport.authenticate('local')(request, response, () => {
//                     response.redirect('/admin');
//                 });
//             }
//         });
//     },
//     logout: (request, response) => {
//         request.logout();
//         response.redirect('/');
//     },
//     google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
//     google_redirect_get: [
//         passport.authenticate('google', { failureRedirect: '/login' }),
//         function (request, response) {
//             response.redirect('/admin');
//         }
//     ]
// }