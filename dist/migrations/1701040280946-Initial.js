"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Initial1701040280946 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Initial1701040280946 = exports.Initial1701040280946 = /*#__PURE__*/function () {
  function Initial1701040280946() {
    (0, _classCallCheck2["default"])(this, Initial1701040280946);
    (0, _defineProperty2["default"])(this, "name", 'Initial1701040280946');
  }
  (0, _createClass2["default"])(Initial1701040280946, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryRunner.query("CREATE TABLE \"view\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"updatedAt\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"postId\" integer, CONSTRAINT \"PK_86cfb9e426c77d60b900fe2b543\" PRIMARY KEY (\"id\"))");
            case 2:
              _context.next = 4;
              return queryRunner.query("CREATE TABLE \"post\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"updatedAt\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"title\" text NOT NULL, \"path\" text NOT NULL, \"summary\" text NOT NULL, CONSTRAINT \"PK_be5fda3aac270b134ff9c21cdee\" PRIMARY KEY (\"id\"))");
            case 4:
              _context.next = 6;
              return queryRunner.query("CREATE TABLE \"tag\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"updatedAt\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"name\" text NOT NULL, CONSTRAINT \"PK_8e4052373c579afc1471f526760\" PRIMARY KEY (\"id\"))");
            case 6:
              _context.next = 8;
              return queryRunner.query("CREATE TABLE \"post_tags_tag\" (\"postId\" integer NOT NULL, \"tagId\" integer NOT NULL, CONSTRAINT \"PK_e9b7b8e6a07bdccb6a954171676\" PRIMARY KEY (\"postId\", \"tagId\"))");
            case 8:
              _context.next = 10;
              return queryRunner.query("CREATE INDEX \"IDX_b651178cc41334544a7a9601c4\" ON \"post_tags_tag\" (\"postId\") ");
            case 10:
              _context.next = 12;
              return queryRunner.query("CREATE INDEX \"IDX_41e7626b9cc03c5c65812ae55e\" ON \"post_tags_tag\" (\"tagId\") ");
            case 12:
              _context.next = 14;
              return queryRunner.query("ALTER TABLE \"view\" ADD CONSTRAINT \"FK_19da087dd68a0bc5e5302ca9a59\" FOREIGN KEY (\"postId\") REFERENCES \"post\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
            case 14:
              _context.next = 16;
              return queryRunner.query("ALTER TABLE \"post_tags_tag\" ADD CONSTRAINT \"FK_b651178cc41334544a7a9601c45\" FOREIGN KEY (\"postId\") REFERENCES \"post\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
            case 16:
              _context.next = 18;
              return queryRunner.query("ALTER TABLE \"post_tags_tag\" ADD CONSTRAINT \"FK_41e7626b9cc03c5c65812ae55e8\" FOREIGN KEY (\"tagId\") REFERENCES \"tag\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function up(_x) {
        return _up.apply(this, arguments);
      }
      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryRunner.query("ALTER TABLE \"post_tags_tag\" DROP CONSTRAINT \"FK_41e7626b9cc03c5c65812ae55e8\"");
            case 2:
              _context2.next = 4;
              return queryRunner.query("ALTER TABLE \"post_tags_tag\" DROP CONSTRAINT \"FK_b651178cc41334544a7a9601c45\"");
            case 4:
              _context2.next = 6;
              return queryRunner.query("ALTER TABLE \"view\" DROP CONSTRAINT \"FK_19da087dd68a0bc5e5302ca9a59\"");
            case 6:
              _context2.next = 8;
              return queryRunner.query("DROP INDEX \"public\".\"IDX_41e7626b9cc03c5c65812ae55e\"");
            case 8:
              _context2.next = 10;
              return queryRunner.query("DROP INDEX \"public\".\"IDX_b651178cc41334544a7a9601c4\"");
            case 10:
              _context2.next = 12;
              return queryRunner.query("DROP TABLE \"post_tags_tag\"");
            case 12:
              _context2.next = 14;
              return queryRunner.query("DROP TABLE \"tag\"");
            case 14:
              _context2.next = 16;
              return queryRunner.query("DROP TABLE \"post\"");
            case 16:
              _context2.next = 18;
              return queryRunner.query("DROP TABLE \"view\"");
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function down(_x2) {
        return _down.apply(this, arguments);
      }
      return down;
    }()
  }]);
  return Initial1701040280946;
}();