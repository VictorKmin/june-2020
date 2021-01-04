const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../../configs/regexp.enum');
// const { CURRENT_YEAR } = require('../../constants/constants');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50)
        .required(),
    email: Joi.string().regex(EMAIL).required(),
    // email: Joi.string().email(),
    password: Joi.string().regex(PASSWORD).required(),
    // age: Joi.number().integer().min(1).max(120)
    // year: Joi.number().integer().min(CURRENT_YEAR - 100).max(CURRENT_YEAR),
    hasCar: Joi.boolean(),
    girls:
      Joi.array()
          .items(
              Joi.object({
                  name: Joi.string().alphanum().max(20)
              })
          )
          .optional()
          .when('hasCar', { is: true, then: Joi.required() })
});
