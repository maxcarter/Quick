var restful = require('node-restful');
var mongoose = restful.mongoose;

var subTask = new mongoose.Schema({
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
    assignee: {
        type: String,
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
        default: ""
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
    subTasks: {
        type: [subTask]
    },
    comments: {
        type: [comment]
    }
});

module.exports = restful.model('Tasks', schema);