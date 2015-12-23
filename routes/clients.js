var express = require('express');
var router = express.Router();
var db = require("../services/db.js");


/* GET home page. */
router.get('/clients', function (req, res) {
    db.execute_query(req, res, "select * from client");
});

router.get('/client/:id', function (req, res) {
    db.execute_query(req, res, "select * from client c where c.id = '" + req.params.id + "'");
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
