webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/componentns/Home/InternetCities/InternetCities.js":
/*!***************************************************************!*\
  !*** ./src/componentns/Home/InternetCities/InternetCities.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layouts/SlideShow/SlideShow */ "./src/componentns/Layouts/SlideShow/SlideShow.js");
/* harmony import */ var _InternetCities_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InternetCities.module.scss */ "./src/componentns/Home/InternetCities/InternetCities.module.scss");
/* harmony import */ var _InternetCities_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_InternetCities_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Home/InternetCities/InternetCities.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var InternetCities = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var windowInnerWidth = _ref.windowInnerWidth;
  var cities = [['Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область'], ['Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область'], ['Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область'], ['Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область'], ['Москва', 'Московская область', 'Санкт-Петербург город', 'Ленинградская область', 'Адыгея республика', 'Алтай республика', 'Алтайский край', 'Амурская область', 'Архангельская область']];
  return __jsx("div", {
    className: _InternetCities_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "\u0413\u043E\u0440\u043E\u0434\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442"), __jsx(_Layouts_SlideShow_SlideShow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    windowInnerWidth: windowInnerWidth,
    showElements: windowInnerWidth <= 700 ? 1 : windowInnerWidth <= 950 ? 2 : windowInnerWidth <= 1267 ? 3 : 4,
    marginRight: windowInnerWidth <= 700 ? 0 : windowInnerWidth <= 950 ? 20 : 15,
    paddingLeft: windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90,
    paddingRight: windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90,
    idRoot: 'internetCitiesId',
    classNameContainer: 'internetCities',
    slideHeight: windowInnerWidth <= 700 ? 296 : 439,
    animationTime: 300,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, cities.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: _InternetCities_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, item.map(function (city, index) {
      return __jsx("div", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, city);
    }));
  })));
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(InternetCities));

/***/ })

})
//# sourceMappingURL=index.js.eae7157fe80eccd67602.hot-update.js.map