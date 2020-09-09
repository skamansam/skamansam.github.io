(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_mixins_Posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme/mixins/Posts */ "./src/.vuepress/theme/mixins/Posts.js");
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
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CardAuthor',

  mixins: [_theme_mixins_Posts__WEBPACK_IMPORTED_MODULE_0__["default"]],

  components: {
    bullet: () => Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @theme/components/Bullet */ "./src/.vuepress/theme/components/Bullet.vue")),
    TimeProvider: () => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @theme/components/Time/Provider */ "./src/.vuepress/theme/components/Time/Provider.vue"))
  },

  props: {
    author: {
      type: Object,
      required: true
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    getPostsByAuthor (nickname) {
      return this.postsByLang.filter(post => {
        return post.author === nickname
      })
    },

    getAmountPostsByAuthor (nickname) {
      const posts = this.getPostsByAuthor(nickname)
      return `${posts.length} ${this.$t('article')}${posts.length > 1 ? 's' : ''}`
    }
  }
});


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=template&id=2fb7b6ca&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=template&id=2fb7b6ca& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-author box-default",class:{ 'card-author--no-shadow': !_vm.shadow },attrs:{"itemscope":"","itemtype":"https://schema.org/Person"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"column xs-33"},[_c('img',{staticClass:"card-author__avatar",attrs:{"src":_vm.author.frontmatter.avatar,"itemprop":"image","alt":((_vm.$t('avatar_of')) + " " + (_vm.author.frontmatter.name))}})]),_vm._v(" "),_c('div',{staticClass:"column xs-67 card-author-info"},[_c('div',{staticClass:"card-author-info__role"},[_c('bullet',{attrs:{"type":"primary"}}),_vm._v(" "),_c('span',{staticClass:"meta-text",attrs:{"itemprop":"jobTitle"}},[_vm._v(_vm._s(_vm.author.frontmatter.role))])],1),_vm._v(" "),_c('router-link',{staticClass:"card-author__link",attrs:{"itemprop":"url","to":("" + (_vm.$localeConfig.path) + (_vm.$t('path_route_authors')) + "/" + (_vm.author.frontmatter.nickname) + ".html")}},[_c('h3',{staticClass:"card-author-info__title",attrs:{"itemprop":"name"}},[_vm._v(_vm._s(_vm.author.frontmatter.name))])]),_vm._v(" "),_c('div',{staticClass:"card-author-info__joined"},[_c('span',{staticClass:"icon"},[_vm._v("enter")]),_vm._v(" "),_c('time-provider',{attrs:{"type":"ago","date":_vm.author.frontmatter.created_at},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var time = ref.time;
return _c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.$t('joined'))+" "+_vm._s(time))])}}])}),_vm._v(" "),_c('span',{staticClass:"text meta-text--primary",attrs:{"itemprop":"alternateName"}},[_vm._v("\n          ("+_vm._s(_vm.getAmountPostsByAuthor(_vm.author.frontmatter.nickname))+")\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"card-author-social"},[_c('ul',{staticClass:"card-author-social__list"},_vm._l((_vm.author.frontmatter.social),function(network,index){return _c('li',{key:((network.name) + "-" + index),staticClass:"card-author-social__item"},[_c('a',{staticClass:"card-author-social__link",attrs:{"itemprop":"sameAs","href":network.url,"rel":"nofollow noopener","target":"_blank"}},[_c('span',{staticClass:"icon card-author-social__icon",class:("icon-" + (network.name))},[_vm._v(_vm._s(network.name))])])])}),0)])],1)])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=style&index=0&lang=stylus&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--12-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--12-oneOf-1-2!./node_modules/stylus-loader??ref--12-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=style&index=0&lang=stylus& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/.vuepress/theme/components/CardAuthor.vue":
/*!*******************************************************!*\
  !*** ./src/.vuepress/theme/components/CardAuthor.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardAuthor_vue_vue_type_template_id_2fb7b6ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardAuthor.vue?vue&type=template&id=2fb7b6ca& */ "./src/.vuepress/theme/components/CardAuthor.vue?vue&type=template&id=2fb7b6ca&");
/* harmony import */ var _CardAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardAuthor.vue?vue&type=script&lang=js& */ "./src/.vuepress/theme/components/CardAuthor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardAuthor.vue?vue&type=style&index=0&lang=stylus& */ "./src/.vuepress/theme/components/CardAuthor.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardAuthor_vue_vue_type_template_id_2fb7b6ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardAuthor_vue_vue_type_template_id_2fb7b6ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/.vuepress/theme/components/CardAuthor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/.vuepress/theme/components/CardAuthor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAuthor.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/.vuepress/theme/components/CardAuthor.vue?vue&type=style&index=0&lang=stylus&":
/*!*******************************************************************************************!*\
  !*** ./src/.vuepress/theme/components/CardAuthor.vue?vue&type=style&index=0&lang=stylus& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--12-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--12-oneOf-1-2!../../../../node_modules/stylus-loader??ref--12-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAuthor.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_12_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_12_oneOf_1_2_node_modules_stylus_loader_index_js_ref_12_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/.vuepress/theme/components/CardAuthor.vue?vue&type=template&id=2fb7b6ca&":
/*!**************************************************************************************!*\
  !*** ./src/.vuepress/theme/components/CardAuthor.vue?vue&type=template&id=2fb7b6ca& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_template_id_2fb7b6ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAuthor.vue?vue&type=template&id=2fb7b6ca& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/CardAuthor.vue?vue&type=template&id=2fb7b6ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_template_id_2fb7b6ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAuthor_vue_vue_type_template_id_2fb7b6ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/.vuepress/theme/mixins/Posts.js":
/*!*********************************************!*\
  !*** ./src/.vuepress/theme/mixins/Posts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    postsByLang () {
      return [...this.$posts.filter(post => {
        return post.lang === this.$localeConfig.lang && post.published !== false
      })] 
    },
    unpublishedPostsByLang () {
      return [...this.$posts.filter(post => {
        return post.lang === this.$localeConfig.lang && post.published === false
      })] 
    }
  }
});


/***/ })

}]);
//# sourceMappingURL=14.5242b033.js.map