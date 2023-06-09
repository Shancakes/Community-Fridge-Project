const siteData = require('../data/siteData');
const Posts = require('../models/postModel');
// const Author = require('../models/authorModel');

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/admin', {
                copyrightYear: siteData.year
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
                        copyrightYear: siteData.year,
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
                copyrightYear: siteData.year,
            });
        } else {
            response.redirect('/login')
        }
    },
    // admin_authors: (request, response) => {
    //   if(request.isAuthenticated()){
    //     Author.find({}, (error, allAuthors) => {
    //       if(error){
    //         return error;
    //       } else {
    //         response.render('pages/adminAuthors', {
    //           copyrightYear: siteData.year,
    //           authorArray: allAuthors
    //         });
    //       }
    //     })
    //   } else {
    //     response.redirect('/login')
    //   }
    // },
    // create_author: (request, response) => {
    //   if(request.isAuthenticated()){
    //     response.render('pages/authorCreate', {
    //       copyrightYear: siteData.year,
    //     });
    //   } else {
    //     response.redirect('/login')
    //   }
    // },
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
    // author_update_get: (request, response) => {
    //   if(request.isAuthenticated()){
    //     const { _id } = request.params;
    //     Author.findOne({_id: _id}, (error, foundAuthor) => {
    //       if(error) {
    //         return error;
    //       } else {
    //         response.render('pages/updateAuthor', {
    //           copyrightYear: siteData.year,
    //           foundAuthor: foundAuthor
    //         });
    //       }
    //     });   
    //   } else {
    //     response.redirect('/login')
    //   }
    // }
}