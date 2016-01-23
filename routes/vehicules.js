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

/* Mettre un véhicule à jour (cela peut être utilisé pour changer son état, ou le niveau de sa batterie)
	Faire une fonction pour chaque modification possible (position, batterie, disponibilité) ??
    */
//router.put('/vehicule/', function (req, res) {
	//console.log(req)
  //  db.execute_query(req, res, "update vehicule SET TRF_PETIT_DEJEUNE = TRF_PETIT_DEJEUNE * 1.15
//where v.id = '" + req.params.id + "'");
//});

module.exports = router;
