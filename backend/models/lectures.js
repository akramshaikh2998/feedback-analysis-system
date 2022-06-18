var mongoose = require("mongoose");

var schema = mongoose.Schema;
var lecturesFeedback = new schema({
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

    punctuality: {
        type: String,
        required: true,
    },
    Regularity: {
        type: String,
        required: true,
    },
    students_attendance: {
        type: String,
        required: true,
    },
    completes_syllabus: {
        type: String,
        required: true,
    },
    assignments: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("lecturesFeedback", lecturesFeedback);
