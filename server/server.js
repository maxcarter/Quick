var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');


var config = require('./config');
var app = express();
var port = config.port;

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('../dist'));
app.use('/dev', express.static('../app')); 

require('./api/api')(app);
console.log("Connected to Quick API v0.1");

app.listen(port);
console.log("Started Node.js server. Listening on port " + config.port);