var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/quick');

app.get('/', function(req, res){
	res.send('Hello World');
});

require('./api/api')(app);

app.listen(3000);
console.log("Hello World");