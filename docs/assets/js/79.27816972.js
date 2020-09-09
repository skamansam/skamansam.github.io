(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('blockquote',[_c('p',[_vm._v("This article is still in development. Please be patient.")])]),_vm._v(" "),_c('h1',{attrs:{"id":"introduction"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#introduction"}},[_vm._v("#")]),_vm._v(" Introduction")]),_vm._v(" "),_c('p',[_vm._v("A friend recently asked me to explain why the following code did not work as expected:")]),_vm._v(" "),_c('div',{staticClass:"language-javascript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" x "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\nconsole"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("x"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("//expected output: 1")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("x"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("===")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" x "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    console"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("x"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("//expected output: 2")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\nconsole"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("x"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("//expected output: 1")]),_vm._v("\n")])])]),_c('p',[_vm._v("I knew immediately that it had to do with the way javascript handles the "),_c('code',[_vm._v("var")]),_vm._v(" keyword and hoists\nthe declaration. I wanted to explain a little better, so I referred to the docs at Mozilla Developer Network\nand found a few more interesting things to look out for.")]),_vm._v(" "),_c('h1',{attrs:{"id":"what-is-hoisting"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#what-is-hoisting"}},[_vm._v("#")]),_vm._v(" What is Hoisting?")])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md":
/*!***************************************************************!*\
  !*** ./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2020_09_07_Javascript_Scope_and_Hoisting_md_vue_type_template_id_16b3fbdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc& */ "./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _2020_09_07_Javascript_Scope_and_Hoisting_md_vue_type_template_id_16b3fbdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2020_09_07_Javascript_Scope_and_Hoisting_md_vue_type_template_id_16b3fbdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc&":
/*!**********************************************************************************************!*\
  !*** ./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2020_09_07_Javascript_Scope_and_Hoisting_md_vue_type_template_id_16b3fbdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??ref--1-1!../../node_modules/@vuepress/markdown-loader??ref--1-2!./2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2020-09-07-Javascript-Scope-and-Hoisting.md?vue&type=template&id=16b3fbdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2020_09_07_Javascript_Scope_and_Hoisting_md_vue_type_template_id_16b3fbdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2020_09_07_Javascript_Scope_and_Hoisting_md_vue_type_template_id_16b3fbdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=79.27816972.js.map