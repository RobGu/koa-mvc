'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_colors2.default.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'red',
  info: 'green',
  data: 'blue',
  help: 'cyan',
  warn: 'yellow',
  debug: 'magenta',
  error: 'red'
});

var _default = (_temp = _class = function _default() {
  (0, _classCallCheck3.default)(this, _default);
}, _class.i = function (message) {
  console.log(('[koa-controller][info] ' + message).info);
}, _class.d = function (message) {
  console.log(('[koa-controller][debug] ' + message).debug);
}, _class.w = function (message) {
  console.log(('[koa-controller][warn] ' + message).warn);
}, _class.e = function (message) {
  console.log(('[koa-controller][error] ' + message).error);
}, _temp);

exports.default = _default;