(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"86bf386c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"86bf386c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('p',[_vm._v("Aptana is a wonderful tool for web design. I have been using it for years for my\npersonal web sites and my professional ones. I have been trying to get more\npeople turned on to it, as well. When I installed Fedora 10 recently, I didn't\nwant to install Aptana, as it has, in the past, FooBar'd my Eclipse\ninstallation. However, I am learning Ruby (on rails), and want to install\nRadRails, which means I need Aptana. I thought about installing Aptana\nstandalone, but don't want to start up a new Eclipse platform just for my rails\ndevelopment. So -")]),_vm._v(" "),_c('p',[_vm._v("First, I tried to install Aptana normally, as an eclipse plugin, several times.\nHowever, some parts of it refused to work and the \"My Aptana\" page never showed\nup. After assessing this problem, I thought there may be conflicts with some of\nthe plugins Fedora installs through yum. Ihad  installed all the Eclipse plugins\nthat my yum repositories offered.")]),_vm._v(" "),_c('p',[_vm._v("So I removed all the plugins using yum. Since I needed those plugins, I had to\nget the update sites to install in Eclipse. Here are the update sites for the\nrpms, for convenience. You can get the same information by checking the Fedora\nEclipse project wiki at http://fedoraproject.org/wiki/Eclipse.")]),_vm._v(" "),_c('h3',{attrs:{"id":"keep-installed"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#keep-installed"}},[_vm._v("#")]),_vm._v(" Keep Installed:")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("eclipse-ecj.x86_64")]),_vm._v(" "),_c('li',[_vm._v("eclipse-demos.noarch")]),_vm._v(" "),_c('li',[_vm._v("eclipse-platform.x86_64")]),_vm._v(" "),_c('li',[_vm._v("eclipse-rcp.x86_64")]),_vm._v(" "),_c('li',[_vm._v("eclipse-setools.x86_64")]),_vm._v(" "),_c('li',[_vm._v("eclipse-shelled.noarch")]),_vm._v(" "),_c('li',[_vm._v("eclipse-slide.noarch")]),_vm._v(" "),_c('li',[_vm._v("eclipse-swt.x86_64")]),_vm._v(" "),_c('li',[_vm._v("icu4j-eclipse.x86_64")]),_vm._v(" "),_c('li',[_vm._v("tomcat5-jasper-eclipse.noarch")])]),_vm._v(" "),_c('h3',{attrs:{"id":"install-using-aptana"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#install-using-aptana"}},[_vm._v("#")]),_vm._v(" Install Using Aptana:")]),_vm._v(" "),_c('ul',[_c('li',[_c('strong',[_vm._v("Subclipse (SVN Integration)")])]),_vm._v(" "),_c('li',[_vm._v("Update Site: http://subclipse.tigris.org/update_1.4.x")]),_vm._v(" "),_c('li',[_vm._v("eclipse-subclipse*")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Eclipse Git")])]),_vm._v(" "),_c('li',[_vm._v("Update Site: http://www.jgit.org/update-site/")]),_vm._v(" "),_c('li',[_vm._v("eclipse-egit.noarch")])]),_vm._v(" "),_c('h3',{attrs:{"id":"install-using-the-update-manager"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#install-using-the-update-manager"}},[_vm._v("#")]),_vm._v(" Install Using The Update Manager:")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_vm._v("Ganymede")]),_vm._v(":")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Upload Site: http://download.eclipse.org/releases/ganymede")]),_vm._v(" "),_c('li',[_vm._v("eclipse-cdt* (C and C++ Development)")]),_vm._v(" "),_c('li',[_vm._v("eclipse-emf*  (Model and Model Development)")]),_vm._v(" "),_c('li',[_vm._v("eclipse-gef* (Graphical editors and frameworks)")]),_vm._v(" "),_c('li',[_vm._v("eclipse-jdt* (Java development)")]),_vm._v(" "),_c('li',[_vm._v("eclipse-mylyn* (Collaboration Tools)")]),_vm._v(" "),_c('li',[_vm._v("eclipse-pde.x86_64 (Java Development/Eclipse plug-in development environment)")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Maven Integration for Eclipse")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://m2eclipse.sonatype.org/update-dev/ (stable development)")]),_vm._v(" "),_c('li',[_vm._v("Update Site: http://m2eclipse.sonatype.org/update/ (stable)")]),_vm._v(" "),_c('li',[_vm._v("maven2-plugin-eclipse.x86_64")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Linux Tools for Eclipse")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://download.eclipse.org/technology/linuxtools/update/")]),_vm._v(" "),_c('li',[_vm._v("eclipse-changelog.x86_64")]),_vm._v(" "),_c('li',[_vm._v("eclipse-rpm-editor.x86_64")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Checkstyle Plugin")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://eclipse-cs.sourceforge.net/update")]),_vm._v(" "),_c('li',[_vm._v("eclipse-checkstyle.x86_64")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Eclipse Perl Integration")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://e-p-i-c.sourceforge.net/updates/testing")]),_vm._v(" "),_c('li',[_vm._v("eclipse-epic.x86_64")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Babel (milti-lingual support)")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://download.eclipse.org/technology/babel/update-site/ganymede")]),_vm._v(" "),_c('li',[_vm._v("eclipse-nls-*.noarch")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Photran (fortran support)")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://download.eclipse.org/technology/photran/updates/eclipse3.4cdt5.0")]),_vm._v(" "),_c('li',[_vm._v("eclipse-photran*  (requires cdt plugin)")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("PHPEclipse (php)")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://phpeclipse.sourceforge.net/update/stable/1.2.x/")]),_vm._v(" "),_c('li',[_vm._v("eclipse-phpeclipse.x86_64")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Pydev (python)")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://pydev.sourceforge.net/updates/")]),_vm._v(" "),_c('li',[_vm._v("eclipse-pydev*")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("QuickRex (regular expression editor)")])]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Update Site: http://www.bastian-bergerhoff.com/eclipse/features")]),_vm._v(" "),_c('li',[_vm._v("eclipse-quickrex.noarch")])])])]),_vm._v(" "),_c('p',[_vm._v("Now you are ready to install the Aptana plugin, using this update site:\nhttp://update.aptana.com/install/studio/3.2/. I recommend installing Aptana\nbefore installing any of the previously mentioned plugins, for best\ncompatability.")]),_vm._v(" "),_c('p',[_vm._v("That's it and good luck!")])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md":
/*!*********************************************************************!*\
  !*** ./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2009_02_14_installing_aptana_in_fedora_eclipse_md_vue_type_template_id_2c11ed9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f& */ "./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _2009_02_14_installing_aptana_in_fedora_eclipse_md_vue_type_template_id_2c11ed9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2009_02_14_installing_aptana_in_fedora_eclipse_md_vue_type_template_id_2c11ed9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f&":
/*!****************************************************************************************************!*\
  !*** ./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_02_14_installing_aptana_in_fedora_eclipse_md_vue_type_template_id_2c11ed9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"86bf386c-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??ref--1-1!../../node_modules/@vuepress/markdown-loader??ref--1-2!./2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"86bf386c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/posts/2009-02-14-installing-aptana-in-fedora-eclipse.md?vue&type=template&id=2c11ed9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_02_14_installing_aptana_in_fedora_eclipse_md_vue_type_template_id_2c11ed9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_86bf386c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_2009_02_14_installing_aptana_in_fedora_eclipse_md_vue_type_template_id_2c11ed9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=56.2ea2674d.js.map