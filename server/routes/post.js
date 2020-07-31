const route = require('express').Router();
const { body } = require('express-validator')
const postController = require('../controllers/post');


// get posts route
route.get('/', postController.getPosts);

// get post route
route.get('/:postId', postController.getPost);

// add / update post
route.post('/:postId?', postController.addUpdatePosts);

// delete post
route.post('/:postId/comment', postController.addComment);

// delete post
route.delete('/:postId', postController.deletePost);

// delete post
route.delete('/:postId/comment/:commentId', postController.deleteComment);


// Exports 
module.exports = route