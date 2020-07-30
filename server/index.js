const express = require('express');
const { v4: uuidv4 } = require('uuid');
//const mongoose = require('mongoose');

// Database connection
// const URL = `mongod://localhost:27017/${process.env.DATABASE}`
// const dbStart = async (cb) => {
//   try {
//     await mongoose.connect(URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
//     console.log('DATABASE CONNECTED!')
//     cb()
//   } catch (err) {
//     console.log('Database connection error', err)
//   }
// }

// App
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = {}
// Routes
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Post Fetched",
    data: posts[id]
  })
})

app.get('/posts', (req, res) => {
  res.status(200).json({
    message: 'All Posts',
    data: posts
  })
})

app.post('/posts/delete/:id', (req, res) => {
  const id = req.params.id;
  delete posts[id];
  res.status(200).json({
    message: "Post Deleted",
    data: posts[id]
  })
})

app.post('/posts/:id?', (req, res) => {
  const postId = req.params.id;
  const { title, body, image } = req.body;
  if (postId) {
    const post = posts[postId];
    post.title = title;
    post.body = body;
    post.image = image;
    res.status(201).json({
      message: "Post Updated",
      data: posts[postId]
    })
  } else {
    const id = uuidv4()
    posts[id] = {
      id,
      title,
      body,
      image
    }
    res.status(201).json({
      message: "PostCreated",
      data: posts[id]
    })
  }
})

// Server
// dbStart(() => {
// })
app.listen(PORT, () => {
  console.log('Server is running...', PORT)
})