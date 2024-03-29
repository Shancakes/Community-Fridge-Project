//DONT TOUCH (for now, without consulting a TF first about radio buttons)
const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({

    name: {
        type: String,

    },

    date: {
        type: Date,
        date: new Date().toLocaleDateString()
    },

    content: {
        type: String,
        required: [true, 'Text is required.'],
        minlength: [5, 'Please type more content, we love to hear from you!'],
        maxlength: [300, 'Max length is 300 characters.']
    }

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;