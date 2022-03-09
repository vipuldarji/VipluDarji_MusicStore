var express = require('express');
var router = express.Router();

const ctrlSong = require('../controllers/songs');
const ctrlAlbum = require("../controllers/albums");

router.get('/song', ctrlSong.songsList);
router.get('/song/:songid', ctrlSong.getSong);
router.delete('/song/:songid', ctrlSong.deleteSong);
router.put('/song/:songid', ctrlSong.updateSong);
router.post('/song', ctrlSong.createSong);

router.get('/album', ctrlAlbum.albumsList);
router.get('/album/:albumid', ctrlAlbum.getAlbum);
router.delete('/album/:albumid', ctrlAlbum.deleteAlbum);
router.put('/album/:albumid', ctrlAlbum.updateAlbum);
router.post('/album', ctrlAlbum.createAlbum);

module.exports = router;

// songsList, createSong, getSong, deleteSong, updateSong;

// const express = require('express');
// const router = express.Router();
// const ctrlSongs = require('../controllers/songs');
//
// router.route('/song').get(ctrlSongs.songsList).post(ctrlSongs.createSong);
//
// router.put('/song/:songid', ctrlSongs.updateSong);
//
// router
//   .route('/song/:songid')
//   .get(ctrlSongs.getSong)
//   .put(ctrlSongs.updateSong)
//   .delete(ctrlSongs.deleteSong);
//
// module.exports = router;
