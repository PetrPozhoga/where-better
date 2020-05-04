webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/hamburger.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/hamburger.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 0px 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.7; }\n  .hamburger.is-active:hover {\n    opacity: 0.7; }\n  .hamburger.is-active .hamburger-inner,\n  .hamburger.is-active .hamburger-inner::before,\n  .hamburger.is-active .hamburger-inner::after {\n    background-color: #000; }\n\n.hamburger-box {\n  width: 30px;\n  height: 21px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1.5px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 30px;\n    height: 3px;\n    background-color: #000;\n    border-radius: 50px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -9px; }\n  .hamburger-inner::after {\n    bottom: -9px; }\n\n/*\n   * Slider\n   */\n.hamburger--slider .hamburger-inner {\n  top: 1.5px; }\n  .hamburger--slider .hamburger-inner::before {\n    top: 9px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider .hamburger-inner::after {\n    top: 18px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  transform: translate3d(0, 9px, 0) rotate(45deg); }\n  .hamburger--slider.is-active .hamburger-inner::before {\n    transform: rotate(-45deg) translate3d(-4.28571px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider.is-active .hamburger-inner::after {\n    transform: translate3d(0, -18px, 0) rotate(-90deg); }\n\n@media (max-width: 950px) {\n  .hamburger-box {\n    width: 25px; }\n  .hamburger-inner {\n    display: block;\n    top: 50%;\n    margin-top: -1.5px; }\n    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n      width: 25px;\n      height: 3px;\n      background-color: #000;\n      border-radius: 50px;\n      position: absolute;\n      transition-property: transform;\n      transition-duration: 0.15s;\n      transition-timing-function: ease; }\n    .hamburger-inner::before, .hamburger-inner::after {\n      content: \"\";\n      display: block; }\n    .hamburger-inner::before {\n      top: -9px; }\n    .hamburger-inner::after {\n      bottom: -9px; } }\n", "",{"version":3,"sources":["/Users/petrpozoga/WIB/where-better/src/styles/hamburger.scss"],"names":[],"mappings":"AACA;;;;;;EAKE;AA8BF;EACE,gBA1BuB;EA2BvB,qBAAqB;EACrB,eAAe;EAEf,4CAAoC;EAApC,oCAAoC;EAApC,oDAAoC;EACpC,0BAA0B;EAC1B,kCAAkC;EAGlC,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,6BAA6B;EAC7B,SAAS;EACT,SAAS;EACT,iBAAiB,EAAA;EAhBnB;IAsBM,YAxCuB,EAAA;EAkB7B;IA+BQ,YAjDqB,EAAA;EAkB7B;;;IAsCM,sBA1DsB,EAAA;;AA+D5B;EACE,WAnE0B;EAoE1B,YAAkE;EAClE,qBAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EACE,cAAc;EACd,QAAQ;EACR,kBAAwC,EAAA;EAH1C;IAQI,WAjFwB;IAkFxB,WAjFwB;IAkFxB,sBAhFwB;IAiFxB,mBAhFgC;IAiFhC,kBAAkB;IAClB,8BAA8B;IAC9B,0BAA0B;IAC1B,gCAAgC,EAAA;EAfpC;IAoBI,WAAW;IACX,cAAc,EAAA;EArBlB;IAyBI,SAA8D,EAAA;EAzBlE;IA6BI,YAAiE,EAAA;;AAMnE;;IA9DE;AAiEF;EAEI,UAAgC,EAAA;EAFpC;IAKM,QAAuD;IACvD,uCAAuC;IACvC,gCAAgC;IAChC,0BAA0B,EAAA;EARhC;IAYM,SAAmE,EAAA;;AAZzE;EAoBM,+CAAqD,EAAA;EApB3D;IAuBQ,0DAAoG;IACpG,UAAU,EAAA;EAxBlB;IA4BQ,kDAA2D,EAAA;;AAOrE;EACC;IACE,WAAW,EAAA;EAGZ;IACE,cAAc;IACd,QAAQ;IACR,kBAAwC,EAAA;IAH1C;MAQI,WAAW;MACX,WA/JsB;MAgKtB,sBA9JsB;MA+JtB,mBA9J8B;MA+J9B,kBAAkB;MAClB,8BAA8B;MAC9B,0BAA0B;MAC1B,gCAAgC,EAAA;IAfpC;MAoBI,WAAW;MACX,cAAc,EAAA;IArBlB;MAyBI,SAA8D,EAAA;IAzBlE;MA6BI,YAAiE,EAAA,EAClE","file":"hamburger.scss","sourcesContent":["@charset \"UTF-8\";\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n// Settings\n// ==================================================\n$hamburger-padding-x: 0px !default;\n$hamburger-padding-y: 0px !default;\n$hamburger-layer-width: 30px !default;\n$hamburger-layer-height: 3px !default;\n$hamburger-layer-spacing: 6px !default;\n$hamburger-layer-color: #000 !default;\n$hamburger-layer-border-radius: 50px !default;\n$hamburger-hover-opacity: 0.7 !default;\n$hamburger-active-layer-color: $hamburger-layer-color !default;\n$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;\n\n// To use CSS filters as the hover effect instead of opacity,\n// set $hamburger-hover-use-filter as true and\n// change the value of $hamburger-hover-filter accordingly.\n$hamburger-hover-use-filter: false !default;\n$hamburger-hover-filter: opacity(50%) !default;\n$hamburger-active-hover-filter: $hamburger-hover-filter !default;\n\n// Types (Remove or comment out what you don’t need)\n// ==================================================\n$hamburger-types: (\n        slider,\n) !default;\n\n// Base Hamburger (We need this)\n.hamburger {\n  padding: $hamburger-padding-y $hamburger-padding-x;\n  display: inline-block;\n  cursor: pointer;\n\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n\n  // Normalize (<button>)\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    @if $hamburger-hover-use-filter == true {\n      filter: $hamburger-hover-filter;\n    } @else {\n      opacity: $hamburger-hover-opacity;\n    }\n  }\n\n  &.is-active {\n    &:hover {\n      @if $hamburger-hover-use-filter == true {\n        filter: $hamburger-active-hover-filter;\n      } @else {\n        opacity: $hamburger-active-hover-opacity;\n      }\n    }\n\n    .hamburger-inner,\n    .hamburger-inner::before,\n    .hamburger-inner::after {\n      background-color: $hamburger-active-layer-color;\n    }\n  }\n}\n\n.hamburger-box {\n  width: $hamburger-layer-width;\n  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: $hamburger-layer-height / -2;\n\n  &,\n  &::before,\n  &::after {\n    width: $hamburger-layer-width;\n    height: $hamburger-layer-height;\n    background-color: $hamburger-layer-color;\n    border-radius: $hamburger-layer-border-radius;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n  }\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n  }\n\n  &::before {\n    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n\n  &::after {\n    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n}\n\n// ==================================================\n@if index($hamburger-types, slider) {\n  /*\n   * Slider\n   */\n  .hamburger--slider {\n    .hamburger-inner {\n      top: $hamburger-layer-height / 2;\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition-property: transform, opacity;\n        transition-timing-function: ease;\n        transition-duration: 0.15s;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;\n\n        transform: translate3d(0, $y-offset, 0) rotate(45deg);\n\n        &::before {\n          transform: rotate(-45deg) translate3d($hamburger-layer-width / -7, $hamburger-layer-spacing * -1, 0);\n          opacity: 0;\n        }\n\n        &::after {\n          transform: translate3d(0, $y-offset * -2, 0) rotate(-90deg);\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 950px) {\n .hamburger-box {\n   width: 25px;\n }\n\n  .hamburger-inner {\n    display: block;\n    top: 50%;\n    margin-top: $hamburger-layer-height / -2;\n\n    &,\n    &::before,\n    &::after {\n      width: 25px;\n      height: $hamburger-layer-height;\n      background-color: $hamburger-layer-color;\n      border-radius: $hamburger-layer-border-radius;\n      position: absolute;\n      transition-property: transform;\n      transition-duration: 0.15s;\n      transition-timing-function: ease;\n    }\n\n    &::before,\n    &::after {\n      content: \"\";\n      display: block;\n    }\n\n    &::before {\n      top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n    }\n\n    &::after {\n      bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n    }\n  }\n}\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.3a7de5d5b7f3ff7944d5.hot-update.js.map