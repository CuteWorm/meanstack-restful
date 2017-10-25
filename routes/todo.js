var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

// GET ALL
router.get('/', function(req, res, next) {
  Todo.find(function(err, todos){
  	if (err) return next(err);
  	res.json(todos);
  });
});

// GET BY ID
router.get('/:id', function(req, res, next){
	Todo.findById(req.params.id, function(err, todo){
		if (err) return next(err);

		res.json(todo);
	});
});

// POST 
router.post('/', function(req, res, next){
	Todo.create(req.body, function(err, todo){
		if (err)return next(err);
		res.json(todo);
	});
});

// PUT
router.put('/:id', function(req, res, next){
	Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo){
		if (err) return next(err);
		res.json(todo);
	});
});

// DELETE
router.delete('/:id', function(req, res, next){
	Todo.findByIdAndRemove(req.params.id, req.body, function(err, todo){
		if (err) return next(err);
		res.json(todo);
	});
});

module.exports = router;
