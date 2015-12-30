var express = require('express');
var router = express.Router();
var db = require("../services/db.js");

/* Lister tous les véhicules selon leur disponibilité */
router.get('/vehicules', function (req, res) {
	if (req.query.dispo != undefined && (req.query.dispo.toUpperCase() == "LIBRE" || req.query.dispo.toUpperCase() == "OCCUPE")) {
		db.execute_query(req, res, "select * from vehicule v where v.Disponibilite = '" + req.query.dispo.toUpperCase() + "'");
	} else {
		db.execute_query(req, res, "select * from vehicule");
	}
});

/* Afficher le véhicule avec l'id correspondant */
router.get('/vehicules/:id', function (req, res) {
    db.execute_query(req, res, "select * from vehicule v where v.idVehicule = '" + req.params.id + "'");
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
