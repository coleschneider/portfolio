import 'reflect-metadata';
import path from 'path';
import { DataSource } from 'typeorm';

const connection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'portfoliodb',
});

export default connection;
