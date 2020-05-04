webpackHotUpdate("static/development/pages/_app.js",{

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

/***/ })

})
//# sourceMappingURL=_app.js.cfe3fb9eebcb1c922563.hot-update.js.map