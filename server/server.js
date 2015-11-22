var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/quick');

app.use(express.static('../dist'));

require('./api/api')(app);

app.listen(3000);
console.log("Hello World");