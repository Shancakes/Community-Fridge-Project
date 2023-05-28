

const data = require("../data/data");


//***method override needing to add in code to create update delete posts***
module.exports = {

    usernameGet: (request, response) => {
        //when request is sent, grabs the specific ID of the username that we are looking for
        const id = request.params._id
        //looking into our data file to find the specific book ID for the details we want
        //ID turned into a string so we can use it, capturing specific ID :)
        const post = data.find(post => post._id === String(id))
        response.render("pages/post", {
            //this is what the data of the post is created on the page
            data: post
        })
    },

    postCreate: (request, response) => {
        const {
            content
        } = request.body;
        const newPost = new Post({
            post: post
        });
        newPost.save();
        response.redirect("/admin-console");
    },

    postUpdate: (request, response) => {
        const { _id } = request.params;
        const { post } =
            request.body;
        Comic.findByIdAndUpdate(
            _id,
            {
                $set: {
                    // title: title,
                    // author: author,
                    // publisher: publisher,
                    // genre: genre,
                    // pages: pages,
                    // rating: rating,
                    // synopsis: synopsis,
                    // image: image,
                },
            },
            { new: true },
            (error) => {
                if (error) {
                    return error;
                } else {
                    response.redirect("/admin-console");
                }
            }
        );
    },
    postDelete: (request, response) => {
        const { id } = request.params;
        const foundPost = data.find((post) => post._id === String(id));
        const index = data.indexOf(foundPost);
        data.splice(index, 1);
        response.redirect("/admin-console");
    }
};




