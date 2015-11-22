var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Hello World');
});

app.use('/api', require('./api/api'));

app.listen(3000);
console.log("Hello World");