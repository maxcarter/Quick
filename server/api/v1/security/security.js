var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var secret = "AnyPhraseYouWant";

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
            return response;
        } else if (user) {
            var matched = bcrypt.compareSync(req.body.password, user.password);
            if (matched) {
                var token = jwt.sign(user, secret, {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                response = {
                    status: 200,
                    success: true,
                    message: "Enjoy your token!",
                    token: token
                };
                return response;
            } else {
                response = {
                    status: 401,
                    success: false,
                    message: "Authentication failed. Wrong password."
                };
                return response;
            }

        }

    }
};