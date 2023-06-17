//DO NOT TOUCH (unless youre adding more locations)
const User = require('../models/userModel');
const Post = require('../models/postModel');
const passport = require('passport');
const { request } = require('http');


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

        }); //failsafe
        // Post.find({}, (error, allPosts) => {
        //     if (error) {
        //         return error;
        //     } else {
        //         response.render('pages/location1', {
        //             inventoryArray: allPosts
        //         });
        //     }
        // })
        //location1-loop is connected here, come back when mongoDB is connected
    },

    location2: (request, response) => {
        response.render('pages/location2', {
        });
    },

    location3: (request, response) => {
        response.render('pages/location3', {
        });
    },

    location4: (request, response) => {
        response.render('pages/location4', {
        });
    },

    location5: (request, response) => {
        response.render('pages/location5', {
        });
    },


    location1_post: (request, response) => {
        const { name, content } = request.body;
        const newPost = new Post({
            name: name,

            content: content
        });
        newPost.save((error) => {
            if (error) {
                console.error(error);
            }
            response.redirect("/location1");
        });
    },

    signup_get: (request, response) => {
        response.render('pages/signup', {

        });
    },

    signup_post: (request, response) => {
        const { username, password } = request.body;
        const newUser = new User({
            username: username,
            password: password
        });

        User.register(newUser, password, (error, user) => {
            if (error) {
                console.log(error);
                response.redirect('/signup');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/login');
                });
            };

        });
    },

    login_get: (request, response) => {
        response.render('pages/login', {
        })
    },

    login_post: (request, response, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.error(err);
                return next(err);
            }

            if (!user) {
                console.log(info.message);
                return response.redirect('/locationMap');
            }

            request.logIn(user, async (err) => {
                if (err) {
                    console.error(err);
                    return next(err);
                }

                try {
                    const { username } = user;

                    // Update the logged-in user's posts with the associated username
                    await Post.updateMany({ userId: user._id }, { $set: { username } });

                    return response.redirect('/locationMap');
                } catch (error) {
                    console.error(error);
                    return next(error);
                }
            });
        })(request, response, next);
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
