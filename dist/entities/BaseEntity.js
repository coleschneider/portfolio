"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEntity = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
require("reflect-metadata");
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
var BaseEntity = exports.BaseEntity = (_dec = (0, _typeorm.PrimaryGeneratedColumn)(), _dec2 = (0, _typeorm.CreateDateColumn)({
  type: 'timestamp',
  "default": function _default() {
    return 'CURRENT_TIMESTAMP(6)';
  }
}), _dec3 = (0, _typeorm.UpdateDateColumn)({
  type: 'timestamp',
  "default": function _default() {
    return 'CURRENT_TIMESTAMP(6)';
  },
  onUpdate: 'CURRENT_TIMESTAMP(6)'
}), (_class = /*#__PURE__*/(0, _createClass2["default"])(function BaseEntity() {
  (0, _classCallCheck2["default"])(this, BaseEntity);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "updatedAt", _descriptor3, this);
}), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createdAt", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updatedAt", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));