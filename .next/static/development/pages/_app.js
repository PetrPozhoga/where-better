(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./src/pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_ref) {
  var Component, ctx, pageProps;
  return _regeneratorRuntime.async(function appGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx;
          _context.next = 3;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(Component, ctx));

        case 3:
          pageProps = _context.sent;
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return _react["default"].createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/lato/lato.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/fonts/lato/lato.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./latohairline.woff2 */ "./src/assets/fonts/lato/latohairline.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ./latohairline.woff */ "./src/assets/fonts/lato/latohairline.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ./latohairline.ttf */ "./src/assets/fonts/lato/latohairline.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_3___ = __webpack_require__(/*! ./latohairlineitalic.woff2 */ "./src/assets/fonts/lato/latohairlineitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_4___ = __webpack_require__(/*! ./latohairlineitalic.woff */ "./src/assets/fonts/lato/latohairlineitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_5___ = __webpack_require__(/*! ./latohairlineitalic.ttf */ "./src/assets/fonts/lato/latohairlineitalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_6___ = __webpack_require__(/*! ./latothin.woff2 */ "./src/assets/fonts/lato/latothin.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_7___ = __webpack_require__(/*! ./latothin.woff */ "./src/assets/fonts/lato/latothin.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_8___ = __webpack_require__(/*! ./latothin.ttf */ "./src/assets/fonts/lato/latothin.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_9___ = __webpack_require__(/*! ./latothinitalic.woff2 */ "./src/assets/fonts/lato/latothinitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_10___ = __webpack_require__(/*! ./latothinitalic.woff */ "./src/assets/fonts/lato/latothinitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_11___ = __webpack_require__(/*! ./latothinitalic.ttf */ "./src/assets/fonts/lato/latothinitalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_12___ = __webpack_require__(/*! ./latolight.woff2 */ "./src/assets/fonts/lato/latolight.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_13___ = __webpack_require__(/*! ./latolight.woff */ "./src/assets/fonts/lato/latolight.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_14___ = __webpack_require__(/*! ./latolight.ttf */ "./src/assets/fonts/lato/latolight.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_15___ = __webpack_require__(/*! ./latolightitalic.woff2 */ "./src/assets/fonts/lato/latolightitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_16___ = __webpack_require__(/*! ./latolightitalic.woff */ "./src/assets/fonts/lato/latolightitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_17___ = __webpack_require__(/*! ./latolightitalic.ttf */ "./src/assets/fonts/lato/latolightitalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_18___ = __webpack_require__(/*! ./latoregular.woff2 */ "./src/assets/fonts/lato/latoregular.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_19___ = __webpack_require__(/*! ./latoregular.woff */ "./src/assets/fonts/lato/latoregular.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_20___ = __webpack_require__(/*! ./latoregular.ttf */ "./src/assets/fonts/lato/latoregular.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_21___ = __webpack_require__(/*! ./latoitalic.woff2 */ "./src/assets/fonts/lato/latoitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_22___ = __webpack_require__(/*! ./latoitalic.woff */ "./src/assets/fonts/lato/latoitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_23___ = __webpack_require__(/*! ./latoitalic.ttf */ "./src/assets/fonts/lato/latoitalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_24___ = __webpack_require__(/*! ./latomedium.woff2 */ "./src/assets/fonts/lato/latomedium.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_25___ = __webpack_require__(/*! ./latomedium.woff */ "./src/assets/fonts/lato/latomedium.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_26___ = __webpack_require__(/*! ./latomedium.ttf */ "./src/assets/fonts/lato/latomedium.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_27___ = __webpack_require__(/*! ./latomediumitalic.woff2 */ "./src/assets/fonts/lato/latomediumitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_28___ = __webpack_require__(/*! ./latomediumitalic.woff */ "./src/assets/fonts/lato/latomediumitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_29___ = __webpack_require__(/*! ./latomediumitalic.ttf */ "./src/assets/fonts/lato/latomediumitalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_30___ = __webpack_require__(/*! ./latosemibold.woff2 */ "./src/assets/fonts/lato/latosemibold.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_31___ = __webpack_require__(/*! ./latosemibold.woff */ "./src/assets/fonts/lato/latosemibold.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_32___ = __webpack_require__(/*! ./latosemibold.ttf */ "./src/assets/fonts/lato/latosemibold.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_33___ = __webpack_require__(/*! ./latosemibolditalic.woff2 */ "./src/assets/fonts/lato/latosemibolditalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_34___ = __webpack_require__(/*! ./latosemibolditalic.woff */ "./src/assets/fonts/lato/latosemibolditalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_35___ = __webpack_require__(/*! ./latosemibolditalic.ttf */ "./src/assets/fonts/lato/latosemibolditalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_36___ = __webpack_require__(/*! ./latobold.woff2 */ "./src/assets/fonts/lato/latobold.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_37___ = __webpack_require__(/*! ./latobold.woff */ "./src/assets/fonts/lato/latobold.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_38___ = __webpack_require__(/*! ./latobold.ttf */ "./src/assets/fonts/lato/latobold.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_39___ = __webpack_require__(/*! ./latobolditalic.woff2 */ "./src/assets/fonts/lato/latobolditalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_40___ = __webpack_require__(/*! ./latobolditalic.woff */ "./src/assets/fonts/lato/latobolditalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_41___ = __webpack_require__(/*! ./latobolditalic.ttf */ "./src/assets/fonts/lato/latobolditalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_42___ = __webpack_require__(/*! ./latoheavy.woff2 */ "./src/assets/fonts/lato/latoheavy.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_43___ = __webpack_require__(/*! ./latoheavy.woff */ "./src/assets/fonts/lato/latoheavy.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_44___ = __webpack_require__(/*! ./latoheavy.ttf */ "./src/assets/fonts/lato/latoheavy.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_45___ = __webpack_require__(/*! ./latoheavyitalic.woff2 */ "./src/assets/fonts/lato/latoheavyitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_46___ = __webpack_require__(/*! ./latoheavyitalic.woff */ "./src/assets/fonts/lato/latoheavyitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_47___ = __webpack_require__(/*! ./latoheavyitalic.ttf */ "./src/assets/fonts/lato/latoheavyitalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_48___ = __webpack_require__(/*! ./latoblack.woff2 */ "./src/assets/fonts/lato/latoblack.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_49___ = __webpack_require__(/*! ./latoblack.woff */ "./src/assets/fonts/lato/latoblack.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_50___ = __webpack_require__(/*! ./latoblack.ttf */ "./src/assets/fonts/lato/latoblack.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_51___ = __webpack_require__(/*! ./latoblackitalic.woff2 */ "./src/assets/fonts/lato/latoblackitalic.woff2");
var ___CSS_LOADER_URL_PURE_IMPORT_52___ = __webpack_require__(/*! ./latoblackitalic.woff */ "./src/assets/fonts/lato/latoblackitalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_53___ = __webpack_require__(/*! ./latoblackitalic.ttf */ "./src/assets/fonts/lato/latoblackitalic.ttf");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
var ___CSS_LOADER_URL_IMPORT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_3___);
var ___CSS_LOADER_URL_IMPORT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_4___);
var ___CSS_LOADER_URL_IMPORT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_5___);
var ___CSS_LOADER_URL_IMPORT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_6___);
var ___CSS_LOADER_URL_IMPORT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_7___);
var ___CSS_LOADER_URL_IMPORT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_8___);
var ___CSS_LOADER_URL_IMPORT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_9___);
var ___CSS_LOADER_URL_IMPORT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_10___);
var ___CSS_LOADER_URL_IMPORT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_11___);
var ___CSS_LOADER_URL_IMPORT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_12___);
var ___CSS_LOADER_URL_IMPORT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_13___);
var ___CSS_LOADER_URL_IMPORT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_14___);
var ___CSS_LOADER_URL_IMPORT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_15___);
var ___CSS_LOADER_URL_IMPORT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_16___);
var ___CSS_LOADER_URL_IMPORT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_17___);
var ___CSS_LOADER_URL_IMPORT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_18___);
var ___CSS_LOADER_URL_IMPORT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_19___);
var ___CSS_LOADER_URL_IMPORT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_20___);
var ___CSS_LOADER_URL_IMPORT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_21___);
var ___CSS_LOADER_URL_IMPORT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_22___);
var ___CSS_LOADER_URL_IMPORT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_23___);
var ___CSS_LOADER_URL_IMPORT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_24___);
var ___CSS_LOADER_URL_IMPORT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_25___);
var ___CSS_LOADER_URL_IMPORT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_26___);
var ___CSS_LOADER_URL_IMPORT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_27___);
var ___CSS_LOADER_URL_IMPORT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_28___);
var ___CSS_LOADER_URL_IMPORT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_29___);
var ___CSS_LOADER_URL_IMPORT_30___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_30___);
var ___CSS_LOADER_URL_IMPORT_31___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_31___);
var ___CSS_LOADER_URL_IMPORT_32___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_32___);
var ___CSS_LOADER_URL_IMPORT_33___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_33___);
var ___CSS_LOADER_URL_IMPORT_34___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_34___);
var ___CSS_LOADER_URL_IMPORT_35___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_35___);
var ___CSS_LOADER_URL_IMPORT_36___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_36___);
var ___CSS_LOADER_URL_IMPORT_37___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_37___);
var ___CSS_LOADER_URL_IMPORT_38___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_38___);
var ___CSS_LOADER_URL_IMPORT_39___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_39___);
var ___CSS_LOADER_URL_IMPORT_40___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_40___);
var ___CSS_LOADER_URL_IMPORT_41___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_41___);
var ___CSS_LOADER_URL_IMPORT_42___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_42___);
var ___CSS_LOADER_URL_IMPORT_43___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_43___);
var ___CSS_LOADER_URL_IMPORT_44___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_44___);
var ___CSS_LOADER_URL_IMPORT_45___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_45___);
var ___CSS_LOADER_URL_IMPORT_46___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_46___);
var ___CSS_LOADER_URL_IMPORT_47___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_47___);
var ___CSS_LOADER_URL_IMPORT_48___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_48___);
var ___CSS_LOADER_URL_IMPORT_49___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_49___);
var ___CSS_LOADER_URL_IMPORT_50___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_50___);
var ___CSS_LOADER_URL_IMPORT_51___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_51___);
var ___CSS_LOADER_URL_IMPORT_52___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_52___);
var ___CSS_LOADER_URL_IMPORT_53___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_53___);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Hairline\"), local(\"Lato-Hairline\"), url(" + ___CSS_LOADER_URL_IMPORT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") format(\"truetype\");\n  font-weight: 100;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Hairline Italic\"), local(\"Lato-HairlineItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_3___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") format(\"truetype\");\n  font-weight: 100;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Thin\"), local(\"Lato-Thin\"), url(" + ___CSS_LOADER_URL_IMPORT_6___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_7___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_8___ + ") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Thin Italic\"), local(\"Lato-ThinItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_11___ + ") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(" + ___CSS_LOADER_URL_IMPORT_12___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_13___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_14___ + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_16___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_17___ + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_19___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_20___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_22___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_23___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Medium\"), local(\"Lato-Medium\"), url(" + ___CSS_LOADER_URL_IMPORT_24___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_25___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_26___ + ") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Medium Italic\"), local(\"Lato-MediumItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_27___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_28___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_29___ + ") format(\"truetype\");\n  font-weight: 500;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Semibold\"), local(\"Lato-Semibold\"), url(" + ___CSS_LOADER_URL_IMPORT_30___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_31___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_32___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Semibold Italic\"), local(\"Lato-SemiboldItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_33___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_34___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_35___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(" + ___CSS_LOADER_URL_IMPORT_36___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_37___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_38___ + ") format(\"truetype\");\n  font-weight: 700;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_39___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_40___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_41___ + ") format(\"truetype\");\n  font-weight: 700;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Heavy\"), local(\"Lato-Heavy\"), url(" + ___CSS_LOADER_URL_IMPORT_42___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_43___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_44___ + ") format(\"truetype\");\n  font-weight: 800;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Heavy Italic\"), local(\"Lato-HeavyItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_45___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_46___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_47___ + ") format(\"truetype\");\n  font-weight: 800;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Black\"), local(\"Lato-Black\"), url(" + ___CSS_LOADER_URL_IMPORT_48___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_49___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_50___ + ") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Lato';\n  src: local(\"Lato Black Italic\"), local(\"Lato-BlackItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_51___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_IMPORT_52___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_53___ + ") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic; }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/assets/fonts/lato/lato.scss"],"names":[],"mappings":"AAAA;EACI,mBAAmB;EACnB,iNAAmL;EACnL,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,8NAAkN;EAClN,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,yMAA+J;EAC/J,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,wNAA8L;EAC9L,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,8MAAoK;EACpK,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,2NAAmM;EACnM,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,kNAA8K;EAC9K,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,gNAAyK;EACzK,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,gNAAyK;EACzK,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,6NAAwM;EACxM,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,oNAAmL;EACnL,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,iOAAkN;EAClN,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,4MAA+J;EAC/J,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,yNAA8L;EAC9L,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,8MAAoK;EACpK,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,2NAAmM;EACnM,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,8MAAoK;EACpK,gBAAgB;EAChB,kBAAkB,EAAA;;AAEtB;EACI,mBAAmB;EACnB,2NAAmM;EACnM,gBAAgB;EAChB,kBAAkB,EAAA","file":"lato.scss","sourcesContent":["@font-face {\n    font-family: 'Lato';\n    src: local('Lato Hairline'), local('Lato-Hairline'), url('latohairline.woff2') format('woff2'), url('latohairline.woff') format('woff'), url('latohairline.ttf') format('truetype');\n    font-weight: 100;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Hairline Italic'), local('Lato-HairlineItalic'), url('latohairlineitalic.woff2') format('woff2'), url('latohairlineitalic.woff') format('woff'), url('latohairlineitalic.ttf') format('truetype');\n    font-weight: 100;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Thin'), local('Lato-Thin'), url('latothin.woff2') format('woff2'), url('latothin.woff') format('woff'), url('latothin.ttf') format('truetype');\n    font-weight: 200;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Thin Italic'), local('Lato-ThinItalic'), url('latothinitalic.woff2') format('woff2'), url('latothinitalic.woff') format('woff'), url('latothinitalic.ttf') format('truetype');\n    font-weight: 200;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Light'), local('Lato-Light'), url('latolight.woff2') format('woff2'), url('latolight.woff') format('woff'), url('latolight.ttf') format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Light Italic'), local('Lato-LightItalic'), url('latolightitalic.woff2') format('woff2'), url('latolightitalic.woff') format('woff'), url('latolightitalic.ttf') format('truetype');\n    font-weight: 300;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Regular'), local('Lato-Regular'), url('latoregular.woff2') format('woff2'), url('latoregular.woff') format('woff'), url('latoregular.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Italic'), local('Lato-Italic'), url('latoitalic.woff2') format('woff2'), url('latoitalic.woff') format('woff'), url('latoitalic.ttf') format('truetype');\n    font-weight: 400;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Medium'), local('Lato-Medium'), url('latomedium.woff2') format('woff2'), url('latomedium.woff') format('woff'), url('latomedium.ttf') format('truetype');\n    font-weight: 500;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Medium Italic'), local('Lato-MediumItalic'), url('latomediumitalic.woff2') format('woff2'), url('latomediumitalic.woff') format('woff'), url('latomediumitalic.ttf') format('truetype');\n    font-weight: 500;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Semibold'), local('Lato-Semibold'), url('latosemibold.woff2') format('woff2'), url('latosemibold.woff') format('woff'), url('latosemibold.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Semibold Italic'), local('Lato-SemiboldItalic'), url('latosemibolditalic.woff2') format('woff2'), url('latosemibolditalic.woff') format('woff'), url('latosemibolditalic.ttf') format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Bold'), local('Lato-Bold'), url('latobold.woff2') format('woff2'), url('latobold.woff') format('woff'), url('latobold.ttf') format('truetype');\n    font-weight: 700;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url('latobolditalic.woff2') format('woff2'), url('latobolditalic.woff') format('woff'), url('latobolditalic.ttf') format('truetype');\n    font-weight: 700;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Heavy'), local('Lato-Heavy'), url('latoheavy.woff2') format('woff2'), url('latoheavy.woff') format('woff'), url('latoheavy.ttf') format('truetype');\n    font-weight: 800;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Heavy Italic'), local('Lato-HeavyItalic'), url('latoheavyitalic.woff2') format('woff2'), url('latoheavyitalic.woff') format('woff'), url('latoheavyitalic.ttf') format('truetype');\n    font-weight: 800;\n    font-style: italic;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Black'), local('Lato-Black'), url('latoblack.woff2') format('woff2'), url('latoblack.woff') format('woff'), url('latoblack.ttf') format('truetype');\n    font-weight: 900;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Lato';\n    src: local('Lato Black Italic'), local('Lato-BlackItalic'), url('latoblackitalic.woff2') format('woff2'), url('latoblackitalic.woff') format('woff'), url('latoblackitalic.ttf') format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/montserrat/stylesheet.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/fonts/montserrat/stylesheet.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./Montserrat-Light.eot */ "./src/assets/fonts/montserrat/Montserrat-Light.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ./Montserrat-Light.woff */ "./src/assets/fonts/montserrat/Montserrat-Light.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ./Montserrat-Light.ttf */ "./src/assets/fonts/montserrat/Montserrat-Light.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_3___ = __webpack_require__(/*! ./Montserrat-MediumItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-MediumItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_4___ = __webpack_require__(/*! ./Montserrat-MediumItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-MediumItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_5___ = __webpack_require__(/*! ./Montserrat-MediumItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-MediumItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_6___ = __webpack_require__(/*! ./Montserrat-Thin.eot */ "./src/assets/fonts/montserrat/Montserrat-Thin.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_7___ = __webpack_require__(/*! ./Montserrat-Thin.woff */ "./src/assets/fonts/montserrat/Montserrat-Thin.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_8___ = __webpack_require__(/*! ./Montserrat-Thin.ttf */ "./src/assets/fonts/montserrat/Montserrat-Thin.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_9___ = __webpack_require__(/*! ./Montserrat-ExtraLightItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_10___ = __webpack_require__(/*! ./Montserrat-ExtraLightItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_11___ = __webpack_require__(/*! ./Montserrat-ExtraLightItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_12___ = __webpack_require__(/*! ./Montserrat-BoldItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-BoldItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_13___ = __webpack_require__(/*! ./Montserrat-BoldItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-BoldItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_14___ = __webpack_require__(/*! ./Montserrat-BoldItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-BoldItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_15___ = __webpack_require__(/*! ./Montserrat-SemiBold.eot */ "./src/assets/fonts/montserrat/Montserrat-SemiBold.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_16___ = __webpack_require__(/*! ./Montserrat-SemiBold.woff */ "./src/assets/fonts/montserrat/Montserrat-SemiBold.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_17___ = __webpack_require__(/*! ./Montserrat-SemiBold.ttf */ "./src/assets/fonts/montserrat/Montserrat-SemiBold.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_18___ = __webpack_require__(/*! ./Montserrat-ExtraLight.eot */ "./src/assets/fonts/montserrat/Montserrat-ExtraLight.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_19___ = __webpack_require__(/*! ./Montserrat-ExtraLight.woff */ "./src/assets/fonts/montserrat/Montserrat-ExtraLight.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_20___ = __webpack_require__(/*! ./Montserrat-ExtraLight.ttf */ "./src/assets/fonts/montserrat/Montserrat-ExtraLight.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_21___ = __webpack_require__(/*! ./Montserrat-ExtraBoldItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_22___ = __webpack_require__(/*! ./Montserrat-ExtraBoldItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_23___ = __webpack_require__(/*! ./Montserrat-ExtraBoldItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_24___ = __webpack_require__(/*! ./Montserrat-Italic.eot */ "./src/assets/fonts/montserrat/Montserrat-Italic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_25___ = __webpack_require__(/*! ./Montserrat-Italic.woff */ "./src/assets/fonts/montserrat/Montserrat-Italic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_26___ = __webpack_require__(/*! ./Montserrat-Italic.ttf */ "./src/assets/fonts/montserrat/Montserrat-Italic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_27___ = __webpack_require__(/*! ./Montserrat-Bold.eot */ "./src/assets/fonts/montserrat/Montserrat-Bold.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_28___ = __webpack_require__(/*! ./Montserrat-Bold.woff */ "./src/assets/fonts/montserrat/Montserrat-Bold.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_29___ = __webpack_require__(/*! ./Montserrat-Bold.ttf */ "./src/assets/fonts/montserrat/Montserrat-Bold.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_30___ = __webpack_require__(/*! ./Montserrat-LightItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-LightItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_31___ = __webpack_require__(/*! ./Montserrat-LightItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-LightItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_32___ = __webpack_require__(/*! ./Montserrat-LightItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-LightItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_33___ = __webpack_require__(/*! ./Montserrat-BlackItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-BlackItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_34___ = __webpack_require__(/*! ./Montserrat-BlackItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-BlackItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_35___ = __webpack_require__(/*! ./Montserrat-BlackItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-BlackItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_36___ = __webpack_require__(/*! ./Montserrat-SemiBoldItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_37___ = __webpack_require__(/*! ./Montserrat-SemiBoldItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_38___ = __webpack_require__(/*! ./Montserrat-SemiBoldItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_39___ = __webpack_require__(/*! ./Montserrat-Regular.eot */ "./src/assets/fonts/montserrat/Montserrat-Regular.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_40___ = __webpack_require__(/*! ./Montserrat-Regular.woff */ "./src/assets/fonts/montserrat/Montserrat-Regular.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_41___ = __webpack_require__(/*! ./Montserrat-Regular.ttf */ "./src/assets/fonts/montserrat/Montserrat-Regular.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_42___ = __webpack_require__(/*! ./Montserrat-Medium.eot */ "./src/assets/fonts/montserrat/Montserrat-Medium.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_43___ = __webpack_require__(/*! ./Montserrat-Medium.woff */ "./src/assets/fonts/montserrat/Montserrat-Medium.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_44___ = __webpack_require__(/*! ./Montserrat-Medium.ttf */ "./src/assets/fonts/montserrat/Montserrat-Medium.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_45___ = __webpack_require__(/*! ./Montserrat-ExtraBold.eot */ "./src/assets/fonts/montserrat/Montserrat-ExtraBold.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_46___ = __webpack_require__(/*! ./Montserrat-ExtraBold.woff */ "./src/assets/fonts/montserrat/Montserrat-ExtraBold.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_47___ = __webpack_require__(/*! ./Montserrat-ExtraBold.ttf */ "./src/assets/fonts/montserrat/Montserrat-ExtraBold.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_48___ = __webpack_require__(/*! ./Montserrat-Black.eot */ "./src/assets/fonts/montserrat/Montserrat-Black.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_49___ = __webpack_require__(/*! ./Montserrat-Black.woff */ "./src/assets/fonts/montserrat/Montserrat-Black.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_50___ = __webpack_require__(/*! ./Montserrat-Black.ttf */ "./src/assets/fonts/montserrat/Montserrat-Black.ttf");
var ___CSS_LOADER_URL_PURE_IMPORT_51___ = __webpack_require__(/*! ./Montserrat-ThinItalic.eot */ "./src/assets/fonts/montserrat/Montserrat-ThinItalic.eot");
var ___CSS_LOADER_URL_PURE_IMPORT_52___ = __webpack_require__(/*! ./Montserrat-ThinItalic.woff */ "./src/assets/fonts/montserrat/Montserrat-ThinItalic.woff");
var ___CSS_LOADER_URL_PURE_IMPORT_53___ = __webpack_require__(/*! ./Montserrat-ThinItalic.ttf */ "./src/assets/fonts/montserrat/Montserrat-ThinItalic.ttf");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
var ___CSS_LOADER_URL_IMPORT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_3___);
var ___CSS_LOADER_URL_IMPORT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_4___);
var ___CSS_LOADER_URL_IMPORT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_5___);
var ___CSS_LOADER_URL_IMPORT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_6___);
var ___CSS_LOADER_URL_IMPORT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_7___);
var ___CSS_LOADER_URL_IMPORT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_8___);
var ___CSS_LOADER_URL_IMPORT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_9___);
var ___CSS_LOADER_URL_IMPORT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_10___);
var ___CSS_LOADER_URL_IMPORT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_11___);
var ___CSS_LOADER_URL_IMPORT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_12___);
var ___CSS_LOADER_URL_IMPORT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_13___);
var ___CSS_LOADER_URL_IMPORT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_14___);
var ___CSS_LOADER_URL_IMPORT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_15___);
var ___CSS_LOADER_URL_IMPORT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_16___);
var ___CSS_LOADER_URL_IMPORT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_17___);
var ___CSS_LOADER_URL_IMPORT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_18___);
var ___CSS_LOADER_URL_IMPORT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_19___);
var ___CSS_LOADER_URL_IMPORT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_20___);
var ___CSS_LOADER_URL_IMPORT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_21___);
var ___CSS_LOADER_URL_IMPORT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_22___);
var ___CSS_LOADER_URL_IMPORT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_23___);
var ___CSS_LOADER_URL_IMPORT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_24___);
var ___CSS_LOADER_URL_IMPORT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_25___);
var ___CSS_LOADER_URL_IMPORT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_26___);
var ___CSS_LOADER_URL_IMPORT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_27___);
var ___CSS_LOADER_URL_IMPORT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_28___);
var ___CSS_LOADER_URL_IMPORT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_29___);
var ___CSS_LOADER_URL_IMPORT_30___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_30___);
var ___CSS_LOADER_URL_IMPORT_31___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_31___);
var ___CSS_LOADER_URL_IMPORT_32___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_32___);
var ___CSS_LOADER_URL_IMPORT_33___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_33___);
var ___CSS_LOADER_URL_IMPORT_34___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_34___);
var ___CSS_LOADER_URL_IMPORT_35___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_35___);
var ___CSS_LOADER_URL_IMPORT_36___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_36___);
var ___CSS_LOADER_URL_IMPORT_37___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_37___);
var ___CSS_LOADER_URL_IMPORT_38___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_38___);
var ___CSS_LOADER_URL_IMPORT_39___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_39___);
var ___CSS_LOADER_URL_IMPORT_40___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_40___);
var ___CSS_LOADER_URL_IMPORT_41___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_41___);
var ___CSS_LOADER_URL_IMPORT_42___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_42___);
var ___CSS_LOADER_URL_IMPORT_43___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_43___);
var ___CSS_LOADER_URL_IMPORT_44___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_44___);
var ___CSS_LOADER_URL_IMPORT_45___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_45___);
var ___CSS_LOADER_URL_IMPORT_46___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_46___);
var ___CSS_LOADER_URL_IMPORT_47___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_47___);
var ___CSS_LOADER_URL_IMPORT_48___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_48___);
var ___CSS_LOADER_URL_IMPORT_49___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_49___);
var ___CSS_LOADER_URL_IMPORT_50___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_50___);
var ___CSS_LOADER_URL_IMPORT_51___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_51___);
var ___CSS_LOADER_URL_IMPORT_52___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_52___);
var ___CSS_LOADER_URL_IMPORT_53___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_53___);
// Module
exports.push([module.i, "/* This stylesheet generated by Transfonter (https://transfonter.org) on October 3, 2017 10:05 PM */\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  src: local(\"Montserrat Light\"), local(\"Montserrat-Light\"), url(" + ___CSS_LOADER_URL_IMPORT_0___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_3___ + ");\n  src: local(\"Montserrat Medium Italic\"), local(\"Montserrat-MediumItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_3___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") format(\"truetype\");\n  font-weight: 500;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_6___ + ");\n  src: local(\"Montserrat Thin\"), local(\"Montserrat-Thin\"), url(" + ___CSS_LOADER_URL_IMPORT_6___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_7___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_8___ + ") format(\"truetype\");\n  font-weight: 100;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ");\n  src: local(\"Montserrat ExtraLight Italic\"), local(\"Montserrat-ExtraLightItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_11___ + ") format(\"truetype\");\n  font-weight: 200;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_12___ + ");\n  src: local(\"Montserrat Bold Italic\"), local(\"Montserrat-BoldItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_12___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_13___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_14___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ");\n  src: local(\"Montserrat SemiBold\"), local(\"Montserrat-SemiBold\"), url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_16___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_17___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ");\n  src: local(\"Montserrat ExtraLight\"), local(\"Montserrat-ExtraLight\"), url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_19___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_20___ + ") format(\"truetype\");\n  font-weight: 200;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ");\n  src: local(\"Montserrat ExtraBold Italic\"), local(\"Montserrat-ExtraBoldItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_22___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_23___ + ") format(\"truetype\");\n  font-weight: 800;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_24___ + ");\n  src: local(\"Montserrat Italic\"), local(\"Montserrat-Italic\"), url(" + ___CSS_LOADER_URL_IMPORT_24___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_25___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_26___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_27___ + ");\n  src: local(\"Montserrat Bold\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_IMPORT_27___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_28___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_29___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_30___ + ");\n  src: local(\"Montserrat Light Italic\"), local(\"Montserrat-LightItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_30___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_31___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_32___ + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_33___ + ");\n  src: local(\"Montserrat Black Italic\"), local(\"Montserrat-BlackItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_33___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_34___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_35___ + ") format(\"truetype\");\n  font-weight: 900;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_36___ + ");\n  src: local(\"Montserrat SemiBold Italic\"), local(\"Montserrat-SemiBoldItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_36___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_37___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_38___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_39___ + ");\n  src: local(\"Montserrat Regular\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_IMPORT_39___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_40___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_41___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_42___ + ");\n  src: local(\"Montserrat Medium\"), local(\"Montserrat-Medium\"), url(" + ___CSS_LOADER_URL_IMPORT_42___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_43___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_44___ + ") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_45___ + ");\n  src: local(\"Montserrat ExtraBold\"), local(\"Montserrat-ExtraBold\"), url(" + ___CSS_LOADER_URL_IMPORT_45___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_46___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_47___ + ") format(\"truetype\");\n  font-weight: 800;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_48___ + ");\n  src: local(\"Montserrat Black\"), local(\"Montserrat-Black\"), url(" + ___CSS_LOADER_URL_IMPORT_48___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_49___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_50___ + ") format(\"truetype\");\n  font-weight: 900;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_IMPORT_51___ + ");\n  src: local(\"Montserrat Thin Italic\"), local(\"Montserrat-ThinItalic\"), url(" + ___CSS_LOADER_URL_IMPORT_51___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_IMPORT_52___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_IMPORT_53___ + ") format(\"truetype\");\n  font-weight: 100;\n  font-style: italic; }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/assets/fonts/montserrat/stylesheet.scss"],"names":[],"mappings":"AAAA,mGAAA;AAEA;EACC,yBAAyB;EACzB,uCAAgC;EAChC,mOAG+C;EAC/C,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,uCAAuC;EACvC,kPAGsD;EACtD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,uCAA+B;EAC/B,iOAG8C;EAC9C,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,uCAA2C;EAC3C,4PAG0D;EAC1D,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAqC;EACrC,iPAGoD;EACpD,iBAAiB;EACjB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAmC;EACnC,4OAGkD;EAClD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAqC;EACrC,gPAGoD;EACpD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAA0C;EAC1C,2PAGyD;EACzD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAiC;EACjC,wOAGgD;EAChD,mBAAmB;EACnB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAA+B;EAC/B,oOAG8C;EAC9C,iBAAiB;EACjB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAsC;EACtC,mPAGqD;EACrD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAsC;EACtC,mPAGqD;EACrD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAyC;EACzC,yPAGwD;EACxD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAkC;EAClC,0OAGiD;EACjD,mBAAmB;EACnB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAiC;EACjC,wOAGgD;EAChD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAoC;EACpC,8OAGmD;EACnD,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAgC;EAChC,sOAG+C;EAC/C,gBAAgB;EAChB,kBAAkB,EAAA;;AAGnB;EACC,yBAAyB;EACzB,wCAAqC;EACrC,iPAGoD;EACpD,gBAAgB;EAChB,kBAAkB,EAAA","file":"stylesheet.scss","sourcesContent":["/* This stylesheet generated by Transfonter (https://transfonter.org) on October 3, 2017 10:05 PM */\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Light.eot');\n\tsrc: local('Montserrat Light'), local('Montserrat-Light'),\n\t\turl('Montserrat-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Light.woff') format('woff'),\n\t\turl('Montserrat-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-MediumItalic.eot');\n\tsrc: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),\n\t\turl('Montserrat-MediumItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-MediumItalic.woff') format('woff'),\n\t\turl('Montserrat-MediumItalic.ttf') format('truetype');\n\tfont-weight: 500;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Thin.eot');\n\tsrc: local('Montserrat Thin'), local('Montserrat-Thin'),\n\t\turl('Montserrat-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Thin.woff') format('woff'),\n\t\turl('Montserrat-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-ExtraLightItalic.eot');\n\tsrc: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'),\n\t\turl('Montserrat-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-ExtraLightItalic.woff') format('woff'),\n\t\turl('Montserrat-ExtraLightItalic.ttf') format('truetype');\n\tfont-weight: 200;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-BoldItalic.eot');\n\tsrc: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),\n\t\turl('Montserrat-BoldItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-BoldItalic.woff') format('woff'),\n\t\turl('Montserrat-BoldItalic.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-SemiBold.eot');\n\tsrc: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),\n\t\turl('Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-SemiBold.woff') format('woff'),\n\t\turl('Montserrat-SemiBold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-ExtraLight.eot');\n\tsrc: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),\n\t\turl('Montserrat-ExtraLight.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-ExtraLight.woff') format('woff'),\n\t\turl('Montserrat-ExtraLight.ttf') format('truetype');\n\tfont-weight: 200;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-ExtraBoldItalic.eot');\n\tsrc: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'),\n\t\turl('Montserrat-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-ExtraBoldItalic.woff') format('woff'),\n\t\turl('Montserrat-ExtraBoldItalic.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Italic.eot');\n\tsrc: local('Montserrat Italic'), local('Montserrat-Italic'),\n\t\turl('Montserrat-Italic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Italic.woff') format('woff'),\n\t\turl('Montserrat-Italic.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Bold.eot');\n\tsrc: local('Montserrat Bold'), local('Montserrat-Bold'),\n\t\turl('Montserrat-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Bold.woff') format('woff'),\n\t\turl('Montserrat-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-LightItalic.eot');\n\tsrc: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),\n\t\turl('Montserrat-LightItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-LightItalic.woff') format('woff'),\n\t\turl('Montserrat-LightItalic.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-BlackItalic.eot');\n\tsrc: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'),\n\t\turl('Montserrat-BlackItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-BlackItalic.woff') format('woff'),\n\t\turl('Montserrat-BlackItalic.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-SemiBoldItalic.eot');\n\tsrc: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),\n\t\turl('Montserrat-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-SemiBoldItalic.woff') format('woff'),\n\t\turl('Montserrat-SemiBoldItalic.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Regular.eot');\n\tsrc: local('Montserrat Regular'), local('Montserrat-Regular'),\n\t\turl('Montserrat-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Regular.woff') format('woff'),\n\t\turl('Montserrat-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Medium.eot');\n\tsrc: local('Montserrat Medium'), local('Montserrat-Medium'),\n\t\turl('Montserrat-Medium.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Medium.woff') format('woff'),\n\t\turl('Montserrat-Medium.ttf') format('truetype');\n\tfont-weight: 500;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-ExtraBold.eot');\n\tsrc: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),\n\t\turl('Montserrat-ExtraBold.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-ExtraBold.woff') format('woff'),\n\t\turl('Montserrat-ExtraBold.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-Black.eot');\n\tsrc: local('Montserrat Black'), local('Montserrat-Black'),\n\t\turl('Montserrat-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-Black.woff') format('woff'),\n\t\turl('Montserrat-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Montserrat';\n\tsrc: url('Montserrat-ThinItalic.eot');\n\tsrc: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),\n\t\turl('Montserrat-ThinItalic.eot?#iefix') format('embedded-opentype'),\n\t\turl('Montserrat-ThinItalic.woff') format('woff'),\n\t\turl('Montserrat-ThinItalic.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/Layouts/Btn/Btn.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/componentns/Layouts/Btn/Btn.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Btn_redLarge__2Ne2t {\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  background: #F3473C;\n  display: inline-block;\n  border-radius: 30.5px;\n  cursor: pointer;\n  width: 100%; }\n  .Btn_redLarge__2Ne2t:hover {\n    background: #DB3D33; }\n\n.Btn_red__1pZQN, .Btn_black__1Uku5, .Btn_blackTransparent__1TgDK, .Btn_green__2a6JY {\n  font-weight: bold;\n  text-align: center;\n  height: 38px;\n  line-height: 38px;\n  width: 100%;\n  display: inline-block;\n  border-radius: 21.5px;\n  cursor: pointer; }\n\n.Btn_red__1pZQN {\n  color: #fff;\n  background: #F3473C; }\n  .Btn_red__1pZQN:hover {\n    background: #DB3D33; }\n\n.Btn_black__1Uku5 {\n  background: #000;\n  color: #fff; }\n\n.Btn_blackTransparent__1TgDK {\n  background: transparent;\n  color: #000;\n  border: 3px solid #000; }\n\n.Btn_green__2a6JY {\n  background: linear-gradient(90deg, #4EBF7B 0%, #1E8E4B 100%);\n  color: #fff; }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/componentns/Layouts/Btn/Btn.module.scss","/Users/petrpozoga/WIB/where-better/src/styles/var.scss"],"names":[],"mappings":"AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,mBCNiB;EDOjB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,WAAW,EAAA;EARb;IAUI,mBAAmB,EAAA;;AAIvB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,qBAAqB;EACrB,qBAAqB;EACrB,eAAe,EAAA;;AAGjB;EACE,WAAW;EACX,mBC7BiB,EAAA;ED2BnB;IAII,mBAAmB,EAAA;;AAIvB;EACE,gBAAgB;EAChB,WAAW,EAAA;;AAGb;EACE,uBAAuB;EACvB,WAAW;EACX,sBAAsB,EAAA;;AAGxB;EACE,4DAA4D;EAC5D,WAAW,EAAA","file":"Btn.module.scss","sourcesContent":["@import \"../../../styles/var\";\n\n.redLarge {\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  background: $red-color;\n  display: inline-block;\n  border-radius: 30.5px;\n  cursor: pointer;\n  width: 100%;\n  &:hover{\n    background: #DB3D33;\n  }\n}\n\n.red, .black, .blackTransparent, .green {\n  font-weight: bold;\n  text-align: center;\n  height: 38px;\n  line-height: 38px;\n  width: 100%;\n  display: inline-block;\n  border-radius: 21.5px;\n  cursor: pointer;\n}\n\n.red {\n  color: #fff;\n  background: $red-color;\n  &:hover{\n    background: #DB3D33;\n  }\n}\n\n.black {\n  background: #000;\n  color: #fff;\n}\n\n.blackTransparent {\n  background: transparent;\n  color: #000;\n  border: 3px solid #000;\n}\n\n.green{\n  background: linear-gradient(90deg, #4EBF7B 0%, #1E8E4B 100%);\n  color: #fff;\n}\n","$red-color: #F3473C;\n$gray-color: #F6F7F9;\n\n"]}]);
// Exports
exports.locals = {
	"redLarge": "Btn_redLarge__2Ne2t",
	"red": "Btn_red__1pZQN",
	"black": "Btn_black__1Uku5",
	"blackTransparent": "Btn_blackTransparent__1TgDK",
	"green": "Btn_green__2a6JY"
};

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/TopSidebar/TopSidebar.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/componentns/TopSidebar/TopSidebar.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".TopSidebar_topSidebar__2rGnQ {\n  max-width: 1282px;\n  margin: 25px auto 40px auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative; }\n  .TopSidebar_topSidebar__2rGnQ > a {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n.TopSidebar_pickRegion__2fGmp {\n  display: flex;\n  align-items: center; }\n  .TopSidebar_pickRegion__2fGmp > svg {\n    margin-left: 16px; }\n\n@media (max-width: 1330px) {\n  .TopSidebar_topSidebar__2rGnQ {\n    max-width: 100%;\n    margin: 25px 20px 40px 20px; } }\n\n@media (max-width: 950px) {\n  .TopSidebar_topSidebar__2rGnQ .TopSidebar_pickRegion__2fGmp > div {\n    display: none; } }\n\n@media (max-width: 700px) {\n  .TopSidebar_topSidebar__2rGnQ {\n    margin-bottom: 25px;\n    height: 19px; }\n    .TopSidebar_topSidebar__2rGnQ > a {\n      height: 19px; }\n    .TopSidebar_topSidebar__2rGnQ > button {\n      display: none; }\n  .TopSidebar_pickRegion__2fGmp {\n    display: none; }\n  .TopSidebar_mobileSideBar__1jGkT {\n    background: rgba(0, 0, 0, 0.85);\n    height: 60px;\n    padding: 0 17px;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100vw;\n    z-index: 5;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .TopSidebar_mobileSideBar__1jGkT > svg {\n      cursor: pointer; }\n  .TopSidebar_mobileBtn__xso4m {\n    max-width: 220px;\n    height: 33px;\n    line-height: 33px; } }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/componentns/TopSidebar/TopSidebar.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB,EAAA;EANpB;IASI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC,EAAA;;AAIpC;EACE,aAAa;EACb,mBAAmB,EAAA;EAFrB;IAKI,iBAAiB,EAAA;;AAIrB;EACE;IACE,eAAe;IACf,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IAEI,aAAa,EAAA,EACd;;AAIL;EACE;IACE,mBAAmB;IACnB,YAAY,EAAA;IAFd;MAII,YAAY,EAAA;IAJhB;MAOI,aAAa,EAAA;EAGjB;IACE,aAAa,EAAA;EAGf;IACE,+BAA+B;IAC/B,YAAY;IACZ,eAAe;IACf,eAAe;IACf,OAAO;IACP,SAAS;IACT,YAAY;IACZ,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,8BAA8B,EAAA;IAXhC;MAaI,eAAe,EAAA;EAGnB;IACE,gBAAgB;IAChB,YAAY;IACZ,iBAAiB,EAAA,EAClB","file":"TopSidebar.module.scss","sourcesContent":[".topSidebar {\n  max-width: 1282px;\n  margin: 25px auto 40px auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  & > a {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.pickRegion {\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    margin-left: 16px;\n  }\n}\n\n@media (max-width: 1330px) {\n  .topSidebar {\n    max-width: 100%;\n    margin: 25px 20px 40px 20px;\n  }\n}\n\n@media (max-width: 950px) {\n  .topSidebar {\n    .pickRegion>div{\n      display: none;\n    }\n  }\n}\n\n@media (max-width: 700px) {\n  .topSidebar {\n    margin-bottom: 25px;\n    height: 19px;\n    &>a{\n      height: 19px;\n    }\n    &>button {\n      display: none;\n    }\n  }\n  .pickRegion {\n    display: none;\n  }\n\n  .mobileSideBar {\n    background: rgba(0, 0, 0, 0.85);\n    height: 60px;\n    padding: 0 17px;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100vw;\n    z-index: 5;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    &>svg {\n      cursor: pointer;\n    }\n  }\n  .mobileBtn {\n    max-width: 220px;\n    height: 33px;\n    line-height: 33px;\n  }\n}\n\n\n"]}]);
// Exports
exports.locals = {
	"topSidebar": "TopSidebar_topSidebar__2rGnQ",
	"pickRegion": "TopSidebar_pickRegion__2fGmp",
	"mobileSideBar": "TopSidebar_mobileSideBar__1jGkT",
	"mobileBtn": "TopSidebar_mobileBtn__xso4m"
};

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/app.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/app.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  border-radius: 0;\n  outline: none;\n  list-style: none;\n  text-decoration: none; }\n\nhtml, body {\n  font: 500  16px 'Montserrat', sans-serif; }\n\nbody {\n  padding-bottom: 0 !important; }\n\n#App {\n  min-height: 100vh;\n  overflow: hidden auto; }\n  #App .container {\n    max-width: 1077px;\n    margin: 0 auto; }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/styles/app.scss"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,qBAAqB,EAAA;;AAGvB;EACE,wCAAwC,EAAA;;AAG1C;EACE,4BAA4B,EAAA;;AAG9B;EACE,iBAAiB;EACjB,qBAAqB,EAAA;EAFvB;IAII,iBAAiB;IACjB,cAAc,EAAA","file":"app.scss","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  border-radius: 0;\n  outline: none;\n  list-style: none;\n  text-decoration: none;\n}\n\nhtml, body {\n  font: 500  16px 'Montserrat', sans-serif;\n}\n\nbody{\n  padding-bottom: 0 !important;\n}\n\n#App {\n  min-height: 100vh;\n  overflow: hidden auto;\n  .container{\n    max-width: 1077px;\n    margin: 0 auto;\n  }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/hamburger.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/hamburger.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 0px 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.7; }\n  .hamburger.is-active:hover {\n    opacity: 0.7; }\n  .hamburger.is-active .hamburger-inner,\n  .hamburger.is-active .hamburger-inner::before,\n  .hamburger.is-active .hamburger-inner::after {\n    background-color: #000; }\n\n.hamburger-box {\n  width: 30px;\n  height: 21px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1.5px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 30px;\n    height: 3px;\n    background-color: #000;\n    border-radius: 50px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -9px; }\n  .hamburger-inner::after {\n    bottom: -9px; }\n\n/*\n   * Slider\n   */\n.hamburger--slider .hamburger-inner {\n  top: 1.5px; }\n  .hamburger--slider .hamburger-inner::before {\n    top: 9px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider .hamburger-inner::after {\n    top: 18px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  transform: translate3d(0, 9px, 0) rotate(45deg); }\n  .hamburger--slider.is-active .hamburger-inner::before {\n    transform: rotate(-45deg) translate3d(-4.28571px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider.is-active .hamburger-inner::after {\n    transform: translate3d(0, -18px, 0) rotate(-90deg); }\n\n@media (max-width: 950px) {\n  .hamburger-box {\n    width: 25px; }\n  .hamburger-inner {\n    display: block;\n    top: 50%;\n    margin-top: -1.5px; }\n    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n      width: 25px;\n      height: 3px;\n      background-color: #000;\n      border-radius: 50px;\n      position: absolute;\n      transition-property: transform;\n      transition-duration: 0.15s;\n      transition-timing-function: ease; }\n    .hamburger-inner::before, .hamburger-inner::after {\n      content: \"\";\n      display: block; }\n    .hamburger-inner::before {\n      top: -9px; }\n    .hamburger-inner::after {\n      bottom: -9px; } }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/styles/hamburger.scss"],"names":[],"mappings":"AACA;;;;;;EAKE;AA8BF;EACE,gBA1BuB;EA2BvB,qBAAqB;EACrB,eAAe;EAEf,4CAAoC;EAApC,oCAAoC;EAApC,oDAAoC;EACpC,0BAA0B;EAC1B,kCAAkC;EAGlC,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,6BAA6B;EAC7B,SAAS;EACT,SAAS;EACT,iBAAiB,EAAA;EAhBnB;IAsBM,YAxCuB,EAAA;EAkB7B;IA+BQ,YAjDqB,EAAA;EAkB7B;;;IAsCM,sBA1DsB,EAAA;;AA+D5B;EACE,WAnE0B;EAoE1B,YAAkE;EAClE,qBAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EACE,cAAc;EACd,QAAQ;EACR,kBAAwC,EAAA;EAH1C;IAQI,WAjFwB;IAkFxB,WAjFwB;IAkFxB,sBAhFwB;IAiFxB,mBAhFgC;IAiFhC,kBAAkB;IAClB,8BAA8B;IAC9B,0BAA0B;IAC1B,gCAAgC,EAAA;EAfpC;IAoBI,WAAW;IACX,cAAc,EAAA;EArBlB;IAyBI,SAA8D,EAAA;EAzBlE;IA6BI,YAAiE,EAAA;;AAMnE;;IA9DE;AAiEF;EAEI,UAAgC,EAAA;EAFpC;IAKM,QAAuD;IACvD,uCAAuC;IACvC,gCAAgC;IAChC,0BAA0B,EAAA;EARhC;IAYM,SAAmE,EAAA;;AAZzE;EAoBM,+CAAqD,EAAA;EApB3D;IAuBQ,0DAAoG;IACpG,UAAU,EAAA;EAxBlB;IA4BQ,kDAA2D,EAAA;;AAOrE;EACC;IACE,WAAW,EAAA;EAGZ;IACE,cAAc;IACd,QAAQ;IACR,kBAAwC,EAAA;IAH1C;MAQI,WAAW;MACX,WA/JsB;MAgKtB,sBA9JsB;MA+JtB,mBA9J8B;MA+J9B,kBAAkB;MAClB,8BAA8B;MAC9B,0BAA0B;MAC1B,gCAAgC,EAAA;IAfpC;MAoBI,WAAW;MACX,cAAc,EAAA;IArBlB;MAyBI,SAA8D,EAAA;IAzBlE;MA6BI,YAAiE,EAAA,EAClE","file":"hamburger.scss","sourcesContent":["@charset \"UTF-8\";\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n// Settings\n// ==================================================\n$hamburger-padding-x: 0px !default;\n$hamburger-padding-y: 0px !default;\n$hamburger-layer-width: 30px !default;\n$hamburger-layer-height: 3px !default;\n$hamburger-layer-spacing: 6px !default;\n$hamburger-layer-color: #000 !default;\n$hamburger-layer-border-radius: 50px !default;\n$hamburger-hover-opacity: 0.7 !default;\n$hamburger-active-layer-color: $hamburger-layer-color !default;\n$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;\n\n// To use CSS filters as the hover effect instead of opacity,\n// set $hamburger-hover-use-filter as true and\n// change the value of $hamburger-hover-filter accordingly.\n$hamburger-hover-use-filter: false !default;\n$hamburger-hover-filter: opacity(50%) !default;\n$hamburger-active-hover-filter: $hamburger-hover-filter !default;\n\n// Types (Remove or comment out what you don’t need)\n// ==================================================\n$hamburger-types: (\n        slider,\n) !default;\n\n// Base Hamburger (We need this)\n.hamburger {\n  padding: $hamburger-padding-y $hamburger-padding-x;\n  display: inline-block;\n  cursor: pointer;\n\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n\n  // Normalize (<button>)\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    @if $hamburger-hover-use-filter == true {\n      filter: $hamburger-hover-filter;\n    } @else {\n      opacity: $hamburger-hover-opacity;\n    }\n  }\n\n  &.is-active {\n    &:hover {\n      @if $hamburger-hover-use-filter == true {\n        filter: $hamburger-active-hover-filter;\n      } @else {\n        opacity: $hamburger-active-hover-opacity;\n      }\n    }\n\n    .hamburger-inner,\n    .hamburger-inner::before,\n    .hamburger-inner::after {\n      background-color: $hamburger-active-layer-color;\n    }\n  }\n}\n\n.hamburger-box {\n  width: $hamburger-layer-width;\n  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: $hamburger-layer-height / -2;\n\n  &,\n  &::before,\n  &::after {\n    width: $hamburger-layer-width;\n    height: $hamburger-layer-height;\n    background-color: $hamburger-layer-color;\n    border-radius: $hamburger-layer-border-radius;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n  }\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n  }\n\n  &::before {\n    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n\n  &::after {\n    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n}\n\n// ==================================================\n@if index($hamburger-types, slider) {\n  /*\n   * Slider\n   */\n  .hamburger--slider {\n    .hamburger-inner {\n      top: $hamburger-layer-height / 2;\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition-property: transform, opacity;\n        transition-timing-function: ease;\n        transition-duration: 0.15s;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;\n\n        transform: translate3d(0, $y-offset, 0) rotate(45deg);\n\n        &::before {\n          transform: rotate(-45deg) translate3d($hamburger-layer-width / -7, $hamburger-layer-spacing * -1, 0);\n          opacity: 0;\n        }\n\n        &::after {\n          transform: translate3d(0, $y-offset * -2, 0) rotate(-90deg);\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 950px) {\n .hamburger-box {\n   width: 25px;\n }\n\n  .hamburger-inner {\n    display: block;\n    top: 50%;\n    margin-top: $hamburger-layer-height / -2;\n\n    &,\n    &::before,\n    &::after {\n      width: 25px;\n      height: $hamburger-layer-height;\n      background-color: $hamburger-layer-color;\n      border-radius: $hamburger-layer-border-radius;\n      position: absolute;\n      transition-property: transform;\n      transition-duration: 0.15s;\n      transition-timing-function: ease;\n    }\n\n    &::before,\n    &::after {\n      content: \"\";\n      display: block;\n    }\n\n    &::before {\n      top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n    }\n\n    &::after {\n      bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n    }\n  }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelectors");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/assets/fonts/lato/lato.scss":
/*!*****************************************!*\
  !*** ./src/assets/fonts/lato/lato.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./lato.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/lato/lato.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./lato.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/lato/lato.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./lato.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/lato/lato.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/assets/fonts/lato/latoblack.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/lato/latoblack.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoblack.1ae925390ab67f873717daef26ec11cc.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latoblack.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latoblack.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoblack.6a1be2b88598035c3f38fc62a3d3eea0.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latoblack.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/lato/latoblack.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoblack.e3b34da659f104f5f750741d7e5f1930.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latoblackitalic.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/lato/latoblackitalic.ttf ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoblackitalic.d88c40eaea8a4c9e2708d8a79dc3bae2.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latoblackitalic.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lato/latoblackitalic.woff ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoblackitalic.342ae327694adefc802e7bd2f2c8cef5.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latoblackitalic.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/lato/latoblackitalic.woff2 ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoblackitalic.3a4d369c257d8673a7f1b3d58d48aa1a.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latobold.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/lato/latobold.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latobold.6974fcff1d8a3c0beb30b7a270d5075a.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latobold.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/lato/latobold.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latobold.d33f71802238820160939cd0a7961aae.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latobold.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latobold.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latobold.6313ff8e060883e53e80436352a7aba5.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latobolditalic.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/lato/latobolditalic.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latobolditalic.06762f83cf075bcf347c17a6a3071aad.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latobolditalic.woff":
/*!***************************************************!*\
  !*** ./src/assets/fonts/lato/latobolditalic.woff ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latobolditalic.f27e6edaf397490de4822703e5758909.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latobolditalic.woff2":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lato/latobolditalic.woff2 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latobolditalic.bf536b0c60f4c96f0d1298406877641e.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latohairline.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/lato/latohairline.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latohairline.2e5604a3d7ebfba2efe21bfbe9bf84fd.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latohairline.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/lato/latohairline.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latohairline.fa94284cad688c1b98a60d2c732a743f.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latohairline.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/lato/latohairline.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latohairline.ce84128704f31ec1377d2a85c359c867.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latohairlineitalic.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/lato/latohairlineitalic.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latohairlineitalic.cfcbd9e5e897742397003e595f53cd0e.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latohairlineitalic.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/lato/latohairlineitalic.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latohairlineitalic.b70d62d688032cd5776d44ad6fb3bdde.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latohairlineitalic.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/lato/latohairlineitalic.woff2 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latohairlineitalic.a6d190ca45b81ae92e6e3e71284ee0ac.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latoheavy.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/lato/latoheavy.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoheavy.b82577ea4474bf5dcba07bb4021f22b5.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latoheavy.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latoheavy.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoheavy.022f32fa38ad8415a5acd60860b73551.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latoheavy.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/lato/latoheavy.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoheavy.7ea207c31a7e90026225bf1bd5b06290.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latoheavyitalic.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/lato/latoheavyitalic.ttf ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoheavyitalic.38e694448aba33cb2fd3a9a09e59b62f.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latoheavyitalic.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lato/latoheavyitalic.woff ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoheavyitalic.cf940cd94e31ee7a8caa415d45471e1a.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latoheavyitalic.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/lato/latoheavyitalic.woff2 ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoheavyitalic.b13602b9c20c9ee0538a7c6b347c9911.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latoitalic.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latoitalic.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoitalic.962ad29b2e6c46183dd06f9bd197d1eb.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latoitalic.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/lato/latoitalic.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoitalic.fe87f4e2b60e8957065c97f6478d8bb3.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latoitalic.woff2":
/*!************************************************!*\
  !*** ./src/assets/fonts/lato/latoitalic.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoitalic.52610538409cce13f7c02fdefe7847db.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latolight.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/lato/latolight.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latolight.9a130d8b5c67da6961896b23398d6a4a.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latolight.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latolight.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latolight.44826bfa7fd3c253a32785c08ffeeffc.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latolight.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/lato/latolight.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latolight.93855fbee21c9d7f8588b16c44bd3595.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latolightitalic.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/lato/latolightitalic.ttf ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latolightitalic.1fc74bc94028cd2fa056518e016d3fa6.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latolightitalic.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lato/latolightitalic.woff ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latolightitalic.b0213560ae87933efbec6dcbbbba8fdb.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latolightitalic.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/lato/latolightitalic.woff2 ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latolightitalic.7214253732c17cb3d2635dbb7acb29f5.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latomedium.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latomedium.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latomedium.58880a6f3b1b23a49b45eb68f8b5d33c.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latomedium.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/lato/latomedium.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latomedium.e4e26a8856e9c701a258755f959e655d.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latomedium.woff2":
/*!************************************************!*\
  !*** ./src/assets/fonts/lato/latomedium.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latomedium.c2726ad40e36a5a891ed82a33d2d157c.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latomediumitalic.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lato/latomediumitalic.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latomediumitalic.844048e6834ec1bc41d68404ac75a043.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latomediumitalic.woff":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/lato/latomediumitalic.woff ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latomediumitalic.39f7dd17ae1fa095eb5280de762e4a36.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latomediumitalic.woff2":
/*!******************************************************!*\
  !*** ./src/assets/fonts/lato/latomediumitalic.woff2 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latomediumitalic.8c6b23527bab6d3da0dc3ee23b250c16.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latoregular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/lato/latoregular.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoregular.3a738a1e1de307fae57ef14458bd9249.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latoregular.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/lato/latoregular.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoregular.2e77a477d6431e343a0a3ab56f39424b.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latoregular.woff2":
/*!*************************************************!*\
  !*** ./src/assets/fonts/lato/latoregular.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latoregular.3afd5ecc440573ffebd33c0fc491f76d.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latosemibold.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/lato/latosemibold.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latosemibold.f5401c692c729bc3573a1a36b8d2a7c6.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latosemibold.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/lato/latosemibold.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latosemibold.c50637e1089d3058b34728fdf604ad3c.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latosemibold.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/lato/latosemibold.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latosemibold.2e1b533064dc677be613ccf70fa91fc8.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latosemibolditalic.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/lato/latosemibolditalic.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latosemibolditalic.7cf3399a6b0bbb96cebff2eb8a661b0c.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latosemibolditalic.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/lato/latosemibolditalic.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latosemibolditalic.fcaf0d704ba3189e67ad193f86c3c5b5.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latosemibolditalic.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/lato/latosemibolditalic.woff2 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latosemibolditalic.06b87572f3cc56aebde7d61ab8c23bff.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latothin.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/lato/latothin.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latothin.b569e22ab8bbfb7e0ad7072112cb6520.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latothin.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/lato/latothin.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latothin.74b6dddd8adf2c50d250b9559b44143c.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latothin.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/lato/latothin.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latothin.0a8c4fad7f40a6969d54c1a2a76a381d.woff2";

/***/ }),

