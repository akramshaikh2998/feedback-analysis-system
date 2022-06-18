var mongoose = require("mongoose");

var schema = mongoose.Schema;
var inductionFeedback = new schema({
    id: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    createdAtdate: {
        type: String,
        required: true,
    },
    UpdatedAtdate: {
        type: String,
        required: true,
    },

    philosophy: {
        type: String,
        required: true,
    },
    Mentoring: {
        type: String,
        required: true,
    },
    responsibilities: {
        type: String,
        required: true,
    },
    e_learning: {
        type: String,
        required: true,
    },
    creative: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("inductionFeedback", inductionFeedback);
