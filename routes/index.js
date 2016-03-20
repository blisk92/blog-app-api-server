var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var blogPost = require('../models/BlogPost');

//Get all BlogPost elements excluding DRAFTS
router.get('/', function(req, res, next) {
	blogPost.find({draft:"false"},{title:1, updated_at: 1}, function(err, posts) {
		if(err) return next(err);
		res.json(posts);
	});
});

router.get('/drafts', function(req, res, next) {
	blogPost.find({draft:"true"}, {title:1, updated_at:1}, function(err, posts) {
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
	blogPost.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
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
