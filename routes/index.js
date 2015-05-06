var express = require('express');
var router = express.Router();

var tweets = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/', function(req, res, next) {
  tweets.unshift(req.body.tweet);
  res.redirect('/')
});

module.exports = router;
