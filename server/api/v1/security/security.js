var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

module.exports = {
    hash_password: function(req, res, next) {
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) {
                throw err;
            }
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if (err) {
                    throw err;
                }
                req.body.password = hash;
                next();
            });
        });
    },
    authenticate_user: function(req, user) {
        var response = {};
        if (!user) {
            response = {
                status: 404,
                success: false,
                message: "Authentication failed. User not found."
            };
        } else if (user) {
            if (user.password !== req.body.password) {
                response = {
                    status: 401,
                    success: false,
                    message: "Authentication failed. Wrong password."
                };

            } else {
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                response = {
                    status: 200,
                    success: true,
                    message: "Enjoy your token!",
                    token: token
                };
            }
        }
        return response;
    }
};