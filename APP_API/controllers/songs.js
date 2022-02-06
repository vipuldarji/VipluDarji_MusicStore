const mongoose = require('mongoose');
// const Music = mongoose.model('Music');

const songsList = (req, res) => {
  res.status(200).json({ message: 'Success' });
};

const createSong = (req, res) => {
  res.status(200).json({ message: 'Success' });
};

const getSong = (req, res) => {
  res.status(200).json({ message: 'YOO Song Found' });
};

const updateSong = (req, res) => {
  res.status(200).json({ message: 'Success' });
};

const deleteSong = (req, res) => {
  res.status(200).json({ message: 'Success' });
};

module.exports = {
  songsList,
  createSong,
  getSong,
  deleteSong,
  updateSong,
};
