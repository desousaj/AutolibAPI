var models  = require('../models');
var express = require('express');
var router  = express.Router();


/* GET home page. */
router.get('/clients', function (req, res) {
    models.Client.findAll({
        // attributes: ['idStation', 'adresse']
    }).then(function(data) {
        res.json({status:true,data: data});
    });
});

router.get('/client/:id', function (req, res) {
    // search for known ids
    models.Client.findById(req.params.id).then(function(data) {
        if(data != null || data != undefined){
            res.json({status:true,data: data});
        }else{
            res.json({status:false,data: null});
        }
    });
});

router.post('/client', function (req, res) {
    console.log(req.body);
    console.log("id : "+req.body.id);
    res.send('Got a POST request');
});

router.put('/client', function (req, res) {
    res.send('Got a PUT request at /user');
});

router.delete('/client', function (req, res) {
    res.send('Got a DELETE request at /user');
});

module.exports = router;
