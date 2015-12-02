var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    members: {
        type: [String]
    }
});

module.exports = restful.model('Projects', schema);