/***/ "./src/assets/fonts/lato/latothinitalic.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/lato/latothinitalic.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latothinitalic.011b38c846ee1363e019ce4f31e79d15.ttf";

/***/ }),

/***/ "./src/assets/fonts/lato/latothinitalic.woff":
/*!***************************************************!*\
  !*** ./src/assets/fonts/lato/latothinitalic.woff ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latothinitalic.975aa9d61e2de6325f931d11d5b5336f.woff";

/***/ }),

/***/ "./src/assets/fonts/lato/latothinitalic.woff2":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lato/latothinitalic.woff2 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/latothinitalic.a97768d93715c903759f12cfc7b06517.woff2";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Black.eot":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Black.eot ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Black.fe4a1ef2fcacdca962fd7f555ea3e89d.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Black.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Black.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Black.e410a532c50946e1c252c0862656a96e.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Black.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Black.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Black.a99d8db918ca0d83907a66773ecd8d0f.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-BlackItalic.eot":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-BlackItalic.eot ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-BlackItalic.e885010b57eaa0bc6e3ed9a4ca1b8e9b.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-BlackItalic.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-BlackItalic.ttf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-BlackItalic.723da89da4f4081f66076c206e2cea40.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-BlackItalic.woff":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-BlackItalic.woff ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-BlackItalic.3ff31f431bbc9ea19ddd3fea12e2c4d0.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.eot":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.eot ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Bold.4b33f3d37c06db49a761e440c56de170.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Bold.5885feb264991825e67f6bdda2b67c3b.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.woff ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Bold.180ba33d8de7dcfe80a0077be8708630.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-BoldItalic.eot":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-BoldItalic.eot ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-BoldItalic.075cad890360fd0956977802ab2e7ea7.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-BoldItalic.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-BoldItalic.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-BoldItalic.74b6e0836cd2c063288b3d9852167982.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-BoldItalic.woff":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-BoldItalic.woff ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-BoldItalic.e69710e73897b29b794b869a29cd1dde.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraBold.eot":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraBold.eot ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraBold.3e1f7a552b24cf969fd4fbdb283c78bc.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraBold.ttf":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraBold.ttf ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraBold.0697040c56e0a596472b8daed14a4425.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraBold.woff":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraBold.woff ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraBold.75ee4192581c503f2484bf26ac280eab.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.eot":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.eot ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraBoldItalic.b3b3dee5cc72079275ef41983f0e8fae.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraBoldItalic.d19b715d9d17c207ebba4f4c77599ae1.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.woff":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.woff ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraBoldItalic.49ebad33137487f44e60e75bf0b912bd.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraLight.eot":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraLight.eot ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraLight.da136e945bbd3e956cd54f7d2e608cee.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraLight.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraLight.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraLight.ddc3ab520b8d90d001a7896678354afd.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraLight.woff":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraLight.woff ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraLight.b6e37b33963b08c1df344c11be1cc204.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.eot":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.eot ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraLightItalic.cfa355eebcedc9925b018fb824537a3d.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraLightItalic.5272ddc99cd8d930aaadccb9e1053715.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.woff":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ExtraLightItalic.woff ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ExtraLightItalic.0ddbc4295139ac47771b80eaf797570f.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Italic.eot":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Italic.eot ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Italic.66049cd49439811e4a8213e8f7366c99.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Italic.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Italic.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Italic.ec9cfd75203f4203b336ffb2a3495846.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Italic.woff":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Italic.woff ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Italic.9d8693d311414ef85708f2dbb5a7876a.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Light.eot":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Light.eot ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Light.d66eb8ddfd61f1ea2f5dc0385d4556e6.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Light.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Light.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Light.c3468d41e1e1edd98ca08c9ff200b00c.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Light.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Light.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Light.be142e6c3747b7b87e60c823f7a386cb.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-LightItalic.eot":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-LightItalic.eot ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-LightItalic.0e5a40c025a62152cad7eb7ca6d458d9.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-LightItalic.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-LightItalic.ttf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-LightItalic.bd32320e6c569e2185218b12ba8c65aa.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-LightItalic.woff":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-LightItalic.woff ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-LightItalic.7c9151ed5ecb0a706504b1778c0356c0.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Medium.eot":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Medium.eot ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Medium.418e43db3ef66b97a7ef0cf912041126.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Medium.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Medium.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Medium.693c527aec0de211945e97d9954976f7.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Medium.woff":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Medium.woff ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Medium.d42dad28f6470e5162c23aa339df3d77.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-MediumItalic.eot":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-MediumItalic.eot ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-MediumItalic.add94c6772e9e7af3cb055d809801616.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-MediumItalic.ttf":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-MediumItalic.ttf ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-MediumItalic.509706ef7fbbb3d2b183d748edb5bc20.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-MediumItalic.woff":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-MediumItalic.woff ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-MediumItalic.b3fe2d7f2e9b2a922216a5e653656baf.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.eot":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.eot ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Regular.3220cdd4dbb981ac08822f428d3ea1ed.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.ttf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Regular.317b418ed317e258b17318b4a4c0335e.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.woff":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.woff ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Regular.3db65dc4b858f0fed4fb155f8a5ecab9.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-SemiBold.eot":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-SemiBold.eot ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-SemiBold.262fb106797e141d7adfae243639ce03.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-SemiBold.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-SemiBold.ttf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-SemiBold.8771894959de6e640354fc687099d82d.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-SemiBold.woff":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-SemiBold.woff ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-SemiBold.197213592de7a2a62e0699fa36095221.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.eot":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.eot ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-SemiBoldItalic.81bf66e6ddbf513e9aefaf8e763de8dc.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-SemiBoldItalic.9ee866093c70d4948b3e709884e2e63d.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.woff":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-SemiBoldItalic.woff ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-SemiBoldItalic.922192555c9d41db15504ab6960e016a.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Thin.eot":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Thin.eot ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Thin.8067c90c2a63c2ea3f417ab099791527.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Thin.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Thin.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Thin.555f03e263bcbecefef3d8c69cdd6e76.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Thin.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Thin.woff ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-Thin.446ea183ab98a6fd08d6fc8f5d038505.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ThinItalic.eot":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ThinItalic.eot ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ThinItalic.372c7bef5be5302aaa432276bfa29d56.eot";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ThinItalic.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ThinItalic.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ThinItalic.f4e2c987b6ee08d9842db5b0b9ee0a34.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-ThinItalic.woff":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-ThinItalic.woff ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Montserrat-ThinItalic.f7ab478188a4fca8698cc73254ac54cc.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat/stylesheet.scss":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/montserrat/stylesheet.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./stylesheet.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/montserrat/stylesheet.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./stylesheet.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/montserrat/stylesheet.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./stylesheet.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/montserrat/stylesheet.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componentns/Layouts/Btn/Btn.js":
/*!********************************************!*\
  !*** ./src/componentns/Layouts/Btn/Btn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Btn_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Btn.module.scss */ "./src/componentns/Layouts/Btn/Btn.module.scss");
