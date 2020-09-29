const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
  about: String,
  city: String,
  state: String,
  picture: String,
  banner: String,
  relation: String,
  token: String,
  createdAt: String
});

module.exports = model('User', userSchema);


