var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/reservations', function (req, res) {
 // console.log(req.decoded.idClient);
    var d = new Date();

    models.Reservation.create({
        vehicule: req.query.idVehicule,
        client: req.decoded.idClient,
        date_reservation: d,
        date_echeance: new Date(d.getTime() + 1 *24*60*60*1000)
    },{
        fields: ['vehicule', 'client', 'date_reservation', 'date_echeance']
    }).then(function() {
        res.json({status:true, data: 'Hell yeah! See you soon! ;)'})
    })
});

module.exports = router;
