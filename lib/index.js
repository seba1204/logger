"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.settings = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _moment = _interopRequireDefault(require("moment"));

var _nodeEmoji = _interopRequireDefault(require("node-emoji"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var showTime = false;
var setTime = 'HH:mm:ss';
var clearOnce = true;
var clear = false;
var settings = {
  showTime: showTime,
  setTime: setTime,
  clearOnce: clearOnce,
  clear: clear
};
exports.settings = settings;

var _default = function _default(_ref) {
  var name = _ref.name,
      mode = _ref.mode,
      status = _ref.status,
      value = _ref.value,
      clear = _ref.clear,
      showTime = _ref.showTime;
  // definition of styles to apply
  var s = {
    regular: _chalk["default"].dim.white,
    error: _chalk["default"].bold.red,
    warning: _chalk["default"].keyword('orange'),
    success: _chalk["default"].greenBright.bold,
    info: _chalk["default"].cyan.bold,
    devMode: _chalk["default"].cyan,
    prodMode: _chalk["default"].magenta,
    time: _chalk["default"].grey
  }; // definition of emoji to display

  var e = {
    success: ':heavy_check_mark:',
    error: ':x:',
    info: ':grey_exclamation:',
    warning: ':warning:',
    waiting: ':hourglass:'
  };
  var emojiToDisplay = e.warning;
  var globalStyle = s.regular;
  var modeStyle = s.regular;
  var timeStyle = s.time;

  switch (status) {
    case 'ok':
      globalStyle = s.success;
      emojiToDisplay = e.success;
      break;

    case 'warn':
      globalStyle = s.warning;
      emojiToDisplay = e.warning;
      break;

    case 'err':
      globalStyle = s.error;
      emojiToDisplay = e.error;
      break;

    case 'reg':
      globalStyle = s.regular;
      emojiToDisplay = e.success;
      break;

    case 'wait':
      globalStyle = s.regular;
      emojiToDisplay = e.waiting;
      break;

    case 'info':
      globalStyle = s.info;
      emojiToDisplay = e.info;
      break;

    default:
      globalStyle = s.error;
      emojiToDisplay = e.error;
      break;
  }

  switch (mode) {
    case 'dev':
      modeStyle = s.devMode;
      break;

    case 'prod':
      modeStyle = s.prodMode;
      break;

    default:
      modeStyle = s.devMode;
      break;
  }

  !mode ? mode = '' : mode = "[".concat(mode, "] ");
  !name ? name = '' : name = "[".concat(name, "] ");
  !value ? value = '' : value = value;

  if (clear || settings.clear || settings.clearOnce) {
    console.clear();
  }

  if (settings.clearOnce) settings.clearOnce = false;
  var time = '';

  if (showTime || settings.showTime) {
    time = "".concat((0, _moment["default"])().format(settings.setTime), " ");
  }

  console.log(_nodeEmoji["default"].emojify("".concat(timeStyle(time)).concat(emojiToDisplay, " ").concat(globalStyle(name)).concat(modeStyle(mode)).concat(globalStyle(value))));
};

exports["default"] = _default;