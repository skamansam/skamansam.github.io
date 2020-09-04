(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('p',[_vm._v("During my move from Greensboro, NC to Baltimore, MD, I accidentally threw away\nmy home server (case of mistaken identity), so I needed to build a new one. This\nwas more fortuitous than not, as it gave me the opportunity to build a system\nwhich I could use for another decade. I always insist on older hardware, with\nthe most options for upgrade. So I bought a pretty sweet setup that I can\nupgrade a little at a time until socket LGA1155 goes out of style. As of now,\nthat means a quad-core i7 will run on my machine - not too bad for the next\ndecade! Here are the complete specs for my machine:")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Motherboard: "),_c('a',{attrs:{"href":"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135283&Tpk=p67h2-a2","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("ECS P67H2-A2 Motherboard"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_vm._v("CPU: "),_c('a',{attrs:{"href":"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116399","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Intel G620 2.6GHz"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_vm._v("Memory:"),_c('a',{attrs:{"href":"http://www.newegg.com/Product/Product.aspx?Item=N82E16820231311","target":"_blank","rel":"noopener noreferrer"}},[_vm._v(" 8Gb G.Skill Ripjaw"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_vm._v("Graphics: "),_c('a',{attrs:{"href":"http://www.newegg.com/Product/Product.aspx?Item=N82E16814162054","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("2x nVidia 9500 1Gb PCIe"),_c('OutboundLink')],1),_vm._v(", in a (software) SLI configuration")]),_vm._v(" "),_c('li',[_vm._v("Power Supply: "),_c('a',{attrs:{"href":"http://www.newegg.com/Product/Product.aspx?Item=N82E16817148041","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Apevia Java 650W"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_vm._v("Hard Drive: [Seagate Barracuda 2Tb SATA 6Gb/s](Seagate Barracuda Green 2TB SATA 6Gb/s 64MB Cache 3.5-Inch Internal)")]),_vm._v(" "),_c('li',[_vm._v("Display: "),_c('a',{attrs:{"href":"http://www.amazon.com/gp/product/B004KCPH84/ref=oh_o01_s00_i00_details","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("ViewSonic 24\" Widescreen LCD"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_vm._v("Total Cost to Me: ~650.00usd")]),_vm._v(" "),_c('li',[_vm._v("Total Cost Premade: ~1,400")]),_vm._v(" "),_c('li',[_vm._v("Savings: ~ 100%")])]),_vm._v(" "),_c('p',[_vm._v("So my next task, once getting all the required parts and assembling them, was to\ncreate a dual-boot system with Fedora 16 and Windows 7. I wanted to use my new\ngraphics goodness for CUDA application design and, of course, games. I installed\nWindows 7, then Fedora 16 for a normal dual-boot configuration. Then came the\nhard part: how to make Fedora switch video drivers based on whther it boots in\nVirtualBox or not.")]),_vm._v(" "),_c('blockquote',[_c('h3',{attrs:{"id":"update"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#update"}},[_vm._v("#")]),_vm._v(" Update:")]),_vm._v(" "),_c('p',[_vm._v("This article was never really finished. Basically, I used an init script to detect the presence of the virtualbox virtual instructionset,\nthen loaded the nvidia driver when it wasn't present. In modern linux distros, like Fedora, there is no need for any of this. Just install\nthe drivers, and the system will take care of the rest.")])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md":
/*!****************************************************************************************!*\
  !*** ./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2012_02_04_how_to_keep_your_linux_always_on_in_a_dual_boot_system_md_vue_type_template_id_725498dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc& */ "./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _2012_02_04_how_to_keep_your_linux_always_on_in_a_dual_boot_system_md_vue_type_template_id_725498dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2012_02_04_how_to_keep_your_linux_always_on_in_a_dual_boot_system_md_vue_type_template_id_725498dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc&":
/*!***********************************************************************************************************************!*\
  !*** ./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2012_02_04_how_to_keep_your_linux_always_on_in_a_dual_boot_system_md_vue_type_template_id_725498dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"3cbb318b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??ref--1-1!../../node_modules/@vuepress/markdown-loader??ref--1-2!./2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"3cbb318b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2012-02-04-how-to-keep-your-linux-always-on-in-a-dual-boot-system.md?vue&type=template&id=725498dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2012_02_04_how_to_keep_your_linux_always_on_in_a_dual_boot_system_md_vue_type_template_id_725498dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_3cbb318b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2012_02_04_how_to_keep_your_linux_always_on_in_a_dual_boot_system_md_vue_type_template_id_725498dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=70.81fdbf7d.js.map