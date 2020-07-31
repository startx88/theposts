const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Post Schema
const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String, required: true },
  comments: [{
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  }],
  active: { type: Boolean, default: true },
  insertAt: { type: Date, default: Date.now }
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})

// Export Schema
module.exports = mongoose.model('Post', postSchema);