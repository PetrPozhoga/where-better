webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/componentns/Home/Banner/Banner.js":
/*!***********************************************!*\
  !*** ./src/componentns/Home/Banner/Banner.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layouts/SlideShow/SlideShow */ "./src/componentns/Layouts/SlideShow/SlideShow.js");
/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banner.module.scss */ "./src/componentns/Home/Banner/Banner.module.scss");
/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.jpg */ "./src/componentns/Home/Banner/banner.jpg");
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_banner_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bannerMobile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bannerMobile.png */ "./src/componentns/Home/Banner/bannerMobile.png");
/* harmony import */ var _bannerMobile_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bannerMobile_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Home/Banner/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Banner = function Banner(_ref) {
  var windowInnerWidth = _ref.windowInnerWidth;
  return __jsx("div", {
    className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_Layouts_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showElements: 1,
    windowInnerWidth: windowInnerWidth,
    animationTime: 500,
    classNameContainer: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    slideHeight: '286px',
    idRoot: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, ['red', 'gray', 'black'].map(function (item, key) {
    return __jsx("div", {
      className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: windowInnerWidth <= 700 ? _bannerMobile_png__WEBPACK_IMPORTED_MODULE_4___default.a : _banner_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }));
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Banner));

/***/ }),

/***/ "./src/componentns/Home/Banner/bannerMobile.jpg":
false,

/***/ "./src/componentns/Home/Banner/bannerMobile.png":
/*!******************************************************!*\
  !*** ./src/componentns/Home/Banner/bannerMobile.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bannerMobile-e2bedde56b3491a8594d51f11df70895.png";

/***/ })

})
//# sourceMappingURL=index.js.ba511e245eaa5fc60ae5.hot-update.js.map