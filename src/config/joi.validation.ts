import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  DEFAULT_LIMIT: Joi.number().default(10),
  MONGO_DB: Joi.string().required(),
  PORT: Joi.number().default(3000),
});