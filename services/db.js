exports.execute_query = function(req, res, query) {    
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'autolib'
    });
    
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ...");    
        } else {
            console.log("Error connecting database ...");    
        }
    });    

    connection.query(query,function(err,rows, fields){
              if (!err){
                res.json({error : false, data : rows});      
              }else{
                res.status(500).json({error : true, data : err});   
              }
    });

    connection.on('error', function(err) {  
                      res.json({"code" : 100, "status" : "Error in connection database"});

              return;     
    });    
    connection.end();
    return;

}