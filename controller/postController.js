
// const { name } = require('ejs');
const Post = require('../models/postModel');

module.exports = {

    //I have the post array going to pages/posts, but I also want it to show on pages/location1
    all_post: (request, response) => {
        Post.find({}).sort({ date: -1 }).exec((error, allPosts) => {
            if (error) {
                return error;
            } else {
                response.render('pages/posts', {
                    inventoryArray: allPosts
                });
            }
        })

    },
    // all_post: (request, response) => {
    //     Post.find({}).sort({ date: -1 }).exec((error, allPosts) => {
    //         if (error) {
    //             return error;
    //         } else {
    //             const inventoryArray = [];

    //             // Populate inventoryArray with the necessary data
    //             allPosts.forEach(post => {
    //                 // Customize the data you want to include in the inventoryArray
    //                 const postData = {
    //                     name: post.name,
    //                     date: post.date,
    //                     content: post.content
    //                     // Add other properties as needed
    //                 };

    //                 inventoryArray.push(postData);
    //             });

    //             // response.render('pages/posts', {
    //             //     inventoryArray: inventoryArray
    //             // });

    //             response.render('pages/location1', {
    //                 inventoryArray: inventoryArray
    //             });
    //         }
    //     });
    // },

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
                return error;
            } else {
                response.redirect('/posts')
            }
        });
    }

}