var models = require('../models');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/clients', function (req, res) {
    models.Client.findAll({
        // attributes: ['idStation', 'adresse']
    }).then(function (data) {
        res.json({status: true, data: data});
    });
});

router.get('/clients/:id', function (req, res) {
    // search for known ids
    models.Client.findById(req.params.id).then(function (data) {
        if (data != null || data != undefined) {
            res.json({status: true, data: data});
        } else {
            res.json({status: false, data: null});
        }
    });
});

router.post('/client', function (req, res) {
    var client1 = JSON.parse(JSON.stringify(req.body));
    models.Client.create({
        idClient: null,
        nom: client1.nom,
        prenom: client1.prenom,
        date_naissance: new Date(client1.date_naissance)
    }, {
        fields: ['idClient', 'nom', 'prenom', 'date_naissance']
    }).then(function (client) {
        console.log("finrenfr" + client);
        res.json({status: true, data: client});
    });
});

router.put('/client', function (req, res) {

});

router.delete('/client', function (req, res) {
    res.send('Got a DELETE request at /user');
});

module.exports = router;
