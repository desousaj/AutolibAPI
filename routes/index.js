var express = require('express');
var router = express.Router();
var db = require("../services/db.js");


/* GET home page. */
router.get('/', function(req, res, next) {
     db.execute_query(req, res, "select * from client c where c.nom = 'LANGRAND'");    
});

router.get('/lists', function(req, res, next) {
    db.execute_query(req, res, "select * from client");    
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
});

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
