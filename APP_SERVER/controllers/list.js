var express = require('express');
var router = express.Router();

const books = [
  {
    title: 'Subtle Things',
    author: 'Marian Hill',
    src: '/images/Subtle Things.jpg',
  },
  { title: 'DIGGYDOWN', author: 'Marian Hill', src: '/images/Diggydown.jpg' },
  { title: 'Red Lips', author: 'Camila Cabello', src: '/images/Havana.jpg' },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('list-display', { title: 'Books', books });
});

module.exports = router;
