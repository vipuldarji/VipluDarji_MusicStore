// var express = require('express');
// var router = express.Router();
const request = require('request');
const fs = require('fs');
const apiOptions = {
  server: 'http://localhost:3000'
};

const songlist = (req, res) => {
  const path = '/api/song';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(requestOptions, (err, response, body) => {
    _renderHomePage(req, res, body);
  });
};

const _renderHomePage = (req, res, responseBody) => {
  res.render('list-display', {
    song: responseBody
  });
};

// Update
var renderUpdatePage = function (req, res, responseBody) {
  res.render('update', {
    title: 'Update Song',
    currentSong: responseBody
  });
};

var clickUpdateSong = function (req, res) {
  const path = '/api/song/' + req.params.songid;

  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };

  request(requestOptions, (err, response, body) => {
    renderUpdatePage(req, res, body);
  });
};

var updateSong = function (req, res) {
  const path = '/api/song/' + req.params.songid;
  const postdata = {
    artist_name: req.body.artist_name,
    track: req.body.track,
    genre: req.body.genre,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description
  };

  const requestOptions = {
    url: apiOptions.server + path,
    method: 'PUT',
    json: postdata
  };

  request(requestOptions, (err, response, body) => {
    if (response.statusCode === 200) {
      res.redirect('/list');
    }
  });
};

const _renderDetailPage = (req, res, responseBody) => {
  res.render('details', {
    currentSong: responseBody
  });
};

function requestFileCreation(req, res, cb) {
  let api_path = `/api/images`;

  let requestOptions = {
    url: `${apiOptions.server}${api_path}`,
    method: 'POST',
    qs: {},
    headers: {
      'Content-Type': req.file.mimetype
    },
    body: fs.readFileSync(path.resolve(req.file.path))
  };

  request(requestOptions, (err, { statusCode }, body) => {
    body = JSON.parse(body);
    if (statusCode !== 201) {
      res.render('create', { error: 'Failed. Try Again!' });
    } else {
      fs.unlink(path.resolve(req.file.path), (err) => {});
      cb(req, res, body.id);
    }
  });
}

const songInfo = (req, res) => {
  const path = `/api/song/${req.params.songid}`;
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(requestOptions, (err, response, body) => {
    _renderDetailPage(req, res, body);
  });
};

const _renderCreatePage = (req, res) => {
  res.render('create', {
    title: 'Create New Song'
  });
};

const addNewSong = (req, res) => {
  _renderCreatePage(req, res);
};

const doAddNewSong = (req, res) => {
  const path = '/api/song';
  const postdata = {
    artist_name: req.body.artist_name,
    track: req.body.track,
    genre: req.body.genre,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description
  };
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'POST',
    json: postdata
  };
  request(requestOptions, (err, response, body) => {
    if (response.statusCode === 201) {
      res.redirect('/list');
    }
  });
};

var deleteSong = function (req, res) {
  const path = '/api/song/' + req.params.songid;

  const requestOptions = {
    url: apiOptions.server + path,

    method: 'DELETE',

    json: {}
  };

  request(
    requestOptions,

    (err, response, body) => {
      if (response.statusCode === 204) {
        res.redirect('/list');
      }
    }
  );
};

// const renderMusicpage = (req, res, responseBody) => {
//   res.render('list-display', {
//     title: 'Remix - A place for you to play songs',
//     pageHeader: {
//       title: 'Remix',
//       strapline: 'Find a song to play while you are working'
//     },
//     music: responseBody
//   });
// };
//
// const music = (req, res) => {
//   const path = '/api/song';
//   const requestOptions = {
//     url: `${apiOptions.server}${path}`,
//     method: 'GET',
//     json: {}
//   };
//   request(requestOptions, (err, response, body) => {
//     renderMusicpage(req, res, body);
//   });
// };

module.exports = {
  songInfo,
  songlist,
  doAddNewSong,
  addNewSong,
  requestFileCreation,
  updateSong,
  clickUpdateSong,
  deleteSong
};
