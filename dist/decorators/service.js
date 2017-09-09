'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoute = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _Log = require('../Log');

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();

var getRoute = exports.getRoute = function getRoute() {
  return router;
};

exports.default = function (name) {
  return function (target) {
    _Log2.default.w(target.name);
  };
};