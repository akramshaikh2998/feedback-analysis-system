const mongoose = require("mongoose");

const schema = mongoose.Schema;
const industrialFeedback = new schema({
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
  workEnvironment: {
    type: String,
    required: true,
  },
  professionalLive: {
    type: String,
    required: true,
  },
  manufacturing: {
    type: String,
    required: true,
  },
  employmentPractices: {
    type: String,
    required: true,
  },
  experiences: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("industrialFeedback", industrialFeedback);
