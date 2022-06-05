const express = require("express");
const { validate } = require("express-validation");
const Router = express.Router();
const AuthController = require("../controller/auth");
const AuthMiddleware = require("../middleware/auth");

Router.post(
  "/register",
  validate(AuthMiddleware.register(), {}, {}),
  AuthController.register
);

Router.post("/login", AuthController.login); // TODO: Add middleware for login request

module.exports = Router;
