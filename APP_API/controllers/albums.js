const mongoose = require('mongoose');
const album = mongoose.model('Album');

const albumsList = (req, res) => {
  album.find().exec((err, albumdata) => {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(200).json(albumdata);
  });
};

const createAlbum = (req, res) => {
  // console.log("hiii");
  let { name, tracks, genre, description, image } = req.body;

  console.log('req.body', req.body);
  if (!name || !tracks || !genre) {
    return res.status(400).json({ message: 'All Fields required' });
  }

  album.create(
    {
      name,
      tracks,
      genre,
      description,
      image
    },
    (err, albumdata) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(albumdata);
      }
    }
  );
};
//
const getAlbum = (req, res) => {
  album.findById(req.params.albumid).exec((err, albumdata) => {
    if (!albumdata) {
      return res.status(404).json({
        message: 'Message not found'
      });
    } else if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(albumdata);
  });
};

const updateAlbum = function (req, res) {
  if (!req.params.albumid) {
    res.status(404).json({
      message: 'Songid is required.'
    });

    return;
  }

  album.findById(req.params.albumid).exec((err, albumdata) => {
    if (!albumdata) {
      res.status(404).json({
        message: 'songid not found.'
      });

      return;
    } else if (err) {
      res.status(400).json(err);
      return;
    }
    albumdata.name = req.body.name;
    albumdata.tracks = req.body.tracks;
    albumdata.genre = req.body.genre;
    albumdata.description = req.body.description;
    albumdata.image = req.body.image;
    albumdata.save((err, albumdata) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(albumdata);
      }
    });
  });
};
const deleteAlbum = (req, res) => {
  const albumid = req.params.albumid;

  if (albumid) {
    album.findByIdAndRemove(albumid).exec((err, albumdata) => {
      if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(204).json(null);
    });
  } else {
    res.status(404).json({ message: 'No songid' });
  }
};

module.exports = {
  albumsList,
  createAlbum,
  getAlbum,
  deleteAlbum,
  updateAlbum
};
