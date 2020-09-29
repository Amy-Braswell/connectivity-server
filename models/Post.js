const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  name: String,
  userId: String,
  picture: String,
  relation: String,
  createdAt: String,
  comments: [
    {
      body: String,
      picture: String,
      name: String,
      createdAt: String
    }
  ],
  likes: [
    {
      name: String,
      createdAt: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);