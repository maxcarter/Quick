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
        default: Date.now
    },
    dateUpdated: {
        type: Date,
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
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Open"
    },
    type: {
        type: String,
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