'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.service = exports.put = exports.post = exports.get = exports.del = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _actions = require('./decorators/actions');

var _service = require('./decorators/service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.del = _actions.del;
exports.get = _actions.get;
exports.post = _actions.post;
exports.put = _actions.put;
exports.service = _service2.default;

exports.default = function (option) {
  var router = new _koaRouter2.default();
  var controllerPath = option.path || '.';

  var files = _fs2.default.readdirSync(controllerPath);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      if (!/Controller\.js/.test(file)) {
        continue;
      }

      var filename = _path2.default.resolve(controllerPath, file);
      require(filename);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  router.use((0, _actions.getRoute)().routes(), (0, _actions.getRoute)().allowedMethods());

  return router;
};