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
    }
};