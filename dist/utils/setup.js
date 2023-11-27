"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _client = require("../client");
var _Post = require("../entities/Post");
var _Tag = require("../entities/Tag");
var _blog = require("./blog");
var setup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var connection, posts, titles, postsExisting, postsExistingByTitle, neededToCreate, tagRepo, postRepo, insertValues;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _client.getConnection)();
        case 3:
          connection = _context2.sent;
          posts = (0, _blog.getBlogPosts)();
          titles = posts.map(function (post) {
            return post.title;
          });
          _context2.next = 8;
          return connection.createQueryBuilder(_Post.Post, 'post').where('post.title IN (:...titles)', {
            titles: titles
          }).getMany();
        case 8:
          postsExisting = _context2.sent;
          postsExistingByTitle = postsExisting.reduce(function (acc, post) {
            acc[post.title] = post;
            return acc;
          }, {});
          neededToCreate = posts.filter(function (post) {
            return !Object.hasOwn(postsExistingByTitle, post.title);
          });
          tagRepo = connection.getRepository(_Tag.Tag);
          postRepo = connection.getRepository(_Post.Post);
          insertValues = neededToCreate.map( /*#__PURE__*/function () {
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
              var title, tagsStr, summary, path, tags, tagsToSave, post;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    title = _ref2.title, tagsStr = _ref2.tags, summary = _ref2.summary, path = _ref2.path;
                    tags = tagsStr.split(', ').map(function (tagStr) {
                      return tagRepo.create({
                        name: tagStr
                      });
                    });
                    _context.next = 4;
                    return tagRepo.save(tags);
                  case 4:
                    tagsToSave = _context.sent;
                    post = postRepo.create({
                      title: title,
                      summary: summary,
                      path: path
                    });
                    post.tags = tagsToSave;
                    _context.next = 9;
                    return postRepo.save(post);
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref3.apply(this, arguments);
            };
          }());
          _context2.next = 16;
          return Promise.all(insertValues);
        case 16:
          _context2.next = 21;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function setup() {
    return _ref.apply(this, arguments);
  };
}();
setup();