/* harmony import */ var _Btn_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Btn_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Layouts/Btn/Btn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      styleBtn = _ref.styleBtn,
      className = _ref.className,
      onClick = _ref.onClick;
  var attribute = {
    className: _Btn_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[styleBtn] + (className ? ' ' + className : '')
  };
  if (onClick) attribute.onClick = onClick;
  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attribute, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), title);
});

/***/ }),

/***/ "./src/componentns/Layouts/Btn/Btn.module.scss":
/*!*****************************************************!*\
  !*** ./src/componentns/Layouts/Btn/Btn.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Btn.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/Layouts/Btn/Btn.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Btn.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/Layouts/Btn/Btn.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Btn.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/Layouts/Btn/Btn.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componentns/Root.js":
/*!*********************************!*\
  !*** ./src/componentns/Root.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_window_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/window/actions */ "./src/store/window/actions.js");
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Root.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Root = function Root(_ref) {
  var children = _ref.children,
      changeWindowSize = _ref.changeWindowSize,
      size = _ref.size;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    changeWindowSize();
    window.addEventListener('resize', function () {
      console.log(window.innerWidth);

      if (size.windowInnerWidth !== window.innerWidth) {
        changeWindowSize();
      }
    });
  }, []);
  return __jsx("div", {
    id: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, children);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    size: state.window.size
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeWindowSize: function changeWindowSize() {
      return dispatch(Object(_store_window_actions__WEBPACK_IMPORTED_MODULE_3__["changeWindowSize"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Root));

/***/ }),

/***/ "./src/componentns/TopSidebar/Logo/Logo.js":
/*!*************************************************!*\
  !*** ./src/componentns/TopSidebar/Logo/Logo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/TopSidebar/Logo/Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isSmallLogo = _ref.isSmallLogo;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, !isSmallLogo ? __jsx("svg", {
    width: "307",
    height: "38",
    viewBox: "0 0 307 38",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M1.65 26.67V16.92C1.65 14.58 2.46 13.41 4.08 13.41H9.09C11.13 13.41 12.15 14.1 12.15 15.48C12.15 16.86 11.13 17.55 9.09 17.55H6.48V26.67C6.48 29.03 5.68 30.21 4.08 30.21C2.46 30.21 1.65 29.03 1.65 26.67ZM17.4942 26.4H22.6842V17.28H19.0842C18.3442 17.28 17.9742 17.65 17.9742 18.39V24.45C17.9742 25.07 17.8142 25.72 17.4942 26.4ZM25.7142 30H14.6742C14.6742 31.4 14.6542 32.21 14.6142 32.43C14.4342 33.39 13.9142 33.87 13.0542 33.87C11.5542 33.87 10.8042 33.08 10.8042 31.5V28.41C10.8042 27.39 11.0442 26.77 11.5242 26.55C11.9442 26.45 12.3742 26.36 12.8142 26.28C13.2942 26.06 13.5342 25.45 13.5342 24.45V18.33C13.5342 16.53 14.0142 15.24 14.9742 14.46C15.8542 13.76 17.2142 13.41 19.0542 13.41H25.0842C26.0642 13.41 26.7342 13.75 27.0942 14.43C27.3542 14.91 27.4842 15.67 27.4842 16.71V26.4C28.8842 26.4 29.5842 27.09 29.5842 28.47V31.5C29.5842 33.08 28.8342 33.87 27.3342 33.87C26.4942 33.87 25.9842 33.38 25.8042 32.4C25.7442 32.14 25.7142 31.34 25.7142 30ZM35.5256 23.16C35.6256 24.1 36.0156 24.82 36.6956 25.32C37.3756 25.82 38.2056 26.07 39.1856 26.07C40.0056 26.07 40.9956 25.81 42.1556 25.29C43.3156 24.75 44.0356 24.48 44.3156 24.48C45.5956 24.48 46.2356 25.11 46.2356 26.37C46.2356 26.85 46.0556 27.33 45.6956 27.81C45.0556 28.69 44.0356 29.36 42.6356 29.82C41.4556 30.22 40.2256 30.42 38.9456 30.42C36.5456 30.42 34.5456 29.6 32.9456 27.96C31.3456 26.3 30.5456 24.26 30.5456 21.84C30.5456 19.44 31.3056 17.39 32.8256 15.69C34.3656 13.99 36.3256 13.14 38.7056 13.14C39.8856 13.14 40.9556 13.36 41.9156 13.8C43.2956 14.44 44.4256 15.39 45.3056 16.65C46.1856 17.91 46.6256 19.28 46.6256 20.76C46.6256 21.56 46.3356 22.17 45.7556 22.59C45.2556 22.97 44.5956 23.16 43.7756 23.16H35.5256ZM35.4656 19.98H41.8556C41.7956 19.14 41.4656 18.45 40.8656 17.91C40.2856 17.37 39.5756 17.1 38.7356 17.1C37.8756 17.1 37.1556 17.37 36.5756 17.91C35.9956 18.43 35.6256 19.12 35.4656 19.98ZM69.0933 17.55H65.4933C64.7533 17.55 64.3833 17.92 64.3833 18.66V26.34C64.3833 27.56 64.0433 28.51 63.3633 29.19C62.6833 29.87 61.7333 30.21 60.5133 30.21C59.4333 30.21 58.6933 30.14 58.2933 30C57.5533 29.72 57.1833 29.15 57.1833 28.29C57.1833 27.45 57.4533 26.9 57.9933 26.64C58.3733 26.44 59.0233 26.34 59.9433 26.34V18.69C59.9433 16.71 60.3833 15.33 61.2633 14.55C62.0833 13.79 63.4933 13.41 65.4933 13.41H71.4933C72.4733 13.41 73.1433 13.75 73.5033 14.43C73.7633 14.91 73.8933 15.67 73.8933 16.71V26.67C73.8933 29.03 73.0933 30.21 71.4933 30.21C70.5333 30.21 69.8633 29.84 69.4833 29.1C69.2233 28.56 69.0933 27.75 69.0933 26.67V17.55ZM77.9559 13.41C78.6559 13.41 79.1959 13.64 79.5759 14.1C79.8359 14.4 80.1159 14.95 80.4159 15.75L83.1759 23.07L86.1459 15.33C86.6459 14.05 87.3559 13.41 88.2759 13.41C89.8759 13.41 90.6759 14.18 90.6759 15.72C90.6759 16.22 90.5459 16.78 90.2859 17.4L82.8759 34.95C82.3159 36.27 81.6059 36.93 80.7459 36.93C80.0259 36.93 79.4459 36.72 79.0059 36.3C78.5659 35.88 78.3459 35.31 78.3459 34.59C78.3459 34.11 78.4859 33.56 78.7659 32.94L80.7459 28.59L75.8559 17.16C75.6759 16.74 75.5859 16.29 75.5859 15.81C75.5859 15.13 75.8059 14.56 76.2459 14.1C76.7059 13.64 77.2759 13.41 77.9559 13.41ZM98.2102 20.22H100.1V16.53C100.1 14.45 100.9 13.41 102.5 13.41C104.1 13.41 104.9 14.45 104.9 16.53V27.09C104.9 29.19 104.1 30.24 102.5 30.24C101.68 30.24 101.06 29.91 100.64 29.25C100.28 28.69 100.1 27.97 100.1 27.09V23.61C98.0802 23.61 96.8002 23.58 96.2602 23.52C94.6402 23.38 93.4402 23 92.6602 22.38C91.7202 21.64 91.2502 20.39 91.2502 18.63V16.53C91.2502 14.45 92.0502 13.41 93.6502 13.41C95.2502 13.41 96.0502 14.45 96.0502 16.53V18.63C96.0502 19.31 96.2502 19.76 96.6502 19.98C96.9502 20.14 97.4702 20.22 98.2102 20.22ZM113.152 26.58H117.862V16.92C117.862 14.58 118.662 13.41 120.262 13.41C121.862 13.41 122.662 14.58 122.662 16.92V26.58H127.372V16.95C127.372 14.59 128.172 13.41 129.772 13.41C131.372 13.41 132.172 14.59 132.172 16.95V26.58C132.172 28.86 131.182 30 129.202 30H111.322C110.342 30 109.592 29.66 109.072 28.98C108.592 28.38 108.352 27.58 108.352 26.58V16.95C108.352 14.59 109.152 13.41 110.752 13.41C112.352 13.41 113.152 14.59 113.152 16.95V26.58ZM140.291 23.16C140.391 24.1 140.781 24.82 141.461 25.32C142.141 25.82 142.971 26.07 143.951 26.07C144.771 26.07 145.761 25.81 146.921 25.29C148.081 24.75 148.801 24.48 149.081 24.48C150.361 24.48 151.001 25.11 151.001 26.37C151.001 26.85 150.821 27.33 150.461 27.81C149.821 28.69 148.801 29.36 147.401 29.82C146.221 30.22 144.991 30.42 143.711 30.42C141.311 30.42 139.311 29.6 137.711 27.96C136.111 26.3 135.311 24.26 135.311 21.84C135.311 19.44 136.071 17.39 137.591 15.69C139.131 13.99 141.091 13.14 143.471 13.14C144.651 13.14 145.721 13.36 146.681 13.8C148.061 14.44 149.191 15.39 150.071 16.65C150.951 17.91 151.391 19.28 151.391 20.76C151.391 21.56 151.101 22.17 150.521 22.59C150.021 22.97 149.361 23.16 148.541 23.16H140.291ZM140.231 19.98H146.621C146.561 19.14 146.231 18.45 145.631 17.91C145.051 17.37 144.341 17.1 143.501 17.1C142.641 17.1 141.921 17.37 141.341 17.91C140.761 18.43 140.391 19.12 140.231 19.98ZM152.714 27.42C152.714 26.64 152.984 25.98 153.524 25.44C154.064 24.88 154.724 24.6 155.504 24.6C156.304 24.6 156.964 24.87 157.484 25.41C158.024 25.95 158.294 26.62 158.294 27.42C158.294 28.2 158.024 28.86 157.484 29.4C156.944 29.94 156.284 30.21 155.504 30.21C154.724 30.21 154.064 29.94 153.524 29.4C152.984 28.86 152.714 28.2 152.714 27.42ZM152.714 18.09C152.714 17.33 152.984 16.68 153.524 16.14C154.084 15.58 154.744 15.3 155.504 15.3C156.284 15.3 156.944 15.57 157.484 16.11C158.024 16.65 158.294 17.31 158.294 18.09C158.294 18.87 158.024 19.53 157.484 20.07C156.944 20.61 156.284 20.88 155.504 20.88C154.724 20.88 154.064 20.61 153.524 20.07C152.984 19.53 152.714 18.87 152.714 18.09Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M175.728 22.32L181.548 16.92C181.548 15.8 181.668 14.99 181.908 14.49C182.268 13.77 182.948 13.41 183.948 13.41C184.948 13.41 185.628 13.77 185.988 14.49C186.228 14.99 186.348 15.8 186.348 16.92V26.67C186.348 27.79 186.228 28.6 185.988 29.1C185.628 29.84 184.948 30.21 183.948 30.21C182.948 30.21 182.268 29.84 181.908 29.1C181.668 28.6 181.548 27.79 181.548 26.67V21.93L175.728 26.67C175.728 27.77 175.608 28.58 175.368 29.1C175.008 29.84 174.338 30.21 173.358 30.21C171.718 30.21 170.898 29.03 170.898 26.67V16.92C170.898 15.84 171.028 15.04 171.288 14.52C171.668 13.78 172.358 13.41 173.358 13.41C174.338 13.41 175.008 13.77 175.368 14.49C175.608 14.99 175.728 15.8 175.728 16.92V22.32ZM193.892 23.34V26.67C193.892 29.03 193.102 30.21 191.522 30.21C189.882 30.21 189.062 29.03 189.062 26.67V16.92C189.062 14.58 189.882 13.41 191.522 13.41C193.102 13.41 193.892 14.58 193.892 16.92V19.92H199.202V16.92C199.202 14.58 200.002 13.41 201.602 13.41C203.202 13.41 204.002 14.58 204.002 16.92V26.67C204.002 29.03 203.202 30.21 201.602 30.21C200.002 30.21 199.202 29.03 199.202 26.67V23.34H193.892ZM210.406 17.55H208.336C206.316 17.55 205.306 16.86 205.306 15.48C205.306 14.1 206.316 13.41 208.336 13.41H217.276C219.316 13.41 220.336 14.1 220.336 15.48C220.336 16.86 219.316 17.55 217.276 17.55H215.206V26.67C215.206 29.03 214.406 30.21 212.806 30.21C211.206 30.21 210.406 29.03 210.406 26.67V17.55ZM225.838 23.16C225.938 24.1 226.328 24.82 227.008 25.32C227.688 25.82 228.518 26.07 229.498 26.07C230.318 26.07 231.308 25.81 232.468 25.29C233.628 24.75 234.348 24.48 234.628 24.48C235.908 24.48 236.548 25.11 236.548 26.37C236.548 26.85 236.368 27.33 236.008 27.81C235.368 28.69 234.348 29.36 232.948 29.82C231.768 30.22 230.538 30.42 229.258 30.42C226.858 30.42 224.858 29.6 223.258 27.96C221.658 26.3 220.858 24.26 220.858 21.84C220.858 19.44 221.618 17.39 223.138 15.69C224.678 13.99 226.638 13.14 229.018 13.14C230.198 13.14 231.268 13.36 232.228 13.8C233.608 14.44 234.738 15.39 235.618 16.65C236.498 17.91 236.938 19.28 236.938 20.76C236.938 21.56 236.648 22.17 236.068 22.59C235.568 22.97 234.908 23.16 234.088 23.16H225.838ZM225.778 19.98H232.168C232.108 19.14 231.778 18.45 231.178 17.91C230.598 17.37 229.888 17.1 229.048 17.1C228.188 17.1 227.468 17.37 226.888 17.91C226.308 18.43 225.938 19.12 225.778 19.98ZM244.02 29.1H243.9V33.3C243.9 35.62 243.13 36.78 241.59 36.78C239.95 36.78 239.13 35.6 239.13 33.24V16.92C239.13 14.58 239.95 13.41 241.59 13.41C242.55 13.41 243.32 13.92 243.9 14.94C244.88 13.84 246.21 13.29 247.89 13.29C250.13 13.29 251.95 14.17 253.35 15.93C254.63 17.57 255.27 19.53 255.27 21.81C255.27 23.51 254.88 25.07 254.1 26.49C253.3 27.99 252.17 29.1 250.71 29.82C249.79 30.28 248.83 30.51 247.83 30.51C246.37 30.51 245.1 30.04 244.02 29.1ZM243.9 22.11C243.9 23.21 244.15 24.11 244.65 24.81C245.23 25.61 246.05 26.01 247.11 26.01C248.17 26.01 248.99 25.57 249.57 24.69C250.07 23.91 250.32 22.97 250.32 21.87C250.32 20.79 250.06 19.87 249.54 19.11C248.96 18.23 248.15 17.79 247.11 17.79C246.23 17.79 245.47 18.09 244.83 18.69C244.21 19.27 243.9 20.41 243.9 22.11ZM262.505 23.34V26.67C262.505 29.03 261.715 30.21 260.135 30.21C258.495 30.21 257.675 29.03 257.675 26.67V16.92C257.675 14.58 258.495 13.41 260.135 13.41C261.715 13.41 262.505 14.58 262.505 16.92V19.92H267.815V16.92C267.815 14.58 268.615 13.41 270.215 13.41C271.815 13.41 272.615 14.58 272.615 16.92V26.67C272.615 29.03 271.815 30.21 270.215 30.21C268.615 30.21 267.815 29.03 267.815 26.67V23.34H262.505ZM279.949 23.16C280.049 24.1 280.439 24.82 281.119 25.32C281.799 25.82 282.629 26.07 283.609 26.07C284.429 26.07 285.419 25.81 286.579 25.29C287.739 24.75 288.459 24.48 288.739 24.48C290.019 24.48 290.659 25.11 290.659 26.37C290.659 26.85 290.479 27.33 290.119 27.81C289.479 28.69 288.459 29.36 287.059 29.82C285.879 30.22 284.649 30.42 283.369 30.42C280.969 30.42 278.969 29.6 277.369 27.96C275.769 26.3 274.969 24.26 274.969 21.84C274.969 19.44 275.729 17.39 277.249 15.69C278.789 13.99 280.749 13.14 283.129 13.14C284.309 13.14 285.379 13.36 286.339 13.8C287.719 14.44 288.849 15.39 289.729 16.65C290.609 17.91 291.049 19.28 291.049 20.76C291.049 21.56 290.759 22.17 290.179 22.59C289.679 22.97 289.019 23.16 288.199 23.16H279.949ZM279.889 19.98H286.279C286.219 19.14 285.889 18.45 285.289 17.91C284.709 17.37 283.999 17.1 283.159 17.1C282.299 17.1 281.579 17.37 280.999 17.91C280.419 18.43 280.049 19.12 279.889 19.98ZM296.422 17.55H294.352C292.332 17.55 291.322 16.86 291.322 15.48C291.322 14.1 292.332 13.41 294.352 13.41H303.292C305.332 13.41 306.352 14.1 306.352 15.48C306.352 16.86 305.332 17.55 303.292 17.55H301.222V26.67C301.222 29.03 300.422 30.21 298.822 30.21C297.222 30.21 296.422 29.03 296.422 26.67V17.55Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })) : __jsx("svg", {
    width: "244",
    height: "19",
    viewBox: "0 0 244 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 18
    }
  }, __jsx("path", {
    d: "M0 10.8058V3.01892C0 1.15006 0.651543 0.215637 1.95463 0.215637H5.98454C7.62546 0.215637 8.44592 0.766709 8.44592 1.86885C8.44592 2.971 7.62546 3.52207 5.98454 3.52207H3.88513V10.8058C3.88513 12.6906 3.24163 13.633 1.95463 13.633C0.651543 13.633 0 12.6906 0 10.8058Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M12.7447 10.5902H16.9194V3.30643H14.0236C13.4284 3.30643 13.1308 3.60193 13.1308 4.19294V9.03279C13.1308 9.52795 13.0021 10.0471 12.7447 10.5902ZM19.3566 13.4653H10.4763C10.4763 14.5834 10.4603 15.2304 10.4281 15.4061C10.2833 16.1728 9.86502 16.5561 9.17325 16.5561C7.96669 16.5561 7.36341 15.9252 7.36341 14.6633V12.1955C7.36341 11.3808 7.55646 10.8857 7.94256 10.71C8.2804 10.6301 8.62628 10.5582 8.9802 10.4943C9.3663 10.3186 9.55935 9.83144 9.55935 9.03279V4.14502C9.55935 2.70744 9.94545 1.67718 10.7177 1.05423C11.4255 0.495167 12.5195 0.215637 13.9995 0.215637H18.8499C19.6382 0.215637 20.1771 0.48718 20.4667 1.03026C20.6758 1.41362 20.7804 2.0206 20.7804 2.8512V10.5902C21.9065 10.5902 22.4696 11.1412 22.4696 12.2434V14.6633C22.4696 15.9252 21.8663 16.5561 20.6597 16.5561C19.984 16.5561 19.5738 16.1648 19.429 15.3821C19.3808 15.1744 19.3566 14.5355 19.3566 13.4653Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M27.2487 8.00252C27.3291 8.75326 27.6428 9.32829 28.1898 9.72762C28.7368 10.1269 29.4044 10.3266 30.1927 10.3266C30.8523 10.3266 31.6486 10.119 32.5817 9.70366C33.5147 9.27238 34.0939 9.05675 34.3191 9.05675C35.3487 9.05675 35.8635 9.5599 35.8635 10.5662C35.8635 10.9496 35.7187 11.3329 35.4291 11.7163C34.9143 12.4191 34.0939 12.9542 32.9678 13.3216C32.0186 13.641 31.0292 13.8008 29.9996 13.8008C28.0691 13.8008 26.4604 13.1459 25.1734 11.8361C23.8864 10.5103 23.2429 8.88104 23.2429 6.9483C23.2429 5.03153 23.8542 3.39428 25.0769 2.03657C26.3156 0.678857 27.8922 0 29.8066 0C30.7557 0 31.6164 0.175704 32.3886 0.527113C33.4986 1.03825 34.4076 1.79697 35.1154 2.80328C35.8233 3.80958 36.1772 4.90374 36.1772 6.08575C36.1772 6.72467 35.9439 7.21185 35.4774 7.54729C35.0752 7.85078 34.5443 8.00252 33.8847 8.00252H27.2487ZM27.2004 5.4628H32.3404C32.2921 4.79193 32.0266 4.24086 31.544 3.80958C31.0775 3.37831 30.5064 3.16267 29.8307 3.16267C29.1389 3.16267 28.5598 3.37831 28.0933 3.80958C27.6267 4.22488 27.3291 4.77596 27.2004 5.4628Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M54.2496 3.52207H51.3539C50.7586 3.52207 50.461 3.81757 50.461 4.40858V10.5422C50.461 11.5166 50.1875 12.2753 49.6405 12.8184C49.0936 13.3615 48.3294 13.633 47.3481 13.633C46.4794 13.633 45.8841 13.5771 45.5624 13.4653C44.9671 13.2417 44.6695 12.7865 44.6695 12.0996C44.6695 11.4288 44.8867 10.9895 45.3211 10.7818C45.6267 10.6221 46.1496 10.5422 46.8896 10.5422V4.43254C46.8896 2.8512 47.2435 1.74905 47.9514 1.1261C48.6109 0.519126 49.7451 0.215637 51.3539 0.215637H56.1801C56.9684 0.215637 57.5073 0.48718 57.7969 1.03026C58.006 1.41362 58.1106 2.0206 58.1106 2.8512V10.8058C58.1106 12.6906 57.4671 13.633 56.1801 13.633C55.4079 13.633 54.869 13.3375 54.5633 12.7465C54.3542 12.3153 54.2496 11.6683 54.2496 10.8058V3.52207Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M61.3785 0.215637C61.9416 0.215637 62.3759 0.399328 62.6816 0.766709C62.8907 1.00631 63.1159 1.44557 63.3573 2.08449L65.5773 7.93064L67.9663 1.74905C68.3685 0.726776 68.9396 0.215637 69.6796 0.215637C70.9666 0.215637 71.6101 0.830602 71.6101 2.06053C71.6101 2.45986 71.5056 2.9071 71.2964 3.40227L65.336 17.4187C64.8856 18.4729 64.3145 19 63.6227 19C63.0435 19 62.577 18.8323 62.2231 18.4968C61.8692 18.1614 61.6922 17.7062 61.6922 17.1311C61.6922 16.7478 61.8048 16.3085 62.03 15.8134L63.6227 12.3392L59.6893 3.21059C59.5445 2.87516 59.4721 2.51576 59.4721 2.13241C59.4721 1.58932 59.6491 1.13409 60.003 0.766709C60.373 0.399328 60.8315 0.215637 61.3785 0.215637Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M77.6705 5.65448H79.1907V2.70744C79.1907 1.04624 79.8342 0.215637 81.1212 0.215637C82.4082 0.215637 83.0517 1.04624 83.0517 2.70744V11.1412C83.0517 12.8184 82.4082 13.657 81.1212 13.657C80.4616 13.657 79.9629 13.3934 79.6251 12.8663C79.3355 12.4191 79.1907 11.8441 79.1907 11.1412V8.36192C77.5659 8.36192 76.5363 8.33796 76.1019 8.29004C74.7988 8.17823 73.8336 7.87474 73.2062 7.37957C72.4501 6.78857 72.072 5.79025 72.072 4.38462V2.70744C72.072 1.04624 72.7155 0.215637 74.0025 0.215637C75.2895 0.215637 75.933 1.04624 75.933 2.70744V4.38462C75.933 4.9277 76.0939 5.2871 76.4156 5.4628C76.6569 5.59059 77.0752 5.65448 77.6705 5.65448Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M89.6893 10.7339H93.4779V3.01892C93.4779 1.15006 94.1214 0.215637 95.4084 0.215637C96.6954 0.215637 97.3389 1.15006 97.3389 3.01892V10.7339H101.128V3.04288C101.128 1.15805 101.771 0.215637 103.058 0.215637C104.345 0.215637 104.989 1.15805 104.989 3.04288V10.7339C104.989 12.5549 104.192 13.4653 102.6 13.4653H88.2173C87.429 13.4653 86.8257 13.1938 86.4075 12.6507C86.0214 12.1715 85.8283 11.5326 85.8283 10.7339V3.04288C85.8283 1.15805 86.4718 0.215637 87.7588 0.215637C89.0458 0.215637 89.6893 1.15805 89.6893 3.04288V10.7339Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M111.519 8.00252C111.6 8.75326 111.914 9.32829 112.461 9.72762C113.007 10.1269 113.675 10.3266 114.463 10.3266C115.123 10.3266 115.919 10.119 116.852 9.70366C117.785 9.27238 118.365 9.05675 118.59 9.05675C119.619 9.05675 120.134 9.5599 120.134 10.5662C120.134 10.9496 119.989 11.3329 119.7 11.7163C119.185 12.4191 118.365 12.9542 117.238 13.3216C116.289 13.641 115.3 13.8008 114.27 13.8008C112.34 13.8008 110.731 13.1459 109.444 11.8361C108.157 10.5103 107.514 8.88104 107.514 6.9483C107.514 5.03153 108.125 3.39428 109.348 2.03657C110.586 0.678857 112.163 0 114.077 0C115.026 0 115.887 0.175704 116.659 0.527113C117.769 1.03825 118.678 1.79697 119.386 2.80328C120.094 3.80958 120.448 4.90374 120.448 6.08575C120.448 6.72467 120.215 7.21185 119.748 7.54729C119.346 7.85078 118.815 8.00252 118.155 8.00252H111.519ZM111.471 5.4628H116.611C116.563 4.79193 116.297 4.24086 115.815 3.80958C115.348 3.37831 114.777 3.16267 114.101 3.16267C113.41 3.16267 112.831 3.37831 112.364 3.80958C111.897 4.22488 111.6 4.77596 111.471 5.4628Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M121.512 11.4048C121.512 10.7818 121.729 10.2547 122.163 9.82346C122.598 9.37621 123.128 9.15259 123.756 9.15259C124.399 9.15259 124.93 9.36822 125.348 9.7995C125.783 10.2308 126 10.7659 126 11.4048C126 12.0277 125.783 12.5549 125.348 12.9861C124.914 13.4174 124.383 13.633 123.756 13.633C123.128 13.633 122.598 13.4174 122.163 12.9861C121.729 12.5549 121.512 12.0277 121.512 11.4048ZM121.512 3.95334C121.512 3.34636 121.729 2.82724 122.163 2.39597C122.614 1.94872 123.144 1.7251 123.756 1.7251C124.383 1.7251 124.914 1.94073 125.348 2.37201C125.783 2.80328 126 3.33039 126 3.95334C126 4.57629 125.783 5.10341 125.348 5.53468C124.914 5.96595 124.383 6.18159 123.756 6.18159C123.128 6.18159 122.598 5.96595 122.163 5.53468C121.729 5.10341 121.512 4.57629 121.512 3.95334Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M139.851 7.37817L144.491 3.03807C144.491 2.1379 144.587 1.48689 144.778 1.08503C145.066 0.506346 145.608 0.217005 146.405 0.217005C147.202 0.217005 147.745 0.506346 148.032 1.08503C148.223 1.48689 148.319 2.1379 148.319 3.03807V10.8744C148.319 11.7745 148.223 12.4256 148.032 12.8274C147.745 13.4222 147.202 13.7195 146.405 13.7195C145.608 13.7195 145.066 13.4222 144.778 12.8274C144.587 12.4256 144.491 11.7745 144.491 10.8744V7.06472L139.851 10.8744C139.851 11.7585 139.755 12.4095 139.564 12.8274C139.277 13.4222 138.743 13.7195 137.961 13.7195C136.654 13.7195 136 12.7712 136 10.8744V3.03807C136 2.17005 136.104 1.52707 136.311 1.10914C136.614 0.514383 137.164 0.217005 137.961 0.217005C138.743 0.217005 139.277 0.506346 139.564 1.08503C139.755 1.48689 139.851 2.1379 139.851 3.03807V7.37817Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M154.334 8.19797V10.8744C154.334 12.7712 153.704 13.7195 152.444 13.7195C151.136 13.7195 150.483 12.7712 150.483 10.8744V3.03807C150.483 1.15736 151.136 0.217005 152.444 0.217005C153.704 0.217005 154.334 1.15736 154.334 3.03807V5.44924H158.567V3.03807C158.567 1.15736 159.205 0.217005 160.481 0.217005C161.757 0.217005 162.395 1.15736 162.395 3.03807V10.8744C162.395 12.7712 161.757 13.7195 160.481 13.7195C159.205 13.7195 158.567 12.7712 158.567 10.8744V8.19797H154.334Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M167.501 3.54442H165.85C164.24 3.54442 163.434 2.98985 163.434 1.88071C163.434 0.771574 164.24 0.217005 165.85 0.217005H172.978C174.605 0.217005 175.418 0.771574 175.418 1.88071C175.418 2.98985 174.605 3.54442 172.978 3.54442H171.328V10.8744C171.328 12.7712 170.69 13.7195 169.414 13.7195C168.138 13.7195 167.501 12.7712 167.501 10.8744V3.54442Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M179.805 8.0533C179.885 8.8088 180.196 9.38748 180.738 9.78934C181.28 10.1912 181.942 10.3921 182.723 10.3921C183.377 10.3921 184.166 10.1832 185.091 9.76523C186.016 9.33122 186.59 9.11421 186.813 9.11421C187.834 9.11421 188.344 9.62056 188.344 10.6333C188.344 11.019 188.201 11.4048 187.914 11.7906C187.403 12.4979 186.59 13.0364 185.474 13.4061C184.533 13.7276 183.552 13.8883 182.532 13.8883C180.618 13.8883 179.023 13.2293 177.748 11.9112C176.472 10.577 175.834 8.9374 175.834 6.99239C175.834 5.06345 176.44 3.41582 177.652 2.04949C178.88 0.683165 180.443 0 182.34 0C183.281 0 184.134 0.176819 184.9 0.530457C186 1.04484 186.901 1.80838 187.603 2.82107C188.304 3.83376 188.655 4.93486 188.655 6.12437C188.655 6.76734 188.424 7.25761 187.961 7.59518C187.563 7.90059 187.037 8.0533 186.383 8.0533H179.805ZM179.757 5.49746H184.852C184.804 4.82234 184.541 4.26777 184.063 3.83376C183.6 3.39975 183.034 3.18274 182.364 3.18274C181.679 3.18274 181.104 3.39975 180.642 3.83376C180.18 4.25169 179.885 4.80626 179.757 5.49746Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M194.302 12.8274H194.206V16.203C194.206 18.0677 193.592 19 192.364 19C191.057 19 190.403 18.0516 190.403 16.1548V3.03807C190.403 1.15736 191.057 0.217005 192.364 0.217005C193.13 0.217005 193.744 0.626904 194.206 1.4467C194.988 0.562606 196.048 0.120558 197.388 0.120558C199.174 0.120558 200.625 0.827835 201.741 2.24239C202.762 3.56049 203.272 5.13579 203.272 6.96828C203.272 8.3346 202.961 9.58841 202.339 10.7297C201.701 11.9353 200.8 12.8274 199.636 13.4061C198.903 13.7758 198.137 13.9607 197.34 13.9607C196.176 13.9607 195.163 13.5829 194.302 12.8274ZM194.206 7.20939C194.206 8.09349 194.406 8.81684 194.804 9.37944C195.267 10.0224 195.921 10.3439 196.766 10.3439C197.611 10.3439 198.265 9.99027 198.727 9.283C199.126 8.65609 199.325 7.90059 199.325 7.0165C199.325 6.14848 199.118 5.40905 198.703 4.79822C198.241 4.09095 197.595 3.73731 196.766 3.73731C196.064 3.73731 195.458 3.97843 194.948 4.46066C194.453 4.92682 194.206 5.84306 194.206 7.20939Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M209.04 8.19797V10.8744C209.04 12.7712 208.41 13.7195 207.151 13.7195C205.843 13.7195 205.189 12.7712 205.189 10.8744V3.03807C205.189 1.15736 205.843 0.217005 207.151 0.217005C208.41 0.217005 209.04 1.15736 209.04 3.03807V5.44924H213.274V3.03807C213.274 1.15736 213.912 0.217005 215.188 0.217005C216.463 0.217005 217.101 1.15736 217.101 3.03807V10.8744C217.101 12.7712 216.463 13.7195 215.188 13.7195C213.912 13.7195 213.274 12.7712 213.274 10.8744V8.19797H209.04Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M222.949 8.0533C223.029 8.8088 223.34 9.38748 223.882 9.78934C224.424 10.1912 225.086 10.3921 225.867 10.3921C226.521 10.3921 227.31 10.1832 228.235 9.76523C229.16 9.33122 229.734 9.11421 229.957 9.11421C230.978 9.11421 231.488 9.62056 231.488 10.6333C231.488 11.019 231.345 11.4048 231.058 11.7906C230.547 12.4979 229.734 13.0364 228.618 13.4061C227.677 13.7276 226.696 13.8883 225.676 13.8883C223.762 13.8883 222.168 13.2293 220.892 11.9112C219.616 10.577 218.978 8.9374 218.978 6.99239C218.978 5.06345 219.584 3.41582 220.796 2.04949C222.024 0.683165 223.587 0 225.484 0C226.425 0 227.278 0.176819 228.044 0.530457C229.144 1.04484 230.045 1.80838 230.747 2.82107C231.448 3.83376 231.799 4.93486 231.799 6.12437C231.799 6.76734 231.568 7.25761 231.105 7.59518C230.707 7.90059 230.181 8.0533 229.527 8.0533H222.949ZM222.901 5.49746H227.996C227.948 4.82234 227.685 4.26777 227.207 3.83376C226.744 3.39975 226.178 3.18274 225.508 3.18274C224.823 3.18274 224.249 3.39975 223.786 3.83376C223.324 4.25169 223.029 4.80626 222.901 5.49746Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M236.083 3.54442H234.432C232.822 3.54442 232.016 2.98985 232.016 1.88071C232.016 0.771574 232.822 0.217005 234.432 0.217005H241.56C243.187 0.217005 244 0.771574 244 1.88071C244 2.98985 243.187 3.54442 241.56 3.54442H239.91V10.8744C239.91 12.7712 239.272 13.7195 237.996 13.7195C236.72 13.7195 236.083 12.7712 236.083 10.8744V3.54442Z",
    fill: "#F3473C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./src/componentns/TopSidebar/TopSidebar.js":
/*!**************************************************!*\
  !*** ./src/componentns/TopSidebar/TopSidebar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopSidebar.module.scss */ "./src/componentns/TopSidebar/TopSidebar.module.scss");
