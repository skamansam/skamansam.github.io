(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/posts/2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('p',[_vm._v("I have seen a lot of posts on cookie detection in Rails. I believe this may be a\nbad idea, in general, but here is a cheap way to detect whether or not cookies\nare enabled in the browser. Just add a before_filter that checks for the\npresence of the application's cookie.")]),_vm._v(" "),_c('div',{staticClass:"language-ruby extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-ruby"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("class")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("ApplicationController")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("<")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token constant"}},[_vm._v("ActionController")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(":")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(":")]),_c('span',{pre:true,attrs:{"class":"token constant"}},[_vm._v("Base")]),_vm._v("\n\n  before_filter "),_c('span',{pre:true,attrs:{"class":"token symbol"}},[_vm._v(":check_cookie")]),_vm._v("\n\n  "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("\n\n  "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("private")]),_vm._v("\n\n  "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("def")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token method-definition"}},[_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("check_cookie")])]),_vm._v("\n    cookie_name "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token constant"}},[_vm._v("Rails")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("application"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("config"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("session_options"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token symbol"}},[_vm._v(":key")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" request"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("cookies"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("cookie_name"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("to_s"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("blank"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("?")]),_vm._v("\n      flash"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token symbol"}},[_vm._v(":error")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"To use this site, you must enable cookies in your browser's settings.\"")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("end")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("end")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("end")]),_vm._v("\n")])])]),_c('p',[_vm._v("..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!")]),_vm._v(" "),_c('p',[_vm._v("UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies\nenabled, they should not be using your app. Plan for the future and leave behind\nolder browsers. You are not expected to support everyone!")])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/posts/2013-04-23-cookie-detection-in-rails-3.md":
/*!*************************************************************!*\
  !*** ./src/posts/2013-04-23-cookie-detection-in-rails-3.md ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2013_04_23_cookie_detection_in_rails_3_md_vue_type_template_id_e859be5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c& */ "./src/posts/2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _2013_04_23_cookie_detection_in_rails_3_md_vue_type_template_id_e859be5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2013_04_23_cookie_detection_in_rails_3_md_vue_type_template_id_e859be5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/posts/2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c&":
/*!********************************************************************************************!*\
  !*** ./src/posts/2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2013_04_23_cookie_detection_in_rails_3_md_vue_type_template_id_e859be5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??ref--1-1!../../node_modules/@vuepress/markdown-loader??ref--1-2!./2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2013-04-23-cookie-detection-in-rails-3.md?vue&type=template&id=e859be5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2013_04_23_cookie_detection_in_rails_3_md_vue_type_template_id_e859be5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2013_04_23_cookie_detection_in_rails_3_md_vue_type_template_id_e859be5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=75.576bb795.js.map