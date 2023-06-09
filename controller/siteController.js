// const User = require('../models/userModel');
// const siteData = require('../data/siteData');
const passport = require('passport');


module.exports = {

    home_get: (request, response) => {
        response.render('pages/home', {
        });
    },

    locationMap_get: (request, response) => {
        response.render('pages/locationMap', {
        });
    },

    resources_get: (request, response) => {
        response.render('pages/resources', {
        });
    },



    location1: (request, response) => {
        response.render('pages/location1', {
            // name: siteData.userName,
            // signedIn: siteData.signedIn,
            // postData: postData
        });

    },

    location2: (request, response) => {
        response.render('pages/location2', {
            // name: siteData.userName,
            // signedIn: siteData.signedIn,
            // postData: postData
        });
    },

    location3: (request, response) => {
        response.render('pages/location2', {
            // name: siteData.userName,
            // signedIn: siteData.signedIn,
            // postData: postData
        });
    },

    location4: (request, response) => {
        response.render('pages/location2', {
            // name: siteData.userName,
            // signedIn: siteData.signedIn,
            // postData: postData
        });
    },

    location5: (request, response) => {
        response.render('pages/location2', {
            // name: siteData.userName,
            // signedIn: siteData.signedIn,
            // postData: postData
        });
    },


    resources_get: (request, response) => {
        response.render('pages/resources', {
        });
    },

    // insert post method, "location1_post"
    location1_post: (request, response) => {
        const { name, rad1, rad2, content } = request.body;
        const newPost = new Post({
            name: name,
            rad1: rad1,
            rad2: rad2,
            content: content
        });

        newPost.save();

        response.redirect("/location1");

    },

    signup_get: (request, response) => {
        response.render('pages/signup', {
            // copyrightYear: siteData.year
        });
    },

    signup_post: (request, response) => {
        const { username, password } = request.body;
        User.register({ username: username }, password, (error, user) => {
            if (error) {
                console.log(error);
                response.redirect('/signup');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/login');
                });
            }
        });
    },

    login_get: (request, response) => {
        response.render('pages/login', {
            // copyrightYear: siteData.year
        });
    },

    login_post: (request, response) => {
        const { username, password, googleId } = request.body;
        const user = new User({
            username: username,
            password: password,
            googleId: googleId
        });

        request.login(user, (error) => {
            if (error) {
                console.log(error)
                response.redirect('/login');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/admin');
                });
            }
        });
    },

    logout: (request, response) => {
        // new code as of 6/2022 - the correct logout function
        request.logout(function (err) {
            // destroy the session for the user
            if (err) { return next(err); }
            // redirect back to the homepage
            response.redirect('/');
        });
    },

    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (request, response) {
            response.redirect('/admin');
        }
    ]
}
