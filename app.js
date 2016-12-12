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
    user     : 'uczen',
    password : 'qwerty',
    database : 'OGLOSZENIOWA',
    debug    :  false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', express.static('home_page'));
app.use('/login', express.static('login_page'));

app.get('/search', function(req,res) {
  var obj = [];
  pool.getConnection(function(err,connection) {
    console.log('connected as id ' + connection.threadId);
    var dBquery="";
    if (req.query.q)
      dBquery = "select * from ogloszenie where lower(name) like lower('%" + req.query.q + "%')";
    else
      dBquery = "select * from ogloszenie where kat_id = " + req.query.cat;
    console.log(dBquery);
    connection.query(dBquery, function(err, rows, fields) {
      if (err) {
        throw err;
      } else {
        obj += {entriesEJ: rows};
        res.render('search_page', obj)
      }
    });
    dBquery = "select * from kategoria"
    connection.query(dBquery, function(err, rows, fields) {
      if (err) {
        throw err;
      } else {
        obj += {categories: rows};
      }
    });
  });
  console.log(obj);

});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
