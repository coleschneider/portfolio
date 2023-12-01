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
  console.log({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  const datasource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    // ssl: isProd,
    entities: [...Object.values(entities)],
    synchronize: false,
    logging: false,
    extra: {
      max: 10,
    },
  });
  db = await datasource.initialize();
  return datasource;
};