/* harmony import */ var _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layouts_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layouts/Btn/Btn */ "./src/componentns/Layouts/Btn/Btn.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo/Logo */ "./src/componentns/TopSidebar/Logo/Logo.js");
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/TopSidebar/TopSidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var TopSidebar = function TopSidebar(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.topSidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: props.mobileMenuStatus ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider',
    type: "button" //onClick={ toggleMobileMenu }
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hamburger-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "hamburger-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 43
    }
  }))), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isSmallLogo: props.windowInnerWidth <= 700,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pickRegion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u043E\u043D"), __jsx("svg", {
    width: "25",
    height: "32",
    viewBox: "0 0 25 32",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 31.0105L13.4135 30.2129C21.0954 23.5052 25 17.6483 25 12.5C25 5.20926 19.3096 0 12.5 0C5.69035 0 0 5.20926 0 12.5C0 17.6483 3.90459 23.5052 11.5865 30.2129L12.5 31.0105ZM12.5 27.3102C5.98139 21.4354 2.77776 16.4572 2.77776 12.4999C2.77776 6.80074 7.17237 2.77768 12.5 2.77768C17.8276 2.77768 22.2222 6.80074 22.2222 12.4999C22.2222 16.4572 19.0186 21.4354 12.5 27.3102ZM12.5 5.55555C16.3353 5.55555 19.4445 8.66468 19.4445 12.5C19.4445 16.3353 16.3353 19.4444 12.5 19.4444C8.66471 19.4444 5.55557 16.3353 5.55557 12.5C5.55557 8.66468 8.66471 5.55555 12.5 5.55555ZM8.33333 12.5C8.33333 10.1988 10.1988 8.33333 12.5 8.33333C14.8012 8.33333 16.6667 10.1988 16.6667 12.5C16.6667 14.8012 14.8012 16.6667 12.5 16.6667C10.1988 16.6667 8.33333 14.8012 8.33333 12.5Z",
    fill: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })))), props.windowInnerWidth <= 700 ? __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileSideBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "20",
    height: "14",
    viewBox: "0 0 20 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z",
    fill: "#E8E8E8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), __jsx(_Layouts_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileBtn,
    styleBtn: 'red',
    title: 'Заказать консультацию',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("svg", {
    width: "17",
    height: "20",
    viewBox: "0 0 17 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.06178 20L8.65094 19.4856C13.6053 15.1595 16.1236 11.3821 16.1236 8.06178C16.1236 3.35967 12.4536 0 8.06178 0C3.66995 0 0 3.35967 0 8.06178C0 11.3821 2.51824 15.1595 7.47262 19.4856L8.06178 20ZM8.06178 17.6136C3.85766 13.8247 1.79151 10.614 1.79151 8.06179C1.79151 4.38616 4.62577 1.79152 8.06178 1.79152C11.4978 1.79152 14.3321 4.38616 14.3321 8.06179C14.3321 10.614 12.2659 13.8247 8.06178 17.6136ZM8.06178 3.58304C10.5353 3.58304 12.5405 5.58825 12.5405 8.06181C12.5405 10.5354 10.5353 12.5406 8.06178 12.5406C5.58823 12.5406 3.58301 10.5354 3.58301 8.06181C3.58301 5.58825 5.58823 3.58304 8.06178 3.58304ZM5.37452 8.06178C5.37452 6.57765 6.57765 5.37452 8.06178 5.37452C9.54591 5.37452 10.749 6.57765 10.749 8.06178C10.749 9.54591 9.54591 10.749 8.06178 10.749C6.57765 10.749 5.37452 9.54591 5.37452 8.06178Z",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))) : null);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(TopSidebar));

