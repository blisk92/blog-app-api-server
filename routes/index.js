var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var blogPost = require('../models/BlogPost');

//Get all BlogPost elements
router.get('/', function(req, res, next) {
	blogPost.find({},{title:1, updated_at: 1}, function(err, posts) {
		if(err) return next(err);
		res.json(posts);
	});
});

//POST blog article
router.post('/', function(req, res, next) {
	blogPost.create(req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

//GET article by id
router.get('/:id',function(req, res, next) {
	blogPost.findById(req.params.id, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

//PUT update article by id
router.put('/:id', function(req, res, next){
	blogPost.findyByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

//DELETE an article
router.delete('/:id', function(req, res, next) {
	blogPost.findByIdAndRemove(req.params.id, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

module.exports = router;
