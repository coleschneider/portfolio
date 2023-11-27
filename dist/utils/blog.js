"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllBlogPosts = void 0;
exports.getBlogPosts = getBlogPosts;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _client = require("../client");
var _index = require("../entities/index");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function parseFrontmatter(fileContent) {
  var frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  var match = frontmatterRegex.exec(fileContent);
  var frontMatterBlock = match[1];
  var content = fileContent.replace(frontmatterRegex, '').trim();
  var frontMatterLines = frontMatterBlock.trim().split('\n');
  var metadata = {};
  frontMatterLines.forEach(function (line) {
    var _line$split = line.split(': '),
      _line$split2 = (0, _toArray2["default"])(_line$split),
      key = _line$split2[0],
      valueArr = _line$split2.slice(1);
    var value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim()] = value;
  });
  return _objectSpread(_objectSpread({}, metadata), {}, {
    content: content
  });
}
function getMDXFiles(dir) {
  return _fs["default"].readdirSync(dir).filter(function (file) {
    return _path["default"].extname(file) === '.mdx';
  });
}
function readMDXFile(filePath) {
  var rawContent = _fs["default"].readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}
function getMDXData(dir) {
  var mdxFiles = getMDXFiles(dir);
  return mdxFiles.map(function (filePath) {
    var slug = _path["default"].basename(filePath, _path["default"].extname(filePath));
    var metadata = readMDXFile(_path["default"].join(dir, filePath));
    return _objectSpread(_objectSpread({}, metadata), {}, {
      slug: slug,
      path: filePath
    });
  });
}
function getBlogPosts() {
  return getMDXData(_path["default"].join(process.cwd(), 'content'));
}
var getAllBlogPosts = exports.getAllBlogPosts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var datasource, posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _client.getConnection)();
        case 2:
          datasource = _context.sent;
          _context.next = 5;
          return datasource.getRepository(_index.Post).find({
            loadEagerRelations: true
          });
        case 5:
          posts = _context.sent;
          console.log(posts[0].tags);
          return _context.abrupt("return", posts);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllBlogPosts() {
    return _ref.apply(this, arguments);
  };
}();