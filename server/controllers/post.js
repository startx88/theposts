const Post = require('../models/post');
const { validationResult } = require('express-validator');

// Get all posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().select('-__v');
    return res.status(200).json({
      message: "All Posts",
      data: posts
    })
  } catch (err) {
    console.log(err)
    next(err)
  }

}


// Get all posts
exports.getPost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId)
    return res.status(200).json({
      message: "Fetch Post",
      data: post
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}


// Add Posts
exports.addUpdatePosts = async (req, res, next) => {
  try {
    const postId = req.params.postId;

    // Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 400;
      throw next(error);
    }

    const { title, image, body } = req.body;
    const isPost = await Post.findById(postId);
    if (isPost) {
      isPost.title = title;
      isPost.image = image;
      isPost.body = body;
      await isPost.save();
      return res.status(200).json({
        message: "Post Updated",
        postId: postId,
        data: isPost
      })
    } else {
      const post = new Post({
        title,
        image,
        body
      });
      await post.save();
      return res.status(201).json({
        message: "Post Created",
        data: post
      })
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
}

// Post Deleted
exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      const error = new Error("Post not existed");
      error.statusCode = 404;
      throw next(error);
    }

    await post.remove();
    return res.status(200).json({
      message: "Post deleted",
      postId: postId,
      data: post
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}


// Add Comment
exports.addComment = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    const { name, email, message } = req.body;

    if (!post) {
      const error = new Error("Post not existed");
      error.statusCode = 404;
      throw next(error);
    }

    post.comments.push({
      name,
      email,
      message
    })

    await post.save();
    return res.status(201).json({
      message: "Comment added",
      postId: postId,
      data: post
    })

  } catch (err) {
    console.log(err)
    next(err)
  }
}

// Delete Comment
exports.deleteComment = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const post = await Post.findById(postId);
    if (!post) {
      const error = new Error("Post not existed");
      error.statusCode = 404;
      throw next(error);
    }

    post.comments.pull(commentId);

    await post.save();

    return res.status(200).json({
      message: "Comment deleted",
      postId: postId,
      data: post
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}