/***/ }),

/***/ "./src/componentns/TopSidebar/TopSidebar.module.scss":
/*!***********************************************************!*\
  !*** ./src/componentns/TopSidebar/TopSidebar.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TopSidebar.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/TopSidebar/TopSidebar.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TopSidebar.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/TopSidebar/TopSidebar.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TopSidebar.module.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/TopSidebar/TopSidebar.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _componentns_Root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentns/Root */ "./src/componentns/Root.js");
/* harmony import */ var _utils_with_redux_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/with-redux-store */ "./src/utils/with-redux-store.js");
/* harmony import */ var _componentns_TopSidebar_TopSidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentns/TopSidebar/TopSidebar */ "./src/componentns/TopSidebar/TopSidebar.js");
/* harmony import */ var _assets_fonts_lato_lato_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/fonts/lato/lato.scss */ "./src/assets/fonts/lato/lato.scss");
/* harmony import */ var _assets_fonts_lato_lato_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_lato_lato_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_fonts_montserrat_stylesheet_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/fonts/montserrat/stylesheet.scss */ "./src/assets/fonts/montserrat/stylesheet.scss");
/* harmony import */ var _assets_fonts_montserrat_stylesheet_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_montserrat_stylesheet_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/hamburger.scss */ "./src/styles/hamburger.scss");
/* harmony import */ var _styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_16__);






