var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Animales = require('../models/animals');

router.get('/', function(req, res, next){
Animales.find({},function(err,datos){
    res.status(200).json(datos);
      });

});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var anima=  Animales({
    id: req.body.id,
    especie:req.body.especie,
    tipo:req.body.tipo
  });

  compu.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.send(data);
    }
  });

});

module.exports = router;

