webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/componentns/Home/PopularProvider/PopularProvider.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/componentns/Home/PopularProvider/PopularProvider.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".PopularProvider_root__3F5Nn {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.PopularProvider_item__37DhM {\n  padding: 21px 0 25px 0;\n  background: #E5E5E5;\n  border-radius: 25px;\n  color: rgba(0, 0, 0, 0.8);\n  position: relative;\n  z-index: 1;\n  transition: background-color .2s; }\n  .PopularProvider_item__37DhM::before {\n    position: absolute;\n    z-index: -1;\n    border-radius: 23px;\n    width: calc(100% - 8px);\n    height: calc(100% - 8px);\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    content: '';\n    background: #fff; }\n  .PopularProvider_item__37DhM:hover {\n    background: linear-gradient(153.31deg, #004396 -7.23%, #F3473C 67.97%); }\n\n.PopularProvider_title__20J6- {\n  line-height: 30px;\n  margin-top: 2px;\n  margin-bottom: 13px; }\n\n.PopularProvider_assessment__2KTix {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .PopularProvider_assessment__2KTix svg {\n    margin-right: 8px; }\n  .PopularProvider_assessment__2KTix > div {\n    font-weight: bold; }\n\n.PopularProvider_totalTariff__2DOdj {\n  font-weight: bold;\n  line-height: 30px;\n  margin-top: 19px; }\n\n.PopularProvider_speed__K7TcH, .PopularProvider_price__3Wa8e, .PopularProvider_cities__G6Qn2 {\n  line-height: 30px; }\n\n.PopularProvider_btn__sf2X0 {\n  max-width: 148px;\n  margin-top: 36px; }\n\n@media (max-width: 950px) {\n  .PopularProvider_totalTariff__2DOdj {\n    font-size: 20px;\n    line-height: 30px;\n    margin-top: 19px; } }\n\n@media (max-width: 700px) {\n  .PopularProvider_item__37DhM > svg {\n    width: 132px;\n    height: 72px; } }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/componentns/Home/PopularProvider/PopularProvider.module.scss","/Users/petrpozoga/WIB/where-better/src/styles/mixin.scss"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,mBAAmB,EAAA;;AAOrB;EACE,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,gCAAgC,EAAA;EAPlC;ICaE,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,WAAW;IACX,gBAAgB,EAAA;EDtBlB;IAYI,sEAAsE,EAAA;;AAI1E;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB,EAAA;;AAGrB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;EAHrB;IAMI,iBAAiB,EAAA;EANrB;IAUI,iBAAiB,EAAA;;AAIrB;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB,EAAA;;AAGlB;EACE,iBAAiB,EAAA;;AAGnB;EACE,gBAAgB;EAChB,gBAAgB,EAAA;;AAGlB;EACE;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB,EAAA,EACjB;;AAGH;EACE;IAEI,YAAY;IACZ,YAAY,EAAA,EACb","file":"PopularProvider.module.scss","sourcesContent":["@import \"../../../styles/mixin\";\n\n.root {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.popularProviderContainer {\n\n}\n\n.item {\n  padding: 21px 0 25px 0;\n  background: #E5E5E5;\n  border-radius: 25px;\n  color: rgba(0, 0, 0, 0.8);\n  position: relative;\n  z-index: 1;\n  transition: background-color .2s;\n  &::before {\n    @include beforeCard\n  }\n  &:hover{\n    background: linear-gradient(153.31deg, #004396 -7.23%, #F3473C 67.97%);\n  }\n}\n\n.title {\n  line-height: 30px;\n  margin-top: 2px;\n  margin-bottom: 13px;\n}\n\n.assessment {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    margin-right: 8px;\n  }\n\n  & > div {\n    font-weight: bold;\n  }\n}\n\n.totalTariff {\n  font-weight: bold;\n  line-height: 30px;\n  margin-top: 19px;\n}\n\n.speed, .price, .cities {\n  line-height: 30px;\n}\n\n.btn {\n  max-width: 148px;\n  margin-top: 36px;\n}\n\n@media (max-width: 950px) {\n  .totalTariff {\n    font-size: 20px;\n    line-height: 30px;\n    margin-top: 19px;\n  }\n}\n\n@media (max-width: 700px) {\n  .item {\n    &>svg {\n      width: 132px;\n      height: 72px;\n    }\n  }\n}\n","@mixin homeSecondTitle {\n  font-size: 18px;\n  font-weight: 400;\n  margin: 30px auto 50px auto;\n  max-width: 570px;\n  width: 100%;\n}\n\n@mixin homeSecondTitleMedium {\n  font-size: 16px;\n  line-height: 22px;\n  margin: 25px auto 40px auto;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n@mixin homeSecondTitleSmall {\n  font-size: 16px;\n  line-height: 22px;\n  margin: 15px auto 25px auto;\n  text-align: center;\n}\n\n@mixin beforeCard {\n  position: absolute;\n  z-index: -1;\n  border-radius: 23px;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  content: '';\n  background: #fff;\n}\n\n@mixin input {\n  background: #FFFFFF;\n  height: 45px;\n  border: 2px solid #E7E7E7;\n  box-sizing: border-box;\n  border-radius: 22.5px;\n  font-size: 14px;\n  line-height: 17px;\n  padding-left: 28px;\n  color: #979797;\n}\n\n"]}]);
// Exports
exports.locals = {
	"root": "PopularProvider_root__3F5Nn",
	"item": "PopularProvider_item__37DhM",
	"title": "PopularProvider_title__20J6-",
	"assessment": "PopularProvider_assessment__2KTix",
	"totalTariff": "PopularProvider_totalTariff__2DOdj",
	"speed": "PopularProvider_speed__K7TcH",
	"price": "PopularProvider_price__3Wa8e",
	"cities": "PopularProvider_cities__G6Qn2",
	"btn": "PopularProvider_btn__sf2X0"
};

/***/ })

})
//# sourceMappingURL=index.js.3d9b28e134dbd46354b3.hot-update.js.map