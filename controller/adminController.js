const siteData = require('../data/siteData');
const Posts = require('../models/postModel');
// const Author = require('../models/authorModel');

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/admin', {

            });
        } else {
            response.redirect('/login')
        }
    },
    admin_post: (request, response) => {
        if (request.isAuthenticated()) {
            Posts.find({}, (error, allPosts) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/adminPosts', {

                        inventoryArray: allPosts
                    });
                }
            })
        } else {
            response.redirect('/login')
        }
    },
    create_post: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/postCreate', {

            });
        } else {
            response.redirect('/login')
        }
    },

    post_update_get: (request, response) => {
        if (request.isAuthenticated()) {
            const { _id } = request.params;
            Posts.findOne({ _id: _id }, (error, foundPosts) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/updatePosts', {
                        copyrightYear: siteData.year,
                        foundPosts: foundPosts
                    });
                }
            });
        } else {
            response.redirect('/login')
        }
    },

}