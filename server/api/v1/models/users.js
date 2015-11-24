var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true,
        default: "User"
    },
    accessLevel: {
        type: Number,
        required: true,
        default: 2
    }
});

module.exports = restful.model('Users', schema);