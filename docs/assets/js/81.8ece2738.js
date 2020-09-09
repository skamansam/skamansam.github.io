(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h2',{attrs:{"id":"introduction"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#introduction"}},[_vm._v("#")]),_vm._v(" Introduction")]),_vm._v(" "),_c('p',[_vm._v("Back in the day, in 2000, I started creating my own Content Management System ,\ncalled SaMS. I created it in Perl , as this was the only server technology\navailable to me at that time. When I created my DynDNS account and got my own\ndomain and a stable place to live, I started redesigning my website. SaMS could\nhave been used, but I had found easier ways to do the same stuff, mainly\nServer-Side Includes. In this article, I will explain very briefly how to use\nServer-Side includes to create a web site that is easy to maintain.")]),_vm._v(" "),_c('h2',{attrs:{"id":"getting-started"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#getting-started"}},[_vm._v("#")]),_vm._v(" Getting Started")]),_vm._v(" "),_c('p',[_vm._v("The only thing you will need is a web server with SSI enabled. If you have SSI\navailable, but it doesn't work, create a "),_c('code',[_vm._v(".htaccess")]),_vm._v(" file with the line "),_c('code',[_vm._v("Options +Includes")]),_vm._v(" in it, and place the file in your site's main top-level directory.\nCheck your web host's documentation for the specifics. There are many free web\nhosting services with SSI enabled. Google for them!")]),_vm._v(" "),_c('p',[_vm._v("This tutorial assumes you know HTML and how to edit/upload files to your server.\nFor a great reference on Server-Side includes, check the "),_c('a',{attrs:{"href":"http://en.wikipedia.org/wiki/Server_Side_Includes"}},[_vm._v("Wikipedia page")]),_vm._v(".")]),_vm._v(" "),_c('p',[_vm._v("You can test SSI by creating a simple HTML page and putting the following line\ninto the "),_c('code',[_vm._v("<body>")]),_vm._v(" of the document:")]),_vm._v(" "),_c('div',{staticClass:"language-html extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-html"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("<!--#echo var=\"REQUEST_URI\"-->")]),_vm._v("\n")])])]),_c('p',[_vm._v("When viewed in your browser, it should display the URL of the page you are\nviewing.")]),_vm._v(" "),_c('p',[_vm._v("Note how the SSI tag looks like a simple HTML comment. They are, with one\nexception: they must begin with a pound sign ('#'). This is very handy for\ntesting, as you can just remove the pound sign to turn off the directive, but\nstill keep the code.")]),_vm._v(" "),_c('p',[_vm._v("The syntax for SSI is simple:")]),_vm._v(" "),_c('div',{staticClass:"language-html extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-html"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("<!--#directive parameter=value-->")]),_vm._v("\n")])])]),_c('p',[_vm._v("If you are used to Perl, this is much like saying:\n"),_c('code',[_vm._v("directive({ parameter => value })")]),_vm._v(". Most directives have only one parameter, but\nsome have two.")]),_vm._v(" "),_c('h2',{attrs:{"id":"the-setup"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#the-setup"}},[_vm._v("#")]),_vm._v(" The Setup")]),_vm._v(" "),_c('p',[_vm._v("In order to create a page that is easily maintainable, you need to do three things:")]),_vm._v(" "),_c('ul',[_c('li',[_c('strong',[_vm._v("Create a template")]),_vm._v(". Create a page that will represent the\nlayout of all thpages on your site. I recommend creating several areas: a\nheader, a footer, a navigation section, and a toolbar or news section. I will\nbe using the areas I defined  for my web site (those listed previously) in\nthis tutorial.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("\"Chunk\" the page")]),_vm._v(". Break up the page into the sections, and\nput the related html into separate files. For instance, I put all the html\nfrom "),_c('code',[_vm._v("<?xml..?>")]),_vm._v(" to the tag that represents the content area into a file\ncalled \"include/header.html\". We will use SSI to reasseble the page\nlater.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Create the SSI")]),_vm._v(". In each of your main content pages, place the\nSSI directives into the top of the page, like so: "),_c('code',[_vm._v("<!--#include virtual=\"/include/header.html\"-->")]),_vm._v(" ...[content goes here]..."),_c('code',[_vm._v("<!--#include virtual=\"/include/footer.html\"-->")]),_vm._v(". The include directive includes the page\nnamed. The virtual parameter means to use the URI to include the file, instead\nof the absolute path on the server.( If you go to\nhttp://your.server.net/include/header.html, you will see the included header\nfile.)")])]),_vm._v(" "),_c('p',[_vm._v("There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this.")])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md":
/*!*******************************************************************************************************!*\
  !*** ./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2009_05_29_how_to_build_a_dynamic_web_site_with_simple_server_technologies_md_vue_type_template_id_55fd3adc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc& */ "./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _2009_05_29_how_to_build_a_dynamic_web_site_with_simple_server_technologies_md_vue_type_template_id_55fd3adc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2009_05_29_how_to_build_a_dynamic_web_site_with_simple_server_technologies_md_vue_type_template_id_55fd3adc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_05_29_how_to_build_a_dynamic_web_site_with_simple_server_technologies_md_vue_type_template_id_55fd3adc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??ref--1-1!../../node_modules/@vuepress/markdown-loader??ref--1-2!./2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/unpublished/2009-05-29-how-to-build-a-dynamic-web-site-with-simple-server-technologies.md?vue&type=template&id=55fd3adc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_05_29_how_to_build_a_dynamic_web_site_with_simple_server_technologies_md_vue_type_template_id_55fd3adc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_05_29_how_to_build_a_dynamic_web_site_with_simple_server_technologies_md_vue_type_template_id_55fd3adc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=81.8ece2738.js.map