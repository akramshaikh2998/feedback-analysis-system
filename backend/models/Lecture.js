const mongoose = require("mongoose");

const schema = mongoose.Schema;
const lecturesFeedback = new schema({
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
  punctuality: {
    type: String,
    required: true,
  },
  regularity: {
    type: String,
    required: true,
  },
  studentsAttendance: {
    type: String,
    required: true,
  },
  completesSyllabus: {
    type: String,
    required: true,
  },
  assignments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("lecturesFeedback", lecturesFeedback);
