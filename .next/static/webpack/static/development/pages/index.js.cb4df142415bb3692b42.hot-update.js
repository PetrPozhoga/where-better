webpackHotUpdate("static/development/pages/index.js",{

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
    var showItems = 4;
    var faq = getState().home.faq;
    var faqList = faq.faqList.slice();
    var faqListMobile = faq.faqListMobile.slice();
  };
};

/***/ })

})
//# sourceMappingURL=index.js.cb4df142415bb3692b42.hot-update.js.map