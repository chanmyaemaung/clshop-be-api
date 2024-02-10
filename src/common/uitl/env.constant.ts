import * as Joi from "joi";

export const ENV_VALIDATION_SCHEMA = Joi.object({
  DATASOURCE_HOST: Joi.string().required(),
  DATASOURCE_USERNAME: Joi.string().required(),
  DATASOURCE_PORT: Joi.number().required(),
  DATASOURCE_POSTGRES_USER: Joi.string().required(),
  DATASOURCE_POSTGRES_PASSWORD: Joi.string().required(),
  DATASOURCE_DATABASE: Joi.string().required(),
  DATASOURCE_URL: Joi.string().required(),
});
