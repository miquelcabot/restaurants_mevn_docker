const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TagSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Tags = mongoose.model('tags', TagSchema);

module.exports = Tags;