var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










 // import 'typeface-montserrat'



var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        store: store,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, __jsx(_componentns_Root__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }, __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }
      })), __jsx(_componentns_TopSidebar_TopSidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_with_redux_store__WEBPACK_IMPORTED_MODULE_11__["default"])(MyApp));

/***/ }),

/***/ "./src/store/home/faq/actions.js":
/*!***************************************!*\
  !*** ./src/store/home/faq/actions.js ***!
  \***************************************/
/*! exports provided: CHANGE_HOME_FAQ_DROPDOWN, CHANGE_FAQ_LIST_MOBILE, changeHomeFaqDropDown, showMoreQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_HOME_FAQ_DROPDOWN", function() { return CHANGE_HOME_FAQ_DROPDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_FAQ_LIST_MOBILE", function() { return CHANGE_FAQ_LIST_MOBILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHomeFaqDropDown", function() { return changeHomeFaqDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoreQuestion", function() { return showMoreQuestion; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

var CHANGE_HOME_FAQ_DROPDOWN = 'CHANGE_HOME_FAQ_DROPDOWN';
var CHANGE_FAQ_LIST_MOBILE = 'CHANGE_FAQ_LIST_MOBILE';
var changeHomeFaqDropDown = function changeHomeFaqDropDown(arr) {
  return {
    type: CHANGE_HOME_FAQ_DROPDOWN,
    arr: arr
  };
};
var showMoreQuestion = function showMoreQuestion() {
  return function (dispatch, getState) {
    var faq = getState().home.faq;
    var showItems = faq.showMobileItems;
    var faqList = faq.faqList.slice();
    var faqListMobile = faq.faqListMobile.slice();
    console.log(faqList.slice(faqListMobile.length, faqListMobile.length + showItems));
    faqListMobile = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(faqListMobile), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(faqList.slice(faqListMobile.length, faqListMobile.length + showItems)));
    dispatch({
      type: CHANGE_FAQ_LIST_MOBILE,
      faqListMobile: faqListMobile
    });
  };
};

/***/ }),

