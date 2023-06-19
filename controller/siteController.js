const User = require('../models/userModel');
const Post = require('../models/postModel');
const passport = require('passport');
const { request } = require('http');

module.exports = {
    home_get: (request, response) => {
        response.render('pages/home', {
            username: request.user ? request.user.username : null
        });
    },

    // posts_get: (request, response) => {
    //     response.render('pages/posts', {
    //         username: request.user ? request.user.username : null
    //     });
    // },

    locationMap_get: (request, response) => {
        response.render('pages/locationMap', {
            username: request.user ? request.user.username : null
        });
    },

    resources_get: (request, response) => {
        response.render('pages/resources', {
            username: request.user ? request.user.username : null
        });
    },

    createPost_get: (request, response) => {
        response.render('pages/createPost', {
            username: request.user ? request.user.username : null
        });
    },

    editPost_get: (request, response) => {
        response.render('pages/editPost', {
            username: request.user ? request.user.username : null
        });
    },

    createPost_post: (request, response) => {
        const { name, content } = request.body;
        const newPost = new Post({
            name: name,
            content: content
        });
        newPost.save((error) => {
            if (error) {
                console.error(error);
            }
            response.redirect("/location1"); // Redirect to location1 page
        });
    },

    post_update_put: (request, response) => {
        const { _id } = request.params;
        const { name, date, content } = request.body;
        Post.findByIdAndUpdate(_id, {
            name: name,
            date: date,
            content: content
        }, { new: true }, (error, updatedPost) => {
            if (error) {
                console.error(error);
                // Handle the error appropriately
            } else {
                response.redirect('/admin-posts');
            }
        });
    },


    location1: (request, response) => {
        Post.find({}, (error, allPosts) => {
            if (error) {
                console.error(error);
            } else {
                response.render('pages/location1', {
                    inventoryArray: allPosts,
                    username: request.user ? request.user.username : null
                });
            }
        });
    },

    location2: (request, response) => {
        response.render('pages/location2', {
            username: request.user ? request.user.username : null
        });
    },

    location3: (request, response) => {
        response.render('pages/location3', {
            username: request.user ? request.user.username : null
        });
    },

    location4: (request, response) => {
        response.render('pages/location4', {
            username: request.user ? request.user.username : null
        });
    },

    location5: (request, response) => {
        response.render('pages/location5', {
            username: request.user ? request.user.username : null
        });
    },

    signup_get: (request, response) => {
        response.render('pages/signup', {
            username: request.user ? request.user.username : null
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
            }
        });
    },

    login_get: (request, response) => {
        const { user } = request;
        const username = user ? user.username : null;

        if (request.isAuthenticated()) {
            // User is authenticated, render view with logout button
            response.render('pages/login', {
                logoutButton: true,
                username: username
            });
        } else {
            // User is not authenticated, render view without logout button
            response.render('pages/login', {
                logoutButton: false,
                username: username
            });
        }
    },

    login_post: (request, response, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.error(err);
                return next(err);
            }

            if (!user) {
                console.log(info.message);
                return response.redirect('/login');
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

                    return response.redirect('/login');
                } catch (error) {
                    console.error(error);
                    return next(error);
                }
            });
        })(request, response, next);
    },

    logout: (request, response) => {
        request.logout(function (err) {
            if (err) {
                console.error('Error logging out:', err);
                // Handle the error appropriately
            }
            request.session.destroy(function (err) {
                if (err) {
                    console.error('Error destroying session:', err);
                    // Handle the error appropriately
                }
                response.redirect('/login'); // Redirect to the login page or any other appropriate page
            });
        });
    },

    //Google OAuth
    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),

    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (request, response) {
            // Successful authentication, redirect home.
            response.redirect('/locationMap');
        }
    ]
};
