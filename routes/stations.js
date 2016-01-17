var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/stations', function(req, res) {
    models.Station.findAll({
    }).then(function(data) {
        res.json({status:true,data: data});
    });
});

router.get('/stations/:station_id', function(req, res) {
    models.Station.findOne({
        where: {idStation: req.params.station_id},
        include:[{model:models.Borne}]
    }).then(function(data) {
        if (data == null){
            res.json({status:false,data: "Oops... Make sure you entered a valid station!"});
        }else{
            res.json({status:true,data: data});
        }
    });
});


module.exports = router;