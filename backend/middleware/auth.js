const { Joi } = require("express-validation");

const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;

function register() {
  return {
    body: Joi.object({
      name: Joi.string().required(),
      number: Joi.number().required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(passwordRegex).required(),
      confirmPassword: Joi.string().regex(passwordRegex).required(),
    }),
  };
}

module.exports = {
  register,
};