/***/ "./src/store/home/faq/reducer.js":
/*!***************************************!*\
  !*** ./src/store/home/faq/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/store/home/faq/actions.js");


var _createReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var faqList = [{
  title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.',
  isActive: true
}, {
  title: 'Что делать если пропал интернет?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}];
var defaultValue = {
  faqList: faqList,
  faqListMobile: faqList.slice(0, 4),
  showMobileItems: 4
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(defaultValue, (_createReducer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_HOME_FAQ_DROPDOWN"], function (state, _ref) {
  var arr = _ref.arr;
  return _objectSpread({}, state, {
    faqList: arr
  });
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_FAQ_LIST_MOBILE"], function (state, _ref2) {
  var faqListMobile = _ref2.faqListMobile;
  return _objectSpread({}, state, {
    faqListMobile: faqListMobile
  });
}), _createReducer)));

/***/ }),

/***/ "./src/store/home/reducer.js":
/*!***********************************!*\
  !*** ./src/store/home/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _faq_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq/reducer */ "./src/store/home/faq/reducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



var defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  faq: _faq_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");




var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];

if (true) {
  middleware.push(Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
    collapsed: true
  }));
}

var initializeStore = function initializeStore(preloadedState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware));
};

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/reducer */ "./src/store/home/reducer.js");
/* harmony import */ var _window_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/reducer */ "./src/store/window/reducer.js");



