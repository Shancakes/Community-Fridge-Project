// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const postSchema = new Schema({
//     postText: {
//         type: String,
//         required: [true, 'A first name is required.'],
//         minlength: [5, 'Minimun length for a post is 5 characters.'],
//         maxlength: [300, 'Maximum length for a post is 300 characters.']
//     }
//     // author: {
//     //     type: String,
//     //     required: [true, 'The author\'s name is required.'],
//     //     minlength: [5, 'Minimun length for the author\'s name is 5 characters.']
//     // },
//     // price: {
//     //     type: Number,
//     //     required: [true, 'The price is required.'],
//     //     min: [1, 'Minimun price is 1']
//     // },
//     // starRating: {
//     //     type: Number,
//     //     required: [true, 'The price is required.'],
//     //     min: [1, 'Minimun number of star rating is 1']
//     // },
//     // synopsis: {
//     //     type: String,
//     // }
// });

// const Post = mongoose.model('Post', postSchema);

// module.exports = Post;