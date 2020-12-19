webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_DefaultCarousel__ = __webpack_require__(148);


$(document).ready(function () {
  var defaultCarousel = new __WEBPACK_IMPORTED_MODULE_1_components_DefaultCarousel__["a" /* default */]();
  defaultCarousel.init();
  console.log('dek');
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(67)))

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultCarousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_object_assign_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_object_assign_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_object_assign_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper_js_swiper_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper_js_swiper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_swiper_js_swiper_js__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DefaultCarousel = /*#__PURE__*/function () {
  function DefaultCarousel(options) {
    _classCallCheck(this, DefaultCarousel);

    var _defaults = {};
    this.defaults = Object.assign({}, _defaults, options);
  }

  _createClass(DefaultCarousel, [{
    key: "init",
    value: function init() {
      this.carousel();
    }
  }, {
    key: "carousel",
    value: function carousel() {
      var defaultSwiper = new __WEBPACK_IMPORTED_MODULE_1_swiper_js_swiper_js___default.a(".js-customers-carousel", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        pagination: {
          el: ".js-customers-pagination",
          clickable: true
        },
        breakpoints: {
          567: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30
          }
        }
      });
    }
  }]);

  return DefaultCarousel;
}();



/***/ })

},[146]);
//# sourceMappingURL=bundle.js.map