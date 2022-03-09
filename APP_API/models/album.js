const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tracks: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Album', albumSchema);
