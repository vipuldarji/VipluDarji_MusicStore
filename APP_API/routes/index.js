const express = require('express');
const router = express.Router();
const ctrlSongs = require('../controllers/songs');

router.route('/song').get(ctrlSongs.songsList).post(ctrlSongs.createSong);

router
  .route('/song/:songid')
  .get(ctrlSongs.getSong)
  .put(ctrlSongs.updateSong)
  .delete(ctrlSongs.deleteSong);

module.exports = router;
