webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/componentns/Home/FAQ/FAQ.js":
/*!*****************************************!*\
  !*** ./src/componentns/Home/FAQ/FAQ.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Layouts_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Layouts/DropDown/DropDown */ "./src/componentns/Layouts/DropDown/DropDown.js");
/* harmony import */ var _Layouts_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layouts/Btn/Btn */ "./src/componentns/Layouts/Btn/Btn.js");
/* harmony import */ var _store_home_faq_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/home/faq/actions */ "./src/store/home/faq/actions.js");
/* harmony import */ var _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FAQ.module.scss */ "./src/componentns/Home/FAQ/FAQ.module.scss");
/* harmony import */ var _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FAQ_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Home/FAQ/FAQ.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var FAQ = function FAQ(props) {
  var faqList = props.faqList,
      windowInnerWidth = props.windowInnerWidth,
      faqListMobile = props.faqListMobile;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u0422\u0412 \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443"), __jsx(_Layouts_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: windowInnerWidth > 700 ? faqList : faqListMobile,
    isMoreColumn: windowInnerWidth > 700,
    onUpdate: props.changeHomeFaqDropDown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), windowInnerWidth <= 700 && faqList.length !== faqListMobile.length ? __jsx("div", {
    className: _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_Layouts_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Больше вопросов',
    styleBtn: 'blackTransparent',
    className: _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })) : null);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    faqList: state.home.faq.faqList,
    faqListMobile: state.home.faq.faqListMobile,
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeHomeFaqDropDown: function changeHomeFaqDropDown(arr) {
      return dispatch(Object(_store_home_faq_actions__WEBPACK_IMPORTED_MODULE_4__["changeHomeFaqDropDown"])(arr));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FAQ));

/***/ })

})
//# sourceMappingURL=index.js.78e791ed1decc082d544.hot-update.js.map