const { Joi } = require("express-validation");

function feedback() {
  return {
    body: Joi.object({
      date: Joi.date().iso().required(),
      environment: Joi.string().required(),
      canteen: Joi.string().required(),
      classroom: Joi.string().required(),
      washroom: Joi.string().required(),
      overall: Joi.string().required(),
    }),
  };
}

module.exports = { feedback };
