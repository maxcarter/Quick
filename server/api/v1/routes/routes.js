var security = require('../security/security');


module.exports = function(router) {
    var Users = require('../models/users');
    Users.methods(['get', 'put', 'post', 'delete']);
    Users.before('post', security.hash_password);
    Users.before('put', security.hash_password);
    Users.route('authenticate', {
        detail: false,
        handler: function(req, res, next) {
            Users.findOne({
                username: req.body.username
            }, function(err, user) {
                if (err) {
                    throw err;
                }
                var result = security.authenticate_user(req, user);
          		res.status(result.status).json(result);
            });
        }
    });
    Users.register(router, '/users');

    var Tickets = require('../models/tickets');
    Tickets.methods(['get', 'put', 'post', 'delete']);
    Tickets.register(router, '/tickets');

    var Sprints = require('../models/sprints');
    Sprints.methods(['get', 'put', 'post', 'delete']);
    Sprints.register(router, '/sprints');
}