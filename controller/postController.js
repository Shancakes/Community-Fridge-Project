
// const { name } = require('ejs');
const Post = require('../data/siteData');

module.exports = {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
    // Is the request supposed to be read? or is this ok? //
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
    all_post: (request, response) => {
        Post.find({}, (error, allPosts) => {
            if (error) {
                return error;
            } else {
                response.render('pages/posts', {
                    // copyrightYear: Data.year,
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

                });
            }
        })
    },
    post_create_post: (request, response) => {
        const { name, rad1, rad2, content } = request.body;
        const newPost = new Post({
            name: name,
            rad1: rad1,
            rad2: rad2,
            // date: date,
            content: content
        });

        newPost.save();

        //redirects to alert the creator your post has been made

        //!!!!!!!!!!!!!!!!!!!!!!
        // is this how you both give an alert the post was made and refresh the page?
        //!!!!!!!!!!!!!!!!!!!
        response.redirect("/admin/admin-posts");
        response.alert('Your post has been made!');
    },
    post_update_put: (request, response) => {
        const { _id } = request.params;

        const { name, rad1, rad2, content } = request.body;

        Post.findByIdAndUpdate(_id, {
            $set: {
                name: name,
                rad1: rad1,
                rad2: rad2,
                // date: date,
                content: content
            }
        }, { new: true }, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/admin-posts');
            }
        })
    },
    post_delete: (request, response) => {
        const { _id } = request.params;
        Post.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                response.redirect('/admin/admin-posts')
            }
        });
    }
}