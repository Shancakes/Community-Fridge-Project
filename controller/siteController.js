const User = require('../models/userModel');
const Post = require('../models/postModel');
const passport = require('passport');


module.exports = {

    home_get: (request, response) => {
        response.render('pages/home', {
            signedIn: siteData.signedIn,
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
        Post.find({}, (error, allPosts) => {
            if (error) {
                return error;
            } else {
                response.render('pages/location1', {
                    inventoryArray: allPosts
                });
            }
        })

    },

    location2: (request, response) => {
        response.render('pages/location2', {
        });
    },

    location3: (request, response) => {
        response.render('pages/location2', {
        });
    },

    location4: (request, response) => {
        response.render('pages/location2', {
        });
    },

    location5: (request, response) => {
        response.render('pages/location2', {
        });
    },


    location1_post: (request, response) => {
        const { name, content } = request.body;
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
            signedIn: siteData.signedIn,
        });
    },

    signup_post: (request, response) => {
        const { username, password } = request.body;
        const newUser = new User({
            username: username,
            password: password
        });
        newUser.save();
        response.redirect('/login');

    },

    login_get: (request, response) => {
        response.render('pages/login', {

        });
    },

    login_post: (request, response) => {
        const { username, password } = request.body;
        const user = new User({
            username: username,
            password: password,
        });

        request.login(user, (error) => {
            if (error) {
                console.log(error);
                response.redirect("/login");
            } else {
                passport.authenticate("local")(request, response, () => {
                    response.redirect("/locationMap");
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
    }



}