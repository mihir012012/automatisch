import { Client } from 'pg';
import appConfig from '../../src/config/app';

const client = new Client({
  host: appConfig.postgresHost,
  user: appConfig.postgresUsername,
  port: appConfig.postgresPort,
});

export default client;
