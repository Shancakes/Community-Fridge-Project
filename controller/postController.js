
// const { name } = require('ejs');
const Post = require('../models/postModel');

module.exports = {

    all_post: (request, response) => {
        Post.find({}, (error, allPosts) => {
            if (error) {
                return error;
            } else {
                response.render('pages/posts', {
                    inventoryArray: allPosts
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
        const { name, rad1, rad2, date, content } = request.body;
        const newPost = new Post({
            name: name,
            rad1: rad1,
            rad2: rad2,
            date: date,
            content: content
        });

        newPost.save();

        response.redirect("/location1");

    },
    post_update_put: (request, response) => {
        const { _id } = request.params;

        const { name, rad1, rad2, date, content } = request.body;

        Post.findByIdAndUpdate(_id, {
            $set: {
                name: name,
                rad1: rad1,
                rad2: rad2,
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