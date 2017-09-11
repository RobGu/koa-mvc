'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = exports.post = exports.del = exports.get = exports.getRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var methods = function methods(type) {
  return function (rule) {
    return function (target, name, descriptor) {
      if (!target.name) {
        _Log2.default.e('@' + type + ': ' + name + ' with decorator must be static');
        return descriptor;
      }

      var controller = target.name.substr(0, target.name.length - 10);
      var action = rule || name;
      var url = ('/' + controller + '/' + action + '/').toLowerCase();
      url = url.replace(/\/\//g, '/');

      router[type](url, function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var params, result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  params = (0, _extends3.default)({}, ctx.query, ctx.params, ctx.request.body);
                  _context.next = 3;
                  return target[name](params, ctx);

                case 3:
                  result = _context.sent;

                  ctx.body = ctx.body || result;

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      return descriptor;
    };
  };
};

var get = exports.get = methods('get');
var del = exports.del = methods('delete');
var post = exports.post = methods('post');
var put = exports.put = methods('put');