(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/BackToTop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/BackToTop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var elevator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elevator.js */ "./node_modules/elevator.js/elevator.min.js");
/* harmony import */ var elevator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elevator_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VueElevator',

  data () {
    return {
      show: false,
      fire: false
    }
  },

  computed: {
    elevatorConfig () {
      return this.$themeConfig.elevator
    }
  },

  mounted () {
    this.elevator()
    this.handleScrollEffectBackToTop()
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.setPanel)
  },

  methods: {
    fired () {
      this.fire = true
    },

    elevator () {
      const config = {
        element: this.$refs.arrowTop,
        duration: this.elevatorConfig.duration,
        mainAudio: this.elevatorConfig.mainAudio,
        endAudio: this.elevatorConfig.endAudio
      }
      /* eslint-disable no-new */
      setTimeout(() => {
        new elevator_js__WEBPACK_IMPORTED_MODULE_0___default.a(config)
      }, 5000)
    },

    handleScrollEffectBackToTop () {
      this.setPanel()
      document.addEventListener('scroll', this.setPanel)
    },

    setPanel () {
      window.requestAnimationFrame(() => {
        const diff = (document.documentElement.scrollHeight - document.documentElement.clientHeight) - 1500
        this.show = window.scrollY > diff
        if (window.scrollY === 0) {
          this.fire = false
        }
      })
    }
  }
});


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"86bf386c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/BackToTop.vue?vue&type=template&id=bf623076&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"86bf386c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/BackToTop.vue?vue&type=template&id=bf623076& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"elevator"},[_c('a',{ref:"arrowTop",staticClass:"elevator__link",class:{ 'elevator__link--show': _vm.show, 'elevator__link--fire': _vm.fire },on:{"click":_vm.fired}},[_c('span',{staticClass:"icon elevator__icon"},[_vm._v("greaterthan")]),_vm._v(" Top\n  ")])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/elevator.js/elevator.min.js":
/*!**************************************************!*\
  !*** ./node_modules/elevator.js/elevator.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Elevator=function(n){"use strict";function e(n,e,t,o){return n/=o/2,1>n?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return g&&(e-=g),e}function l(n){T||(T=n);var t=n-T,o=e(t,k,y-k,b);window.scrollTo(0,o),b>t?w=requestAnimationFrame(l):r()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){T=null,k=null,h=!1}function a(){C&&(y=o(C))}function r(){u(),f&&(f.pause(),f.currentTime=0),p&&p.play(),v&&v()}function d(){h&&(cancelAnimationFrame(w),u(),f&&(f.pause(),f.currentTime=0),a(),window.scrollTo(0,y))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){a(),document.documentElement.scrollTop=y,document.body.scrollTop=y,window.scroll(0,y)})}function s(n){A=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(C=n.targetElement),n.verticalPadding&&(g=n.verticalPadding),window.addEventListener("blur",d,!1),n.mainAudio&&(f=new Audio(n.mainAudio),f.setAttribute("preload",n.preloadAudio),f.setAttribute("loop",n.loopAudio)),n.endAudio&&(p=new Audio(n.endAudio),p.setAttribute("preload","true")),n.endCallback&&(v=n.endCallback),n.startCallback&&(m=n.startCallback))}var m,f,p,v,A=null,w=null,b=null,E=!1,T=null,k=null,y=0,C=null,g=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||A.scrollTop,a(),E||(b=1.5*Math.abs(y-k)),requestAnimationFrame(l),f&&f.play(),m&&m())},s(n)}; true&&module.exports&&(module.exports=Elevator);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/BackToTop.vue?vue&type=style&index=0&lang=stylus&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--12-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--12-oneOf-1-2!./node_modules/stylus-loader??ref--12-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/BackToTop.vue?vue&type=style&index=0&lang=stylus& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/.vuepress/theme/components/BackToTop.vue":
/*!******************************************************!*\
  !*** ./src/.vuepress/theme/components/BackToTop.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackToTop_vue_vue_type_template_id_bf623076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=template&id=bf623076& */ "./src/.vuepress/theme/components/BackToTop.vue?vue&type=template&id=bf623076&");
/* harmony import */ var _BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=script&lang=js& */ "./src/.vuepress/theme/components/BackToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=style&index=0&lang=stylus& */ "./src/.vuepress/theme/components/BackToTop.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackToTop_vue_vue_type_template_id_bf623076___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackToTop_vue_vue_type_template_id_bf623076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/.vuepress/theme/components/BackToTop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/.vuepress/theme/components/BackToTop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/BackToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/.vuepress/theme/components/BackToTop.vue?vue&type=style&index=0&lang=stylus&":
/*!******************************************************************************************!*\
  !*** ./src/.vuepress/theme/components/BackToTop.vue?vue&type=style&index=0&lang=stylus& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--12-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--12-oneOf-1-2!../../../../node_modules/stylus-loader??ref--12-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/BackToTop.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/.vuepress/theme/components/BackToTop.vue?vue&type=template&id=bf623076&":
/*!*************************************************************************************!*\
  !*** ./src/.vuepress/theme/components/BackToTop.vue?vue&type=template&id=bf623076& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_bf623076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"86bf386c-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=template&id=bf623076& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"86bf386c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/BackToTop.vue?vue&type=template&id=bf623076&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_bf623076___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_bf623076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=12.6d7a40c4.js.map