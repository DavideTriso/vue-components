(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponents"] = factory();
	else
		root["VueComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Alert = __webpack_require__(1);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Panel = __webpack_require__(10);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueComponents = {
	    alert: _Alert2.default,
	    panel: _Panel2.default
	};
	
	module.exports = VueComponents;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Development\\Projects\\vivid-websolutions\\vue-components-framework\\src\\components\\vue-components\\src\\components\\Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-772c814f&file=Alert.vue!./../../../node_modules/stylus-loader/index.js!./Alert.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-772c814f&file=Alert.vue!./../../../node_modules/stylus-loader/index.js!./Alert.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert {\n  border-radius: 0.375rem;\n  border: 1px solid #000;\n  display: block;\n  margin-top: 1rem;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n}\n.alert:first-child {\n  margin-top: 0;\n}\n.alert--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.alert--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.alert--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.alert--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.alert--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n.alert__title {\n  font-weight: 600;\n}\n.alert__title--primary {\n  color: #fff;\n}\n.alert__title--success {\n  color: #080;\n}\n.alert__title--danger {\n  color: #870000;\n}\n.alert__title--warning {\n  color: #cca558;\n}\n.alert__title--info {\n  color: #5a93cc;\n}\n.alert__message--primary {\n  color: #fff;\n}\n.alert__message--success {\n  color: #080;\n}\n.alert__message--danger {\n  color: #870000;\n}\n.alert__message--warning {\n  color: #cca558;\n}\n.alert__message--info {\n  color: #5a93cc;\n}\n.alert__dismiss {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2rem;\n  position: absolute;\n  right: 1rem;\n  top: 0.75rem;\n}\n.alert__dismiss--primary {\n  color: #fff;\n}\n.alert__dismiss--success {\n  color: #080;\n}\n.alert__dismiss--danger {\n  color: #870000;\n}\n.alert__dismiss--warning {\n  color: #cca558;\n}\n.alert__dismiss--info {\n  color: #5a93cc;\n}\n.alert__timer {\n  height: 0.25rem;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  -webkit-animation: timer 5000ms infinite linear;\n          animation: timer 5000ms infinite linear;\n}\n.alert__timer--primary {\n  background: #0af;\n}\n.alert__timer--success {\n  background: #5c5;\n}\n.alert__timer--danger {\n  background: #cc5656;\n}\n.alert__timer--warning {\n  background: #cca558;\n}\n.alert__timer--info {\n  background: #5a93cc;\n}\n@-webkit-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n", "", {"version":3,"sources":["/./src/components/Alert/src/components/Alert/Alert.styl","/./src/components/Alert/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Alert.styl"],"names":[],"mappings":"AAYA;ECGE,wBAAA;EDDA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;CEXD;AFYC;EACE,cAAA;CEVH;ADNC;EDkBE,uBAAA;EACA,mBAAA;CETH;ADVC;EDqBE,uBAAA;EACA,mBAAA;CERH;ADdC;EDwBE,0BAAA;EACA,sBAAA;CEPH;ADlBC;ED2BE,0BAAA;EACA,sBAAA;CENH;ADtBC;ED8BE,0BAAA;EACA,sBAAA;CELH;AD9BC;EDsCE,iBAAA;CELH;AD7BC;EDoCI,YAAA;CEJL;ADhCC;EDsCI,YAAA;CEHL;ADnCC;EDwCI,eAAA;CEFL;ADtCC;ED0CI,eAAA;CEDL;ADzCC;ED4CI,eAAA;CEAL;AD5CC;EDgDI,YAAA;CEDL;AD/CC;EDkDI,YAAA;CEAL;ADlDC;EDoDI,eAAA;CECL;ADrDC;EDsDI,eAAA;CEEL;ADxDC;EDwDI,eAAA;CEGL;AD/DC;ED+DE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;CEGH;ADpEC;EDmEI,YAAA;CEIL;ADvEC;EDqEI,YAAA;CEKL;AD1EC;EDuEI,eAAA;CEML;AD7EC;EDyEI,eAAA;CEOL;ADhFC;ED2EI,eAAA;CEQL;ADvFC;EDkFE,gBAAA;EACA,QAAA;EACA,mBAAA;EACA,OAAA;EACA,YAAA;EACA,gDAAA;UAAA,wCAAA;CEQH;AD3FC;EDqFI,iBAAA;CESL;AD9FC;EDuFI,iBAAA;CEUL;ADjGC;EDyFI,oBAAA;CEWL;ADpGC;ED2FI,oBAAA;CEYL;ADvGC;ED6FI,oBAAA;CEaL;AF5Ge;EACd;IACE,YAAA;GEsHD;EFpHD;IACE,SAAA;GEsHD;CACF;AF5He;EACd;IACE,YAAA;GEsID;EFpID;IACE,SAAA;GEsID;CACF","file":"Alert.styl","sourcesContent":["@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n\r\n@keyframes timer {\r\n  0% {\r\n    width: 100%\r\n  }\r\n  100% {\r\n    width: 0\r\n  }\r\n}\r\n\r\n.alert // alert\r\n  border-radius-all()\r\n  border: 1px solid #000\r\n  display: block\r\n  margin-top: 1rem\r\n  overflow: hidden\r\n  padding: 1rem\r\n  position: relative\r\n  &:first-child\r\n    margin-top: 0\r\n  +variant(primary) // alert--primary\r\n    background-color: #0af\r\n    border-color: #0af\r\n  +variant(success) // alert--success\r\n    background-color: #efe\r\n    border-color: #5c5\r\n  +variant(danger) // alert--danger\r\n    background-color: #fff0f0\r\n    border-color: #cc5656\r\n  +variant(warning) // alert--warning\r\n    background-color: #fffbf2\r\n    border-color: #cca558\r\n  +variant(info) // alert--info\r\n    background-color: #f2f9ff\r\n    border-color: #5a93cc\r\n\r\n  +has(title) // alert__title\r\n    font-weight: 600\r\n    +variant(primary) // alert__title--primary\r\n      color: #fff\r\n    +variant(success) // alert__title--success\r\n      color: #080\r\n    +variant(danger) // alert__title--danger\r\n      color: #870000\r\n    +variant(warning) // alert__title--warning\r\n      color: #cca558\r\n    +variant(info) // alert__title--info\r\n      color: #5a93cc\r\n\r\n  +has(message) // alert__message\r\n    +variant(primary) // alert__message--primary\r\n      color: #fff\r\n    +variant(success) // alert__message--success\r\n      color: #080\r\n    +variant(danger) // alert__message--danger\r\n      color: #870000\r\n    +variant(warning) // alert__message--warning\r\n      color: #cca558\r\n    +variant(info) // alert__message--info\r\n      color: #5a93cc\r\n\r\n  +has(dismiss) // alert__dismiss\r\n    cursor: pointer\r\n    font-size: 1.5rem\r\n    font-weight: 600\r\n    line-height: 2rem\r\n    position: absolute\r\n    right: 1rem\r\n    top: .75rem\r\n    +variant(primary) // alert__dismiss--primary\r\n      color: #fff\r\n    +variant(success) // alert__dismiss--success\r\n      color: #080\r\n    +variant(danger) // alert__dismiss--danger\r\n      color: #870000\r\n    +variant(warning) // alert__dismiss--warning\r\n      color: #cca558\r\n    +variant(info) // alert__dismiss--info\r\n      color: #5a93cc\r\n\r\n  +has(timer) // alert__timer\r\n    height: .25rem\r\n    left: 0\r\n    position: absolute\r\n    top: 0\r\n    width: 100%\r\n    animation: timer 5000ms infinite linear\r\n    +variant(primary) // alert__timer--primary\r\n      background: #0af\r\n    +variant(success) // alert__timer--success\r\n      background: #5c5\r\n    +variant(danger) // alert__timer--danger\r\n      background: #cc5656\r\n    +variant(warning) // alert__timer--warning\r\n      background: #cca558\r\n    +variant(info) // alert__timer--info\r\n      background: #5a93cc",null,".alert {\n  border-radius: 0.375rem;\n  border: 1px solid #000;\n  display: block;\n  margin-top: 1rem;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n}\n.alert:first-child {\n  margin-top: 0;\n}\n.alert--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.alert--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.alert--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.alert--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.alert--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n.alert__title {\n  font-weight: 600;\n}\n.alert__title--primary {\n  color: #fff;\n}\n.alert__title--success {\n  color: #080;\n}\n.alert__title--danger {\n  color: #870000;\n}\n.alert__title--warning {\n  color: #cca558;\n}\n.alert__title--info {\n  color: #5a93cc;\n}\n.alert__message--primary {\n  color: #fff;\n}\n.alert__message--success {\n  color: #080;\n}\n.alert__message--danger {\n  color: #870000;\n}\n.alert__message--warning {\n  color: #cca558;\n}\n.alert__message--info {\n  color: #5a93cc;\n}\n.alert__dismiss {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2rem;\n  position: absolute;\n  right: 1rem;\n  top: 0.75rem;\n}\n.alert__dismiss--primary {\n  color: #fff;\n}\n.alert__dismiss--success {\n  color: #080;\n}\n.alert__dismiss--danger {\n  color: #870000;\n}\n.alert__dismiss--warning {\n  color: #cca558;\n}\n.alert__dismiss--info {\n  color: #5a93cc;\n}\n.alert__timer {\n  height: 0.25rem;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  animation: timer 5000ms infinite linear;\n}\n.alert__timer--primary {\n  background: #0af;\n}\n.alert__timer--success {\n  background: #5c5;\n}\n.alert__timer--danger {\n  background: #cc5656;\n}\n.alert__timer--warning {\n  background: #cca558;\n}\n.alert__timer--info {\n  background: #5a93cc;\n}\n@-moz-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-webkit-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-o-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'alert'
	        };
	    },
	
	    props: ['style', 'title', 'message', 'dismiss', 'timer', 'isDismissable', 'hasTimer'],
	    components: {},
	    computed: {
	        hasTitle: function hasTitle() {
	            return !!this.title;
	        },
	        hasMessage: function hasMessage() {
	            return !!this.message;
	        },
	        titleStyle: function titleStyle() {
	            if (this.title) {
	                return this.title.style || this.style;
	            }
	
	            return this.style;
	        },
	        messageStyle: function messageStyle() {
	            if (this.message) {
	                return this.message.style || this.style;
	            }
	
	            return this.style;
	        },
	        dismissStyle: function dismissStyle() {
	            if (this.dismiss) {
	                return this.dismiss.style || this.style;
	            }
	
	            return this.style;
	        },
	        timerStyle: function timerStyle() {
	            if (this.timer) {
	                return this.timer.style || this.style;
	            }
	
	            return this.style;
	        },
	        alertClass: function alertClass() {
	            var classNames = [];
	            var contextualClass = _CSSUtil2.default.contextualClass(this.block, this.style);
	
	            classNames.push(this.block);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        titleClass: function titleClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'title');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.titleStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        messageClass: function messageClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'message');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.messageStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        dismissClass: function dismissClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'dismiss');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.dismissStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        timerClass: function timerClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'timer');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.timerStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        }
	    },
	    methods: {
	        dismissAlert: function dismissAlert() {
	            this.$destroy(true);
	        },
	        startTimer: function startTimer() {
	            setTimeout(this.dismissAlert, 5000);
	        }
	    },
	    ready: function ready() {
	        if (this.hasTimer) {
	            this.startTimer();
	        }
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(8);
	
	var Config = _interopRequireWildcard(_config);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	    contextualTypes: ['danger', 'info', 'primary', 'success', 'warning'],
	
	    elementSeparator: function elementSeparator() {
	        if (Config.element_separator) {
	            return Config.element_separator;
	        }
	        return '__';
	    },
	    modifierSeparator: function modifierSeparator() {
	        if (Config.modifier_separator) {
	            return Config.modifier_separator;
	        }
	        return '--';
	    },
	    contextualClass: function contextualClass(element, classType) {
	        var contextualClass;
	
	        if (classType && this.contextualTypes.indexOf(classType.toLowerCase()) !== -1) {
	            contextualClass = this.variant(element, classType);
	        }
	
	        return contextualClass;
	    },
	    has: function has(block, element) {
	        return block + this.elementSeparator() + element;
	    },
	    variant: function variant(item, _variant) {
	        return item + this.modifierSeparator() + _variant;
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
		"element_separator": "__",
		"modifier_separator": "--"
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"alertClass\">\r\n\r\n\t<div :class=\"timerClass\" v-if=\"hasTimer\"></div>\r\n\r\n\t<span :class=\"titleClass\" v-if=\"hasTitle\">\r\n\t\t{{title.content}}\r\n\t</span>\r\n\r\n\t<span :class=\"messageClass\" v-if=\"hasMessage\">\r\n\t\t{{message.content}}\r\n\t</span>\r\n\r\n\t<span :class=\"dismissClass\" v-if=\"isDismissable\" @click.prevent=\"dismissAlert\">\r\n\t\t&times;\r\n\t</span>\r\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(13)
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Development\\Projects\\vivid-websolutions\\vue-components-framework\\src\\components\\vue-components\\src\\components\\Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-75fa6df7&file=Panel.vue!./../../../node_modules/stylus-loader/index.js!./Panel.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-75fa6df7&file=Panel.vue!./../../../node_modules/stylus-loader/index.js!./Panel.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".panel {\n  display: block;\n}\n.panel__header {\n  border-radius: 0.375rem 0.375rem 0 0;\n  background-color: #eee;\n  border: 1px solid #aaa;\n  border-bottom: none;\n  padding: 0.75rem 1rem;\n}\n.panel__header--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.panel__header--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.panel__header--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.panel__header--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.panel__header--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n.panel__title {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.panel__title--primary {\n  color: #fff;\n}\n.panel__title--success {\n  color: #080;\n}\n.panel__title--danger {\n  color: #870000;\n}\n.panel__title--warning {\n  color: #cca558;\n}\n.panel__title--info {\n  color: #5a93cc;\n}\n.panel__body {\n  border: 1px solid #aaa;\n  padding: 0.75rem 1rem;\n}\n.panel__body--primary {\n  border-color: #0af;\n}\n.panel__body--success {\n  border-color: #5c5;\n}\n.panel__body--danger {\n  border-color: #cc5656;\n}\n.panel__body--warning {\n  border-color: #cca558;\n}\n.panel__body--info {\n  border-color: #5a93cc;\n}\n.panel__body--no-border-radius-top {\n  border-radius: 0 0 0.375rem 0.375rem;\n}\n.panel__body--no-border-radius-bottom {\n  border-radius: 0.375rem 0.375rem 0 0;\n}\n.panel__body--border-radius {\n  border-radius: 0.375rem;\n}\n.panel__footer {\n  border-radius: 0 0 0.375rem 0.375rem;\n  background-color: #f2f2f2;\n  border: 1px solid #aaa;\n  border-top: none;\n  padding: 0.75rem 1rem;\n}\n.panel__footer--primary {\n  border-color: #0af;\n}\n.panel__footer--success {\n  border-color: #5c5;\n}\n.panel__footer--danger {\n  border-color: #cc5656;\n}\n.panel__footer--warning {\n  border-color: #cca558;\n}\n.panel__footer--info {\n  border-color: #5a93cc;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/src/components/Panel/Panel.styl","/./src/components/Panel/Panel.styl","/./src/components/Panel/src/assets/stylus/mixins/mixins.styl"],"names":[],"mappings":"AAGA;EACE,eAAA;CCFD;ACDC;EAiBA,qCAAA;EFVE,uBAAA;EACA,uBAAA;EACA,oBAAA;EACA,sBAAA;CCFH;ACJC;EFQI,uBAAA;EACA,mBAAA;CCDL;ACRC;EFWI,uBAAA;EACA,mBAAA;CCAL;ACZC;EFcI,0BAAA;EACA,sBAAA;CCCL;AChBC;EFiBI,0BAAA;EACA,sBAAA;CCEL;ACpBC;EFoBI,0BAAA;EACA,sBAAA;CCGL;AC5BC;EF4BE,gBAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;CCGH;AC9BC;EF6BI,YAAA;CCIL;ACjCC;EF+BI,YAAA;CCKL;ACpCC;EFiCI,eAAA;CCML;ACvCC;EFmCI,eAAA;CCOL;AC1CC;EFqCI,eAAA;CCQL;ACjDC;EF4CE,uBAAA;EACA,sBAAA;CCQH;ACjDC;EF2CI,mBAAA;CCSL;ACpDC;EF6CI,mBAAA;CCUL;ACvDC;EF+CI,sBAAA;CCWL;AC1DC;EFiDI,sBAAA;CCYL;AC7DC;EFmDI,sBAAA;CCaL;AChEC;EAmBA,qCAAA;CDgDD;ACnEC;EAaA,qCAAA;CDyDD;ACtEC;EAUA,wBAAA;CD+DD;AC7EC;EAuBA,qCAAA;EF0CE,0BAAA;EACA,uBAAA;EACA,iBAAA;EACA,sBAAA;CCgBH;AChFC;EFkEI,mBAAA;CCiBL;ACnFC;EFoEI,mBAAA;CCkBL;ACtFC;EFsEI,sBAAA;CCmBL;ACzFC;EFwEI,sBAAA;CCoBL;AC5FC;EF0EI,sBAAA;CCqBL","file":"Panel.styl","sourcesContent":["@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n\r\n.panel // panel\r\n  display: block\r\n\r\n  +has(header) // panel__header\r\n    border-radius-top()\r\n    background-color: #eee\r\n    border: 1px solid #aaa\r\n    border-bottom: none\r\n    padding: .75rem 1rem\r\n    +variant(primary) // panel__header--primary\r\n      background-color: #0af\r\n      border-color: #0af\r\n    +variant(success) // panel__header--success\r\n      background-color: #efe\r\n      border-color: #5c5\r\n    +variant(danger) // panel__header--danger\r\n      background-color: #fff0f0\r\n      border-color: #cc5656\r\n    +variant(warning) // panel__header--warning\r\n      background-color: #fffbf2\r\n      border-color: #cca558\r\n    +variant(info) // panel__header--info\r\n      background-color: #f2f9ff\r\n      border-color: #5a93cc\r\n\r\n  +has(title) // panel__title\r\n    font-size: 1rem\r\n    font-weight: 400\r\n    margin: 0\r\n    padding: 0\r\n    +variant(primary) // panel__title--primary\r\n      color: #fff\r\n    +variant(success) // panel__title--success\r\n      color: #080\r\n    +variant(danger) // panel__title--danger\r\n      color: #870000\r\n    +variant(warning) // panel__title--warning\r\n      color: #cca558\r\n    +variant(info) // panel__title--info\r\n      color: #5a93cc\r\n\r\n  +has(body) // panel__body\r\n    border: 1px solid #aaa\r\n    padding: .75rem 1rem\r\n    +variant(primary) // panel__body--primary\r\n      border-color: #0af\r\n    +variant(success) // panel__body--success\r\n      border-color: #5c5\r\n    +variant(danger) // panel__body--danger\r\n      border-color: #cc5656\r\n    +variant(warning) // panel__body--warning\r\n      border-color: #cca558\r\n    +variant(info) // panel__body--info\r\n      border-color: #5a93cc\r\n    +variant(no-border-radius-top) // panel__body--no-border-radius-top\r\n      border-radius-bottom()\r\n    +variant(no-border-radius-bottom) // panel__body--no-border-radius-bottom\r\n      border-radius-top()\r\n    +variant(border-radius) // panel__body--border-radius\r\n      border-radius-all()\r\n\r\n  +has(footer) // panel__footer\r\n    border-radius-bottom()\r\n    background-color: #f2f2f2\r\n    border: 1px solid #aaa\r\n    border-top: none\r\n    padding: .75rem 1rem\r\n    +variant(primary) // panel__footer--primary\r\n      border-color: #0af\r\n    +variant(success) // panel__footer--success\r\n      border-color: #5c5\r\n    +variant(danger) // panel__footer--danger\r\n      border-color: #cc5656\r\n    +variant(warning) // panel__footer--warning\r\n      border-color: #cca558\r\n    +variant(info) // panel__footer--info\r\n      border-color: #5a93cc",".panel {\n  display: block;\n}\n.panel__header {\n  border-radius: 0.375rem 0.375rem 0 0;\n  background-color: #eee;\n  border: 1px solid #aaa;\n  border-bottom: none;\n  padding: 0.75rem 1rem;\n}\n.panel__header--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.panel__header--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.panel__header--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.panel__header--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.panel__header--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n.panel__title {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.panel__title--primary {\n  color: #fff;\n}\n.panel__title--success {\n  color: #080;\n}\n.panel__title--danger {\n  color: #870000;\n}\n.panel__title--warning {\n  color: #cca558;\n}\n.panel__title--info {\n  color: #5a93cc;\n}\n.panel__body {\n  border: 1px solid #aaa;\n  padding: 0.75rem 1rem;\n}\n.panel__body--primary {\n  border-color: #0af;\n}\n.panel__body--success {\n  border-color: #5c5;\n}\n.panel__body--danger {\n  border-color: #cc5656;\n}\n.panel__body--warning {\n  border-color: #cca558;\n}\n.panel__body--info {\n  border-color: #5a93cc;\n}\n.panel__body--no-border-radius-top {\n  border-radius: 0 0 0.375rem 0.375rem;\n}\n.panel__body--no-border-radius-bottom {\n  border-radius: 0.375rem 0.375rem 0 0;\n}\n.panel__body--border-radius {\n  border-radius: 0.375rem;\n}\n.panel__footer {\n  border-radius: 0 0 0.375rem 0.375rem;\n  background-color: #f2f2f2;\n  border: 1px solid #aaa;\n  border-top: none;\n  padding: 0.75rem 1rem;\n}\n.panel__footer--primary {\n  border-color: #0af;\n}\n.panel__footer--success {\n  border-color: #5c5;\n}\n.panel__footer--danger {\n  border-color: #cc5656;\n}\n.panel__footer--warning {\n  border-color: #cca558;\n}\n.panel__footer--info {\n  border-color: #5a93cc;\n}\n",null],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'panel'
	        };
	    },
	
	    props: ['style', 'header', 'title', 'body', 'footer', 'hasHeader', 'hasBody', 'hasFooter'],
	    components: {},
	    computed: {
	        headerStyle: function headerStyle() {
	            if (this.header) {
	                return this.header.style || this.style;
	            }
	
	            return this.style;
	        },
	        titleStyle: function titleStyle() {
	            if (this.title) {
	                return this.title.style || this.style;
	            }
	
	            return this.style;
	        },
	        bodyStyle: function bodyStyle() {
	            if (this.body) {
	                return this.body.style || this.style;
	            }
	
	            return this.style;
	        },
	        footerStyle: function footerStyle() {
	            if (this.footer) {
	                return this.footer.style || this.style;
	            }
	
	            return this.style;
	        },
	        panelClass: function panelClass() {
	            var classNames = [];
	            var contextualClass = _CSSUtil2.default.contextualClass(this.block, this.style);
	
	            classNames.push(this.block);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        headerClass: function headerClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'header');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.headerStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        titleClass: function titleClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'title');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.titleStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	        bodyClass: function bodyClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'body');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.bodyStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            if (!this.hasFooter && !this.hasHeader) {
	                classNames.push(_CSSUtil2.default.variant(element, 'border-radius'));
	            } else if (!this.hasFooter) {
	                classNames.push(_CSSUtil2.default.variant(element, 'no-border-radius-top'));
	            } else if (!this.hasHeader) {
	                classNames.push(_CSSUtil2.default.variant(element, 'no-border-radius-bottom'));
	            }
	
	            return classNames;
	        },
	        footerClass: function footerClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'footer');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.footerStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        }
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"panelClass\">\r\n\r\n\t<div :class=\"headerClass\" v-if=\"hasHeader\">\r\n\t\t<h4 :class=\"titleClass\">\r\n\t\t\t<slot name=\"title\"></slot>\r\n\t\t</h4>\r\n\t</div>\r\n\r\n\t<div :class=\"bodyClass\" v-if=\"hasBody\">\r\n\t\t<slot name=\"body\"></slot>\r\n\t</div>\r\n\r\n\t<div :class=\"footerClass\" v-if=\"hasFooter\">\r\n\t\t<slot name=\"footer\"></slot>\r\n\t</div>\r\n\r\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-components.js.map