var mongoose = require("mongoose");

var schema = mongoose.Schema;
var collegeFeedback = new schema({
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

    environment: {
    type: String,
    required: true,
  },
  canteen: {
    type: String,
    required: true,
  },
  classroom: {
    type: String,
    required: true,
  },
  washroom: {
    type: String,
    required: true,
  },
  overall: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("collegeFeedback", collegeFeedback);
