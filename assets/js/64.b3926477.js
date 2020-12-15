(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"86bf386c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"86bf386c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('p',[_vm._v("I have been doing a lot of importing of photos on my photo site, and have noticed some images do not display properly.\nSince I love ImageMagick so much, I set up  my gallery to use it. However, there appears to be a check in the Coppermine\nsoftware that aborts reading the file upon errors in the image. So I typed the command \"display imagename.jpg\" for some\nof the files that did not import properly, and everything appeared to be fine. But I did notice something peculiar about\nthe images: they were taken with my phone's camera and all had errors printed out when I tried to open them, but seem to\ndisplay correctly.")]),_vm._v(" "),_c('p',[_vm._v("Since these files could be opened by ImageMagick, I figured if I saved them again, I would be able to fix the errors. I\nran \"convert image1.jpg image1.jpg\", got the familiar errors printed and opened the file again. This time, no errors!\nBut since I have a  lot of files I want to import, I needed a way to convert a bunch at once.")]),_vm._v(" "),_c('p',[_vm._v("I created a neat little Perl script to do just that. All you need is ImageMagick and perl installed. This script does\nnot rely on PerlMagick, as it runs the convert command. So here it is:")]),_vm._v(" "),_c('div',{staticClass:"language-perl extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-perl"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("#!/usr/bin/perl")]),_vm._v("\n\nprocessFile"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"$_\"")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("foreach")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token variable"}},[_vm._v("@ARGV")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("#recursively fix images")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token function"}},[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("sub")]),_vm._v(" processFile")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n   "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("my")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token variable"}},[_vm._v("$file")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v("shift"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n   "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("-d")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"$file\"")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("?")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("do")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" processFile"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"$_\"")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("foreach")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("<")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"$file\"")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("/")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("*")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("`convert \"$file\" \"$file\"`")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('p',[_vm._v("I saved this file as $HOME/bin/fiximage. All you need to do to run it is type \"fiximage file1 file2 directory1 directory2 ...\".\nOne other thing to note is that this script has been purposefully shortened. I like to use the ternary operator whenever\npossible in my scripts for just this reason. As such, it does not print anything to the command line itself, but if the\nconvert command encounters an error, that will be printed.")]),_vm._v(" "),_c('p',[_vm._v("I hope you have found this article useful!")])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md":
/*!***********************************************************************!*\
  !*** ./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2009_06_15_how_to_repair_images_with_imagemagick_md_vue_type_template_id_03e09bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0& */ "./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _2009_06_15_how_to_repair_images_with_imagemagick_md_vue_type_template_id_03e09bf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2009_06_15_how_to_repair_images_with_imagemagick_md_vue_type_template_id_03e09bf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0&":
/*!******************************************************************************************************!*\
  !*** ./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_06_15_how_to_repair_images_with_imagemagick_md_vue_type_template_id_03e09bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"86bf386c-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??ref--1-1!../../node_modules/@vuepress/markdown-loader??ref--1-2!./2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"86bf386c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2009-06-15-how-to-repair-images-with-imagemagick.md?vue&type=template&id=03e09bf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_06_15_how_to_repair_images_with_imagemagick_md_vue_type_template_id_03e09bf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_06_15_how_to_repair_images_with_imagemagick_md_vue_type_template_id_03e09bf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=64.b3926477.js.map