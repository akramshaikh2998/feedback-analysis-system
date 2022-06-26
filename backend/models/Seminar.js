const mongoose = require("mongoose");

const schema = mongoose.Schema;
const seminarFeedback = new schema({
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
  skillsModules: {
    type: String,
    required: true,
  },
  management: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("seminarFeedback", seminarFeedback);
