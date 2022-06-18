const express = require("express");
const { validate } = require("express-validation");
const Router = express.Router();
const FeedbackController = require("../controller/feedback");
const FeedbackMiddleware = require("../middleware/feedback");
const AuthMiddleware = require("../middleware/auth");

Router.get(
  "/status",
  AuthMiddleware.isAuthenticated,
  FeedbackController.getStatus
);

module.exports = Router;
