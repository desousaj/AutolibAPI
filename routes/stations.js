var express = require('express');
var router = express.Router();
var db = require("../services/db.js");


/* GET home page. */
router.get('/stations', function (req, res) {
    db.execute_query(req, res, "select * from station");
});

module.exports = router;
