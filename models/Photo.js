const { model, Schema } = require('mongoose');

const photoSchema = new Schema({
  picture: String,
  createdAt: String,
});

module.exports = model('Photo', photoSchema);

