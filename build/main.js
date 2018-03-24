require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__richEmbeds__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_json__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__auth_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bot__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers__ = __webpack_require__(11);
// utilities

// settings and configs
//import embedColors from './embedColors';

// RichEmbeds


// discordjs bot TOKEN


// Bots


// Servers


__WEBPACK_IMPORTED_MODULE_4__bot__["a" /* default */].on('ready', () => {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* greenLog */])('----------------------------------------');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* greenLog */])('                BOT PAGE                ');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* greenLog */])('             BOT NOW ACTIVE             ');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* greenLog */])('----------------------------------------');
});

__WEBPACK_IMPORTED_MODULE_4__bot__["a" /* default */].login(__WEBPACK_IMPORTED_MODULE_3__auth_json__["token"]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chalk__);


const ncLog = (...args) => console.log(...args);
/* unused harmony export ncLog */

const greenLog = (...args) => console.log(...args.map(arg => Object(__WEBPACK_IMPORTED_MODULE_0_chalk__["green"])(arg)));
/* harmony export (immutable) */ __webpack_exports__["a"] = greenLog;

const redLog = (...args) => console.log(...args.map(arg => Object(__WEBPACK_IMPORTED_MODULE_0_chalk__["red"])(arg)));
/* unused harmony export redLog */


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configExample__ = __webpack_require__(4);
/* unused harmony reexport configExample */



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  // configuration, api tokens for steam, etc
  steamToken: ''
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cross__ = __webpack_require__(6);
/* unused harmony reexport cross */



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_discord_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__embedColors__ = __webpack_require__(8);



/* unused harmony default export */ var _unused_webpack_default_export = (new __WEBPACK_IMPORTED_MODULE_0_discord_js___default.a.RichEmbed().addField('Crosshair:', 'cl_crosshair_drawoutline "0" \n' + 'cl_crosshair_dynamic_maxdist_splitratio "0.35" \n' + 'cl_crosshair_dynamic_splitalpha_innermod "1" \n' + 'cl_crosshair_dynamic_splitalpha_outermod "0.5" \n' + 'cl_crosshair_dynamic_splitdist "7" \n' + 'cl_crosshair_outlinethickness "1" \n' + 'cl_crosshair_sniper_width "1" \n' + 'cl_crosshairalpha "255" \n' + 'cl_crosshaircolor "1" \n' + 'cl_crosshaircolor_b "0" \n' + 'cl_crosshaircolor_g "0" \n' + 'cl_crosshaircolor_r "255" \n' + 'cl_crosshairdot "0" \n' + 'cl_crosshairgap "-3" \n' + 'cl_crosshairgap_useweaponvalue "0" \n' + 'cl_crosshairscale "0" \n' + 'cl_crosshairsize "2" \n' + 'cl_crosshairstyle "4" \n' + 'cl_crosshairthickness "1" \n' + 'cl_crosshairusealpha "1" \n' + 'cl_fixedcrosshairgap "-4.5" \n', true).addField('Copy Part 1:', 'cl_crosshair_drawoutline 0; cl_crosshair_dynamic_maxdist_splitratio 0.35; cl_crosshair_dynamic_splitalpha_innermod 1; cl_crosshair_dynamic_splitalpha_outermod 0.5; cl_crosshair_dynamic_splitdist 7; cl_crosshair_outlinethickness 1', true).addField('Copy Part 2:', 'cl_crosshaircolor_r 255; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairgap_useweaponvalue 0; cl_crosshairscale 0; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairthickness 1; cl_crosshairusealpha 1', true).addField('Copy Part 3:', 'cl_fixedcrosshairgap -4.5; cl_crosshair_sniper_width 1; cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshaircolor_b 0; cl_crosshaircolor_g 0', true).setColor(__WEBPACK_IMPORTED_MODULE_1__embedColors__["a" /* default */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_1__embedColors__["a" /* default */].length)]).setFooter('ENTER PART 1 INTO CONSOLE THEN PRESS ENTER, THEN ENTER PART 2 INTO CONSOLE THEN PRESS ENTER, THEN COPY AND PASTE PART 3 INTO CONSOLE AND PRESS ENTER!'));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("discord.js");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['0xFF0000', //red
'0x00FF00', //green
'0xFFFF00', //yellow
'0xA52A2A', //brown
'0xFFA500', //orange
'0x0000FF' //blue
]);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"token":"NDI2NDIzMjIwNDE4MTE3NjQy.DZVxhg.9VXPddACX0fwRPLrAWubqHZl6v0"}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_discord_js__);


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_discord_js___default.a.Client());

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map