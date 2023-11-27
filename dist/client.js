"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("reflect-metadata");
var _path = _interopRequireDefault(require("path"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _typeorm = require("typeorm");
var entities = _interopRequireWildcard(require("./entities"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  _dotenv["default"].config({
    path: _path["default"].resolve(__dirname, '../', '.env.local')
  });
}
var db;
var getConnection = exports.getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var datasource;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!db) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", db);
        case 2:
          datasource = new _typeorm.DataSource({
            type: 'postgres',
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            ssl: isProd,
            entities: (0, _toConsumableArray2["default"])(Object.values(entities)),
            synchronize: false,
            logging: false,
            extra: {
              max: 10
            }
          });
          _context.next = 5;
          return datasource.initialize();
        case 5:
          db = _context.sent;
          return _context.abrupt("return", datasource);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getConnection() {
    return _ref.apply(this, arguments);
  };
}();