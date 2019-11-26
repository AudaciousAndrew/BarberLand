//VALIDATION
const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = data => {
  const schema = Joi.object({
    login: Joi.string()
      .min(6)
      .max(40)
      .required(),
    email: Joi.string()
      .min(3)
      .max(40)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required()
  });

  return schema.validate(data);
};

//Login Validation
const loginValidation = data => {
  const schema = Joi.object({
    login: Joi.string()
      .min(6)
      .max(40)
      .required(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
