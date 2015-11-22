var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    displayName: String,
    accessLevel: Number
});

module.exports = restful.model('Users', schema);