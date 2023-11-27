"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("reflect-metadata");
var _Post = require("./Post");
Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Post[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Post[key];
    }
  });
});
var _View = require("./View");
Object.keys(_View).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _View[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _View[key];
    }
  });
});
var _Tag = require("./Tag");
Object.keys(_Tag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Tag[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tag[key];
    }
  });
});