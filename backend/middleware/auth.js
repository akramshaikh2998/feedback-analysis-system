const { Joi } = require("express-validation");
const jwt = require("jsonwebtoken");

const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;

function register() {
  return {
    body: Joi.object({
      name: Joi.string().required(),
      number: Joi.number().required(),
      email: Joi.string().email().required(),
      branch: Joi.string().required(),
      password: Joi.string().regex(passwordRegex).required(),
      confirmPassword: Joi.string().regex(passwordRegex).required(),
    }),
  };
}

function login() {
  return {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().regex(passwordRegex).required(),
    }),
  };
}

async function isAuthenticated(req, res, next) {
  const token = req.headers.authorization ?? req.headers.Authorization;

  if (!token) {
    return res.json({ ok: false, error: "Authentication is required" });
  }

  try {
    const payload = await jwt.verify(token, process.env.SECRET_KEY, {
      noTimestamp: true,
    });

    req.user = payload.user;
  } catch (error) {
    return res.json({ ok: false, error: "Invalid Authentication" });
  }

  next();
}

module.exports = {
  register,
  login,
  isAuthenticated,
};
