/* Server to host sample cast sender app */

var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/imagefiles", express.static(__dirname + '/imagefiles'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

/* defining routes */
app.get('/', routes.index);

/* bind and listen for connections */
app.listen(3000);
console.log("Listening on port 3000");
