var express = require('express');
var router = express.Router();

var tweets = [];
var comments = [];
var previousTweet = {};
var previousComment = {};

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
	if (req.body.tweet.trim() == "") {
		res.redirect('/');
		return;
	}
	var date = new Date().getTime();
	if (previousTweet == {}) {
		previousTweet = {text: req.body.tweet, date: date};
		tweets.unshift({
				text: req.body.tweet,
				date: date
		});
	} else {
		if (previousTweet.text != req.body.tweet) {
			previousTweet = {text: req.body.tweet, date: date};
			tweets.unshift({
					text: req.body.tweet,
					date: date
			});
		}
	}

	res.redirect('/');
});

router.post('/favorites', function(req, res, next) {
	if (req.body.tweet.trim() == "") {
		res.redirect('favorites');
		return;
	}
	var date = new Date().getTime();
	if (previousTweet == {}) {
		previousTweet = {text: req.body.tweet, date: date};
		tweets.unshift({
				text: req.body.tweet,
				date: date
		});
	} else {
		if (previousTweet.text != req.body.tweet) {
			previousTweet = {text: req.body.tweet, date: date};
			tweets.unshift({
					text: req.body.tweet,
					date: date
			});
		}
	}

	res.redirect('favorites');
});

/* Comments */

router.post('/minitwr', function(req, res, next) {
	if (req.body.comment.trim() == "") {
		res.redirect('minitwr');
		return;
	}
	var date = new Date().getTime();
	if (previousComment == {}) {
		previousComment = {text: req.body.comment, date: date};
		comments.unshift({
				text: req.body.comment,
				date: date
		});
	} else {
		if (previousComment.text != req.body.comment) {
			previousComment = {text: req.body.comment, date: date};
			comments.unshift({
					text: req.body.comment,
					date: date
			});
		}
	}

	res.redirect('minitwr');
});

module.exports = router;
