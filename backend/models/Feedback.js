const mongoose = require("mongoose");

const schema = mongoose.Schema;
const collegeFeedback = new schema({
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.ObjectId,
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
