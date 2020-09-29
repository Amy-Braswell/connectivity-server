const { model, Schema } = require('mongoose');

const bannerSchema = new Schema({
  banner: String,
  createdAt: String,
});

module.exports = model('Banner', bannerSchema);