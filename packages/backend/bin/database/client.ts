import { Client } from 'pg';
import appConfig from '../../src/config/app';

const client = new Client({
  host: appConfig.postgresHost,
  user: appConfig.postgresUsername,
  port: appConfig.postgresPort,
  password: appConfig.postgresPassword,
});

export default client;
