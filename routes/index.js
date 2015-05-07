var express = require('express');
var router = express.Router();

var tweets = [];
var comments = [];

/* Pages */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

router.get('/minitwr', function(req, res, next) {
  res.render('minitwr', { title: 'Express', comments: comments });
});

router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'Express', tweets: tweets });
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

/* Tweets */

router.post('/', function(req, res, next) {
  tweets.unshift(req.body.tweet);
  res.redirect('/')
});

router.post('/favorites', function(req, res, next) {
  tweets.unshift(req.body.tweet);
  res.redirect('favorites')
});

/* Comments */

router.post('/minitwr', function(req, res, next) {
  comments.unshift(req.body.comment);
  res.redirect('minitwr')
});


module.exports = router;