var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  home: _home_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  window: _window_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (combinedReducer);

/***/ }),

/***/ "./src/store/window/actions.js":
/*!*************************************!*\
  !*** ./src/store/window/actions.js ***!
  \*************************************/
/*! exports provided: CHANGE_WINDOW_SIZE, changeWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WINDOW_SIZE", function() { return CHANGE_WINDOW_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeWindowSize", function() { return changeWindowSize; });
var CHANGE_WINDOW_SIZE = 'CHANGE_WINDOW_SIZE';
var changeWindowSize = function changeWindowSize() {
  return {
    type: CHANGE_WINDOW_SIZE,
    size: {
      windowInnerHeight: window.innerHeight,
      windowInnerWidth: window.innerWidth
    }
  };
};

/***/ }),

/***/ "./src/store/window/reducer.js":
/*!*************************************!*\
  !*** ./src/store/window/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/store/window/actions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var defaultProps = {
  size: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(defaultProps, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_WINDOW_SIZE"], function (state, _ref) {
  var size = _ref.size;
  return _objectSpread({}, state, {
    size: size
  });
})));

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./app.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./app.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/app.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./app.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/app.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/styles/hamburger.scss":
/*!***********************************!*\
  !*** ./src/styles/hamburger.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./hamburger.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/hamburger.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./hamburger.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/hamburger.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./hamburger.scss */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/hamburger.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/*! exports provided: createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
var createReducer = function createReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else return state;
  };
};

/***/ }),

/***/ "./src/utils/with-redux-store.js":
/*!***************************************!*\
  !*** ./src/utils/with-redux-store.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./src/store/index.js");








var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/utils/with-redux-store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (false) {} // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_9__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWithRedux, _React$Component);

    var _super = _createSuper(AppWithRedux);

    function AppWithRedux() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AppWithRedux);

      return _super.apply(this, arguments);
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppWithRedux, [{
      key: "render",
      value: function render() {
        var initialReduxState = this.props.initialReduxState;
        return __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props, {
          store: getOrCreateStore(initialReduxState),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 14
          }
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function getInitialProps(appContext) {
        var store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Get or Create the store with `undefined` as initialState
                // This allows you to set a custom default initialState
                store = getOrCreateStore(); // Provide the store to getInitialProps of pages

                appContext.ctx.store = store;
                _context.t0 = _objectSpread;
                _context.t1 = {};

                if (!App.getInitialProps) {
                  _context.next = 10;
                  break;
                }

                _context.next = 7;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(App.getInitialProps(appContext));

              case 7:
                _context.t2 = _context.sent;
                _context.next = 11;
                break;

              case 10:
                _context.t2 = {};

              case 11:
                _context.t3 = _context.t2;
                _context.t4 = {
                  initialReduxState: store.getState()
                };
                return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t3, _context.t4));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, null, Promise);
      }
    }]);

    return AppWithRedux;
  }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
});

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/petrpozoga/WIB/where-better/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map