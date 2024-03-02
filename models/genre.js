const mongoose = require('mongoose');
const { Schema } = mongoose;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// Declare virtual for Genre Schema to get url
GenreSchema.virtual('url').get(function () {
  // not using arrow function to keep this value
  return `/catalog/genre/${this._id}`;
});

// Export module
module.exports = mongoose.model('Genre', GenreSchema);
