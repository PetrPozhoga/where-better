webpackHotUpdate("static/development/pages/_app.js",{

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

/***/ })

})
//# sourceMappingURL=_app.js.d0d4428e09ce42ed3e08.hot-update.js.map