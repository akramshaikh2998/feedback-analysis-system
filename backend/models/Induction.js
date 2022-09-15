const mongoose = require("mongoose");

const schema = mongoose.Schema;
const inductionFeedback = new schema({
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  philosophy: {
    type: String,
    required: true,
  },
  mentoring: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  eLearning: {
    type: String,
    required: true,
  },
  creative: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("inductionFeedback", inductionFeedback);
