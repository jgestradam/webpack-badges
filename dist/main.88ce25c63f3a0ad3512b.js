/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @templates/Template.js */ \"./src/templates/Template.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@styles/main.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@styles/vars.styl'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n(async function App() {\n  const main =  false || document.getElementById('main');\n  main.innerHTML = await (0,_templates_Template_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n})();\n\n//# sourceURL=webpack://js-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/templates/Template.js":
/*!***********************************!*\
  !*** ./src/templates/Template.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/getData.js */ \"./src/utils/getData.js\");\n/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/github.png */ \"./src/assets/images/github.png\");\n/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/twitter.png */ \"./src/assets/images/twitter.png\");\n/* harmony import */ var _images_instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/instagram.png */ \"./src/assets/images/instagram.png\");\n\n\n\n\n\nconst Template = async () => {\n  const data = await (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const view = `\n    <div class=\"About\">\n      <div class=\"card\">\n        <div class=\"card_details\">\n          <div class=\"card_photo center circle\">\n            <img src=\"${data.picture.large}\" alt=\"${data.name.first}\">\n            <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"enable-background:new -580 439 577.9 194;\"\n              xml:space=\"preserve\">\n              <circle cx=\"50\" cy=\"50\" r=\"40\" />\n            </svg>\n          </div>\n          <p class=\"card_title\">Hi, My name is</p>\n          <p class=\"card_value\">${data.name.first} ${data.name.last}</p>\n        </div>\n        <div class=\"card_userdata\">\n          <ul>\n            <li>${data.email}</li>\n            <li>${data.location.country}</li>\n          </ul>\n        </div>\n        <div class=\"card_social\">\n          <a href=\"https://twitter.com/gndx\">\n            <img src=\"${_images_twitter_png__WEBPACK_IMPORTED_MODULE_2__}\" />\n          </a>\n          <a href=\"https://github.com/gndx\">\n            <img src=\"${_images_github_png__WEBPACK_IMPORTED_MODULE_1__}\" />\n          </a>\n          <a href=\"https://instagram.com/gndx\">\n            <img src=\"${_images_instagram_png__WEBPACK_IMPORTED_MODULE_3__}\" />\n          </a>\n        </div>\n      </div>\n    </div>\n  `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\n\n//# sourceURL=webpack://js-portfolio/./src/templates/Template.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = \"https://randomuser.me/api/\";\n\nconst getData = async id => {\n  const apiURl = id ? `${API}${id}` : API;\n\n  try {\n    const response = await fetch(apiURl);\n    const data = await response.json();\n    return data.results[0];\n  } catch (error) {\n    console.log('Fetch Error', error);\n  }\n\n  ;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://js-portfolio/./src/utils/getData.js?");

/***/ }),

/***/ "./src/assets/images/github.png":
/*!**************************************!*\
  !*** ./src/assets/images/github.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/9c4faee7513f87e9b3b3.png\";\n\n//# sourceURL=webpack://js-portfolio/./src/assets/images/github.png?");

/***/ }),

/***/ "./src/assets/images/instagram.png":
/*!*****************************************!*\
  !*** ./src/assets/images/instagram.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/8932205d8701217166c9.png\";\n\n//# sourceURL=webpack://js-portfolio/./src/assets/images/instagram.png?");

/***/ }),

/***/ "./src/assets/images/twitter.png":
/*!***************************************!*\
  !*** ./src/assets/images/twitter.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/a4a49dfe20c4a1a2c681.png\";\n\n//# sourceURL=webpack://js-portfolio/./src/assets/images/twitter.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;