var models  = require('../models');
var express = require('express');
var jwt = require ('jsonwebtoken');
var router  = express.Router();

router.post('/authenticate', function (req, res) {
    models.Client.findOne({
        where: {nom: req.body.login, prenom: req.body.password}
    }).then(function(data) {
        if (data == null){
            res.json({status:false,data: "Oops... Authentication failed. Please, try again."});
        }else{
            // create a token
            var token = jwt.sign({idClient:data.idClient, nom:data.nom, prenom:data.prenom}, 'gauffre', {
                expiresInMinutes: 1440 // expires in 24 hours
            });
            res.json({status:true,data: 'Enjoy your token!', token: token});
        }
    });
});

module.exports = router;
