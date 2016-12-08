var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var mysql     =    require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'OGLOSZENIOWA',
    debug    :  false
});

function callAjax(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function handle_database(req,res,what) {
    var alike = req.query.q;
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }

        console.log('connected as id ' + connection.threadId);
        var dBquery = '';
        if (what == 'ogloszenie')  dBquery = "select * from ogloszenie";
        else if (what == 'kategoria') dBquery = "select * from kategoria";

        dBquery += " where lower(name) like lower('%" + alike + "%')";

        connection.query(dBquery, function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/test', function (req, res) {
  res.send('Witaj na stronie NodeJS Express!');
});

app.use('/', express.static('home_page'));
app.use('/login', express.static('login_page'));

app.get('/search', function(req,res) {
    handle_database(req,res,'ogloszenie')
});



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});