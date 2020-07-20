module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/artist.js":
/*!*************************!*\
  !*** ./pages/artist.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.sass */ \"./sass/styles.sass\");\n/* harmony import */ var _sass_styles_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image */ \"react-progressive-image\");\n/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/dimitripl/Developer/framer-next/pages/artist.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst transition = {\n  duration: 1.4,\n  ease: [0.6, 0.01, -0.05, 0.9]\n};\nconst firstName = {\n  initial: {\n    y: 0\n  },\n  animate: {\n    y: 0,\n    transition: {\n      delayChildren: 0.6,\n      staggerChildren: 0.04,\n      staggerDirection: -1\n    }\n  }\n};\nconst lastName = {\n  initial: {\n    y: 0\n  },\n  animate: {\n    y: 0,\n    transition: {\n      delayChildren: 0.6,\n      staggerChildren: 0.04,\n      staggerDirection: 1\n    }\n  }\n};\nconst letter = {\n  initial: {\n    y: 400\n  },\n  animate: {\n    y: 0,\n    transition: _objectSpread({\n      duration: 1\n    }, transition)\n  }\n};\n\nconst Model = () => {\n  const {\n    scrollYProgress\n  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useViewportScroll\"])();\n  const scale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"])(scrollYProgress, [0, 1], [1, 1.15]);\n  const {\n    0: canScroll,\n    1: setCanScroll\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (canScroll === false) {\n      document.querySelector('body').classList.add('no-scroll');\n    } else {\n      document.querySelector('body').classList.remove('no-scroll');\n    }\n  }, [canScroll]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    onAnimationComplete: () => setCanScroll(true),\n    className: \"single\",\n    initial: \"initial\",\n    animate: \"animate\",\n    exit: \"exit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"model\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    className: \"first\",\n    variants: firstName,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"A\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, \"n\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, \"a\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    className: \"last\",\n    variants: lastName,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"S\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, \"w\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"e\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, \"e\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].span, {\n    variants: letter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"t\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcnRpc3QuanM/OWVlYSJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZmlyc3ROYW1lIiwiaW5pdGlhbCIsInkiLCJhbmltYXRlIiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJsYXN0TmFtZSIsImxldHRlciIsIk1vZGVsIiwic2Nyb2xsWVByb2dyZXNzIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY2FsZSIsInVzZVRyYW5zZm9ybSIsImNhblNjcm9sbCIsInNldENhblNjcm9sbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFVBQVUsR0FBRztBQUFFQyxVQUFRLEVBQUUsR0FBWjtBQUFpQkMsTUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxDQUFDLElBQWIsRUFBbUIsR0FBbkI7QUFBdkIsQ0FBbkI7QUFFQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFNBQU8sRUFBRTtBQUNQQyxLQUFDLEVBQUU7QUFESSxHQURPO0FBSWhCQyxTQUFPLEVBQUU7QUFDUEQsS0FBQyxFQUFFLENBREk7QUFFUEwsY0FBVSxFQUFFO0FBQ1ZPLG1CQUFhLEVBQUUsR0FETDtBQUVWQyxxQkFBZSxFQUFFLElBRlA7QUFHVkMsc0JBQWdCLEVBQUUsQ0FBQztBQUhUO0FBRkw7QUFKTyxDQUFsQjtBQWNBLE1BQU1DLFFBQVEsR0FBRztBQUNmTixTQUFPLEVBQUU7QUFDUEMsS0FBQyxFQUFFO0FBREksR0FETTtBQUlmQyxTQUFPLEVBQUU7QUFDUEQsS0FBQyxFQUFFLENBREk7QUFFUEwsY0FBVSxFQUFFO0FBQ1ZPLG1CQUFhLEVBQUUsR0FETDtBQUVW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QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpGLEVBS0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxZQUFRLEVBQUVBLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRixDQVBGLENBUEYsQ0FERjtBQXlCRCxDQXhDRDs7QUEwQ2VDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3Nhc3Mvc3R5bGVzLnNhc3MnO1xuaW1wb3J0IFByb2dyZXNzaXZlSW1hZ2UgZnJvbSAncmVhY3QtcHJvZ3Jlc3NpdmUtaW1hZ2UnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5jb25zdCB0cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMS40LCBlYXNlOiBbMC42LCAwLjAxLCAtMC4wNSwgMC45XSB9O1xuXG5jb25zdCBmaXJzdE5hbWUgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiAwLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheUNoaWxkcmVuOiAwLjYsXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDQsXG4gICAgICBzdGFnZ2VyRGlyZWN0aW9uOiAtMSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgbGFzdE5hbWUgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiAwLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheUNoaWxkcmVuOiAwLjYsXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDQsXG4gICAgICBzdGFnZ2VyRGlyZWN0aW9uOiAxLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBsZXR0ZXIgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiA0MDAsXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIC4uLnRyYW5zaXRpb24gfSxcbiAgfSxcbn07XG5cbmNvbnN0IE1vZGVsID0gKCkgPT4ge1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblxuICBjb25zdCBzY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzEsIDEuMTVdKTtcblxuICBjb25zdCBbY2FuU2Nyb2xsLCBzZXRDYW5TY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhblNjcm9sbCA9PT0gZmFsc2UpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH1cbiAgfSwgW2NhblNjcm9sbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIG9uQW5pbWF0aW9uQ29tcGxldGU9eygpID0+IHNldENhblNjcm9sbCh0cnVlKX1cbiAgICAgIGNsYXNzTmFtZT1cInNpbmdsZVwiXG4gICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICBleGl0PVwiZXhpdFwiXG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibW9kZWxcIj5cbiAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImZpcnN0XCIgdmFyaWFudHM9e2ZpcnN0TmFtZX0+XG4gICAgICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXtsZXR0ZXJ9PkE8L21vdGlvbi5zcGFuPlxuICAgICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17bGV0dGVyfT5uPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2xldHRlcn0+YTwvbW90aW9uLnNwYW4+XG5cbiAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImxhc3RcIiB2YXJpYW50cz17bGFzdE5hbWV9PlxuICAgICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17bGV0dGVyfT5TPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2xldHRlcn0+dzwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXtsZXR0ZXJ9PmU8L21vdGlvbi5zcGFuPlxuICAgICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17bGV0dGVyfT5lPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2xldHRlcn0+dDwvbW90aW9uLnNwYW4+XG4gICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/artist.js\n");

/***/ }),

/***/ "./sass/styles.sass":
/*!**************************!*\
  !*** ./sass/styles.sass ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Nhc3Mvc3R5bGVzLnNhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/styles.sass\n");

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/artist.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dimitripl/Developer/framer-next/pages/artist.js */"./pages/artist.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-progressive-image":
/*!******************************************!*\
  !*** external "react-progressive-image" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-progressive-image\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wcm9ncmVzc2l2ZS1pbWFnZVwiP2IwODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcHJvZ3Jlc3NpdmUtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wcm9ncmVzc2l2ZS1pbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-progressive-image\n");

/***/ })

/******/ });