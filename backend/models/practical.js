var mongoose = require("mongoose");

var schema = mongoose.Schema;
var practicalFeedback = new schema({
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

    clearing_doubts: {
        type: String,
        required: true,
    },
    conducted_regularly: {
        type: String,
        required: true,
    },
    conduct_practical: {
        type: String,
        required: true,
    },
    workshop: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("practicalFeedback", practicalFeedback);
