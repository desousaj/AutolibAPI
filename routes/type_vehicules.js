var models  = require('../models');
var express = require('express');
var router = express.Router();

/* Lister tous les types véhicules */
router.get('/type_vehicules', function (req, res) {
    models.Type_vehicule.findAll().then(function(data) {
     res.json({status:true,data: data});
 });
});

module.exports = router;
