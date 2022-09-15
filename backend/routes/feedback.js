const express = require("express");
const Router = express.Router();
const { validate } = require("express-validation");
const FeedbackController = require("../controller/feedback");
const FeedbackMiddleware = require("../middleware/feedback");
const AuthMiddleware = require("../middleware/auth");

Router.use(AuthMiddleware.isAuthenticated);

Router.get("/status", FeedbackController.getStatus);

Router.post(
  "/feedback",
  validate(FeedbackMiddleware.feedback(), {}, {}),
  FeedbackController.storeFeedback
);

module.exports = Router;
