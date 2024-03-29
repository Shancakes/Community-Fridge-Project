
// const { name } = require('ejs');
const Post = require('../models/postModel');

module.exports = {

    all_post: (request, response) => {
        Post.find({}).sort({ date: -1 }).exec((error, allPosts) => {
            if (error) {
                return error;
            } else {
                const reversedPosts = [];
                for (let i = allPosts.length - 1; i >= 0; i--) {
                    reversedPosts.push(allPosts[i]);
                }
                response.render('pages/posts', {
                    inventoryArray: reversedPosts
                });

            }
        })
    },

    post_detail: (request, response) => {
        const { _id } = request.params;
        Post.findOne({ _id: _id }, (error, foundPosts) => {
            if (error) {
                return error;
            } else {
                response.render('pages/postDetail', {
                    inventoryItem: foundPosts
                });
            }
        })
    },

    post_create_post: (request, response) => {
        const { name, date, content } = request.body;
        const newPost = new Post({
            name: name,
            date: date,
            content: content
        });
        newPost.save();

        response.redirect("/location1");
    },

    post_update_put: (request, response) => {
        const { _id } = request.params;
        const { name, date, content } = request.body;
        Post.findByIdAndUpdate(_id, {
            $set: {
                name: name,
                date: date,
                content: content
            }
        }, { new: true }, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/location1');
            }
        })
    },

    post_delete: (request, response) => {
        const { _id } = request.params;
        Post.deleteOne({ _id: _id }, error => {
            if (error) {
                console.error(error);
                // Handle the error appropriately
            } else {
                response.sendStatus(200); // Sending a success status code
            }
        });
    },

    editPost_get: (request, response) => {
        const { _id } = request.params;
        Post.findOne({ _id: _id }, (error, foundPost) => {
            if (error) {
                console.error(error);
                // Handle the error appropriately
            } else {
                response.render('pages/editPost', {
                    inventoryItem: foundPost
                });
            }
        });
    }
}
