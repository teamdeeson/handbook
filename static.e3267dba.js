(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _textBlock = __webpack_require__(23);

var _textBlock2 = _interopRequireDefault(_textBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
    var page = _ref.page;

    var textClass = 'content__main';
    //return <main className={ textClass } dangerouslySetInnerHTML={{__html: page.content}} />
    return _react2.default.createElement(
        'main',
        { className: textClass },
        _react2.default.createElement(_textBlock2.default, { text: page.content })
    );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "div",
            { className: "hero" },
            _react2.default.createElement(
                "header",
                { className: "hero__header" },
                _react2.default.createElement(
                    "h1",
                    { className: "hero__title" },
                    "Oops, sorry!"
                )
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "text-block text-block--center" },
            _react2.default.createElement(
                "p",
                null,
                "The page you're looking for doesn't exist. Try heading back ",
                _react2.default.createElement(
                    "a",
                    { href: "/" },
                    "home"
                ),
                "."
            )
        )
    );
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTUwIDI3LjMiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmMDA0Nn08L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS4yIDBjNy45IDAgMTMgNC40IDEzIDEzLjJ2LjFjMCA5LjctNS42IDEzLjYtMTMuNyAxMy42SDF2LTMuMmgxYzEuNSAwIDIuMi0uMyAyLjItMi4yVjUuNmMwLTEuOS0uNy0yLjItMi4yLTIuMkgxVjBoMTQuMnptLTEuMyAyMy41YzUuMyAwIDctMyA3LTkuM1YxMmMwLTUuNS0xLjUtOC4zLTYuMS04LjNIMTF2MTkuOGgyLjl6TTM2LjggMTcuNmMuMiA0LjIgMi4zIDUuNyA2LjQgNS43IDIuMiAwIDQuMi0uNiA1LjYtMS4ydjIuNGMtMSAxLjMtMy44IDIuOC03LjggMi44LTYuOSAwLTExLjEtMy44LTExLjEtMTAuOCAwLTYuOCA0LjYtMTAuOCAxMC41LTEwLjggNi4yIDAgOS40IDMuNSA5LjQgOC42IDAgMS42LS4zIDIuNC0uNiAzLjJIMzYuOHptMC0yLjhoNi45di0uM2MwLTQtMS4xLTUuNi0zLjItNS42LTIuMy0uMS0zLjUgMS42LTMuNyA1Ljl6TTU4LjQgMTcuNmMuMiA0LjIgMi4zIDUuNyA2LjQgNS43IDIuMiAwIDQuMi0uNiA1LjYtMS4ydjIuNGMtMSAxLjMtMy44IDIuOC03LjggMi44LTYuOSAwLTExLjEtMy44LTExLjEtMTAuOCAwLTYuOCA0LjYtMTAuOCAxMC41LTEwLjggNi4yIDAgOS40IDMuNSA5LjQgOC42IDAgMS42LS4zIDIuNC0uNiAzLjJINTguNHptMC0yLjhoNi45di0uM2MwLTQtMS4xLTUuNi0zLjItNS42LTIuMy0uMS0zLjYgMS42LTMuNyA1Ljl6TTc2LjggMjQuOGMtLjMgMS40LS44IDIuMS0uOCAyLjFoLTN2LTYuNGg0Yy41IDIuNCAyLjIgMy44IDQuOCAzLjggMiAwIDMuMy0uOCAzLjMtMi40IDAtMS4zLS42LTEuNy0xLjctMS45LTEuNS0uNC00LjgtLjQtNy4xLTEuNi0yLjItMS4xLTMuMi0zLTMuMi01LjggMC01LjEgNC40LTYuOCA3LjYtNi44IDIuOCAwIDQuNS45IDUuMyAyLjUuMy0xLjQuNy0yIC43LTJoM3Y1LjloLTMuOGMtLjctMi0yLTMuMi00LjItMy4yLTEuNyAwLTMgLjYtMyAyLjIgMCAxLjEuNSAxLjYgMS42IDEuOSAyIC41IDUuNC41IDcuNSAxLjcgMi4yIDEuMiAzLjEgMyAzLjEgNS42IDAgNC42LTMuMyA2LjktOCA2LjktMy4xIDAtNS0uOS02LjEtMi41ek05Mi4zIDE2LjRjMC02LjggNC43LTEwLjYgMTAuOC0xMC42IDYuMiAwIDEwLjggMy44IDEwLjggMTAuNXYuMWMwIDcuOS01LjMgMTEtMTAuOCAxMS01LjYtLjEtMTAuOC0zLjItMTAuOC0xMXptMTQuNy42di0xLjVjMC00LjYtMS42LTYuNC00LTYuNHMtMy45IDEuOC0zLjkgNi40VjE3YzAgNS44IDEuNyA3LjIgMy45IDcuMiAyLjMgMCA0LTEuNCA0LTcuMnpNMTM3LjEgMjIuMWMwIDEuMi4zIDEuNyAyIDEuN2guM3YzLjFoLTExLjd2LTMuMWguNGMxLjcgMCAyLjItLjIgMi4yLTEuNXYtOC44YzAtMi4zLTEtMy40LTIuOS0zLjQtMi40IDAtNC4xIDItNC4xIDUuNnY2LjdjMCAxLjMuMyAxLjUgMi4yIDEuNWguNFYyN2gtMTEuN3YtMy4xaC41YzEuNSAwIDEuOC0uMyAxLjgtMS44di05LjZjMC0yLjEtLjctMi40LTIuMi0yLjRoLS4xVjYuM2g4cy45IDIuMS45IDQuN3YuM2MuOS0zLjMgMy4zLTUuNSA3LjItNS41IDQuMSAwIDYuNiAyLjQgNi42IDcuNHY4Ljl6TTE0MC44IDIyLjhjMC0yLjUgMi4xLTQuNiA0LjYtNC42IDIuNSAwIDQuNiAyLjEgNC42IDQuNiAwIDIuNS0yLjEgNC41LTQuNiA0LjUtMi41IDAtNC42LTItNC42LTQuNXoiLz48L3N2Zz4="

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };

    // Render!
    render(_App2.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(13);

var _reactStaticRoutes = __webpack_require__(14);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(25);

var _menu = __webpack_require__(30);

var _menu2 = _interopRequireDefault(_menu);

var _footer = __webpack_require__(33);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
            'div',
            { className: 'handbook off-canvas-menu' },
            _react2.default.createElement(_menu2.default, null),
            _react2.default.createElement(
                'div',
                { className: 'handbook__main off-canvas-menu__content' },
                _react2.default.createElement(
                    'section',
                    { className: 'handbook__main__content content' },
                    _react2.default.createElement(_reactStaticRoutes2.default, null),
                    _react2.default.createElement(_footer2.default, null)
                )
            )
        )
    );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(15);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(16);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(17);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

