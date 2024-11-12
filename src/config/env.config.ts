import * as process from 'node:process';

export const EnvConfiguration = () => ({
  environments: process.env.NODE_ENV || 'development',
  mongodb: process.env.MONGO_DB,
  port: process.env.PORT || 3000,
  default_limit: process.env.DEFAULT_LIMIT || 10,
});