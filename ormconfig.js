// @ts-check

module.exports = /** @type { import('typeorm').DataSourceOptions } */ ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'portfoliodb',
});
