
// // const siteData = require('../data/siteData');
// const postData = require('../data/postData');

// module.exports = {
//     all_post: (request, response) => {
//         Post.find({}, (error, allPost) => {
//             if (error) {
//                 return error;
//             } else {
//                 response.render('views/post', {
//                     copyrightYear: siteData.year,
//                     inventoryArray: allPosts
//                 });
//             }
//         })
//     },
//     post_detail: (request, response) => {
//         const { _id } = request.params;
//         Post.findOne({ _id: _id }, (error, foundPost) => {
//             if (error) {
//                 return error;
//             } else {
//                 response.render('pages/postDetail', {
//                     copyrightYear: siteData.year,
//                     inventoryItem: foundPost
//                 });
//             }
//         })
//     },
//     post_create_post: (request, response) => {
//         const { title, author, price, starRating, synopsis } = request.body;
//         const newPost = new Post({
//             title: title,
//             author: author,
//             price: price,
//             starRating: starRating,
//             synopsis: synopsis
//         });

//         newPost.save();

//         response.redirect("/admin/admin-posts");
//     },
//     post_update_put: (request, response) => {
//         const { _id } = request.params;

//         const { title, author, price, starRating, synopsis } = request.body;

//         Post.findByIdAndUpdate(_id, {
//             $set: {
//                 title: title,
//                 author: author,
//                 price: price,
//                 starRating: starRating,
//                 synopsis: synopsis
//             }
//         }, { new: true }, error => {
//             if (error) {
//                 return error;
//             } else {
//                 response.redirect('/admin/admin-posts');
//             }
//         })
//     },
//     post_delete: (request, response) => {
//         const { _id } = request.params;
//         Post.deleteOne({ _id: _id }, error => {
//             if (error) {
//                 return error;
//             } else {
//                 response.redirect('/admin/admin-posts')
//             }
//         });
//     }
// }