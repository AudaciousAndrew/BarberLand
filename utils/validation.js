//VALIDATION
const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = data => {
  const schema = Joi.object({
    login: Joi.string()
      .min(4)
      .max(40)
      .required(),
    email: Joi.string()
      .required(),
    password: Joi.string()
      .min(4)
      .max(1024)
      .required()
  });

  return schema.validate(data);
};

//Login Validation
const loginValidation = data => {
  const schema = Joi.object({
    login: Joi.string()
      .min(4)
      .max(40)
      .required(),
    password: Joi.string()
      .min(4)
      .max(1024)
      .required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
