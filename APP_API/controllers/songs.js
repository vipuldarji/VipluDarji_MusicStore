const mongoose = require('mongoose');
const Song = mongoose.model('Music');

//
const songsList = (req, res) => {
  Song.find().exec((err, songdata) => {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(200).json(songdata);
  });
  //res.status(200).json({ message: 'Success' });
};

//
const createSong = (req, res) => {
  let { artist_name, track, genre, price, image, description, createdOn } =
    req.body;

  if (!artist_name || !track || !genre || !price) {
    return res.status(400).json({ message: 'All Fields required' });
  }

  // if (image) {
  //   image = mongoose.Types.ObjectId(image);
  // }

  Song.create(
    {
      artist_name,
      track,
      genre,
      price,
      image,
      description,
      createdOn
    },
    (err, songdata) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(songdata);
      }
    }
  );
  //res.status(200).json({ message: 'Success' });
};
//
const getSong = (req, res) => {
  Song.findById(req.params.songid).exec((err, songdata) => {
    if (!songdata) {
      return res.status(404).json({
        message: 'Message not found'
      });
    } else if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(songdata);
  });
  //res.status(200).json({ "message": 'YOO Song Found' });
};

const updateSong = (req, res) => {
  if (!req.params.songid) {
    res.status(404).json({
      message: 'Not found, songid is required'
    });
    return;
  }
  Song.findById(req.params.songid).exec((err, songdata) => {
    if (!songdata) {
      res.status(404).json({
        message: 'songid not found'
      });
      return;
    } else if (err) {
      res.status(400).json(err);
      return;
    }

    songdata.artist_name = req.body.artist_name;
    songdata.track = req.body.track;
    songdata.genre = req.body.genre;
    songdata.price = req.body.price;
    songdata.image = req.body.image;

    songdata.save((err, songdata) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(songdata);
      }
    });
  });
  // res.status(200).json({ message: 'Success' });
};

const deleteSong = (req, res) => {
  const songid = req.params.songid;

  if (songid) {
    Song.findByIdAndRemove(songid).exec((err, songdata) => {
      if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(204).json(null);
    });
  } else {
    res.status(404).json({ message: 'No songid' });
  }
  //res.status(200).json({ message: 'Success' });
};

module.exports = {
  songsList,
  createSong,
  getSong,
  deleteSong,
  updateSong
};
