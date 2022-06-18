var mongoose = require("mongoose");

var schema = mongoose.Schema;
var seminarFeedback = new schema({
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

      expectations: {
    type: String,
    required: true,
  },
  projects: {
    type: String,
    required: true,
  },
  developments: {
    type: String,
    required: true,
  },
  skills_modules: {
    type: String,
    required: true,
  },
  management: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("seminarFeedback", seminarFeedback);
