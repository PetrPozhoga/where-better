webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/Layouts/SlideShow/SlideShow.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/componentns/Layouts/SlideShow/SlideShow.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".SlideShow_root__2xvIz {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.SlideShow_wrapp__1ZkwL {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto; }\n\n.SlideShow_container__3QOI8 {\n  display: flex;\n  height: 100%;\n  position: relative;\n  margin-left: 0px; }\n\n.SlideShow_item__3e_K7 div {\n  width: 100%; }\n\n.SlideShow_arrowControl__2g9pF {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: 50px;\n  transform: translateY(-50%); }\n  .SlideShow_arrowControl__2g9pF > svg {\n    position: absolute;\n    top: 0;\n    cursor: pointer; }\n    .SlideShow_arrowControl__2g9pF > svg:hover > circle {\n      fill-opacity: 0.65; }\n    .SlideShow_arrowControl__2g9pF > svg:first-child {\n      left: -14px; }\n    .SlideShow_arrowControl__2g9pF > svg:last-child {\n      right: -14px; }\n\n.SlideShow_circleControl__Rpsv7 {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-top: 30px; }\n  .SlideShow_circleControl__Rpsv7 > div {\n    width: 10px;\n    height: 10px;\n    background: #C4C4C4;\n    border-radius: 50px;\n    margin-right: 7px;\n    cursor: pointer; }\n\ndiv.SlideShow_activeCircle__1iYtF {\n  background: #333333; }\n\n@media (max-width: 700px) {\n  .SlideShow_arrowControl__2g9pF {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    height: 37px;\n    transform: translateY(-50%); }\n    .SlideShow_arrowControl__2g9pF > svg {\n      height: 37px;\n      width: 37px;\n      position: absolute;\n      top: 0;\n      cursor: pointer; }\n      .SlideShow_arrowControl__2g9pF > svg:hover > circle {\n        fill-opacity: 0.65; }\n      .SlideShow_arrowControl__2g9pF > svg:first-child {\n        left: -14px; }\n      .SlideShow_arrowControl__2g9pF > svg:last-child {\n        right: -14px; } }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/componentns/Layouts/SlideShow/SlideShow.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB,EAAA;;AAGpB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,cAAc,EAAA;;AAIhB;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,gBAAgB,EAAA;;AAIlB;EAEI,WAAW,EAAA;;AAIf;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,YAAY;EACZ,2BAA2B,EAAA;EAL7B;IAQI,kBAAkB;IAClB,MAAM;IACN,eAAe,EAAA;IAVnB;MAaM,kBAAkB,EAAA;IAbxB;MAiBM,WAAW,EAAA;IAjBjB;MAqBM,YAAY,EAAA;;AAKlB;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,gBAAgB,EAAA;EAJlB;IAOI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe,EAAA;;AAInB;EACE,mBAAmB,EAAA;;AAGrB;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,YAAY;IACZ,2BAA2B,EAAA;IAL7B;MAQI,YAAY;MACZ,WAAW;MACX,kBAAkB;MAClB,MAAM;MACN,eAAe,EAAA;MAZnB;QAeM,kBAAkB,EAAA;MAfxB;QAmBM,WAAW,EAAA;MAnBjB;QAuBM,YAAY,EAAA,EACb","file":"SlideShow.module.scss","sourcesContent":[".root {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.wrapp {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n  //z-index: 1;\n}\n\n.container {\n  display: flex;\n  height: 100%;\n  position: relative;\n  margin-left: 0px;\n  //transition: left linear .3s;\n}\n\n.item {\n  div {\n    width: 100%;\n  }\n}\n\n.arrowControl {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  height: 50px;\n  transform: translateY(-50%);\n\n  & > svg {\n    position: absolute;\n    top: 0;\n    cursor: pointer;\n\n    &:hover > circle {\n      fill-opacity: 0.65;\n    }\n\n    &:first-child {\n      left: -14px;\n    }\n\n    &:last-child {\n      right: -14px;\n    }\n  }\n}\n\n.circleControl {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n\n  & > div {\n    width: 10px;\n    height: 10px;\n    background: #C4C4C4;\n    border-radius: 50px;\n    margin-right: 7px;\n    cursor: pointer;\n  }\n}\n\ndiv.activeCircle {\n  background: #333333;\n}\n\n@media (max-width: 700px) {\n  .arrowControl {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    height: 37px;\n    transform: translateY(-50%);\n\n    & > svg {\n      height: 37px;\n      width: 37px;\n      position: absolute;\n      top: 0;\n      cursor: pointer;\n\n      &:hover > circle {\n        fill-opacity: 0.65;\n      }\n\n      &:first-child {\n        left: -14px;\n      }\n\n      &:last-child {\n        right: -14px;\n      }\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"root": "SlideShow_root__2xvIz",
	"wrapp": "SlideShow_wrapp__1ZkwL",
	"container": "SlideShow_container__3QOI8",
	"item": "SlideShow_item__3e_K7",
	"arrowControl": "SlideShow_arrowControl__2g9pF",
	"circleControl": "SlideShow_circleControl__Rpsv7",
	"activeCircle": "SlideShow_activeCircle__1iYtF"
};

/***/ })

})
//# sourceMappingURL=index.js.3568abb02d8e0d233963.hot-update.js.map