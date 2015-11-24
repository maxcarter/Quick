var restful = require('node-restful');
var mongoose = restful.mongoose;

var task = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
});
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        required: true,
        default: Date.now
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    users: {
        type: [String]
    },
    tasks: {
        type: [task]
    },
    status: {
        type: String,
        required: true,
        default: "Open"
    }
});

module.exports = restful.model('Sprints', schema);