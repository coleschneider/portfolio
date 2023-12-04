import 'reflect-metadata';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import path from 'path';
const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
}

const source = new DataSource({
  type: 'postgres',
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  ssl: isProd,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  synchronize: false,
});

export default source;
