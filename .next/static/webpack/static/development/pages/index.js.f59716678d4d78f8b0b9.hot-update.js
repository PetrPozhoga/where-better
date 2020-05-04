webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/componentns/Home/AboutService/AboutService.js":
/*!***********************************************************!*\
  !*** ./src/componentns/Home/AboutService/AboutService.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutService.module.scss */ "./src/componentns/Home/AboutService/AboutService.module.scss");
/* harmony import */ var _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Layouts/SlideShow/SlideShow */ "./src/componentns/Layouts/SlideShow/SlideShow.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Home/AboutService/AboutService.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var AboutService = function AboutService(_ref) {
  var windowInnerWidth = _ref.windowInnerWidth;
  var aboutServiceList = [{
    count: '278',
    title: 'интернет-провайдерв',
    description: 'Более 200 интернет-провайдеров доступно для подключения'
  }, {
    count: '>3млн.',
    title: 'адресов в системе',
    description: 'Более 200 интернет-провайдеров доступно для подключения'
  }, {
    count: '100 тыс.',
    title: 'подключают интернет каждый месяц',
    description: 'Более 200 интернет-провайдеров доступно для подключения'
  }, {
    count: '20 094',
    title: 'отзывов о провайдерах',
    description: 'Более 200 интернет-провайдеров доступно для подключения'
  }];
  var slot = [aboutServiceList.map(function (_ref2, key) {
    var count = _ref2.count,
        title = _ref2.title,
        description = _ref2.description;
    return __jsx("div", {
      className: _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, count), __jsx("div", {
      className: _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, title), __jsx("div", {
      className: _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, description));
  })];
  return __jsx("div", {
    className: _AboutService_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, windowInnerWidth <= 1150 ? __jsx(_Layouts_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    animationTime: 300,
    showElements: windowInnerWidth <= 700 ? 1 : 2,
    slideHeight: windowInnerWidth <= 700 ? 203 : 232,
    marginRight: windowInnerWidth <= 700 ? 0 : 15,
    windowInnerWidth: windowInnerWidth,
    classNameContainer: 'aboutServiceSlider',
    idRoot: 'aboutServiceSliderId',
    paddingRight: windowInnerWidth <= 700 ? 52 : 77,
    paddingLeft: windowInnerWidth <= 700 ? 52 : 77,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, slot[0]) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, slot[0]));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(AboutService));

/***/ })

})
//# sourceMappingURL=index.js.f59716678d4d78f8b0b9.hot-update.js.map