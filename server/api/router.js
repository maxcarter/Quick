var express = require('express');
var router = express.Router();

require('./v1/routes/routes')(router);

module.exports = router;