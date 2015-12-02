var security = require('../security/security');


module.exports = function(router) {
    var Users = require('../models/users');
    Users.methods(['get', 'put', 'post', 'delete']);
    Users.before('get', security.check_token);
    Users.before('put', security.check_token);
    Users.before('post', security.check_token);
    Users.before('delete', security.check_token);    
    Users.before('post', security.hash_password);
    Users.before('put', security.hash_password);
    Users.route('authenticate', {
        detail: false,
        handler: function(req, res, next) {
            if (req.method === "POST") {
                Users.findOne({
                    username: req.body.username
                }, function(err, user) {
                    if (err) {
                        throw err;
                    }
                    var result = security.authenticate_user(req, user);
                    res.status(result.status).json(result);
                });
            } else {
            	res.status(405).json({
                    status: 405,
                    success: false,
                    message: "Invalid request method! Expected POST"
                });
            }
        }
    });
    Users.register(router, '/users');

    var Tickets = require('../models/tickets');
    Tickets.methods(['get', 'put', 'post', 'delete']);
    Tickets.before('get', security.check_token);
    Tickets.before('put', security.check_token);
    Tickets.before('post', security.check_token);
    Tickets.before('delete', security.check_token);
    Tickets.register(router, '/tickets');

    var Sprints = require('../models/sprints');
    Sprints.methods(['get', 'put', 'post', 'delete']);
    Sprints.before('get', security.check_token);
    Sprints.before('put', security.check_token);
    Sprints.before('post', security.check_token);
    Sprints.before('delete', security.check_token);
    Sprints.register(router, '/sprints');

    var Projects = require('../models/projects');
    Projects.methods(['get', 'put', 'post', 'delete']);
    Projects.before('get', security.check_token);
    Projects.before('put', security.check_token);
    Projects.before('post', security.check_token);
    Projects.before('delete', security.check_token);
    Projects.register(router, '/projects');
}