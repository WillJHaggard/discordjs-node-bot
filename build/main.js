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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("discord.js");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chalk__);


const ncLog = (...args) => console.log(...args);
/* unused harmony export ncLog */

const greenLog = (...args) => console.log(...args.map(arg => Object(__WEBPACK_IMPORTED_MODULE_0_chalk__["green"])(arg)));
/* harmony export (immutable) */ __webpack_exports__["a"] = greenLog;

const redLog = (...args) => console.log(...args.map(arg => Object(__WEBPACK_IMPORTED_MODULE_0_chalk__["red"])(arg)));
/* unused harmony export redLog */


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__callbacks_ready__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__callbacks_memberAdd__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__richEmbeds__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__auth_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bot__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servers__ = __webpack_require__(14);
// event classes


// utilities

// settings and configs
//import embedColors from './embedColors';

// RichEmbeds


// discordjs bot TOKEN


// Bots


// Servers


__WEBPACK_IMPORTED_MODULE_6__bot__["a" /* default */].on('ready', __WEBPACK_IMPORTED_MODULE_0__callbacks_ready__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_6__bot__["a" /* default */].on('guildMemberAdd', __WEBPACK_IMPORTED_MODULE_1__callbacks_memberAdd__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_6__bot__["a" /* default */].login(__WEBPACK_IMPORTED_MODULE_5__auth_json__["token"]);

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configExample__ = __webpack_require__(7);
/* unused harmony reexport configExample */



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  // configuration, api tokens for steam, etc
  steamToken: ''
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cross__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules__ = __webpack_require__(11);
/* unused harmony reexport cross */
/* unused harmony reexport rules */




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_discord_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__embedColors__ = __webpack_require__(10);



/* unused harmony default export */ var _unused_webpack_default_export = (new __WEBPACK_IMPORTED_MODULE_0_discord_js___default.a.RichEmbed().addField('Crosshair:', 'cl_crosshair_drawoutline "0" \n' + 'cl_crosshair_dynamic_maxdist_splitratio "0.35" \n' + 'cl_crosshair_dynamic_splitalpha_innermod "1" \n' + 'cl_crosshair_dynamic_splitalpha_outermod "0.5" \n' + 'cl_crosshair_dynamic_splitdist "7" \n' + 'cl_crosshair_outlinethickness "1" \n' + 'cl_crosshair_sniper_width "1" \n' + 'cl_crosshairalpha "255" \n' + 'cl_crosshaircolor "1" \n' + 'cl_crosshaircolor_b "0" \n' + 'cl_crosshaircolor_g "0" \n' + 'cl_crosshaircolor_r "255" \n' + 'cl_crosshairdot "0" \n' + 'cl_crosshairgap "-3" \n' + 'cl_crosshairgap_useweaponvalue "0" \n' + 'cl_crosshairscale "0" \n' + 'cl_crosshairsize "2" \n' + 'cl_crosshairstyle "4" \n' + 'cl_crosshairthickness "1" \n' + 'cl_crosshairusealpha "1" \n' + 'cl_fixedcrosshairgap "-4.5" \n', true).addField('Copy Part 1:', 'cl_crosshair_drawoutline 0; cl_crosshair_dynamic_maxdist_splitratio 0.35; cl_crosshair_dynamic_splitalpha_innermod 1; cl_crosshair_dynamic_splitalpha_outermod 0.5; cl_crosshair_dynamic_splitdist 7; cl_crosshair_outlinethickness 1', true).addField('Copy Part 2:', 'cl_crosshaircolor_r 255; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairgap_useweaponvalue 0; cl_crosshairscale 0; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairthickness 1; cl_crosshairusealpha 1', true).addField('Copy Part 3:', 'cl_fixedcrosshairgap -4.5; cl_crosshair_sniper_width 1; cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshaircolor_b 0; cl_crosshaircolor_g 0', true).setColor(__WEBPACK_IMPORTED_MODULE_1__embedColors__["a" /* default */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_1__embedColors__["a" /* default */].length)]).setFooter('ENTER PART 1 INTO CONSOLE THEN PRESS ENTER, THEN ENTER PART 2 INTO CONSOLE THEN PRESS ENTER, THEN COPY AND PASTE PART 3 INTO CONSOLE AND PRESS ENTER!'));

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_discord_js__);


/* unused harmony default export */ var _unused_webpack_default_export = (new __WEBPACK_IMPORTED_MODULE_0_discord_js___default.a.RichEmbed().addField('Rules (1/2):', '---------------------------------------------------------------------------------------\n', true).setColor('0xFF0000'));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"token":"NDI2NDIzMjIwNDE4MTE3NjQy.DZVxhg.9VXPddACX0fwRPLrAWubqHZl6v0"}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_discord_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_discord_js__);


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_discord_js___default.a.Client());

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({});

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__en_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__en_json__);



/* harmony default export */ __webpack_exports__["a"] = (e => __WEBPACK_IMPORTED_MODULE_1__en_json___default.a['Bot.callbacks.ready'].map(text => Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* greenLog */])(text)));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__en_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__en_json__);



let welcome = member => `${member.toString()} ${__WEBPACK_IMPORTED_MODULE_1__en_json___default.a['Bot.callbacks.memberAdd.welcome']}`;
let roleAdded = ({ author: { username } }) => Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* greenLog */])(`${username} ${__WEBPACK_IMPORTED_MODULE_1__en_json___default.a['Bot.callbacks.memberAdd.memberRole']}`);

function findMemeber(member) {
  member.addRole(member.guild.roles.find('name', 'Members')).then(() => roleAdded(message));
}

/* harmony default export */ __webpack_exports__["a"] = (function (member) {
  member.guild.channels.find('name', 'general').send(welcome(member));
  findMemeber(member);
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"Bot.callbacks.ready":["----------------------------------------","                BOT PAGE                ","             BOT NOW ACTIVE             ","----------------------------------------"],"Bot.callbacks.memberAdd.memberRole":"joined and has been given The Member Role","Bot.callbacks.memberAdd.welcome":"Welcome To The Server"}

/***/ })
/******/ ]);
//# sourceMappingURL=main.map