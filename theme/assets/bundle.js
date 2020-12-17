webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pages_HomePage__ = __webpack_require__(146);


$(document).ready(function () {
  console.log('ShopyCode');
  var homePage = new __WEBPACK_IMPORTED_MODULE_1_pages_HomePage__["a" /* default */]();
  homePage.init();
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(67)))

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ComponentSample__ = __webpack_require__(147);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var HomePage = /*#__PURE__*/function () {
  function HomePage() {
    _classCallCheck(this, HomePage);
  }

  _createClass(HomePage, [{
    key: "init",
    value: function init() {
      var component = new __WEBPACK_IMPORTED_MODULE_0__components_ComponentSample__["a" /* ComponentSample */]();
      component.init();
    }
  }]);

  return HomePage;
}();



/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSample; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentSample = /*#__PURE__*/function () {
  function ComponentSample() {
    _classCallCheck(this, ComponentSample);
  }

  _createClass(ComponentSample, [{
    key: "init",
    value: function init() {
      this.componentMethod();
    }
  }, {
    key: "componentMethod",
    value: function componentMethod() {
      console.log('Component sample');
    }
  }]);

  return ComponentSample;
}();



/***/ })

},[144]);
//# sourceMappingURL=bundle.js.map