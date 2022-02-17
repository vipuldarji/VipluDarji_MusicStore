var express = require('express');
var router = express.Router();

const listRouter = require('../controllers/list');
const aboutRouter = require('../controllers/about');
var multer = require('multer');
var upload = multer({ dest: 'public/images/', preservePath: true });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'The Music Store' });
});

router.get('/about', aboutRouter.about);
router.get('/list', listRouter.songlist);
router.get('/details/:songid', listRouter.songInfo);



// router.post('/uploadsong', upload.single('image'), listRouter.doAddNewSong);

router
  .route('/create')
  .get(listRouter.addNewSong)
  .post(listRouter.doAddNewSong);

router.get('/display', function (req, res, next) {
  res.render('display', { title: 'Display' });
});

module.exports = router;
