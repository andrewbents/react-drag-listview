'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomIndex = exports.closest = exports.getScrollElement = undefined;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var closest = function closest(el, selector, rootNode) {
  if (el == null) {
    // eslint-disable-line
    return null;
  }
  if (el.nodeType === Node.TEXT_NODE) {
    if (el.parentElement) {
      el = el.parentElement; // eslint-disable-line
    } else {
      return null;
    }
  }
  var rootElement = rootNode || document.body;
  var element = el;
  var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;
  while (element) {
    var flagRoot = element === rootElement;
    if (flagRoot || matchesSelector.call(element, selector)) {
      if (flagRoot) {
        element = null;
      }
      break;
    }
    element = element.parentElement;
  }
  return element;
};

var getScrollElement = function getScrollElement(el) {
  var element = el;
  do {
    var overflow = getComputedStyle(element).overflow;
    if ((overflow === 'auto' || overflow === 'scroll') && element && element.nodeType && (element.offsetWidth < element.scrollWidth || element.offsetHeight < element.scrollHeight)) {
      break;
    }
    if (!element || !element.nodeType || element === document.body) {
      element = null;
      break;
    }
    element = element.parentElement;
  } while (element);
  return element;
};

var getDomIndex = function getDomIndex(el) {
  return (0, _from2["default"])(el.parentNode.children).indexOf(el);
};

exports.getScrollElement = getScrollElement;
exports.closest = closest;
exports.getDomIndex = getDomIndex;