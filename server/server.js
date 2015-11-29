var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

var config = require('./config');
var app = express();
var port = 3000;

mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('../dist'));
app.use('/dev', express.static('../app')); 

require('./api/api')(app);

app.listen(port);
console.log("Hello World");