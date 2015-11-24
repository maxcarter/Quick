module.exports = function(router) {
    var Users = require('../models/users');
    Users.methods(['get', 'put', 'post', 'delete']);
    Users.register(router, '/users');

    var Tasks = require('../models/tasks');
    Tasks.methods(['get', 'put', 'post', 'delete']);
    Tasks.register(router, '/tasks');

    var Sprints = require('../models/sprints');
    Sprints.methods(['get', 'put', 'post', 'delete']);
    Sprints.register(router, '/sprints');
}