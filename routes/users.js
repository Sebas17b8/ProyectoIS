var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
	User.find({}, function(err, datos){
  		res.send('respond with a resource');
	});

});

router.get('/:userId', function(req,res,next){
	User.findOne({
		'id': req.params.userId
	}, function(err, datos){
		if(datos == null){
			res.status(404).json({
				mensaje: "No existe"
			});	
		}else{
			res.status(200).json(datos);
		}
	});
});

module.exports = router;
