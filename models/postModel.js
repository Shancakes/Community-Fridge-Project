//DONT TOUCH (for now, without consulting a TF first about radio buttons)
const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Please type your name.'],
        min: [2, 'Please type your full name.'],
        max: [100, 'Please use less than 100 characters.']
    },
    //change the key to another key, if not using radio buttons.
    //Kits rec is to use a textarea and have the user type in the info instead.
    rad1: {
        type: String,
    },
    rad2: {
        type: String,
    },
    date: {
        type: Date,
        // default: () => new Date()
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