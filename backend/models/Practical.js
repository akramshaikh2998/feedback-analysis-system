const mongoose = require("mongoose");

const schema = mongoose.Schema;
const practicalFeedback = new schema({
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
  clearingDoubts: {
    type: String,
    required: true,
  },
  conductedRegularly: {
    type: String,
    required: true,
  },
  conductPractical: {
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
