import 'reflect-metadata';
import path from 'path';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import * as entities from './entities';
const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  dotenv.config({ path: path.resolve(__dirname, '../', '.env.local') });
}
let db: DataSource;

export const getConnection = async () => {
  if (db) {
    return db;
  }
  
  const datasource = new DataSource({
    type: 'postgres',
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    ssl: isProd,
    entities: [...Object.values(entities)],
    synchronize: false,
    logging: false,
  });
  db = await datasource.initialize();

  return datasource;
};
