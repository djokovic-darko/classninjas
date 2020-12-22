webpackJsonp([0],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_DefaultCarousel__ = __webpack_require__(147);


$(document).ready(function () {
  var defaultCarousel = new __WEBPACK_IMPORTED_MODULE_1_components_DefaultCarousel__["a" /* default */]();
  defaultCarousel.init();
  console.log('dek');
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(67)))

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import \"~swiper/src/swiper\";\n^\n      File to import not found or unreadable: ~swiper/src/swiper.\n      in /Users/mac/PhpstormProjects/class-ninjas.test/static/scss/style.scss (line 53, column 1)\n    at /Users/mac/PhpstormProjects/class-ninjas.test/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/mac/PhpstormProjects/class-ninjas.test/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/mac/PhpstormProjects/class-ninjas.test/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/mac/PhpstormProjects/class-ninjas.test/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/mac/PhpstormProjects/class-ninjas.test/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/mac/PhpstormProjects/class-ninjas.test/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/mac/PhpstormProjects/class-ninjas.test/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultCarousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_object_assign_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_object_assign_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_object_assign_js__);
throw new Error("Cannot find module \"swiper/js/swiper.js\"");


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

},[145]);
//# sourceMappingURL=bundle.js.map