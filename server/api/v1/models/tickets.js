var restful = require('node-restful');
var mongoose = restful.mongoose;

var relatedTicket = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});
var comment = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
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
    }
});

var schema = new mongoose.Schema({
    project: {
        type: String,
        default: "Unassigned",
        required: true
    },
    priority: {
        type: String,
        default: "Low",
        required: true
    },
    assignee: {
        type: String,
        default: "Unassigned",
        required: true
    },
    creator: {
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
    body: {
        type: String,
        required: true,
        default: " "
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Open"
    },
    type: {
        type: String,
        required: true,
        default: "Task"
    },
    key: {
        type: Number
    },
    relations: {
        type: [relatedTicket]
    },
    comments: {
        type: [comment]
    },
    tags: {
        type: [String]
    }
});

module.exports = restful.model('Ticket', schema);