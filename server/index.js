const express = require('express');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

// Database connection

const dbStart = async (cb) => {
  try {
    await mongoose.connect('mongodb://mongo:27017/theposts', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    console.log('DATABASE CONNECTED!')
    cb()
  } catch (err) {
    console.log('Database connection error', err)
  }
}

// App
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const postRoute = require('./routes/post');
app.use('/posts', postRoute);
//const posts = {}
// // Routes
// app.get('/posts/:id', (req, res) => {
//   const id = req.params.id;
//   res.status(200).json({
//     message: "Post Fetched",
//     data: posts[id]
//   })
// })

// app.get('/posts', (req, res) => {
//   res.status(200).json({
//     message: 'All Posts',
//     data: posts
//   })
// })

// app.post('/posts/delete/:id', (req, res) => {
//   const id = req.params.id;
//   delete posts[id];
//   res.status(200).json({
//     message: "Post Deleted",
//     data: posts[id]
//   })
// })

// app.post('/posts/:id?', (req, res) => {
//   const postId = req.params.id;
//   const { title, body, image } = req.body;
//   if (postId) {
//     const post = posts[postId];
//     post.title = title;
//     post.body = body;
//     post.image = image;
//     res.status(201).json({
//       message: "Post Updated",
//       data: posts[postId]
//     })
//   } else {
//     const id = uuidv4()
//     posts[id] = {
//       id,
//       title,
//       body,
//       image
//     }
//     res.status(201).json({
//       message: "PostCreated",
//       data: posts[id]
//     })
//   }
// })


// Error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.statusCode = 404;
  next(error);
})

app.use((error, req, res, next) => {
  return res.status(error.statusCode | 500).json({
    errors: {
      message: error.message,
      status: error.statusCode
    }
  })
});

// Server
dbStart(() => {
  app.listen(PORT, () => {
    console.log('Server is running...', PORT)
  })
})