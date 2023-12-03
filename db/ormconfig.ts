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
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: isProd,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  synchronize: false,
});

export default source;
