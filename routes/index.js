var express = require('express');
var router = express.Router();
var db = require("../services/db.js");

/* GET home page. */
router.get('/', function (req, res) {
    res.send("Page d'accueil!");
});


module.exports = router;