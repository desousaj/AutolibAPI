var models  = require('../models');
var express = require('express');
var router = express.Router();

/* Lister tous les véhicules selon leur disponibilité */
router.get('/vehicules', function (req, res) {
	if (req.query.dispo != undefined && (req.query.dispo.toUpperCase() == "LIBRE" || req.query.dispo.toUpperCase() == "OCCUPE")) {
        models.Vehicule.findAll({
            where: {Disponibilite: req.query.dispo.toUpperCase()},
            include:[{model:models.Type_vehicule}]
        }).then(function(data) {
            res.json({status:true,data: data});
        });
    } else {
    	models.Vehicule.findAll({
            include:[{model:models.Type_vehicule}]
    	}).then(function(data) {
           res.json({status:true,data: data});
       });
    }
});

/* Afficher le véhicule avec l'id correspondant */
router.get('/vehicules/:id', function (req, res) {
    models.Vehicule.findOne({
        where: {idVehicule: req.params.id},
        include:[{model:models.Type_vehicule}]
    }).then(function(data) {
        if (data == null){
            res.json({status:false,data: "Ce véhicule n'existe pas !! Entrez un id valide."});
        }else{
            res.json({status:true,data: data});
        }
    });
});

// Créer un nouveau véhicule
router.post('/vehicules', function (req, res) {
    var v = JSON.parse(JSON.stringify(req.body));
    // console.log(v);
    models.Vehicule.create({
        RFID: v.RFID,
        etatBatterie: v.etatBatterie,
        Disponibilite: v.Disponibilite,
        latitude: v.latitude,
        longitude: v.longitude,
        type_vehicule: v.idType_vehicule
    },{
        fields: ['idVehicule', 'RFID', 'etatBatterie', 'Disponibilite', 'latitude', 'longitude', 'type_vehicule']
    }).then(function() {
        console.log("lala");
        res.json({status:true, data: 'Véhicule enregistré.'})
    }).catch(function(e){
        console.log("lolo");
        res.json({status:false, data: 'Erreur: ' + e})
    });
});

// Mettre un véhicule à jour (cela peut être utilisé pour changer son état, ou le niveau de sa batterie)
router.put('/vehicules/:id', function (req, res) {

    models.Vehicule.findOne({
        where: {idVehicule: req.params.id},
    }).then(function(v) {
        if (v == null){
            res.json({status:false,v: "Ce véhicule n'existe pas !! Entrez un id valide."});
        }else{
            v.update({
                RFID: req.body.RFID,
                etatBatterie: req.body.etatBatterie,
                Disponibilite: req.body.Disponibilite,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                type_vehicule: req.body.idType_vehicule
            },{
                fields: ['RFID', 'etatBatterie', 'Disponibilite', 'latitude', 'longitude', 'type_vehicule']
            }).then(function() {
                res.json({status:true, data: 'Véhicule enregistré.'})
            });
        }
    });
});

// Supprimer un véhicule
router.delete('/vehicules/:id', function (req, res) {

    models.Vehicule.findOne({
        where: {idVehicule: req.params.id},
    }).then(function(v) {
        if (v == null){
            res.json({status:false,v: "Ce véhicule n'existe pas !! Entrez un id valide."});
        }else{
            v.destroy().then(function() {
                res.json({status:true, data: 'Véhicule supprimé.'})
            });
        }
    });
});

module.exports = router;
