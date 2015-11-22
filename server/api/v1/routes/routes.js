module.exports = function(router) {
    var Users = require('../models/users');
    Users.methods(['get', 'put', 'post', 'delete']);
    Users.register(router, '/users');
}