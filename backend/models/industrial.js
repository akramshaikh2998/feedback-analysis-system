var mongoose = require("mongoose");

var schema = mongoose.Schema;
var industrialFeedback = new schema({
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

    work_environment: {
        type: String,
        required: true,
    },
    professional_live: {
        type: String,
        required: true,
    },
    manufacturing: {
        type: String,
        required: true,
    },
    employment_practices: {
        type: String,
        required: true,
    },
    experiences: {
        type: String,
        required: true,
    },
}); 

module.exports = mongoose.model("industrialFeedback", industrialFeedback);