var _reactUniversalComponent = __webpack_require__(19);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/page',
  file: '/opt/atlassian/pipelines/agent/build/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/page';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/opt/atlassian/pipelines/agent/build/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 1

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(20);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(21);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(22);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextBlock;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param props.center boolean
 *   Set to true to add a center alignment class.
 * @param props.text HTML
 *   A rich HTML block.
 *
 * @returns {*}
 * @constructor
 */
function TextBlock(props) {
  var textClass = 'text_block';
  return _react2.default.createElement('div', { className: textClass, dangerouslySetInnerHTML: { __html: props.text } });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n.content .content__main li {\n  position: relative;\n  top: 5px;\n  padding-left: 30px;\n  margin-top: 10px;\n  line-height: 1.5;\n  list-style: none; }\n\n.content .content__main li:before {\n  content: \"\\2022\";\n  font-size: 30px;\n  position: absolute;\n  line-height: 15px;\n  left: 0;\n  top: 6px; }\n\n.text_block ul {\n  display: block;\n  list-style-type: disc;\n  padding-left: 40px;\n  padding-bottom: 20px; }\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(8);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Custom\n   ========================================================================== */\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0; }\n\nul,\nol {\n  margin: 0;\n  padding: 0; }\n\ndl {\n  margin: 0; }\n\ndt, dd {\n  display: inline-block;\n  margin: 0;\n  padding: 0; }\n\n/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n@font-face {\n  font-family: 'CircularStd-Bold';\n  src: url(" + escape(__webpack_require__(26)) + ");\n  font-display: swap; }\n\n@font-face {\n  font-family: 'MaisonNeue-Book';\n  src: url(" + escape(__webpack_require__(27)) + ");\n  font-display: swap; }\n\n@font-face {\n  font-family: 'MaisonNeue-Bold';\n  src: url(" + escape(__webpack_require__(28)) + ");\n  font-display: swap; }\n\n@font-face {\n  font-family: 'MaisonNeue-Light';\n  src: url(" + escape(__webpack_require__(29)) + ");\n  font-display: swap; }\n\nbody {\n  color: #000000;\n  font-family: \"MaisonNeue-Book\", Helvetica, Arial;\n  font-size: 15px;\n  line-height: 1.5;\n  text-align: left;\n  background-color: #edeee9;\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  @media only screen and (min-width: 769px) {\n    body {\n      font-size: 16px; } }\n\nh1,\n.h1 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 38px;\n  line-height: 1.3; }\n\nh2,\n.h2 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 30px;\n  line-height: 1.3;\n  text-align: left; }\n\nh3,\n.h3 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 28px;\n  line-height: 1.3;\n  margin-bottom: 20px;\n  text-align: left; }\n\nh4,\n.h4 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 27px;\n  line-height: 1.3;\n  margin-bottom: 20px;\n  text-align: left; }\n  @media only screen and (min-width: 769px) {\n    h4,\n    .h4 {\n      font-size: 24px; } }\n\nh5,\n.h5 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 25px;\n  line-height: 1.3;\n  margin-bottom: 20px;\n  text-align: left; }\n  @media only screen and (min-width: 769px) {\n    h5,\n    .h5 {\n      font-size: 20px; } }\n\nh6,\n.h6 {\n  font-family: \"CircularStd-Bold\", Helvetica, Arial;\n  font-weight: normal;\n  color: #000000;\n  font-size: 22px;\n  line-height: 1.3;\n  margin-bottom: 10px;\n  text-align: left; }\n  @media only screen and (min-width: 769px) {\n    h6,\n    .h6 {\n      font-size: 18px; } }\n\np strong,\nul strong,\nol strong,\nlabel strong,\np b,\nul b,\nol b,\nlabel b {\n  font-family: \"MaisonNeue-Bold\", Helvetica, Arial;\n  font-weight: normal; }\n\n.noscroll {\n  overflow: hidden; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px;\n  width: calc(100% - (20px * 2)); }\n\n@media only screen and (min-width: 501px) {\n  .xs-visible {\n    display: none; } }\n\n.text-center {\n  text-align: center; }\n\n.list--bullet {\n  list-style: none;\n  margin-bottom: 40px; }\n  .list--bullet li {\n    position: relative;\n    padding-left: 35px; }\n    .list--bullet li + li {\n      margin-top: 10px; }\n    @media only screen and (min-width: 501px) {\n      .list--bullet li {\n        padding-left: 30px; } }\n    .list--bullet li::before {\n      content: '\\2022';\n      font-size: 40px;\n      position: absolute;\n      line-height: 15px;\n      left: 0;\n      top: 7px; }\n      @media only screen and (min-width: 501px) {\n        .list--bullet li::before {\n          font-size: 30px;\n          line-height: 16px;\n          top: 5px; } }\n\n@media only screen and (min-width: 901px) {\n  .handbook {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .handbook .handbook__main {\n    -ms-flex: 1 auto;\n    -webkit-box-flex: 1;\n            flex: 1 auto; } }\n\n.handbook {\n  width: 100%; }\n\n.handbook .handbook__main {\n  margin: 0 auto;\n  padding: 45px;\n  -ms-flex-align: start;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  background-color: #fff; }\n\n.handbook .handbook__main .handbook__main__content {\n  width: 100%;\n  max-width: 770px;\n  margin: 0 auto; }\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/CircularStd-Bold.6baed2bf.otf";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/MaisonNeue-Book.416895af.ttf";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/MaisonNeue-Bold.e003666c.ttf";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/MaisonNeue-Light.40d268ec.ttf";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

var _deesonLogo = __webpack_require__(9);

var _deesonLogo2 = _interopRequireDefault(_deesonLogo);

var _reactRouter = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                router = _props.router,
                params = _props.params,
                location = _props.location,
                routes = _props.routes;


            return _react2.default.createElement(
                'div',
                { className: 'handbook__sidebar off-canvas-menu__menu' },
                _react2.default.createElement(
                    'div',
                    { className: 'sidebar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'off-canvas-menu__close-trigger' },
                        _react2.default.createElement('span', { className: 'icon-close' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sidebar__logo logo' },
                        _react2.default.createElement(
                            'a',
                            { href: '../..', className: 'logo__image' },
                            'Deeson'
                        )
                    ),
                    _react2.default.createElement(
                        'nav',
                        { className: 'sidebar__menus nav-block' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav-block___menu menu', role: 'navigation', 'aria-label': 'main navigation' },
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                _react2.default.createElement(
                                    'a',
                                    { className: 'menu__link', href: '/' },
                                    'Home'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Basics',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item menu__item--active' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/principles-and-values' },
                                            'Principles and values'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/teams' },
                                            'Teams'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/self-organisation' },
                                            'Self-organisation'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/accountabilities-and-teams' },
                                            'Personal accountability'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/roles-at-deeson' },
                                            'Job roles'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/tools-processes-and-policies' },
                                            'Tools, processes and policies'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Project delivery',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/our-delivery-process' },
                                            'Our delivery process'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/project-roles' },
                                            'Project roles'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Recruitment',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/new-starter-pay' },
                                            'Pay for new starters'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/joining-deeson' },
                                            'Onboarding'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Team member benefits',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/pay-scales' },
                                            'Pay'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/fair-pay' },
                                            'Fair pay guarantee'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/taking-leave' },
                                            'Holidays and time off'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/wellness/' },
                                            'Wellness fund'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/equipment/' },
                                            'Equipment budget'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/recruitment-bonus/' },
                                            'Recruitment bonus'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/pension/' },
                                            'Company pension'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/training/' },
                                            'Unlimited training budget'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/peer-recognition/' },
                                            'Peer recognition scheme'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/cycles/' },
                                            'Tax-free cycles and e-cycles'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/charity-volunteering/' },
                                            'Charity work and volunteering'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/sabbaticals/' },
                                            'Paid sabbaticals'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Personal development',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/one-to-ones/' },
                                            'Monthly 1 to 1'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/pdp/' },
                                            'Professional development plan (PDP)'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/impact-scoring/' },
                                            'Impact scoring'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Working at Deeson',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/where-and-when-we-work/' },
                                            'Where and when we work'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/company-engagement/' },
                                            'Company engagement'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link',
                                                href: '../../working-at-deeson/self-scheduling/' },
                                            'Self-scheduling'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/pay-review/' },
                                            'Pay review'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/promotion/' },
                                            'Promotion or changing roles'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link',
                                                href: '../../working-at-deeson/maternity-paternity-and-shared-leave-guide/' },
                                            'Guide to maternity, paternity and shared parental leave'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link',
                                                href: '../../working-at-deeson/tools-purchasing-and-equipment/' },
                                            'Tools, purchasing and equipment'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link',
                                                href: '../../working-at-deeson/subscriptions/' },
                                            'Subscriptions'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/time-recording/' },
                                            'Time recording'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/conference-policy/' },
                                            'Attending conferences'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/deeson-office-london/' },
                                            'London office'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/deeson-office-canterbury/' },
                                            'Canterbury office'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/coworking/' },
                                            'TOG co-working spaces'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/writing-guide/' },
                                            'Writing style guide'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/staff-privacy-notice/' },
                                            'Staff privacy notice'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../working-at-deeson/useful-links/' },
                                            'Useful links'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'menu__item' },
                                'Company policies and statements',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menu' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/equality-policy/' },
                                            'Equality policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/social-media-policy/' },
                                            'Social media policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/sickness-absence-policy/' },
                                            'Sickness absence policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/disciplinary-policy/' },
                                            'Disciplinary policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link',
                                                href: '../../company-policies/computer-usage-and-security-policy/' },
                                            'Computer usage and security policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link',
                                                href: '../../company-policies/health-and-safety-policy/' },
                                            'Health & safety policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/environmental-policy/' },
                                            'Environmental policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/anti-bribery-policy/' },
                                            'Anti-bribery policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/maternity-and-paternity-policy/' },
                                            'Maternity, paternity & shared leave policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/data-protection-policy/' },
                                            'Data protection policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '../../company-policies/data-retention-policy/' },
                                            'Data retention policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/modern-slavery-policy' },
                                            'Modern slavery policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'menu__item' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'menu__link', href: '/information-security-management-statement' },
                                            'ISM statement'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = (0, _reactRouter.withRouter)(Menu);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(8);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n  @include media(\"md-up\") {\n    [styles for tablets and larger]\n  }\n  @include media(\"sm-down\") {\n    [styles for portrait tablets and smaller]\n  }\n*/\n@media only screen and (min-width: 901px) {\n  .handbook .handbook__sidebar {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n  .handbook .handbook__sidebar {\n    width: 375px;\n    min-height: 100vh;\n    overflow-y: scroll;\n    padding: 45px;\n    background-color: #edeee9;\n    color: #000; } }\n\n.logo .logo__image {\n  width: 150px;\n  padding-top: 28px;\n  height: 0;\n  overflow: hidden;\n  display: block;\n  background-image: url(" + escape(__webpack_require__(9)) + ");\n  background-repeat: no-repeat; }\n\n.off-canvas-menu .off-canvas-menu__close-trigger, .off-canvas-menu .off-canvas-menu__trigger {\n  display: none; }\n\n.sidebar .sidebar__logo, .sidebar .sidebar__search {\n  margin-bottom: 3.5rem; }\n\n.sidebar .sidebar__menus {\n  margin-bottom: 1rem; }\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block; }\n\n.nav-block .nav-block___menu {\n  font-size: 1rem;\n  line-height: 1.3125; }\n\n.menu {\n  padding: 0;\n  margin: .625em 0 0; }\n\n.menu .menu__item {\n  list-style: none;\n  margin-bottom: .625em; }\n\n.menu .menu {\n  margin-left: 1.5em;\n  text-transform: none; }\n\n.menu {\n  padding: 0;\n  margin: .625em 0 0; }\n\n.nav-block___menu li {\n  font-family: \"MaisonNeue-Bold\", Helvetica, Arial; }\n\n.menu .menu__link {\n  font-family: \"MaisonNeue-Light\", Helvetica, Arial;\n  color: #000;\n  text-decoration: none; }\n\na, a:visited, html {\n  color: #000; }\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(props) {
    return _react2.default.createElement(
        'footer',
        { className: 'content__footer' },
        _react2.default.createElement(
            'div',
            { className: 'content__footer__extra-info' },
            _react2.default.createElement(
                'div',
                { className: 'copyright-info' },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'a',
                        { rel: 'license', href: 'http://creativecommons.org/licenses/by-sa/4.0/' },
                        _react2.default.createElement('img', { alt: 'Creative Commons License', src: 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png' })
                    ),
                    _react2.default.createElement('br', null),
                    'The Deeson Handbook is licensed under a ',
                    _react2.default.createElement(
                        'a',
                        { rel: 'license', href: 'http://creativecommons.org/licenses/by-sa/4.0/' },
                        'Creative Commons Attribution-ShareAlike 4.0 International License'
                    ),
                    '.'
                )
            )
        )
    );
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".content .content__footer .content__footer__extra-info {\n  border-top: 1px solid #f8f7f5;\n  margin-top: 1em;\n  padding-top: 1em;\n  font-size: .9375rem;\n  line-height: 1.6; }\n", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.e3267dba.js.map