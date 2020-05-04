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
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo/Logo */ "./src/componentns/TopSidebar/Logo/Logo.js");
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/TopSidebar/TopSidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var TopSidebar = function TopSidebar(props) {
  // const toggleMobileMenu = () =>  {
  //   const { toggleMobileMenu, mobileMenuStatus } = props
  //   let rootElem = document.getElementById('root')
  //   if (!mobileMenuStatus) {
  //     rootElem.style.overflowY = 'hidden'
  //     rootElem.style.height = window.innerHeight + 'px'
  //   }
  //   else {
  //     rootElem.style.overflowY = 'auto'
  //     rootElem.style.height = 100 + '%'
  //
  //   }
  //   toggleMobileMenu(!mobileMenuStatus)
  // }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.topSidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: props.mobileMenuStatus ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider',
    type: "button" //onClick={ toggleMobileMenu }
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hamburger-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "hamburger-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 43
    }
  }))), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSmallLogo: props.windowInnerWidth <= 700,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pickRegion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 13
    }
  })))), props.windowInnerWidth <= 700 ? __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileSideBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }) : null);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(TopSidebar));

/***/ })

})
//# sourceMappingURL=_app.js.3693c00a838334aba348.hot-update.js.map