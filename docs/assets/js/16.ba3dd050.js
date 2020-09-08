(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-disqus/src/Disqus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-disqus/src/Disqus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/vue-disqus/src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/vue-disqus/src/utils.js");
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Disqus',

  props: {
    shortname: String,
    pageConfig: {
      type: Object,
      validator: config => Object.keys(config).every(key => _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_CONFIG_KEYS"].includes(key))
    },
    ssoConfig: {
      type: Object,
      validator: config => Object.keys(config).every(key => _constants__WEBPACK_IMPORTED_MODULE_0__["SSO_KEYS"].includes(key))
    },
    lang: {
      type: String,
      default: 'en'
    },
    lazy: {
      type: Boolean,
      default: true
    },
    lazyConfig: {
      type: Object,
      default: () => ({
        root: null,
        rootMargin: '300px',
        threshold: 0.5
      })
    }
  },

  data: () => ({
    observer: null
  }),

  computed: {
    getShortname () {
      const shortname = this.shortname ? this.shortname : this.$disqus ? this.$disqus.shortname : null
      if (!shortname) throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__["ERROR_SHORTNAME_REQUIRED"])
      return shortname
    }
  },

  watch: {
    lang () {
      this.reset()
    }
  },

  mounted () {
    if (this.lazy) return this.observerDisqus()
    this.init()
  },

  methods: {
    init () {
      if (this.$disqus) {
        this.$disqus.reset = this.reset
      }
      if (window.DISQUS) {
        return this.reset()
      }
      const setBaseConfig = this.setBaseConfig
      window.disqus_config = function () {
        setBaseConfig(this)
      }
      this.loadEmbedScript()
      if (this.$route) this.$watch('$route.path', () => this.reset())
    },

    reset (dsq = window.DISQUS) {
      const setBaseConfig = this.setBaseConfig
      dsq.reset({
        reload: true,
        config: function () {
          setBaseConfig(this)
        }
      })
    },

    observerDisqus () {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(this.handleObserver, this.lazyConfig)
        return this.observer.observe(this.$el)
      }
      this.init()
    },

    handleObserver (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.observer.disconnect()
          this.init()
        }
      })
    },

    loadEmbedScript () {
      const d = document
      const s = d.createElement('script')
      s.setAttribute('id', 'embed-disqus')
      s.setAttribute('data-timestamp', +new Date())
      s.type = 'text/javascript'
      s.async = true
      s.src = `//${this.getShortname}.disqus.com/embed.js`
      ;(d.head || d.body).appendChild(s)
    },

    setBaseConfig (disqusConfig) {
      this.setPageConfig(disqusConfig)
      this.cbDisqus(disqusConfig)

      if (this.ssoConfig && Object.keys(this.ssoConfig).length) {
        Object.assign(disqusConfig.sso, this.ssoConfig)
      }

      disqusConfig.language = this.lang
    },

    setPageConfig (disqusConfig) {
      const defaultConfig = {
        url: document.baseURI,
        identifier: this.$route ? this.$route.path : window.location.pathname
      }

      Object.assign(disqusConfig.page, defaultConfig)

      if (this.pageConfig && Object.keys(this.pageConfig).length) {
        Object.assign(disqusConfig.page, this.pageConfig)
      }
    },

    cbDisqus (disqusConfig) {
      _constants__WEBPACK_IMPORTED_MODULE_0__["CALLBACKS"].forEach(cb => {
        disqusConfig.callbacks[cb] = [e => {
          this.$emit(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getEmitName"])(cb), e)
        }]
      })
    }
  }
});


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-disqus/src/Disqus.vue?vue&type=template&id=57440f75&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-disqus/src/Disqus.vue?vue&type=template&id=57440f75& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"min-height":"200px"},attrs:{"id":"disqus_thread"}})}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-disqus/src/Disqus.vue":
/*!************************************************!*\
  !*** ./node_modules/vue-disqus/src/Disqus.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Disqus_vue_vue_type_template_id_57440f75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disqus.vue?vue&type=template&id=57440f75& */ "./node_modules/vue-disqus/src/Disqus.vue?vue&type=template&id=57440f75&");
/* harmony import */ var _Disqus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Disqus.vue?vue&type=script&lang=js& */ "./node_modules/vue-disqus/src/Disqus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Disqus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Disqus_vue_vue_type_template_id_57440f75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Disqus_vue_vue_type_template_id_57440f75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-disqus/src/Disqus.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-disqus/src/Disqus.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Disqus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js??ref--0-0!../../vue-loader/lib??vue-loader-options!./Disqus.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-disqus/src/Disqus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Disqus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-disqus/src/Disqus.vue?vue&type=template&id=57440f75&":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-disqus/src/Disqus.vue?vue&type=template&id=57440f75& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Disqus_vue_vue_type_template_id_57440f75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../cache-loader/dist/cjs.js??ref--0-0!../../vue-loader/lib??vue-loader-options!./Disqus.vue?vue&type=template&id=57440f75& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-disqus/src/Disqus.vue?vue&type=template&id=57440f75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Disqus_vue_vue_type_template_id_57440f75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Disqus_vue_vue_type_template_id_57440f75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-disqus/src/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-disqus/src/constants.js ***!
  \**************************************************/
/*! exports provided: ERROR_SHORTNAME_REQUIRED, PAGE_CONFIG_KEYS, SSO_KEYS, CALLBACKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_SHORTNAME_REQUIRED", function() { return ERROR_SHORTNAME_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_CONFIG_KEYS", function() { return PAGE_CONFIG_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSO_KEYS", function() { return SSO_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLBACKS", function() { return CALLBACKS; });
const ERROR_SHORTNAME_REQUIRED = 'Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)'
const PAGE_CONFIG_KEYS = ['api_key', 'author_s3', 'category_id', 'identifier', 'integration', 'language', 'remote_auth_s3', 'slug', 'title', 'url']
const SSO_KEYS = ['name', 'button', 'icon', 'url', 'logout', 'width', 'height']
const CALLBACKS = ['afterRender', 'onInit', 'onIdentify', 'beforeComment', 'onNewComment', 'onPaginate', 'onReady', 'preData', 'preInit', 'preReset']


/***/ }),

/***/ "./node_modules/vue-disqus/src/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-disqus/src/utils.js ***!
  \**********************************************/
/*! exports provided: getEmitName, draf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmitName", function() { return getEmitName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draf", function() { return draf; });
const getEmitName = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().replace('on-', '')
const draf = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))


/***/ })

}]);
//# sourceMappingURL=16.ba3dd050.js.map