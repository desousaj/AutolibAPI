var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/stations', function(req, res) {
    models.Station.findAll({
        attributes: ['idStation', 'latitude', 'longitude', 'adresse', 'numero', 'ville', 'code_postal']
    }).then(function(data) {
        res.json({status:true,data: data});
    });
});

module.exports = router;