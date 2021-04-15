const Joi = require("joi");

module.exports.validate = function (obj, schema) {
  return Joi.validate(obj, schema);
};
