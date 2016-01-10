var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/stations', function(req, res) {
    models.Station.findAll({
       // attributes: ['idStation', 'adresse']
    }).then(function(data) {
        res.json({status:true,data: data});
    });
});

module.exports = router;