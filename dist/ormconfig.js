"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("reflect-metadata");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _typeorm = require("typeorm");
var _path = _interopRequireDefault(require("path"));
var isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  _dotenv["default"].config({
    path: _path["default"].resolve(__dirname, '../.env.local')
  });
}
var source = new _typeorm.DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: isProd,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js']
});
var _default = exports["default"] = source;