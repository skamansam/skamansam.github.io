(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/Time/Provider.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/.vuepress/theme/components/Time/Provider.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const timeago = __webpack_require__(/*! time-ago */ "./node_modules/time-ago/timeago.js")

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TimeProvider',

  props: {
    type: {
      type: String,
      required: true
    },
    date: {
      type: [Date, String],
      default () {
        return new Date()
      }
    },
    content: String,
    lang: String
  },

  data () {
    return {
      result: null
    }
  },

  created () {
    const data = this.content || (this.date instanceof Date ? this.date : new Date(this.date))
    __webpack_require__("./src/.vuepress/theme/components/Time/locales lazy recursive ^\\.\\/.*\\.js$")(`./${this.lang || this.$lang}.js`).then(module => {
      this.result = this.translate(this.handle(data), module.default)
    }).catch(() => {
      this.result = this.handle(data)
    })
  },

  methods: {
    translate (result, translate) {
      Object.keys(translate).forEach(key => {
        let regex = new RegExp(key, 'i')
        if (result.match(regex)) {
          result = result.replace(key, translate[key])
        }
      })
      return result
    },

    handle (data) {
      return this.type === 'mintoread' ? timeago[this.type](data, null, 100) : timeago[this.type](data)
    }
  },

  render () {
    return this.$scopedSlots.default({
      time: this.result
    })
  }
});


/***/ }),

/***/ "./node_modules/time-ago/timeago.js":
/*!******************************************!*\
  !*** ./node_modules/time-ago/timeago.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var timeago = function() {

  var o = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 1000 * 60,
    day: 24 * 60 * 1000 * 60,
    week: 7 * 24 * 60 * 1000 * 60,
    month: 30 * 24 * 60 * 1000 * 60,
    year: 365 * 24 * 60 * 1000 * 60
  };
  var obj = {};

  obj.ago = function(nd, s) {
    var r = Math.round,
        dir = ' ago',
      pl = function(v, n) {
        return (s === undefined) ? n + ' ' + v + (n > 1 ? 's' : '') + dir : n + v.substring(0, 1)
      },
      ts = Date.now() - new Date(nd).getTime(),
      ii;
    if( ts < 0 )
    {
      ts *= -1;
      dir = ' from now';
    }
    for (var i in o) {
      if (r(ts) < o[i]) return pl(ii || 'm', r(ts / (o[ii] || 1)))
      ii = i;
    }
    return pl(i, r(ts / o[i]));
  }

  obj.today = function() {
    var now = new Date();
    var Weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var Month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    return Weekday[now.getDay()] + ", " + Month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
  }

  obj.timefriendly = function(s) {
    var t = s.match(/(\d).([a-z]*?)s?$/);
    return t[1] * eval(o[t[2]]);
  }

  obj.mintoread = function(text, altcmt, wpm) {
    var m = Math.round(text.split(' ').length / (wpm || 200));
    return (m || '< 1') + (altcmt || ' min to read');
  }

  return obj;
}

if ( true && module.exports)
  module.exports = timeago();


/***/ }),

/***/ "./src/.vuepress/theme/components/Time/Provider.vue":
/*!**********************************************************!*\
  !*** ./src/.vuepress/theme/components/Time/Provider.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Provider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Provider.vue?vue&type=script&lang=js& */ "./src/.vuepress/theme/components/Time/Provider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Provider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/.vuepress/theme/components/Time/Provider.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/.vuepress/theme/components/Time/Provider.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Provider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Provider.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/.vuepress/theme/components/Time/Provider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Provider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/.vuepress/theme/components/Time/locales lazy recursive ^\\.\\/.*\\.js$":
/*!****************************************************************************************!*\
  !*** ./src/.vuepress/theme/components/Time/locales lazy ^\.\/.*\.js$ namespace object ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./es.js": [
		"./src/.vuepress/theme/components/Time/locales/es.js",
		86
	],
	"./pt-br.js": [
		"./src/.vuepress/theme/components/Time/locales/pt-br.js",
		87
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/.vuepress/theme/components/Time/locales lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=5.5a3097a1.js.map