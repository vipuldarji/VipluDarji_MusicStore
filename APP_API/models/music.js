const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  artist: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  reviewText: String,
});

const musicSchema = new mongoose.Schema({
  artist_name: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  reviews: [reviewSchema],
});

mongoose.model('Music', musicSchema);
