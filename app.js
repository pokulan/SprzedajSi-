var bodyParser  = require('body-parser');
var express     = require('express');
var ejs         = require('ejs');
var fs          = require('fs');
var app = express();

app.set('view engine', 'ejs');

var mysql       = require('mysql');

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

    pool.getConnection(function(err,connection){
        if (err) {
          return json({"code" : 100, "status" : "Error in connection database"});
        }

        console.log('connected as id ' + connection.threadId);
        var dBquery = '';
        if (what == 'ogloszenielike') {
          var alike = req.query.q;
          dBquery = "select * from ogloszenie";
          dBquery += " where lower(name) like lower('%" + alike + "%')";
        }
        else if (what == 'kategoria') dBquery = "select * from kategoria";
        else if (what == 'ogloszeniekat') {
          var category = req.query.c;
          dBquery = "select * from ogloszenie";
          dBquery += " where id_kat = " + category;
        }

        connection.query(dBquery, function(err,rows){
            connection.release();
            if(!err) {
                return JSON.stringify(json(rows));
            }
        });

        connection.on('error', function(err) {
              return json({"code" : 100, "status" : "Error in connection database"});
        });
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', express.static('home_page'));
app.use('/login', express.static('login_page'));

app.get('/searchapi', function(req,res) {
    handle_database(req,res,'ogloszenielike')
});

app.get('/catapi', function(req,res) {
    handle_database(req,res,'ogloszeniekat')
});

//app.get('/searchpage', express.static('search_page'));

app.get('/search', function(req,res) {
  var entries;
  entries = handle_database(req, 'ogloszenielike');
  if (req.query.c != "") entries = handle_database(req, 'ogloszeniekat');
  console.log(entries);
  res.render('search_page', {entries: entries})
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
