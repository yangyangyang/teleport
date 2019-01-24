/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/web/app";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3tl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vOnD");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K0cP");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("za5s");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  border: none;\n  border-left: 4px solid transparent;\n  box-sizing: border-box;\n  color: rgba(255, 255, 255, .56);\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  outline: none;\n  text-decoration: none;\n  transition: background .3s, color .3s;\n  width: 100%;\n\n  &:hover {\n    background: rgba(255, 255, 255, .024);\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var values = {
  fontSize: 1,
  pl: 9,
  pr: 4,
  minHeight: 9
};

var fromTheme = function fromTheme(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? _theme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"] : _ref$theme;
  values.theme = theme;
  return _objectSpread({}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__[/* fontSize */ "h"])(values), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__[/* space */ "o"])(values), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__[/* minHeight */ "m"])(values), {
    fontWeight: theme.bold,
    background: theme.colors.bgSecondary,
    "&:active, &.active": {
      background: theme.colors.bgTertiary,
      borderLeftColor: theme.colors.accent,
      color: theme.colors.light
    }
  });
};

var SideNavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].div(_templateObject(), fromTheme);
SideNavItem.displayName = 'SideNavItem';
/* harmony default export */ __webpack_exports__["a"] = (SideNavItem);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rVcD");


/***/ }),

/***/ "2oKY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vOnD");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  border-bottom:  ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: ", ";\n  margin: 0;\n  outline: none;\n  padding: 0 16px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all .3s;\n  -webkit-font-smoothing: antialiased;\n\n  &:hover {\n    background:  ", ";\n    border-bottom:  ", ";\n  }\n\n  &:active, {\n    background:  ", ";\n    color: ", ";\n    border-bottom:  ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/**
 * TopNavItem
 */

var TopNavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].button(_templateObject(), function (props) {
  return props.active ? "4px solid ".concat(props.theme.colors.accent) : 'none';
}, function (props) {
  return props.active ? props.theme.colors.light : 'rgba(255, 255, 255, .56)';
}, function (props) {
  return props.active ? '68px' : '72px';
}, function (props) {
  return props.active ? props.theme.colors.bgSecondary : 'rgba(255, 255, 255, .06)';
}, function (props) {
  return props.active ? "4px solid ".concat(props.theme.colors.accent) : 'none';
}, function (props) {
  return props.active ? props.theme.colors.bgSecondary : props.theme.colors.bgPrimary;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.active ? "4px solid ".concat(props.theme.colors.accent) : 'none';
});
TopNavItem.displayName = 'TopNavItem';
/* harmony default export */ __webpack_exports__["a"] = (TopNavItem);

/***/ }),

/***/ "2qgS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return connect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/LiH");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var Provider =
/*#__PURE__*/
function (_Component) {
  _inherits(Provider, _Component);

  _createClass(Provider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        reactor: this.reactor
      };
    }
  }]);

  function Provider(props, context) {
    var _this;

    _classCallCheck(this, Provider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Provider).call(this, props, context));
    _this.reactor = props.reactor;
    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
Provider.propTypes = {
  reactor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired
};
Provider.childContextTypes = {
  reactor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
var reactorShape = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  evaluate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  evaluateToJS: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  observe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
});

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function connect(mapFluxToProps, mapStateToProps) {
  mapStateToProps = mapStateToProps ? mapStateToProps : function () {
    return {};
  };
  return function wrapWithConnect(WrappedComponent) {
    var Connect =
    /*#__PURE__*/
    function (_Component2) {
      _inherits(Connect, _Component2);

      function Connect(props, context) {
        var _this2;

        _classCallCheck(this, Connect);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Connect).call(this, props, context));
        _this2.reactor = props.reactor || context.reactor;
        _this2.unsubscribeFns = [];

        _this2.updatePropMap(props);

        return _this2;
      }

      _createClass(Connect, [{
        key: "resubscribe",
        value: function resubscribe(props) {
          this.unsubscribe();
          this.updatePropMap(props);
          this.updateState();
          this.subscribe();
        }
      }, {
        key: "UNSAFE_componentWillMount",
        value: function UNSAFE_componentWillMount() {
          this.updateState();
          this.subscribe(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unsubscribe();
        }
      }, {
        key: "updatePropMap",
        value: function updatePropMap(props) {
          this.propMap = mapFluxToProps ? mapFluxToProps(props) : {};
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var propMap = this.propMap;
          var stateToSet = {};

          for (var key in propMap) {
            var getter = propMap[key];
            stateToSet[key] = this.reactor.evaluate(getter);
          }

          this.setState(stateToSet);
        }
      }, {
        key: "subscribe",
        value: function subscribe() {
          var _this3 = this;

          var propMap = this.propMap;

          var _loop = function _loop(key) {
            var getter = propMap[key];

            var unsubscribeFn = _this3.reactor.observe(getter, function (val) {
              _this3.setState(_defineProperty({}, key, val));
            });

            _this3.unsubscribeFns.push(unsubscribeFn);
          };

          for (var key in propMap) {
            _loop(key);
          }
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.unsubscribeFns.length === 0) {
            return;
          }

          while (this.unsubscribeFns.length > 0) {
            this.unsubscribeFns.shift()();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var stateProps = mapStateToProps(this.props);
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, _objectSpread({
            reactor: this.reactor
          }, stateProps, this.props, this.state));
        }
      }]);

      return Connect;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    Connect.displayName = "Connect(".concat(getDisplayName(WrappedComponent), ")");
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      reactor: reactorShape
    };
    Connect.propTypes = {
      reactor: reactorShape
    };
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "5vg5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TermEventEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StatusCodeEnum; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var EventTypeEnum = {
  START: 'session.start',
  JOIN: 'session.join',
  END: 'session.end',
  PRINT: 'print',
  RESIZE: 'resize'
};
var TermEventEnum = {
  RESIZE: 'terminal.resize',
  CLOSE: 'terminal.close',
  RESET: 'terminal.reset',
  DATA: 'terminal.data',
  CONN_CLOSE: 'connection.close'
};
var StatusCodeEnum = {
  NORMAL: 1000
};

/***/ }),

/***/ "7EWF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// CONCATENATED MODULE: ./src/shared/components/Box/Box.jsx
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  ", " ", " ", " ", " ", " ", " ", " ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Box = styled_components_browser_esm["c" /* default */].div(_templateObject(), index_esm["o" /* space */], index_esm["j" /* height */], index_esm["q" /* width */], index_esm["d" /* color */], index_esm["p" /* textAlign */], index_esm["e" /* flex */], index_esm["b" /* alignSelf */], index_esm["l" /* justifySelf */]);
Box.displayName = 'Box';
Box.defaultProps = {
  theme: theme["b" /* default */]
};
var numberStringOrArray = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.array]);
Box.propTypes = {
  color: prop_types_default.a.string,
  bg: prop_types_default.a.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
};
/* harmony default export */ var Box_Box = (Box);
// CONCATENATED MODULE: ./src/shared/components/Box/index.js

/* harmony default export */ var components_Box = __webpack_exports__["a"] = (Box_Box);

/***/ }),

/***/ "893j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IMWB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["z"]; });


/* harmony default export */ __webpack_exports__["w"] = (_Icon__WEBPACK_IMPORTED_MODULE_0__[/* Icon */ "o"]);


/***/ }),

/***/ "9dLc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/img/img-a9859b.png";

/***/ }),

/***/ "Ahhe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// CONCATENATED MODULE: ./src/shared/components/Typography/Typography.js
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  line-height: 16px;\n  opacity: .87;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  line-height: 32px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  line-height: 20px;\n  opacity: .87;\n  a {\n    color: inherit;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  line-height: 40px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  line-height: 24px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  line-height: 56px;\n  text-transform: uppercase;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  line-height: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Typography = styled_components_browser_esm["c" /* default */].div(_templateObject(), index_esm["o" /* space */], index_esm["d" /* color */], index_esm["p" /* textAlign */], index_esm["i" /* fontWeight */], index_esm["h" /* fontSize */], index_esm["q" /* width */]);
Typography.displayName = 'Typography';
Typography.h1 = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject2());
Typography.h1.defaultProps = {
  as: 'h1',
  mb: 4,
  fontWeight: 200,
  fontSize: 10
};
Typography.h2 = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject3());
Typography.h2.defaultProps = {
  as: 'h2',
  fontWeight: 200,
  fontSize: 9
};
Typography.h3 = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject4());
Typography.h3.defaultProps = {
  as: 'h3',
  fontWeight: 500,
  fontSize: 4,
  mb: 3
};
Typography.h4 = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject5());
Typography.h4.defaultProps = {
  as: 'h4',
  fontWeight: 500,
  fontSize: 2
};
Typography.h5 = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject6());
Typography.h5.defaultProps = {
  as: 'h5',
  fontSize: 1,
  fontWeight: 300,
  mb: 2
};
Typography.p = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject7());
Typography.p.defaultProps = {
  as: "p",
  fontWeight: 300,
  fontSize: 3,
  mb: 4
};
Typography.small = Object(styled_components_browser_esm["c" /* default */])(Typography)(_templateObject8());
Typography.small.defaultProps = {
  as: 'small',
  fontWeight: 300,
  fontSize: 1
};
/* harmony default export */ var Typography_Typography = (Typography);
// CONCATENATED MODULE: ./src/shared/components/Typography/index.js

/* harmony default export */ var components_Typography = __webpack_exports__["a"] = (Typography_Typography);

/***/ }),

/***/ "B30r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/shared/components/index.js + 14 modules
var components = __webpack_require__("ryey");

// EXTERNAL MODULE: ./src/shared/components/Typography/index.js + 1 modules
var Typography = __webpack_require__("Ahhe");

// EXTERNAL MODULE: ./src/app/config.js
var config = __webpack_require__("LMli");

// CONCATENATED MODULE: ./src/app/components/Links/Links.jsx



function makeLink(url) {
  return function (props) {
    return react_default.a.createElement("a", {
      href: url
    }, props.children);
  };
}

var Login = makeLink(config["a" /* default */].routes.login);
var NewIssue = makeLink('https://github.com/gravitational/teleport/issues/new');
// CONCATENATED MODULE: ./src/app/components/Links/index.js


// CONCATENATED MODULE: ./src/app/components/Errors/Errors.jsx
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var Errors_NotFound = function NotFound(_ref) {
  var message = _ref.message;
  return react_default.a.createElement(Errors_Card, null, react_default.a.createElement(Errors_CardHeader, null, "404 Not Found"), react_default.a.createElement(Errors_CardContent, {
    message: message
  }));
};

var Errors_AccessDenied = function AccessDenied(_ref2) {
  var message = _ref2.message;
  return react_default.a.createElement(Errors_Card, null, react_default.a.createElement(Errors_CardHeader, null, "Access denied"), react_default.a.createElement(Errors_CardContent, {
    message: message
  }));
};

var Errors_Failed = function Failed(_ref3) {
  var message = _ref3.message;
  return react_default.a.createElement(Errors_Card, null, react_default.a.createElement(Errors_CardHeader, null, "Internal Error"), react_default.a.createElement(Errors_CardContent, {
    message: message
  }));
};

var Errors_LoginFailed = function LoginFailed(_ref4) {
  var message = _ref4.message;
  return react_default.a.createElement(Errors_Card, null, react_default.a.createElement(Errors_CardHeader, null, "Login unsuccessful"), react_default.a.createElement(Errors_CardContent, {
    message: message,
    desc: react_default.a.createElement("span", null, react_default.a.createElement(Login, null, "Please try again"), ", if the problem persists, contact your system administrator.")
  }));
};



var Errors_CardHeader = function CardHeader(props) {
  return react_default.a.createElement(Typography["a" /* default */].h1, {
    mb: 4,
    textAlign: "center",
    children: props.children
  });
};

var Errors_CardContent = function CardContent(_ref5) {
  var _ref5$message = _ref5.message,
      message = _ref5$message === void 0 ? '' : _ref5$message,
      desc = _ref5.desc;
  var $desc = desc ? react_default.a.createElement(Typography["a" /* default */].p, null, desc) : null;
  var $errMessage = message ? react_default.a.createElement(components["a" /* Alert */], {
    mt: 4
  }, message) : null;
  return react_default.a.createElement("div", null, $errMessage, " ", $desc, react_default.a.createElement(Typography["a" /* default */].p, null, "If you believe this is an issue with Teleport, please ", react_default.a.createElement(NewIssue, null, "create a GitHub issue.")));
};

var Errors_Card = function Card(_ref6) {
  var children = _ref6.children;
  return react_default.a.createElement(components["d" /* Card */], {
    color: "text",
    bg: "bgLight",
    width: "540px",
    mx: "auto",
    my: 4,
    p: 5,
    children: children
  });
};
// CONCATENATED MODULE: ./src/app/components/Errors/index.js
/* concated harmony reexport NotFound */__webpack_require__.d(__webpack_exports__, "d", function() { return Errors_NotFound; });
/* concated harmony reexport Failed */__webpack_require__.d(__webpack_exports__, "b", function() { return Errors_Failed; });
/* concated harmony reexport AccessDenied */__webpack_require__.d(__webpack_exports__, "a", function() { return Errors_AccessDenied; });
/* concated harmony reexport LoginFailed */__webpack_require__.d(__webpack_exports__, "c", function() { return Errors_LoginFailed; });
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/***/ }),

/***/ "Bx5D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_STATUS; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var OPEN = '/flux/fileTransfer:open';
var CLOSE = '/flux/fileTransfer:close';
var ADD = '/flux/fileTransfer:add';
var REMOVE = '/flux/fileTransfer:remove';
var UPDATE_STATUS = '/flux/fileTransfer:status';

/***/ }),

/***/ "DeKp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchInvite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acceptInvite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return acceptInviteWithU2f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginWithSso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loginWithU2f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return logout; });
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSHT");
/* harmony import */ var app_services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LU+r");
/* harmony import */ var app_services_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yaYm");
/* harmony import */ var app_services_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cGG6");
/* harmony import */ var app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LMli");
/* harmony import */ var app_services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z9Rw");
/* harmony import */ var app_lib_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lZJN");
/* harmony import */ var _status_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ksSu");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("owjQ");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/









var logger = app_lib_logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].create('flux/user/actions');
function fetchInvite(inviteToken) {
  var path = app_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].api.getInviteUrl(inviteToken);
  _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* fetchInviteStatus */ "b"].start();
  return app_services_api__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].get(path).then(function (invite) {
    _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* fetchInviteStatus */ "b"].success();
    app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_8__[/* RECEIVE_INVITE */ "a"], invite);
  }).catch(function (err) {
    _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* fetchInviteStatus */ "b"].fail(err.message);
  });
}
function acceptInvite(name, psw, token, inviteToken) {
  var promise = app_services_auth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].acceptInvite(name, psw, token, inviteToken);
  return _handleAcceptInvitePromise(promise);
}
function acceptInviteWithU2f(name, psw, inviteToken) {
  var promise = app_services_auth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].acceptInviteWithU2f(name, psw, inviteToken);
  return _handleAcceptInvitePromise(promise);
}
function loginWithSso(providerName, providerUrl) {
  var entryUrl = _getEntryRoute();

  app_services_history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].push(app_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].api.getSsoUrl(providerUrl, providerName, entryUrl), true);
}
function loginWithU2f(user, password) {
  var promise = app_services_auth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].loginWithU2f(user, password);
  return _handleLoginPromise(promise);
}
function login(user, password, token) {
  var promise = app_services_auth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].login(user, password, token);
  return _handleLoginPromise(promise);
}
function logout() {
  app_services_session__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].logout();
}

function _handleAcceptInvitePromise(promise) {
  _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* signupStatus */ "e"].start();
  return promise.then(function () {
    app_services_history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].push(app_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].routes.app, true);
  }).catch(function (err) {
    logger.error('accept invite', err);
    _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* signupStatus */ "e"].fail(err.message);
  });
}

function _handleLoginPromise(promise) {
  _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* loginStatus */ "d"].start();
  return promise.then(function () {
    var url = _getEntryRoute();

    app_services_history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].push(url, true);
  }).catch(function (err) {
    logger.error('login', err);
    _status_actions__WEBPACK_IMPORTED_MODULE_7__[/* loginStatus */ "d"].fail(err.message);
  });
}

function _getEntryRoute() {
  var entryUrl = app_services_history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getRedirectParam();

  if (entryUrl) {
    entryUrl = app_services_history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ensureSafeRoute(entryUrl);
  } else {
    entryUrl = app_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].routes.app;
  }

  return app_services_history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ensureBaseUrl(entryUrl);
}

/***/ }),

/***/ "F86T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/app/components/nuclear.jsx
var nuclear = __webpack_require__("2qgS");

// EXTERNAL MODULE: ./src/app/flux/user/actions.js
var actions = __webpack_require__("DeKp");

// EXTERNAL MODULE: ./src/app/flux/user/index.js
var flux_user = __webpack_require__("S+Ht");

// EXTERNAL MODULE: ./src/app/config.js
var config = __webpack_require__("LMli");

// EXTERNAL MODULE: ./src/shared/components/index.js + 14 modules
var components = __webpack_require__("ryey");

// EXTERNAL MODULE: ./src/shared/components/Alert/index.jsx + 1 modules
var Alert = __webpack_require__("LcJ4");

// EXTERNAL MODULE: ./src/app/services/enums.js
var enums = __webpack_require__("l3S1");

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./src/shared/components/Icon/index.js
var components_Icon = __webpack_require__("893j");

// CONCATENATED MODULE: ./src/shared/components/utils/warning.js
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

/*eslint no-empty: off */
var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      window.console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

/* harmony default export */ var utils_warning = (warning);
// CONCATENATED MODULE: ./src/shared/components/utils/colorManipulator.js
/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */

function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  utils_warning(value >= min && value <= max, "Shared components: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function convertHexToRGB(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */

function rgbToHex(color) {
  // Pass hex straight through
  if (color.indexOf('#') === 0) {
    return color;
  }

  function intToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0".concat(hex) : hex;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  values = values.map(function (n) {
    return intToHex(n);
  });
  return "#".concat(values.join(''));
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  if (false) {}

  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  }

  if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(color.type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') !== -1) {
    var rgb = decomposedColor.values.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } // else if (decomposedColor.type.indexOf('hsl') !== -1)


  return decomposedColor.values[2] / 100;
}
/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  utils_warning(color, "Shared components: missing color argument in fade(".concat(color, ", ").concat(value, ")."));
  if (!color) return color;
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  utils_warning(color, "Shared components: missing color argument in darken(".concat(color, ", ").concat(coefficient, ")."));
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  utils_warning(color, "Shared components: missing color argument in lighten(".concat(color, ", ").concat(coefficient, ")."));
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}
// CONCATENATED MODULE: ./src/app/components/Login/SsoButton/SsoButton.jsx
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 56px;\n  font-size: 24px;\n  text-align: center;\n  border-right: 1px solid rgba(0,0,0,.2);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n\n  &:hover, &:focus {\n    background: ", ";\n  }\n  height: 48px;\n  line-height: 48px;\n  position: relative;\n  box-sizing: border-box;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






var SsoButton_SsoButton = function SsoButton(props) {
  var _pickSso = pickSso(props.type),
      color = _pickSso.color,
      Icon = _pickSso.Icon;

  return react_default.a.createElement(StyledButton, _extends({
    color: color,
    block: true
  }, props), Boolean(Icon) && react_default.a.createElement(IconBox, null, react_default.a.createElement(Icon, null)), props.children);
};

function pickSso(type) {
  switch (type) {
    case 'microsoft':
      return {
        color: '#2672ec',
        Icon: components_Icon["v" /* Windows */]
      };

    case 'github':
      return {
        color: '#444444',
        Icon: components_Icon["m" /* Github */]
      };

    case 'bitbucket':
      return {
        color: '#205081',
        Icon: components_Icon["a" /* BitBucket */]
      };

    case 'google':
      return {
        color: '#dd4b39',
        Icon: components_Icon["n" /* Google */]
      };

    default:
      return {
        color: '#f7931e',
        Icon: components_Icon["r" /* OpenID */]
      };
  }
}

var StyledButton = Object(styled_components_browser_esm["c" /* default */])(components["c" /* Button */])(_templateObject(), function (props) {
  return props.color;
}, function (props) {
  return fade(props.color, 0.4);
});
var IconBox = styled_components_browser_esm["c" /* default */].div(_templateObject2());
/* harmony default export */ var Login_SsoButton_SsoButton = (SsoButton_SsoButton);
// CONCATENATED MODULE: ./src/app/components/Login/SsoButton/index.jsx
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var Login_SsoButton = (Login_SsoButton_SsoButton);
// CONCATENATED MODULE: ./src/app/components/Login/LoginForm/SsoButtons.jsx
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





function guessProviderType(name, type) {
  name = name.toLowerCase();

  if (name.indexOf('microsoft') !== -1) {
    return 'microsoft';
  }

  if (name.indexOf('bitbucket') !== -1) {
    return 'bitbucket';
  }

  if (name.indexOf('google') !== -1) {
    return 'google';
  }

  if (name.indexOf('github') !== -1 || type === enums["b" /* AuthProviderTypeEnum */].GITHUB) {
    return 'github';
  }

  if (type === enums["b" /* AuthProviderTypeEnum */].OIDC) {
    return 'openid';
  }

  return '--unknown';
}

var SsoButtons_SsoBtnList = function SsoBtnList(_ref) {
  var providers = _ref.providers,
      prefixText = _ref.prefixText,
      isDisabled = _ref.isDisabled,
      _onClick = _ref.onClick;
  var $btns = providers.map(function (item, index) {
    var name = item.name,
        type = item.type,
        displayName = item.displayName;
    displayName = displayName || name;
    var title = "".concat(prefixText, " ").concat(displayName);
    var ssoType = guessProviderType(displayName, type);
    return react_default.a.createElement(Login_SsoButton, {
      key: index,
      type: ssoType,
      mt: 4,
      disabled: isDisabled,
      onClick: function onClick(e) {
        e.preventDefault();

        _onClick(item);
      }
    }, title);
  });

  if ($btns.length === 0) {
    return react_default.a.createElement("h4", null, " You have no SSO providers configured ");
  }

  return react_default.a.createElement(components["b" /* Box */], {
    px: 5,
    pt: 2,
    pb: 5
  }, $btns);
};

/* harmony default export */ var SsoButtons = (SsoButtons_SsoBtnList);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 2 modules
var formik_esm = __webpack_require__("KYPV");

// CONCATENATED MODULE: ./src/app/components/Login/LoginForm/LoginForm.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var LoginForm_LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialValues", {
      password: '',
      user: '',
      token: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onValidate", function (values) {
      var errors = {};

      if (!values.user) {
        errors.user = ' is required';
      }

      if (!values.password) {
        errors.password = ' is required';
      }

      if (_this.isOTP() && !values.token) {
        errors.token = ' is required';
      }

      return errors;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLogin", function (values) {
      var user = values.user,
          password = values.password,
          token = values.token;

      if (_this.props.auth2faType === enums["a" /* Auth2faTypeEnum */].UTF) {
        _this.props.onLoginWithU2f(user, password);
      } else {
        _this.props.onLogin(user, password, token);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoginWithSso", function (ssoProvider) {
      _this.props.onLoginWithSso(ssoProvider);
    });

    return _this;
  }

  _createClass(LoginForm, [{
    key: "needs2fa",
    value: function needs2fa() {
      return !!this.props.auth2faType && this.props.auth2faType !== enums["a" /* Auth2faTypeEnum */].DISABLED;
    }
  }, {
    key: "needsSso",
    value: function needsSso() {
      return this.props.authProviders && this.props.authProviders.length > 0;
    }
  }, {
    key: "isOTP",
    value: function isOTP() {
      return this.needs2fa() && this.props.auth2faType === enums["a" /* Auth2faTypeEnum */].OTP;
    }
  }, {
    key: "renderLoginBtn",
    value: function renderLoginBtn(onClick) {
      var isProcessing = this.props.attempt.isProcessing;
      var $helpBlock = null;

      if (isProcessing && this.props.auth2faType === enums["a" /* Auth2faTypeEnum */].UTF) {
        $helpBlock = react_default.a.createElement(components["m" /* Typography */].small, {
          width: "100%",
          textAlign: "center"
        }, "Insert your U2F key and press the button on the key");
      }

      var btnProps = {
        onClick: onClick,
        block: true,
        disabled: isProcessing,
        size: 'large',
        type: 'submit',
        mt: '5',
        mb: '2'
      };
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components["c" /* Button */], btnProps, "SIGN INTO TELEPORT"), $helpBlock);
    }
  }, {
    key: "renderSsoBtns",
    value: function renderSsoBtns() {
      var _this$props = this.props,
          authProviders = _this$props.authProviders,
          attempt = _this$props.attempt;

      if (!this.needsSso()) {
        return null;
      }

      return react_default.a.createElement(SsoButtons, {
        prefixText: "Login with ",
        isDisabled: attempt.isProcessing,
        providers: authProviders,
        onClick: this.onLoginWithSso
      });
    }
  }, {
    key: "renderTokenField",
    value: function renderTokenField(_ref) {
      var values = _ref.values,
          errors = _ref.errors,
          touched = _ref.touched,
          handleChange = _ref.handleChange;
      var isOTP = this.isOTP();
      var tokenError = Boolean(errors.token && touched.token);
      var $tokenField = null;

      if (isOTP) {
        $tokenField = react_default.a.createElement(components["e" /* Flex */], null, react_default.a.createElement(components["b" /* Box */], {
          width: "45%"
        }, react_default.a.createElement(components["h" /* Label */], {
          mt: 3,
          hasError: tokenError
        }, "Two factor token", tokenError && errors.token), react_default.a.createElement(components["g" /* Input */], {
          id: "token",
          hasError: tokenError,
          autoComplete: "off",
          value: values.token,
          onChange: handleChange,
          placeholder: "123 456"
        })), react_default.a.createElement(components["b" /* Box */], {
          ml: "2",
          width: "55%",
          textAlign: "center",
          pt: 3
        }, react_default.a.createElement(components["c" /* Button */], {
          target: "_blank",
          block: true,
          as: "a",
          size: "small",
          link: true,
          href: "https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DiOS&hl=en&oco=0"
        }, "Download Google Authenticator")));
      }

      return $tokenField;
    }
  }, {
    key: "renderInputFields",
    value: function renderInputFields(_ref2) {
      var values = _ref2.values,
          errors = _ref2.errors,
          touched = _ref2.touched,
          handleChange = _ref2.handleChange;
      var userError = Boolean(errors.user && touched.user);
      var passError = Boolean(errors.password && touched.password);
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components["h" /* Label */], {
        hasError: userError
      }, "USERNAME", userError && errors.user), react_default.a.createElement(components["g" /* Input */], {
        id: "user",
        fontSize: 0,
        autoFocus: true,
        value: values.user,
        hasError: userError,
        onChange: handleChange,
        placeholder: "User name",
        name: "user"
      }), react_default.a.createElement(components["h" /* Label */], {
        hasError: passError
      }, "Password", passError && errors.password), react_default.a.createElement(components["g" /* Input */], {
        id: "password",
        hasError: passError,
        value: values.password,
        onChange: handleChange,
        type: "password",
        name: "password",
        placeholder: "Password"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$attempt = this.props.attempt,
          isFailed = _this$props$attempt.isFailed,
          message = _this$props$attempt.message;
      return react_default.a.createElement("div", null, react_default.a.createElement(formik_esm["a" /* Formik */], {
        validate: this.onValidate,
        onSubmit: this.onLogin,
        initialValues: this.initialValues
      }, function (props) {
        return react_default.a.createElement(components["d" /* Card */], {
          as: "form",
          bg: "bgSecondary",
          my: "4",
          mx: "auto",
          width: "456px"
        }, react_default.a.createElement(components["b" /* Box */], {
          p: "5"
        }, react_default.a.createElement(components["m" /* Typography */].h3, {
          textAlign: "center",
          color: "light"
        }, "SIGN INTO TELEPORT"), isFailed && react_default.a.createElement(Alert["a" /* Danger */], null, " ", message, " "), _this2.renderInputFields(props), _this2.renderTokenField(props), _this2.renderLoginBtn(props.handleSubmit)), react_default.a.createElement("footer", null, _this2.renderSsoBtns()));
      }));
    }
  }]);

  return LoginForm;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/app/components/Login/LoginForm/index.jsx
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var Login_LoginForm = (LoginForm_LoginForm);
// EXTERNAL MODULE: ./src/app/components/DocumentTitle/index.js + 1 modules
var DocumentTitle = __webpack_require__("tOzQ");

// EXTERNAL MODULE: ./src/shared/components/Logo/index.js + 1 modules
var Logo = __webpack_require__("QmW9");

// EXTERNAL MODULE: ./src/shared/assets/images/teleport-medallion.svg
var teleport_medallion = __webpack_require__("BszX");
var teleport_medallion_default = /*#__PURE__*/__webpack_require__.n(teleport_medallion);

// CONCATENATED MODULE: ./src/app/components/Login/Login.jsx
function Login_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Login_typeof = function _typeof(obj) { return typeof obj; }; } else { Login_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Login_typeof(obj); }

function Login_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Login_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Login_createClass(Constructor, protoProps, staticProps) { if (protoProps) Login_defineProperties(Constructor.prototype, protoProps); if (staticProps) Login_defineProperties(Constructor, staticProps); return Constructor; }

function Login_possibleConstructorReturn(self, call) { if (call && (Login_typeof(call) === "object" || typeof call === "function")) { return call; } return Login_assertThisInitialized(self); }

function Login_getPrototypeOf(o) { Login_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Login_getPrototypeOf(o); }

function Login_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Login_setPrototypeOf(subClass, superClass); }

function Login_setPrototypeOf(o, p) { Login_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Login_setPrototypeOf(o, p); }

function Login_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/









var Login_Login =
/*#__PURE__*/
function (_React$Component) {
  Login_inherits(Login, _React$Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Login_classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Login_possibleConstructorReturn(this, (_getPrototypeOf2 = Login_getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Login_defineProperty(Login_assertThisInitialized(Login_assertThisInitialized(_this)), "onLoginWithSso", function (ssoProvider) {
      _this.props.onLoginWithSso(ssoProvider.name, ssoProvider.url);
    });

    Login_defineProperty(Login_assertThisInitialized(Login_assertThisInitialized(_this)), "onLoginWithU2f", function (username, password) {
      _this.props.onLoginWithU2f(username, password);
    });

    Login_defineProperty(Login_assertThisInitialized(Login_assertThisInitialized(_this)), "onLogin", function (username, password, token) {
      _this.props.onLogin(username, password, token);
    });

    return _this;
  }

  Login_createClass(Login, [{
    key: "render",
    value: function render() {
      var attempt = this.props.attempt;
      var authProviders = config["a" /* default */].getAuthProviders();
      var auth2faType = config["a" /* default */].getAuth2faType();
      return react_default.a.createElement("div", null, react_default.a.createElement(Logo["a" /* default */], {
        src: teleport_medallion_default.a
      }), react_default.a.createElement(Login_LoginForm, {
        authProviders: authProviders,
        auth2faType: auth2faType,
        onLoginWithSso: this.onLoginWithSso,
        onLoginWithU2f: this.onLoginWithU2f,
        onLogin: this.onLogin,
        attempt: attempt
      }));
    }
  }]);

  return Login;
}(react_default.a.Component);

function mapStoreToProps() {
  return {
    attempt: flux_user["a" /* getters */].loginAttemp
  };
}

function mapActionsToProps() {
  return {
    onLogin: actions["d" /* login */],
    onLoginWithU2f: actions["f" /* loginWithU2f */],
    onLoginWithSso: actions["e" /* loginWithSso */]
  };
}

/* harmony default export */ var components_Login_Login = (Object(DocumentTitle["b" /* withDocTitle */])("Login", Object(nuclear["b" /* connect */])(mapStoreToProps, mapActionsToProps)(Login_Login)));
// CONCATENATED MODULE: ./src/app/components/Login/index.jsx
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_Login = __webpack_exports__["a"] = (components_Login_Login);

/***/ }),

/***/ "FCiP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SITE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NAV_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_VERSION; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var SET_SITE_ID = 'TLPT_APP_SET_SITE_ID';
var ADD_NAV_ITEM = 'TLPT_APP_ADD_NAV_ITEM';
var SET_VERSION = 'TLPT_APP_SET_VERSION';

/***/ }),

/***/ "Hwhx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/app/services/browser.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
function detectPlatform() {
  var userAgent = window.navigator.userAgent;
  return {
    isWin: userAgent.indexOf('Windows') >= 0,
    isMac: userAgent.indexOf('Macintosh') >= 0,
    isLinux: userAgent.indexOf('Linux') >= 0
  };
}

function getUrlParameter(name) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) == name) {
      return decodeURIComponent(pair[1]);
    }
  }

  return '';
}
var platform = detectPlatform();
// EXTERNAL MODULE: ./src/app/components/DocumentTitle/index.js + 1 modules
var DocumentTitle = __webpack_require__("tOzQ");

// EXTERNAL MODULE: ./src/shared/components/Logo/index.js + 1 modules
var Logo = __webpack_require__("QmW9");

// EXTERNAL MODULE: ./src/shared/assets/images/teleport-medallion.svg
var teleport_medallion = __webpack_require__("BszX");
var teleport_medallion_default = /*#__PURE__*/__webpack_require__.n(teleport_medallion);

// EXTERNAL MODULE: ./src/app/components/Errors/index.js + 3 modules
var Errors = __webpack_require__("B30r");

// CONCATENATED MODULE: ./src/app/components/AppError/AppError.jsx
var _mapToCmpt;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






var AppErrorEnum = {
  FAILED_TO_LOGIN: 'login_failed',
  NOT_FOUND: 'not_found',
  ACCESS_DENIED: 'access_denied'
};
var mapToCmpt = (_mapToCmpt = {}, _defineProperty(_mapToCmpt, AppErrorEnum.FAILED_TO_LOGIN, Errors["c" /* LoginFailed */]), _defineProperty(_mapToCmpt, AppErrorEnum.NOT_FOUND, Errors["d" /* NotFound */]), _defineProperty(_mapToCmpt, AppErrorEnum.ACCESS_DENIED, Errors["a" /* AccessDenied */]), _mapToCmpt);
var AppError_AppError = function AppError(_ref) {
  var category = _ref.category,
      message = _ref.message;
  var Cmpt = mapToCmpt[category] || Errors["b" /* Failed */];
  return react_default.a.createElement("div", null, react_default.a.createElement(Logo["a" /* default */], {
    src: teleport_medallion_default.a
  }), react_default.a.createElement(Cmpt, {
    message: message
  }));
};
/* harmony default export */ var components_AppError_AppError = (Object(DocumentTitle["b" /* withDocTitle */])("Error", function (_ref2) {
  var match = _ref2.match;
  var category = match.params.type;
  var message = getUrlParameter('details');
  return react_default.a.createElement(AppError_AppError, {
    category: category,
    message: message
  });
}));
// CONCATENATED MODULE: ./src/app/components/AppError/index.js

/* harmony default export */ var components_AppError = __webpack_exports__["a"] = (components_AppError_AppError);

/***/ }),

/***/ "IMWB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Icon; });
/* unused harmony export AddUsers */
/* unused harmony export Amex */
/* unused harmony export Apartment */
/* unused harmony export Apple */
/* unused harmony export Archive */
/* unused harmony export SmallArrowDown */
/* unused harmony export SmallArrowUp */
/* unused harmony export ArrowDown */
/* unused harmony export ArrowLeft */
/* unused harmony export ArrowRight */
/* unused harmony export ArrowsVertical */
/* unused harmony export ArrowUp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitBucket; });
/* unused harmony export Bubble */
/* unused harmony export Calendar */
/* unused harmony export Camera */
/* unused harmony export CardView */
/* unused harmony export CardViewSmall */
/* unused harmony export CaretLeft */
/* unused harmony export CaretRight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CarrotDown; });
/* unused harmony export CarrotLeft */
/* unused harmony export CarrotRight */
/* unused harmony export CarrotSort */
/* unused harmony export CarrotUp */
/* unused harmony export Cash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CircleArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CircleArrowRight; });
/* unused harmony export ChevronCircleUp */
/* unused harmony export ChevronCircleDown */
/* unused harmony export ChevronCircleLeft */
/* unused harmony export ChevronCircleRight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CircleCheck; });
/* unused harmony export CircleCross */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CirclePause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CirclePlay; });
/* unused harmony export CircleStop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Cli; });
/* unused harmony export Clipboard */
/* unused harmony export ClipboardUser */
/* unused harmony export Cloud */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Cluster; });
/* unused harmony export Code */
/* unused harmony export Cog */
/* unused harmony export Contract */
/* unused harmony export CreditCard */
/* unused harmony export CreditCardAlt */
/* unused harmony export CreditCardAlt2 */
/* unused harmony export Cross */
/* unused harmony export Database */
/* unused harmony export Discover */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Download; });
/* unused harmony export Earth */
/* unused harmony export Edit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Ellipsis; });
/* unused harmony export Expand */
/* unused harmony export Facebook */
/* unused harmony export FacebookSquare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Github; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Google; });
/* unused harmony export Graph */
/* unused harmony export Home */
/* unused harmony export Label */
/* unused harmony export Lan */
/* unused harmony export LanAlt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Layers; });
/* unused harmony export License */
/* unused harmony export Link */
/* unused harmony export Linkedin */
/* unused harmony export Linux */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ListBullet; });
/* unused harmony export ListCheck */
/* unused harmony export ListView */
/* unused harmony export Lock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Magnifier; });
/* unused harmony export MapMarker */
/* unused harmony export MasterCard */
/* unused harmony export Mute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return OpenID; });
/* unused harmony export Paypal */
/* unused harmony export Pencil */
/* unused harmony export Phone */
/* unused harmony export Planet */
/* unused harmony export Play */
/* unused harmony export Power */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Profile; });
/* unused harmony export Server */
/* unused harmony export Shart */
/* unused harmony export ShieldCheck */
/* unused harmony export Signal */
/* unused harmony export SmartPhone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SortAsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SortDesc; });
/* unused harmony export Speed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return Spinner; });
/* unused harmony export Stripe */
/* unused harmony export Tablet */
/* unused harmony export Trash */
/* unused harmony export Twitter */
/* unused harmony export Unlock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return Upload; });
/* unused harmony export User */
/* unused harmony export Users */
/* unused harmony export VideoGame */
/* unused harmony export Visa */
/* unused harmony export VolumeUp */
/* unused harmony export Wifi */
/* unused harmony export Window */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Windows; });
/* unused harmony export Youtube */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vOnD");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("za5s");
/* harmony import */ var _assets_icomoon_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ec++");
/* harmony import */ var _assets_icomoon_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icomoon_style_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  transition: color .3s;\n  ", " ", " ", " ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].span(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__[/* space */ "o"], styled_system__WEBPACK_IMPORTED_MODULE_2__[/* width */ "q"], styled_system__WEBPACK_IMPORTED_MODULE_2__[/* color */ "d"], styled_system__WEBPACK_IMPORTED_MODULE_2__[/* fontSize */ "h"]);
Icon.displayName = "Icon";
Icon.defaultProps = {
  color: "light"
};

function makeFontIcon(name, iconClassName) {
  var iconClass = "icon ".concat(iconClassName);
  return function (_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        rest = _objectWithoutProperties(_ref, ["className"]);

    var classes = "".concat(iconClass, " ").concat(className);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, _extends({
      className: classes
    }, rest));
  };
}

var AddUsers = makeFontIcon('AddUsers', 'icon-users-plus');
var Amex = makeFontIcon('Amex', 'icon-cc-amex');
var Apartment = makeFontIcon('Apartment', 'icon-apartment');
var Apple = makeFontIcon('Apple', 'icon-apple');
var Archive = makeFontIcon('Archive', 'icon-archive2');
var SmallArrowDown = makeFontIcon('SmallArrowDown', 'icon-arrow_drop_down');
var SmallArrowUp = makeFontIcon('SmallArrowDown', 'icon-arrow_drop_up');
var ArrowDown = makeFontIcon('ArrowDown', 'icon-chevron-down');
var ArrowLeft = makeFontIcon('ArrowLeft', 'icon-chevron-left');
var ArrowRight = makeFontIcon('ArrowRight', 'icon-chevron-right');
var ArrowsVertical = makeFontIcon('ArrowsVertical', 'icon-chevrons-expand-vertical');
var ArrowUp = makeFontIcon('ArrowUp', 'icon-chevron-up');
var BitBucket = makeFontIcon('Bitbucket', 'icon-bitbucket');
var Bubble = makeFontIcon('Bubble', 'icon-bubble');
var Calendar = makeFontIcon('Calendar', 'icon-calendar-empty');
var Camera = makeFontIcon('Camera', 'icon-camera');
var CardView = makeFontIcon('CardView', 'icon-th-large');
var CardViewSmall = makeFontIcon('CardViewSmall', 'icon-th');
var CaretLeft = makeFontIcon('CaretLeft', 'icon-caret-left');
var CaretRight = makeFontIcon('CaretRight', 'icon-caret-right');
var CarrotDown = makeFontIcon('CarrotDown', 'icon-caret-down');
var CarrotLeft = makeFontIcon('CarrotLeft', 'icon-caret-left');
var CarrotRight = makeFontIcon('CarrotRight', 'icon-caret-right');
var CarrotSort = makeFontIcon('CarrotSort', 'icon-sort');
var CarrotUp = makeFontIcon('CarrotUp', 'icon-caret-up');
var Cash = makeFontIcon('Cash', 'icon-cash-dollar');
var CircleArrowLeft = makeFontIcon('CircleArrowLeft', 'icon-arrow-left-circle');
var CircleArrowRight = makeFontIcon('CircleArrowRight', 'icon-arrow-right-circle');
var ChevronCircleUp = makeFontIcon('ChevronCircleUp', 'icon-chevron-up-circle');
var ChevronCircleDown = makeFontIcon('ChevronCircleDown', 'icon-chevron-down-circle');
var ChevronCircleLeft = makeFontIcon('ChevronCircleLeft', 'icon-chevron-left-circle');
var ChevronCircleRight = makeFontIcon('ChevronCircleRight', 'icon-chevron-right-circle');
var CircleCheck = makeFontIcon('CircleCheck', 'icon-checkmark-circle');
var CircleCross = makeFontIcon('CircleCross', 'icon-cross-circle');
var CirclePause = makeFontIcon('CirclePause', 'icon-pause-circle');
var CirclePlay = makeFontIcon('CirclePlay', 'icon-play-circle');
var CircleStop = makeFontIcon('CircleStop', 'icon-stop-circle');
var Cli = makeFontIcon('Cli', 'icon-cli');
var Clipboard = makeFontIcon('Clipboard', 'icon-clipboard-text');
var ClipboardUser = makeFontIcon('ClipboardUser', 'icon-clipboard-user');
var Cloud = makeFontIcon('Cloud', 'icon-cloud');
var Close = makeFontIcon('Close', 'icon-close');
var Cluster = makeFontIcon('Cluster', 'icon-site-map');
var Code = makeFontIcon('Code', 'icon-code');
var Cog = makeFontIcon('Cog', 'icon-cog');
var Contract = makeFontIcon('Contract', 'icon-frame-contract');
var CreditCard = makeFontIcon('CreditCard', 'icon-credit-card1');
var CreditCardAlt = makeFontIcon('CreditCardAlt', 'icon-credit-card-alt');
var CreditCardAlt2 = makeFontIcon('CreditCardAlt2', 'icon-credit-card');
var Cross = makeFontIcon('Cross', 'icon-cross');
var Database = makeFontIcon('Database', 'icon-database');
var Discover = makeFontIcon('Discover', 'icon-cc-discover');
var Download = makeFontIcon('Download', 'icon-get_app');
var Earth = makeFontIcon('Earth', 'icon-earth');
var Edit = makeFontIcon('Edit', 'icon-pencil4');
var Ellipsis = makeFontIcon('Ellipsis', 'icon-ellipsis');
var Expand = makeFontIcon('Expand', 'icon-frame-expand');
var Facebook = makeFontIcon('Facebook', 'icon-facebook');
var FacebookSquare = makeFontIcon('FacebookSquare', 'icon-facebook2');
var Github = makeFontIcon('Github', 'icon-github');
var Google = makeFontIcon('Google', 'icon-google-plus');
var Graph = makeFontIcon('Graph', 'icon-graph');
var Home = makeFontIcon('Home', 'icon-home3');
var Label = makeFontIcon('Label', 'icon-label');
var Lan = makeFontIcon('Lan', 'icon-lan');
var LanAlt = makeFontIcon('LanAlt', 'icon-lan2');
var Layers = makeFontIcon('Layers', 'icon-layers');
var License = makeFontIcon('License', 'icon-license2');
var Link = makeFontIcon('Link', 'icon-link');
var Linkedin = makeFontIcon('Linkedin', 'icon-linkedin');
var Linux = makeFontIcon('Linux', 'icon-linux');
var ListBullet = makeFontIcon('ListBullet', 'icon-list4');
var ListCheck = makeFontIcon('ListCheck', 'icon-list3');
var ListView = makeFontIcon('ListView', 'icon-th-list');
var Lock = makeFontIcon('Lock', 'icon-lock');
var Magnifier = makeFontIcon('Magnifier', 'icon-magnifier');
var MapMarker = makeFontIcon('MapMarker', 'icon-map-marker');
var MasterCard = makeFontIcon('MasterCard', 'icon-cc-mastercard');
var Mute = makeFontIcon('Mute', 'icon-mute');
var OpenID = makeFontIcon('OpenID', 'icon-openid');
var Paypal = makeFontIcon('Paypal', 'icon-cc-paypal');
var Pencil = makeFontIcon('Pencil', 'icon-pencil');
var Phone = makeFontIcon('Phone', 'icon-telephone');
var Planet = makeFontIcon('Planet', 'icon-planet');
var Play = makeFontIcon('Play', 'icon-play');
var Power = makeFontIcon('Power', 'icon-power');
var Profile = makeFontIcon('Profile', 'icon-profile');
var Server = makeFontIcon('Server', 'icon-server');
var Shart = makeFontIcon('Shart', 'icon-chart-bars');
var ShieldCheck = makeFontIcon('ShieldCheck', 'icon-shield-check');
var Signal = makeFontIcon('Signal', 'icon-signal');
var SmartPhone = makeFontIcon('SmartPhone', 'icon-smartphone-embed');
var Sort = makeFontIcon('Sort', 'icon-chevrons-expand-vertical');
var SortAsc = makeFontIcon('SortAsc', 'icon-chevron-up');
var SortDesc = makeFontIcon('SortDesc', 'icon-chevron-down');
var Speed = makeFontIcon('Speed', 'icon-speed-fast');
var Spinner = makeFontIcon('Spinner', 'icon-spinner8');
var Stripe = makeFontIcon('Stripe', 'icon-cc-stripe');
var Tablet = makeFontIcon('Tablet', 'icon-tablet2');
var Trash = makeFontIcon('Trash', 'icon-trash2');
var Twitter = makeFontIcon('Twitter', 'icon-twitter');
var Unlock = makeFontIcon('Unlock', 'icon-unlock');
var Upload = makeFontIcon('Upload', 'icon-file_upload');
var User = makeFontIcon('User', 'icon-user');
var Users = makeFontIcon('Users', 'icon-users2');
var VideoGame = makeFontIcon('VideoGame', 'icon-videogame_asset');
var Visa = makeFontIcon('Visa', 'icon-cc-visa');
var VolumeUp = makeFontIcon('VolumeUp', 'icon-volume-high');
var Wifi = makeFontIcon('Wifi', 'icon-wifi');
var Window = makeFontIcon('Window', 'icon-window');
var Windows = makeFontIcon('Windows', 'icon-windows');
var Youtube = makeFontIcon('Youtube', 'icon-youtube');

/***/ }),

/***/ "JeNE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/app/reactor.js
var app_reactor = __webpack_require__("xSHT");

// EXTERNAL MODULE: ./node_modules/nuclear-js/dist/nuclear.js
var nuclear = __webpack_require__("L7e8");

// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.js
var immutable = __webpack_require__("JPcv");

// EXTERNAL MODULE: ./src/app/config.js
var config = __webpack_require__("LMli");

// EXTERNAL MODULE: ./src/app/flux/fileTransfer/actionTypes.jsx
var actionTypes = __webpack_require__("Bx5D");

// CONCATENATED MODULE: ./src/app/flux/fileTransfer/store.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var store_defaultStatus = {
  isFailed: false,
  isProcessing: false,
  isCompleted: false,
  error: ""
};
var File =
/*#__PURE__*/
function (_Record) {
  _inherits(File, _Record);

  function File(props) {
    _classCallCheck(this, File);

    props = _objectSpread({}, props, {
      id: new Date().getTime() + props.name
    });
    return _possibleConstructorReturn(this, _getPrototypeOf(File).call(this, props));
  }

  return File;
}(Object(immutable["Record"])(_objectSpread({
  id: '',
  url: '',
  name: '',
  isUpload: '',
  blob: null
}, store_defaultStatus)));
var store_FileTransferStore =
/*#__PURE__*/
function (_Record2) {
  _inherits(FileTransferStore, _Record2);

  function FileTransferStore(params) {
    _classCallCheck(this, FileTransferStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileTransferStore).call(this, params));
  }

  _createClass(FileTransferStore, [{
    key: "open",
    value: function open(_ref) {
      var isUpload = _ref.isUpload,
          siteId = _ref.siteId,
          serverId = _ref.serverId,
          login = _ref.login;
      return this.merge({
        isOpen: true,
        isUpload: isUpload,
        siteId: siteId,
        serverId: serverId,
        login: login
      });
    }
  }, {
    key: "close",
    value: function close() {
      return new FileTransferStore();
    }
  }, {
    key: "makeUrl",
    value: function makeUrl(location, filename) {
      var siteId = this.siteId,
          serverId = this.serverId,
          login = this.login;
      var url = config["a" /* default */].api.getScpUrl({
        siteId: siteId,
        serverId: serverId,
        login: login,
        location: location,
        filename: filename
      });
      return url;
    }
  }, {
    key: "removeFile",
    value: function removeFile(id) {
      var files = this.files.delete(id);
      return this.set('files', files);
    }
  }, {
    key: "addFile",
    value: function addFile(_ref2) {
      var location = _ref2.location,
          name = _ref2.name,
          blob = _ref2.blob,
          isUpload = _ref2.isUpload;
      var url = this.makeUrl(location, name);
      var file = new File({
        url: url,
        name: name,
        isUpload: isUpload,
        blob: blob
      });
      return this.update('files', function (files) {
        return files.set(file.id, file);
      });
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(_ref3) {
      var id = _ref3.id,
          rest = _objectWithoutProperties(_ref3, ["id"]);

      var file = this.files.get(id);

      var status = _objectSpread({}, store_defaultStatus, rest);

      file = file.merge(status);
      return this.update('files', function (files) {
        return files.set(id, file);
      });
    }
  }, {
    key: "isTransfering",
    value: function isTransfering() {
      return this.files.some(function (f) {
        return f.isProcessing === true;
      });
    }
  }]);

  return FileTransferStore;
}(Object(immutable["Record"])({
  isOpen: false,
  isUpload: false,
  siteId: '',
  serverId: '',
  login: '',
  files: new immutable["OrderedMap"]()
}));
/* harmony default export */ var store = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return new store_FileTransferStore();
  },
  initialize: function initialize() {
    this.on(actionTypes["c" /* OPEN */], function (state, json) {
      return state.open(json);
    });
    this.on(actionTypes["b" /* CLOSE */], function (state) {
      return state.close();
    });
    this.on(actionTypes["a" /* ADD */], function (state, json) {
      return state.addFile(json);
    });
    this.on(actionTypes["d" /* REMOVE */], function (state, id) {
      return state.removeFile(id);
    });
    this.on(actionTypes["e" /* UPDATE_STATUS */], function (state, json) {
      return state.updateStatus(json);
    });
  }
}));
// CONCATENATED MODULE: ./src/app/flux/fileTransfer/index.js
/* unused harmony export getFileTransfer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fileTransfer_register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getters; });
function fileTransfer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var STORE_NAME = 'tlpt_files';
function getFileTransfer() {
  return app_reactor["a" /* default */].evaluate([STORE_NAME]);
}
var fileTransfer_register = function register(reactor) {
  reactor.registerStores(fileTransfer_defineProperty({}, STORE_NAME, store));
};
var getters = {
  store: [STORE_NAME]
};

/***/ }),

/***/ "K0cP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/shared/components/utils/platform.js
function getPlatform() {
  var userAgent = window.navigator.userAgent;
  return {
    isWin: userAgent.indexOf('Windows') >= 0,
    isMac: userAgent.indexOf('Macintosh') >= 0,
    isLinux: userAgent.indexOf('Linux') >= 0
  };
}

var platform = getPlatform();
// CONCATENATED MODULE: ./src/shared/components/theme.js
/* unused harmony export font */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fonts; });
/* unused harmony export regular */
/* unused harmony export bold */
/* unused harmony export fontSizes */
/* unused harmony export fontWeights */
/* unused harmony export space */
/* unused harmony export minHeights */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* unused harmony export borders */

var fontMonoLinux = "\"Droid Sans Mono\", \"monospace\", monospace, \"Droid Sans Fallback\"";
var fontMonoWin = "Consolas, \"Courier New\", monospace";
var fontMonoMac = "Menlo, Monaco, \"Courier New\", monospace";
var font = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";";
var fonts = {
  sansSerif: font,
  mono: getMonoFont()
};
var regular = 400;
var bold = 600;
var fontSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 34];
var fontWeights = {
  regular: regular,
  bold: bold
};
var space = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
var minHeights = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
var colors = {
  accent: '#FA2A6A',
  dark: '#000',
  light: '#fff',
  subtle: '#CFD8DC',
  inverse: '#B0BEC5',
  highlight: '#E1F5FE',
  link: '#039BE5',
  terminal: '#28FE14',
  terminalDark: '#18381F',
  error: '#FF1744',
  errorDark: '#D41439',
  warning: '#FF9100',
  warningDark: '#F57C00',
  info: '#039BE5',
  infoDark: '#0288D1',
  success: '#00BFA5',
  successDark: '#26A69A',
  primary: '#00BFA5',
  primaryLight: '#00EAC3',
  primaryDark: '#008A7E',
  secondary: '#0C143D',
  secondaryLight: '#222C59',
  text: '#263238',
  bgSubtle: '#f8f9fa',
  bgError: '#FEE5ED',
  bgLight: '#FFFFFF',
  bgPrimary: '#0C143D',
  bgQuaternary: '#1B234A',
  bgSecondary: '#222C59',
  bgSuccess: '#00BFA5',
  bgTerminal: '#010B1C',
  bgTertiary: '#263266'
};
var borders = [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'];
var theme = {
  colors: colors,
  fontSizes: fontSizes,
  font: font,
  fontWeights: fontWeights,
  space: space,
  minHeights: space,
  borders: borders,
  regular: regular,
  bold: bold,
  // disabled media queries for style-system
  breakpoints: []
};
/* harmony default export */ var components_theme = __webpack_exports__["b"] = (theme);

function getMonoFont() {
  if (platform.isLinux) {
    return fontMonoLinux;
  }

  if (platform.isMac) {
    return fontMonoMac;
  }

  if (platform.isWin) {
    return fontMonoWin;
  }

  return fontMonoLinux;
}

/***/ }),

/***/ "KHiX":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
The MIT License (MIT)

Copyright (c) 2014 Michal Powaga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

/*global define */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("q1tI"), __webpack_require__("17x9"), __webpack_require__("fhzG")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (React, PropTypes, createReactClass) {
  /**
   * To prevent text selection while dragging.
   * http://stackoverflow.com/questions/5429827/how-can-i-prevent-text-element-selection-with-cursor-drag
   */
  function pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
  }

  function stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
  }
  /**
   * Spreads `count` values equally between `min` and `max`.
   */


  function linspace(min, max, count) {
    var range = (max - min) / (count - 1);
    var res = [];

    for (var i = 0; i < count; i++) {
      res.push(min + range * i);
    }

    return res;
  }

  function ensureArray(x) {
    return x == null ? [] : Array.isArray(x) ? x : [x];
  }

  function undoEnsureArray(x) {
    return x != null && x.length === 1 ? x[0] : x;
  }

  var isArray = Array.isArray || function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  }; // undoEnsureArray(ensureArray(x)) === x


  var ReactSlider = createReactClass({
    displayName: 'ReactSlider',
    propTypes: {
      /**
       * The minimum value of the slider.
       */
      min: PropTypes.number,

      /**
       * The maximum value of the slider.
       */
      max: PropTypes.number,

      /**
       * Value to be added or subtracted on each step the slider makes.
       * Must be greater than zero.
       * `max - min` should be evenly divisible by the step value.
       */
      step: PropTypes.number,

      /**
       * The minimal distance between any pair of handles.
       * Must be positive, but zero means they can sit on top of each other.
       */
      minDistance: PropTypes.number,

      /**
       * Determines the initial positions of the handles and the number of handles if the component has no children.
       *
       * If a number is passed a slider with one handle will be rendered.
       * If an array is passed each value will determine the position of one handle.
       * The values in the array must be sorted.
       * If the component has children, the length of the array must match the number of children.
       */
      defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

      /**
       * Like `defaultValue` but for [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
       */
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

      /**
       * Determines whether the slider moves horizontally (from left to right) or vertically (from top to bottom).
       */
      orientation: PropTypes.oneOf(['horizontal', 'vertical']),

      /**
       * The css class set on the slider node.
       */
      className: PropTypes.string,

      /**
       * The css class set on each handle node.
       *
       * In addition each handle will receive a numbered css class of the form `${handleClassName}-${i}`,
       * e.g. `handle-0`, `handle-1`, ...
       */
      handleClassName: PropTypes.string,

      /**
       * The css class set on the handle that is currently being moved.
       */
      handleActiveClassName: PropTypes.string,

      /**
       * If `true` bars between the handles will be rendered.
       */
      withBars: PropTypes.bool,

      /**
       * The css class set on the bars between the handles.
       * In addition bar fragment will receive a numbered css class of the form `${barClassName}-${i}`,
       * e.g. `bar-0`, `bar-1`, ...
       */
      barClassName: PropTypes.string,

      /**
       * If `true` the active handle will push other handles
       * within the constraints of `min`, `max`, `step` and `minDistance`.
       */
      pearling: PropTypes.bool,

      /**
       * If `true` the handles can't be moved.
       */
      disabled: PropTypes.bool,

      /**
       * Disables handle move when clicking the slider bar
       */
      snapDragDisabled: PropTypes.bool,

      /**
       * Inverts the slider.
       */
      invert: PropTypes.bool,

      /**
       * Callback called before starting to move a handle.
       */
      onBeforeChange: PropTypes.func,

      /**
       * Callback called on every value change.
       */
      onChange: PropTypes.func,

      /**
       * Callback called only after moving a handle has ended.
       */
      onAfterChange: PropTypes.func,

      /**
       *  Callback called when the the slider is clicked (handle or bars).
       *  Receives the value at the clicked position as argument.
       */
      onSliderClick: PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
      return {
        min: 0,
        max: 100,
        step: 1,
        minDistance: 0,
        defaultValue: 0,
        orientation: 'horizontal',
        className: 'slider',
        handleClassName: 'handle',
        handleActiveClassName: 'active',
        barClassName: 'bar',
        withBars: false,
        pearling: false,
        disabled: false,
        snapDragDisabled: false,
        invert: false
      };
    },
    getInitialState: function getInitialState() {
      var value = this._or(ensureArray(this.props.value), ensureArray(this.props.defaultValue)); // reused throughout the component to store results of iterations over `value`


      this.tempArray = value.slice(); // array for storing resize timeouts ids

      this.pendingResizeTimeouts = [];
      var zIndices = [];

      for (var i = 0; i < value.length; i++) {
        value[i] = this._trimAlignValue(value[i], this.props);
        zIndices.push(i);
      }

      return {
        index: -1,
        upperBound: 0,
        sliderLength: 0,
        value: value,
        zIndices: zIndices
      };
    },
    // Keep the internal `value` consistent with an outside `value` if present.
    // This basically allows the slider to be a controlled component.
    UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(newProps) {
      var value = this._or(ensureArray(newProps.value), this.state.value); // ensure the array keeps the same size as `value`


      this.tempArray = value.slice();

      for (var i = 0; i < value.length; i++) {
        this.state.value[i] = this._trimAlignValue(value[i], newProps);
      }

      if (this.state.value.length > value.length) this.state.value.length = value.length; // If an upperBound has not yet been determined (due to the component being hidden
      // during the mount event, or during the last resize), then calculate it now

      if (this.state.upperBound === 0) {
        this._resize();
      }
    },
    // Check if the arity of `value` or `defaultValue` matches the number of children (= number of custom handles).
    // If no custom handles are provided, just returns `value` if present and `defaultValue` otherwise.
    // If custom handles are present but neither `value` nor `defaultValue` are applicable the handles are spread out
    // equally.
    // TODO: better name? better solution?
    _or: function _or(value, defaultValue) {
      var count = React.Children.count(this.props.children);

      switch (count) {
        case 0:
          return value.length > 0 ? value : defaultValue;

        case value.length:
          return value;

        case defaultValue.length:
          return defaultValue;

        default:
          if (value.length !== count || defaultValue.length !== count) {
            window.console.warn(this.constructor.displayName + ": Number of values does not match number of children.");
          }

          return linspace(this.props.min, this.props.max, count);
      }
    },
    componentDidMount: function componentDidMount() {
      window.addEventListener('resize', this._handleResize);

      this._resize();
    },
    componentWillUnmount: function componentWillUnmount() {
      this._clearPendingResizeTimeouts();

      window.removeEventListener('resize', this._handleResize);
    },
    getValue: function getValue() {
      return undoEnsureArray(this.state.value);
    },
    _resize: function _resize() {
      var slider = this.slider;
      var handle = this.handle0;
      var rect = slider.getBoundingClientRect();

      var size = this._sizeKey();

      var sliderMax = rect[this._posMaxKey()];

      var sliderMin = rect[this._posMinKey()];

      this.setState({
        upperBound: slider[size] - handle[size],
        sliderLength: Math.abs(sliderMax - sliderMin),
        handleSize: handle[size],
        sliderStart: this.props.invert ? sliderMax : sliderMin
      });
    },
    _handleResize: function _handleResize() {
      // setTimeout of 0 gives element enough time to have assumed its new size if it is being resized
      var resizeTimeout = window.setTimeout(function () {
        // drop this timeout from pendingResizeTimeouts to reduce memory usage
        this.pendingResizeTimeouts.shift();

        this._resize();
      }.bind(this), 0);
      this.pendingResizeTimeouts.push(resizeTimeout);
    },
    // clear all pending timeouts to avoid error messages after unmounting
    _clearPendingResizeTimeouts: function _clearPendingResizeTimeouts() {
      do {
        var nextTimeout = this.pendingResizeTimeouts.shift();
        clearTimeout(nextTimeout);
      } while (this.pendingResizeTimeouts.length);
    },
    // calculates the offset of a handle in pixels based on its value.
    _calcOffset: function _calcOffset(value) {
      var range = this.props.max - this.props.min;

      if (range === 0) {
        return 0;
      }

      var ratio = (value - this.props.min) / range;
      return ratio * this.state.upperBound;
    },
    // calculates the value corresponding to a given pixel offset, i.e. the inverse of `_calcOffset`.
    _calcValue: function _calcValue(offset) {
      var ratio = offset / this.state.upperBound;
      return ratio * (this.props.max - this.props.min) + this.props.min;
    },
    _buildHandleStyle: function _buildHandleStyle(offset, i) {
      var style = {
        position: 'absolute',
        willChange: this.state.index >= 0 ? this._posMinKey() : '',
        zIndex: this.state.zIndices.indexOf(i) + 1
      };
      style[this._posMinKey()] = offset + 'px';
      return style;
    },
    _buildBarStyle: function _buildBarStyle(min, max) {
      var obj = {
        position: 'absolute',
        willChange: this.state.index >= 0 ? this._posMinKey() + ',' + this._posMaxKey() : ''
      };
      obj[this._posMinKey()] = min;
      obj[this._posMaxKey()] = max;
      return obj;
    },
    _getClosestIndex: function _getClosestIndex(pixelOffset) {
      var minDist = Number.MAX_VALUE;
      var closestIndex = -1;
      var value = this.state.value;
      var l = value.length;

      for (var i = 0; i < l; i++) {
        var offset = this._calcOffset(value[i]);

        var dist = Math.abs(pixelOffset - offset);

        if (dist < minDist) {
          minDist = dist;
          closestIndex = i;
        }
      }

      return closestIndex;
    },
    _calcOffsetFromPosition: function _calcOffsetFromPosition(position) {
      var pixelOffset = position - this.state.sliderStart;
      if (this.props.invert) pixelOffset = this.state.sliderLength - pixelOffset;
      pixelOffset -= this.state.handleSize / 2;
      return pixelOffset;
    },
    // Snaps the nearest handle to the value corresponding to `position` and calls `callback` with that handle's index.
    _forceValueFromPosition: function _forceValueFromPosition(position, callback) {
      var pixelOffset = this._calcOffsetFromPosition(position);

      var closestIndex = this._getClosestIndex(pixelOffset);

      var nextValue = this._trimAlignValue(this._calcValue(pixelOffset));

      var value = this.state.value.slice(); // Clone this.state.value since we'll modify it temporarily

      value[closestIndex] = nextValue; // Prevents the slider from shrinking below `props.minDistance`

      for (var i = 0; i < value.length - 1; i += 1) {
        if (value[i + 1] - value[i] < this.props.minDistance) return;
      }

      this.setState({
        value: value
      }, callback.bind(this, closestIndex));
    },
    _getMousePosition: function _getMousePosition(e) {
      return [e['page' + this._axisKey()], e['page' + this._orthogonalAxisKey()]];
    },
    _getTouchPosition: function _getTouchPosition(e) {
      var touch = e.touches[0];
      return [touch['page' + this._axisKey()], touch['page' + this._orthogonalAxisKey()]];
    },
    _getKeyDownEventMap: function _getKeyDownEventMap() {
      return {
        'keydown': this._onKeyDown,
        'focusout': this._onBlur
      };
    },
    _getMouseEventMap: function _getMouseEventMap() {
      return {
        'mousemove': this._onMouseMove,
        'mouseup': this._onMouseUp
      };
    },
    _getTouchEventMap: function _getTouchEventMap() {
      return {
        'touchmove': this._onTouchMove,
        'touchend': this._onTouchEnd
      };
    },
    // create the `keydown` handler for the i-th handle
    _createOnKeyDown: function _createOnKeyDown(i) {
      return function (e) {
        if (this.props.disabled) return;

        this._start(i);

        this._addHandlers(this._getKeyDownEventMap());

        pauseEvent(e);
      }.bind(this);
    },
    // create the `mousedown` handler for the i-th handle
    _createOnMouseDown: function _createOnMouseDown(i) {
      return function (e) {
        if (this.props.disabled) return;

        var position = this._getMousePosition(e);

        this._start(i, position[0]);

        this._addHandlers(this._getMouseEventMap());

        pauseEvent(e);
      }.bind(this);
    },
    // create the `touchstart` handler for the i-th handle
    _createOnTouchStart: function _createOnTouchStart(i) {
      return function (e) {
        if (this.props.disabled || e.touches.length > 1) return;

        var position = this._getTouchPosition(e);

        this.startPosition = position;
        this.isScrolling = undefined; // don't know yet if the user is trying to scroll

        this._start(i, position[0]);

        this._addHandlers(this._getTouchEventMap());

        stopPropagation(e);
      }.bind(this);
    },
    _addHandlers: function _addHandlers(eventMap) {
      for (var key in eventMap) {
        document.addEventListener(key, eventMap[key], false);
      }
    },
    _removeHandlers: function _removeHandlers(eventMap) {
      for (var key in eventMap) {
        document.removeEventListener(key, eventMap[key], false);
      }
    },
    _start: function _start(i, position) {
      var activeEl = document.activeElement;
      var handleRef = this['handle' + i]; // if activeElement is body window will lost focus in IE9

      if (activeEl && activeEl != document.body && activeEl != handleRef) {
        activeEl.blur && activeEl.blur();
      }

      this.hasMoved = false;

      this._fireChangeEvent('onBeforeChange');

      var zIndices = this.state.zIndices;
      zIndices.splice(zIndices.indexOf(i), 1); // remove wherever the element is

      zIndices.push(i); // add to end

      this.setState(function (prevState) {
        return {
          startValue: this.state.value[i],
          startPosition: position !== undefined ? position : prevState.startPosition,
          index: i,
          zIndices: zIndices
        };
      });
    },
    _onMouseUp: function _onMouseUp() {
      this._onEnd(this._getMouseEventMap());
    },
    _onTouchEnd: function _onTouchEnd() {
      this._onEnd(this._getTouchEventMap());
    },
    _onBlur: function _onBlur() {
      this._onEnd(this._getKeyDownEventMap());
    },
    _onEnd: function _onEnd(eventMap) {
      this._removeHandlers(eventMap);

      this.setState({
        index: -1
      }, this._fireChangeEvent.bind(this, 'onAfterChange'));
    },
    _onMouseMove: function _onMouseMove(e) {
      var position = this._getMousePosition(e);

      var diffPosition = this._getDiffPosition(position[0]);

      var newValue = this._getValueFromPosition(diffPosition);

      this._move(newValue);
    },
    _onTouchMove: function _onTouchMove(e) {
      if (e.touches.length > 1) return;

      var position = this._getTouchPosition(e);

      if (typeof this.isScrolling === 'undefined') {
        var diffMainDir = position[0] - this.startPosition[0];
        var diffScrollDir = position[1] - this.startPosition[1];
        this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
      }

      if (this.isScrolling) {
        this.setState({
          index: -1
        });
        return;
      }

      pauseEvent(e);

      var diffPosition = this._getDiffPosition(position[0]);

      var newValue = this._getValueFromPosition(diffPosition);

      this._move(newValue);
    },
    _onKeyDown: function _onKeyDown(e) {
      if (e.ctrlKey || e.shiftKey || e.altKey) return;

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          return this._moveDownOneStep();

        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          return this._moveUpOneStep();

        case "Home":
          return this._move(this.props.min);

        case "End":
          return this._move(this.props.max);

        default:
          return;
      }
    },
    _moveUpOneStep: function _moveUpOneStep() {
      var oldValue = this.state.value[this.state.index];
      var newValue = oldValue + this.props.step;

      this._move(Math.min(newValue, this.props.max));
    },
    _moveDownOneStep: function _moveDownOneStep() {
      var oldValue = this.state.value[this.state.index];
      var newValue = oldValue - this.props.step;

      this._move(Math.max(newValue, this.props.min));
    },
    _getValueFromPosition: function _getValueFromPosition(position) {
      var diffValue = position / (this.state.sliderLength - this.state.handleSize) * (this.props.max - this.props.min);
      return this._trimAlignValue(this.state.startValue + diffValue);
    },
    _getDiffPosition: function _getDiffPosition(position) {
      var diffPosition = position - this.state.startPosition;
      if (this.props.invert) diffPosition *= -1;
      return diffPosition;
    },
    _move: function _move(newValue) {
      this.hasMoved = true;
      var props = this.props;
      var state = this.state;
      var index = state.index;
      var value = state.value;
      var length = value.length;
      var oldValue = value[index];
      var minDistance = props.minDistance; // if "pearling" (= handles pushing each other) is disabled,
      // prevent the handle from getting closer than `minDistance` to the previous or next handle.

      if (!props.pearling) {
        if (index > 0) {
          var valueBefore = value[index - 1];

          if (newValue < valueBefore + minDistance) {
            newValue = valueBefore + minDistance;
          }
        }

        if (index < length - 1) {
          var valueAfter = value[index + 1];

          if (newValue > valueAfter - minDistance) {
            newValue = valueAfter - minDistance;
          }
        }
      }

      value[index] = newValue; // if "pearling" is enabled, let the current handle push the pre- and succeeding handles.

      if (props.pearling && length > 1) {
        if (newValue > oldValue) {
          this._pushSucceeding(value, minDistance, index);

          this._trimSucceeding(length, value, minDistance, props.max);
        } else if (newValue < oldValue) {
          this._pushPreceding(value, minDistance, index);

          this._trimPreceding(length, value, minDistance, props.min);
        }
      } // Normally you would use `shouldComponentUpdate`, but since the slider is a low-level component,
      // the extra complexity might be worth the extra performance.


      if (newValue !== oldValue) {
        this.setState({
          value: value
        }, this._fireChangeEvent.bind(this, 'onChange'));
      }
    },
    _pushSucceeding: function _pushSucceeding(value, minDistance, index) {
      var i, padding;

      for (i = index, padding = value[i] + minDistance; value[i + 1] != null && padding > value[i + 1]; i++, padding = value[i] + minDistance) {
        value[i + 1] = this._alignValue(padding);
      }
    },
    _trimSucceeding: function _trimSucceeding(length, nextValue, minDistance, max) {
      for (var i = 0; i < length; i++) {
        var padding = max - i * minDistance;

        if (nextValue[length - 1 - i] > padding) {
          nextValue[length - 1 - i] = padding;
        }
      }
    },
    _pushPreceding: function _pushPreceding(value, minDistance, index) {
      var i, padding;

      for (i = index, padding = value[i] - minDistance; value[i - 1] != null && padding < value[i - 1]; i--, padding = value[i] - minDistance) {
        value[i - 1] = this._alignValue(padding);
      }
    },
    _trimPreceding: function _trimPreceding(length, nextValue, minDistance, min) {
      for (var i = 0; i < length; i++) {
        var padding = min + i * minDistance;

        if (nextValue[i] < padding) {
          nextValue[i] = padding;
        }
      }
    },
    _axisKey: function _axisKey() {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return 'X';
      if (orientation === 'vertical') return 'Y';
    },
    _orthogonalAxisKey: function _orthogonalAxisKey() {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return 'Y';
      if (orientation === 'vertical') return 'X';
    },
    _posMinKey: function _posMinKey() {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return this.props.invert ? 'right' : 'left';
      if (orientation === 'vertical') return this.props.invert ? 'bottom' : 'top';
    },
    _posMaxKey: function _posMaxKey() {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return this.props.invert ? 'left' : 'right';
      if (orientation === 'vertical') return this.props.invert ? 'top' : 'bottom';
    },
    _sizeKey: function _sizeKey() {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return 'clientWidth';
      if (orientation === 'vertical') return 'clientHeight';
    },
    _trimAlignValue: function _trimAlignValue(val, props) {
      return this._alignValue(this._trimValue(val, props), props);
    },
    _trimValue: function _trimValue(val, props) {
      props = props || this.props;
      if (val <= props.min) val = props.min;
      if (val >= props.max) val = props.max;
      return val;
    },
    _alignValue: function _alignValue(val, props) {
      props = props || this.props;
      var valModStep = (val - props.min) % props.step;
      var alignValue = val - valModStep;

      if (Math.abs(valModStep) * 2 >= props.step) {
        alignValue += valModStep > 0 ? props.step : -props.step;
      }

      return parseFloat(alignValue.toFixed(5));
    },
    _renderHandle: function _renderHandle(style, child, i) {
      var self = this;
      var className = this.props.handleClassName + ' ' + (this.props.handleClassName + '-' + i) + ' ' + (this.state.index === i ? this.props.handleActiveClassName : '');
      return React.createElement('div', {
        ref: function ref(r) {
          self['handle' + i] = r;
        },
        key: 'handle' + i,
        className: className,
        style: style,
        onMouseDown: this._createOnMouseDown(i),
        onTouchStart: this._createOnTouchStart(i),
        onFocus: this._createOnKeyDown(i),
        tabIndex: 0,
        role: "slider",
        "aria-valuenow": this.state.value[i],
        "aria-valuemin": this.props.min,
        "aria-valuemax": this.props.max,
        "aria-label": isArray(this.props.ariaLabel) ? this.props.ariaLabel[i] : this.props.ariaLabel,
        "aria-valuetext": this.props.ariaValuetext
      }, child);
    },
    _renderHandles: function _renderHandles(offset) {
      var length = offset.length;
      var styles = this.tempArray;

      for (var i = 0; i < length; i++) {
        styles[i] = this._buildHandleStyle(offset[i], i);
      }

      var res = [];
      var renderHandle = this._renderHandle;

      if (React.Children.count(this.props.children) > 0) {
        React.Children.forEach(this.props.children, function (child, i) {
          res[i] = renderHandle(styles[i], child, i);
        });
      } else {
        for (i = 0; i < length; i++) {
          res[i] = renderHandle(styles[i], null, i);
        }
      }

      return res;
    },
    _renderBar: function _renderBar(i, offsetFrom, offsetTo) {
      var self = this;
      return React.createElement('div', {
        key: 'bar' + i,
        ref: function ref(r) {
          self['bar' + i] = r;
        },
        className: this.props.barClassName + ' ' + this.props.barClassName + '-' + i,
        style: this._buildBarStyle(offsetFrom, this.state.upperBound - offsetTo)
      });
    },
    _renderBars: function _renderBars(offset) {
      var bars = [];
      var lastIndex = offset.length - 1;
      bars.push(this._renderBar(0, 0, offset[0]));

      for (var i = 0; i < lastIndex; i++) {
        bars.push(this._renderBar(i + 1, offset[i], offset[i + 1]));
      }

      bars.push(this._renderBar(lastIndex + 1, offset[lastIndex], this.state.upperBound));
      return bars;
    },
    _onSliderMouseDown: function _onSliderMouseDown(e) {
      if (this.props.disabled) return;
      this.hasMoved = false;

      if (!this.props.snapDragDisabled) {
        var position = this._getMousePosition(e);

        this._forceValueFromPosition(position[0], function (i) {
          this._start(i, position[0]);

          this._fireChangeEvent('onChange');

          this._addHandlers(this._getMouseEventMap());
        }.bind(this));
      }

      pauseEvent(e);
    },
    _onSliderClick: function _onSliderClick(e) {
      if (this.props.disabled) return;

      if (this.props.onSliderClick && !this.hasMoved) {
        var position = this._getMousePosition(e);

        var valueAtPos = this._trimAlignValue(this._calcValue(this._calcOffsetFromPosition(position[0])));

        this.props.onSliderClick(valueAtPos);
      }
    },
    _fireChangeEvent: function _fireChangeEvent(event) {
      if (this.props[event]) {
        this.props[event](undoEnsureArray(this.state.value));
      }
    },
    render: function render() {
      var self = this;
      var state = this.state;
      var props = this.props;
      var offset = this.tempArray;
      var value = state.value;
      var l = value.length;

      for (var i = 0; i < l; i++) {
        offset[i] = this._calcOffset(value[i], i);
      }

      var bars = props.withBars ? this._renderBars(offset) : null;

      var handles = this._renderHandles(offset);

      return React.createElement('div', {
        ref: function ref(r) {
          self.slider = r;
        },
        style: {
          position: 'relative'
        },
        className: props.className + (props.disabled ? ' disabled' : ''),
        onMouseDown: this._onSliderMouseDown,
        onClick: this._onSliderClick
      }, bars, handles);
    }
  });
  return ReactSlider;
});

/***/ }),

/***/ "KdfW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysEnum; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var KeysEnum = {
  TOKEN: 'grv_teleport_token',
  TOKEN_RENEW: 'grv_teleport_token_renew'
};
var storage = {
  clear: function clear() {
    window.localStorage.clear();
  },
  subscribe: function subscribe(fn) {
    window.addEventListener('storage', fn);
  },
  unsubscribe: function unsubscribe(fn) {
    window.removeEventListener('storage', fn);
  },
  setBearerToken: function setBearerToken(token) {
    window.localStorage.setItem(KeysEnum.TOKEN, JSON.stringify(token));
  },
  getBearerToken: function getBearerToken() {
    var item = window.localStorage.getItem(KeysEnum.TOKEN);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  },
  broadcast: function broadcast(messageType, messageBody) {
    window.localStorage.setItem(messageType, messageBody);
    window.localStorage.removeItem(messageType);
  }
};
/* harmony default export */ __webpack_exports__["b"] = (storage);

/***/ }),

/***/ "LMli":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l1PF");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gOk0");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var baseUrl = Object(_services_utils__WEBPACK_IMPORTED_MODULE_2__[/* isTestEnv */ "a"])() ? 'localhost' : window.location.origin;
var cfg = {
  baseUrl: baseUrl,
  helpUrl: 'https://gravitational.com/teleport/docs/quickstart/',
  maxSessionLoadSize: 50,
  displayDateFormat: 'MM/DD/YYYY HH:mm:ss',
  auth: {},
  canJoinSessions: true,
  routes: {
    app: '/web',
    login: '/web/login',
    nodes: '/web/nodes',
    cluster: '/web/cluster/:clusterId',
    clusterNodes: '/web/cluster/:clusterId',
    clusterSessions: '/web/cluster/:clusterId/sessions',
    currentSession: '/web/cluster/:siteId/sessions/:sid',
    sessions: '/web/sessions',
    newUser: '/web/newuser/:inviteToken',
    error: '/web/msg/error/:type?',
    successfulLogin: '/web/msg/info/login_success',
    terminal: '/web/cluster/:siteId/node/:serverId/:login/:sid?',
    player: '/web/cluster/:siteId/player/sid/:sid',
    webApi: '/v1/webapi/*',
    settingsBase: '/web/settings',
    settingsAccount: '/web/settings/account'
  },
  api: {
    scp: '/v1/webapi/sites/:siteId/nodes/:serverId/:login/scp?location=:location&filename=:filename',
    ssoOidc: '/v1/webapi/oidc/login/web?redirect_url=:redirect&connector_id=:providerName',
    ssoSaml: '/v1/webapi/saml/sso?redirect_url=:redirect&connector_id=:providerName',
    renewTokenPath: '/v1/webapi/sessions/renew',
    sessionPath: '/v1/webapi/sessions',
    userContextPath: '/v1/webapi/user/context',
    userStatusPath: '/v1/webapi/user/status',
    invitePath: '/v1/webapi/users/invites/:inviteToken',
    createUserPath: '/v1/webapi/users',
    changeUserPasswordPath: '/v1/webapi/users/password',
    u2fCreateUserChallengePath: '/v1/webapi/u2f/signuptokens/:inviteToken',
    u2fCreateUserPath: '/v1/webapi/u2f/users',
    u2fSessionChallengePath: '/v1/webapi/u2f/signrequest',
    u2fChangePassChallengePath: '/v1/webapi/u2f/password/changerequest',
    u2fChangePassPath: '/v1/webapi/u2f/password',
    u2fSessionPath: '/v1/webapi/u2f/sessions',
    sitesBasePath: '/v1/webapi/sites',
    sitePath: '/v1/webapi/sites/:siteId',
    nodesPath: '/v1/webapi/sites/:siteId/nodes',
    siteSessionPath: '/v1/webapi/sites/:siteId/sessions',
    sessionEventsPath: '/v1/webapi/sites/:siteId/sessions/:sid/events',
    siteEventSessionFilterPath: "/v1/webapi/sites/:siteId/sessions",
    siteEventsFilterPath: "/v1/webapi/sites/:siteId/events?event=session.start&event=session.end&from=:start&to=:end",
    ttyWsAddr: ':fqdm/v1/webapi/sites/:cluster/connect?access_token=:token&params=:params',
    getSiteUrl: function getSiteUrl(siteId) {
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.sitePath, {
        siteId: siteId
      });
    },
    getSiteNodesUrl: function getSiteNodesUrl() {
      var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-current-';
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.nodesPath, {
        siteId: siteId
      });
    },
    getSiteSessionUrl: function getSiteSessionUrl() {
      var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-current-';
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.siteSessionPath, {
        siteId: siteId
      });
    },
    getSsoUrl: function getSsoUrl(providerUrl, providerName, redirect) {
      return cfg.baseUrl + Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(providerUrl, {
        redirect: redirect,
        providerName: providerName
      });
    },
    getSiteEventsFilterUrl: function getSiteEventsFilterUrl(_ref) {
      var start = _ref.start,
          end = _ref.end,
          siteId = _ref.siteId;
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.siteEventsFilterPath, {
        start: start,
        end: end,
        siteId: siteId
      });
    },
    getSessionEventsUrl: function getSessionEventsUrl(_ref2) {
      var sid = _ref2.sid,
          siteId = _ref2.siteId;
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.sessionEventsPath, {
        sid: sid,
        siteId: siteId
      });
    },
    getScpUrl: function getScpUrl(_ref3) {
      var siteId = _ref3.siteId,
          serverId = _ref3.serverId,
          login = _ref3.login,
          location = _ref3.location,
          filename = _ref3.filename;
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.scp, {
        siteId: siteId,
        serverId: serverId,
        login: login,
        location: location,
        filename: filename
      });
    },
    getFetchSessionsUrl: function getFetchSessionsUrl(siteId) {
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.siteEventSessionFilterPath, {
        siteId: siteId
      });
    },
    getFetchSessionUrl: function getFetchSessionUrl(_ref4) {
      var sid = _ref4.sid,
          siteId = _ref4.siteId;
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.siteSessionPath + '/:sid', {
        sid: sid,
        siteId: siteId
      });
    },
    getInviteUrl: function getInviteUrl(inviteToken) {
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.invitePath, {
        inviteToken: inviteToken
      });
    },
    getU2fCreateUserChallengeUrl: function getU2fCreateUserChallengeUrl(inviteToken) {
      return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.api.u2fCreateUserChallengePath, {
        inviteToken: inviteToken
      });
    }
  },
  getPlayerUrl: function getPlayerUrl(_ref5) {
    var siteId = _ref5.siteId,
        sid = _ref5.sid;
    return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.routes.player, {
      siteId: siteId,
      sid: sid
    });
  },
  getTerminalLoginUrl: function getTerminalLoginUrl(_ref6) {
    var siteId = _ref6.siteId,
        serverId = _ref6.serverId,
        login = _ref6.login,
        sid = _ref6.sid;
    return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.routes.terminal, {
      siteId: siteId,
      serverId: serverId,
      login: login,
      sid: sid
    });
  },
  getCurrentSessionRouteUrl: function getCurrentSessionRouteUrl(_ref7) {
    var sid = _ref7.sid,
        siteId = _ref7.siteId;
    return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.routes.currentSession, {
      sid: sid,
      siteId: siteId
    });
  },
  getAuthProviders: function getAuthProviders() {
    return cfg.auth && cfg.auth.providers ? cfg.auth.providers : [];
  },
  getAuth2faType: function getAuth2faType() {
    return cfg.auth ? cfg.auth.second_factor : null;
  },
  getU2fAppId: function getU2fAppId() {
    return cfg.auth && cfg.auth.u2f ? cfg.auth.u2f.app_id : null;
  },
  getWsHostName: function getWsHostName() {
    var prefix = location.protocol === 'https:' ? 'wss://' : 'ws://';
    var hostport = location.hostname + (location.port ? ':' + location.port : '');
    return "".concat(prefix).concat(hostport);
  },
  init: function init() {
    var newConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])(this, newConfig);
  },
  getClusterUrl: function getClusterUrl(clusterId) {
    return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.routes.cluster, {
      clusterId: clusterId
    });
  },
  getClusterNodesUrl: function getClusterNodesUrl(clusterId) {
    return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.routes.clusterNodes, {
      clusterId: clusterId
    });
  },
  getClusterSessionsUrl: function getClusterSessionsUrl(clusterId) {
    return Object(react_router__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cfg.routes.clusterSessions, {
      clusterId: clusterId
    });
  },
  stripOptionalParams: function stripOptionalParams(pattern) {
    return pattern.replace(/\(.*\)/, '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (cfg);

/***/ }),

/***/ "LU+r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Z9Rw");
/* harmony import */ var app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LMli");
/* harmony import */ var u2f_api_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KDbw");
/* harmony import */ var u2f_api_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(u2f_api_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var auth = {
  login: function login(email, password, token) {
    var data = {
      user: email,
      pass: password,
      second_factor_token: token
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.sessionPath, data, false);
  },
  loginWithU2f: function loginWithU2f(name, password) {
    var data = {
      user: name,
      pass: password
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.u2fSessionChallengePath, data, false).then(function (data) {
      var promise = new Promise(function (resolve, reject) {
        window.u2f.sign(data.appId, data.challenge, [data], function (res) {
          if (res.errorCode) {
            var err = auth._getU2fErr(res.errorCode);

            reject(err);
            return;
          }

          var response = {
            user: name,
            u2f_sign_response: res
          };
          _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.u2fSessionPath, response, false).then(function (data) {
            resolve(data);
          }).catch(function (data) {
            reject(data);
          });
        });
      });
      return promise;
    });
  },
  acceptInvite: function acceptInvite(name, password, token, inviteToken) {
    var data = {
      invite_token: inviteToken,
      pass: password,
      second_factor_token: token,
      user: name
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.createUserPath, data, false);
  },
  acceptInviteWithU2f: function acceptInviteWithU2f(name, password, inviteToken) {
    return _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.getU2fCreateUserChallengeUrl(inviteToken)).then(function (data) {
      return new Promise(function (resolve, reject) {
        window.u2f.register(data.appId, [data], [], function (res) {
          if (res.errorCode) {
            var err = auth._getU2fErr(res.errorCode);

            reject(err);
            return;
          }

          var response = {
            user: name,
            pass: password,
            u2f_register_response: res,
            invite_token: inviteToken
          };
          _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.u2fCreateUserPath, response, false).then(function (data) {
            resolve(data);
          }).catch(function (err) {
            reject(err);
          });
        });
      });
    });
  },
  changePassword: function changePassword(oldPass, newPass, token) {
    var data = {
      old_password: window.btoa(oldPass),
      new_password: window.btoa(newPass),
      second_factor_token: token
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].put(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.changeUserPasswordPath, data);
  },
  changePasswordWithU2f: function changePasswordWithU2f(oldPass, newPass) {
    var data = {
      user: name,
      pass: oldPass
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.u2fChangePassChallengePath, data).then(function (data) {
      return new Promise(function (resolve, reject) {
        window.u2f.sign(data.appId, data.challenge, [data], function (res) {
          if (res.errorCode) {
            var err = auth._getU2fErr(res.errorCode);

            reject(err);
            return;
          }

          var data = {
            new_password: window.btoa(newPass),
            u2f_sign_response: res
          };
          _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].put(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.changeUserPasswordPath, data).then(function (data) {
            resolve(data);
          }).catch(function (data) {
            reject(data);
          });
        });
      });
    });
  },
  _getU2fErr: function _getU2fErr(errorCode) {
    var errorMsg = ""; // lookup error message...

    for (var msg in window.u2f.ErrorCodes) {
      if (window.u2f.ErrorCodes[msg] == errorCode) {
        errorMsg = msg;
      }
    }

    var message = "Please check your U2F settings, make sure it is plugged in and you are using the supported browser.\nU2F error: ".concat(errorMsg);
    return {
      responseJSON: {
        message: message
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (auth);

/***/ }),

/***/ "LYgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRYING_TO_SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRYING_TO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCHING_INVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRYING_TO_INIT_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRYING_TO_INIT_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRYING_TO_CHANGE_PSW; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var TRYING_TO_SIGN_UP = 'TRYING_TO_SIGN_UP';
var TRYING_TO_LOGIN = 'TRYING_TO_LOGIN';
var FETCHING_INVITE = 'FETCHING_INVITE';
var TRYING_TO_INIT_APP = 'TRYING_TO_INIT_APP';
var TRYING_TO_INIT_SETTINGS = 'TRYING_TO_INIT_SETTINGS';
var TRYING_TO_CHANGE_PSW = 'TRYING_TO_CHANGE_PSW';

/***/ }),

/***/ "LcJ4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// CONCATENATED MODULE: ./src/shared/components/Alert/Alert.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  box-sizing: border-box;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .12),  0 2px 2px rgba(0, 0, 0, .24);\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0 0 16px 0;\n  min-height: 56px;\n  padding: 16px;\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n  word-break: break-all;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var alertType = function alertType(props) {
  var theme = props.theme,
      status = props.status;

  switch (status) {
    case 'danger':
      return {
        background: theme.colors.error
      };

    case 'info':
      return {
        background: theme.colors.info
      };

    case 'warning':
      return {
        background: theme.colors.warning
      };

    case 'success':
      return {
        background: theme.colors.success
      };

    default:
      return {
        background: theme.colors.error
      };
  }
};

var Alert = styled_components_browser_esm["c" /* default */].div(_templateObject(), index_esm["d" /* color */], index_esm["o" /* space */], alertType);
var numberStringOrArray = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.array]);
Alert.propTypes = {
  status: prop_types_default.a.oneOf(['danger', 'info', 'warning', 'success']),
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray
};
Alert.defaultProps = {
  color: 'light',
  status: 'danger',
  theme: theme["b" /* default */]
};
Alert.displayName = 'Alert';
/* harmony default export */ var Alert_Alert = (Alert);
var Alert_Danger = function Danger(props) {
  return react_default.a.createElement(Alert, _extends({
    status: "danger"
  }, props));
};
var Alert_Info = function Info(props) {
  return react_default.a.createElement(Alert, _extends({
    status: "info"
  }, props));
};
var Alert_Warning = function Warning(props) {
  return react_default.a.createElement(Alert, _extends({
    status: "warning"
  }, props));
};
var Alert_Success = function Success(props) {
  return react_default.a.createElement(Alert, _extends({
    status: "Success"
  }, props));
};
// CONCATENATED MODULE: ./src/shared/components/Alert/index.jsx
/* concated harmony reexport Danger */__webpack_require__.d(__webpack_exports__, "a", function() { return Alert_Danger; });
/* concated harmony reexport Info */__webpack_require__.d(__webpack_exports__, "b", function() { return Alert_Info; });
/* unused concated harmony import Warning */
/* concated harmony reexport Success */__webpack_require__.d(__webpack_exports__, "c", function() { return Alert_Success; });

/* harmony default export */ var components_Alert = __webpack_exports__["d"] = (Alert_Alert);


/***/ }),

/***/ "PVWJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackRec; });
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tGXY");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JPcv");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var TrackRec = new immutable__WEBPACK_IMPORTED_MODULE_2__["Record"]({
  isProcessing: false,
  isFailed: false,
  isSuccess: false,
  message: ''
});
/* harmony default export */ __webpack_exports__["b"] = (Object(nuclear_js__WEBPACK_IMPORTED_MODULE_0__["Store"])({
  getInitialState: function getInitialState() {
    return Object(nuclear_js__WEBPACK_IMPORTED_MODULE_0__["toImmutable"])({});
  },
  initialize: function initialize() {
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* START */ "c"], start);
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FAIL */ "b"], fail);
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"], success);
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CLEAR */ "a"], clear);
  }
}));

function start(state, request) {
  return state.set(request.type, new TrackRec({
    isProcessing: true
  }));
}

function fail(state, request) {
  return state.set(request.type, new TrackRec({
    isFailed: true,
    message: request.message
  }));
}

function success(state, request) {
  return state.set(request.type, new TrackRec({
    isSuccess: true,
    message: request.message
  }));
}

function clear(state, request) {
  return state.set(request.type, new TrackRec());
}

/***/ }),

/***/ "PxPv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TLPT_TERMINAL_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TLPT_TERMINAL_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TLPT_TERMINAL_SET_STATUS; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var TLPT_TERMINAL_INIT = 'TLPT_TERMINAL_INIT';
var TLPT_TERMINAL_CLOSE = 'TLPT_TERMINAL_CLOSE';
var TLPT_TERMINAL_SET_STATUS = 'TLPT_TERMINAL_SET_STATUS';

/***/ }),

/***/ "QmW9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/shared/components/Logo/Logo.jsx
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  outline: none;\n  margin: 32px auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Logo_Logo = function Logo(_ref) {
  var src = _ref.src;
  return react_default.a.createElement(StyledImg, {
    src: src
  });
};

Logo_Logo.propTypes = {
  /** Image Src */
  src: prop_types_default.a.string
};
Logo_Logo.displayName = 'Logo';
/* harmony default export */ var components_Logo_Logo = (Logo_Logo);
var StyledImg = styled_components_browser_esm["c" /* default */].img(_templateObject());
// CONCATENATED MODULE: ./src/shared/components/Logo/index.js

/* harmony default export */ var components_Logo = __webpack_exports__["a"] = (components_Logo_Logo);

/***/ }),

/***/ "RnhZ":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S+Ht":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getters; });
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSHT");
/* harmony import */ var app_flux_status_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oHDm");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var STORE_NAME = 'tlpt_user';
function getUser() {
  return app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].evaluate([STORE_NAME]);
}
var invite = [['tlpt_user_invite'], function (invite) {
  return invite;
}];
var userName = [STORE_NAME, 'name'];
var getters = {
  userName: userName,
  invite: invite,
  pswChangeAttempt: app_flux_status_getters__WEBPACK_IMPORTED_MODULE_1__[/* changePasswordAttempt */ "a"],
  loginAttemp: app_flux_status_getters__WEBPACK_IMPORTED_MODULE_1__[/* loginAttempt */ "d"],
  attemp: app_flux_status_getters__WEBPACK_IMPORTED_MODULE_1__[/* signupAttempt */ "e"],
  fetchingInvite: app_flux_status_getters__WEBPACK_IMPORTED_MODULE_1__[/* fetchInviteAttempt */ "b"]
};

/***/ }),

/***/ "SgOX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getters; });
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSHT");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JPcv");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_flux_status_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oHDm");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FCiP");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var STORE_NAME = 'tlpt';

var AppRec =
/*#__PURE__*/
function (_Record) {
  _inherits(AppRec, _Record);

  function AppRec(props) {
    _classCallCheck(this, AppRec);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppRec).call(this, props));
  }

  _createClass(AppRec, [{
    key: "setSiteId",
    value: function setSiteId(siteId) {
      return this.set('siteId', siteId);
    }
  }, {
    key: "setVersion",
    value: function setVersion(version) {
      return this.set('version', version);
    }
  }, {
    key: "getClusterName",
    value: function getClusterName() {
      return this.get('siteId');
    }
  }, {
    key: "getNavItems",
    value: function getNavItems() {
      return this.navItems.toJS();
    }
  }, {
    key: "addNavItem",
    value: function addNavItem(navItem) {
      return this.set('navItems', this.navItems.push(navItem));
    }
  }]);

  return AppRec;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Record"])({
  version: '',
  siteId: null,
  navItems: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"]()
}));

function getStore() {
  return app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].evaluate(['tlpt']);
}
var store = Object(nuclear_js__WEBPACK_IMPORTED_MODULE_1__["Store"])({
  getInitialState: function getInitialState() {
    return new AppRec();
  },
  initialize: function initialize() {
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_4__[/* SET_SITE_ID */ "b"], function (state, siteId) {
      return state.setSiteId(siteId);
    });
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_4__[/* SET_VERSION */ "c"], function (state, version) {
      return state.setVersion(version);
    });
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_4__[/* ADD_NAV_ITEM */ "a"], function (state, navItem) {
      return state.addNavItem(navItem);
    });
  }
});
var register = function register(reactor) {
  reactor.registerStores(_defineProperty({}, STORE_NAME, store));
};
var getters = {
  store: [STORE_NAME],
  initAttempt: app_flux_status_getters__WEBPACK_IMPORTED_MODULE_3__[/* initAppAttempt */ "c"],
  siteId: [STORE_NAME, 'siteId']
};

/***/ }),

/***/ "SwYS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SshHistoryRec */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getters; });
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JPcv");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gMNw");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var STORE_NAME = 'tlpt_ssh_history';
var SshHistoryRec =
/*#__PURE__*/
function (_Record) {
  _inherits(SshHistoryRec, _Record);

  function SshHistoryRec(params) {
    _classCallCheck(this, SshHistoryRec);

    return _possibleConstructorReturn(this, _getPrototypeOf(SshHistoryRec).call(this, params));
  }

  _createClass(SshHistoryRec, [{
    key: "getPrevLogins",
    value: function getPrevLogins(siteId) {
      return this.clusterLogins.get(siteId) || [];
    }
  }, {
    key: "addLoginString",
    value: function addLoginString(_ref) {
      var login = _ref.login,
          serverId = _ref.serverId,
          siteId = _ref.siteId;
      var logins = this.getIn(['clusterLogins', siteId]);

      if (!logins) {
        logins = [];
      }

      var loginStr = "".concat(login, "@").concat(serverId);
      var exists = logins.some(function (i) {
        return i === loginStr;
      });

      if (exists) {
        return this;
      }

      logins.unshift(loginStr);
      return this.setIn(['clusterLogins', siteId], logins);
    }
  }]);

  return SshHistoryRec;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])({
  clusterLogins: new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]()
}));
var store = Object(nuclear_js__WEBPACK_IMPORTED_MODULE_0__["Store"])({
  getInitialState: function getInitialState() {
    return new SshHistoryRec();
  },
  initialize: function initialize() {
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_2__[/* ADD_ITEM */ "a"], function (state, params) {
      return state.addLoginString(params);
    });
  }
});
var register = function register(reactor) {
  reactor.registerStores(_defineProperty({}, STORE_NAME, store));
};
var getters = {
  store: [STORE_NAME]
};

/***/ }),

/***/ "Z9Rw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAuthHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNoCacheHeaders; });
/* unused harmony export getXCSRFToken */
/* unused harmony export getAccessToken */
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZMm");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KdfW");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LMli");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var defaultCfg = {
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
};
var api = {
  get: function get(url) {
    return api.fetchJson(url);
  },
  post: function post(url, data) {
    return api.fetchJson(url, {
      body: JSON.stringify(data),
      method: 'POST'
    });
  },
  delete: function _delete(url, data) {
    return api.fetchJson(url, {
      body: JSON.stringify(data),
      method: 'DELETE'
    });
  },
  put: function put(url, data) {
    return api.fetchJson(url, {
      body: JSON.stringify(data),
      method: 'PUT'
    });
  },
  fetchJson: function fetchJson(url, params) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.fetch(url, params).then(parseJSON).then(function (response) {
        if (response.ok) {
          return resolve(response.json);
        }

        var err = new Error(getErrorText(response.json));
        err.status = response.status;
        return reject(err);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  fetch: function (_fetch) {
    function fetch(_x) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function (url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    url = _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].baseUrl + url;

    var options = _objectSpread({}, defaultCfg, params);

    options.headers = _objectSpread({}, options.headers, getAuthHeaders()); // native call

    return fetch(url, options);
  })
};

function parseJSON(response) {
  return new Promise(function (resolve, reject) {
    return response.json().then(function (json) {
      return resolve({
        status: response.status,
        ok: response.ok,
        json: json
      });
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function getAuthHeaders() {
  var accessToken = getAccessToken();
  var csrfToken = getXCSRFToken();
  return {
    'X-CSRF-Token': csrfToken,
    'Authorization': "Bearer ".concat(accessToken)
  };
}
function getNoCacheHeaders() {
  return {
    'cache-control': 'max-age=0',
    'expires': '0',
    'pragma': 'no-cache'
  };
}
var getXCSRFToken = function getXCSRFToken() {
  var metaTag = document.querySelector('[name=grv_csrf_token]');
  return metaTag ? metaTag.content : '';
};
function getAccessToken() {
  var bearerToken = _localStorage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].getBearerToken() || {};
  return bearerToken.accessToken;
}

function getErrorText(json) {
  var msg = 'Unknown error';

  if (json && json.error) {
    return json.error.message || msg;
  }

  if (json && json.message) {
    return json.message;
  }

  if (json && json.error) {
    return json.error.message || msg;
  }

  if (json.responseText) {
    return json.responseText;
  }

  return msg;
}

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "Z9o+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./src/shared/components/Box/index.js + 1 modules
var Box = __webpack_require__("7EWF");

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// CONCATENATED MODULE: ./src/shared/components/Flex/Flex.jsx
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", " ", " ", " ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Flex = Object(styled_components_browser_esm["c" /* default */])(Box["a" /* default */])(_templateObject(), index_esm["a" /* alignItems */], index_esm["k" /* justifyContent */], index_esm["g" /* flexWrap */], index_esm["f" /* flexDirection */]);
Flex.defaultProps = {
  theme: theme["b" /* default */]
};
Flex.propTypes = _objectSpread({}, index_esm["n" /* propTypes */].space, index_esm["n" /* propTypes */].width, index_esm["n" /* propTypes */].color, index_esm["n" /* propTypes */].alignItems, index_esm["n" /* propTypes */].justifyContent, index_esm["n" /* propTypes */].flexWrap, index_esm["n" /* propTypes */].flexDirection);
Flex.displayName = 'Flex';
/* harmony default export */ var Flex_Flex = (Flex);
// CONCATENATED MODULE: ./src/shared/components/Flex/index.js

/* harmony default export */ var components_Flex = __webpack_exports__["a"] = (Flex_Flex);

/***/ }),

/***/ "ausB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TLPT_NODES_RECEIVE; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var TLPT_NODES_RECEIVE = 'TLPT_NODES_RECEIVE';

/***/ }),

/***/ "bZAg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/shared/components/Typography/index.js + 1 modules
var Typography = __webpack_require__("Ahhe");

// EXTERNAL MODULE: ./src/shared/components/Logo/index.js + 1 modules
var Logo = __webpack_require__("QmW9");

// EXTERNAL MODULE: ./src/shared/assets/images/teleport-medallion.svg
var teleport_medallion = __webpack_require__("BszX");
var teleport_medallion_default = /*#__PURE__*/__webpack_require__.n(teleport_medallion);

// EXTERNAL MODULE: ./src/shared/components/index.js + 14 modules
var components = __webpack_require__("ryey");

// EXTERNAL MODULE: ./src/shared/components/Icon/index.js
var Icon = __webpack_require__("893j");

// EXTERNAL MODULE: ./src/app/components/DocumentTitle/index.js + 1 modules
var DocumentTitle = __webpack_require__("tOzQ");

// CONCATENATED MODULE: ./src/app/components/LoginSuccessful/LoginSuccessful.jsx
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var LoginSuccessful_LoginSuccessful = function LoginSuccessful() {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Logo["a" /* default */], {
    src: teleport_medallion_default.a
  }), react_default.a.createElement(components["d" /* Card */], {
    width: "540px",
    p: 5,
    my: 4,
    mx: "auto",
    textAlign: "center"
  }, react_default.a.createElement(Icon["e" /* CircleCheck */], {
    mb: 3,
    fontSize: 64,
    color: "success"
  }), react_default.a.createElement(Typography["a" /* default */].h2, null, "Login Successful"), react_default.a.createElement(Typography["a" /* default */].p, null, "You have successfully signed into your account. You can close this window and continue using the product.")));
};
/* harmony default export */ var components_LoginSuccessful_LoginSuccessful = (Object(DocumentTitle["b" /* withDocTitle */])("Success", LoginSuccessful_LoginSuccessful));
// CONCATENATED MODULE: ./src/app/components/LoginSuccessful/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_LoginSuccessful = __webpack_exports__["a"] = (components_LoginSuccessful_LoginSuccessful);

/***/ }),

/***/ "c877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/app/components/nuclear.jsx
var nuclear = __webpack_require__("2qgS");

// EXTERNAL MODULE: ./src/app/config.js
var config = __webpack_require__("LMli");

// EXTERNAL MODULE: ./src/app/flux/user/actions.js
var actions = __webpack_require__("DeKp");

// EXTERNAL MODULE: ./src/app/flux/user/index.js
var flux_user = __webpack_require__("S+Ht");

// EXTERNAL MODULE: ./src/app/components/DocumentTitle/index.js + 1 modules
var DocumentTitle = __webpack_require__("tOzQ");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/app/services/enums.js
var enums = __webpack_require__("l3S1");

// EXTERNAL MODULE: ./src/shared/components/index.js + 14 modules
var components = __webpack_require__("ryey");

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 2 modules
var formik_esm = __webpack_require__("KYPV");

// EXTERNAL MODULE: ./src/shared/components/Typography/index.js + 1 modules
var Typography = __webpack_require__("Ahhe");

// CONCATENATED MODULE: ./src/app/components/Invite/InviteForm/TwoFaInfo.jsx
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var U2F_HELP_URL = 'https://support.google.com/accounts/answer/6103523?hl=en';
function Invite2faData(props) {
  var auth2faType = props.auth2faType,
      qr = props.qr;
  var imgSrc = "data:image/png;base64,".concat(qr);

  if (auth2faType === enums["a" /* Auth2faTypeEnum */].OTP) {
    return react_default.a.createElement("div", null, react_default.a.createElement(Typography["a" /* default */].h5, null, "Scan the bar code with Google Authenticator to generate a two factor token."), react_default.a.createElement("img", {
      width: "168",
      src: imgSrc
    }));
  }

  if (auth2faType === enums["a" /* Auth2faTypeEnum */].UTF) {
    return react_default.a.createElement("div", null, react_default.a.createElement(Typography["a" /* default */].h4, null, "Insert your U2F key"), react_default.a.createElement(Typography["a" /* default */].h5, null, "Press the button on the U2F key after you press the sign up button"), react_default.a.createElement(Typography["a" /* default */].h5, null, react_default.a.createElement("a", {
      a: true,
      target: "_blank",
      href: U2F_HELP_URL
    }, "Learn more"), " about U2F 2-Step Verification."));
  }

  return null;
}
// EXTERNAL MODULE: ./src/shared/components/Alert/index.jsx + 1 modules
var Alert = __webpack_require__("LcJ4");

// EXTERNAL MODULE: ./src/shared/components/Flex/index.js + 1 modules
var Flex = __webpack_require__("Z9o+");

// EXTERNAL MODULE: ./src/shared/components/Box/index.js + 1 modules
var Box = __webpack_require__("7EWF");

// CONCATENATED MODULE: ./src/app/components/Invite/InviteForm/InviteForm.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/









var U2F_ERROR_CODES_URL = 'https://developers.yubico.com/U2F/Libraries/Client_error_codes.html';

var InviteForm_needs2fa = function needs2fa(auth2faType) {
  return !!auth2faType && auth2faType !== enums["a" /* Auth2faTypeEnum */].DISABLED;
};

var InviteForm_InviteForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InviteForm, _React$Component);

  function InviteForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InviteForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InviteForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialValues", {
      password: '',
      passwordConfirmed: '',
      token: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onValidate", function (values) {
      var password = values.password,
          passwordConfirmed = values.passwordConfirmed;
      var errors = {};

      if (!password) {
        errors.password = 'Password is required';
      } else if (password.length < 6) {
        errors.password = 'Enter at least 6 characters';
      }

      if (!passwordConfirmed) {
        errors.passwordConfirmed = 'Please confirm your password';
      } else if (passwordConfirmed !== password) {
        errors.passwordConfirmed = 'Password does not match';
      }

      if (_this.isOTP() && !values.token) {
        errors.token = 'Token is required';
      }

      return errors;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (values) {
      var user = values.user,
          password = values.password,
          token = values.token;

      if (_this.props.auth2faType === enums["a" /* Auth2faTypeEnum */].UTF) {
        _this.props.onSubmitWithU2f(user, password);
      } else {
        _this.props.onSubmit(user, password, token);
      }
    });

    return _this;
  }

  _createClass(InviteForm, [{
    key: "renderNameAndPassFields",
    value: function renderNameAndPassFields(_ref) {
      var values = _ref.values,
          errors = _ref.errors,
          touched = _ref.touched,
          handleChange = _ref.handleChange;
      var passError = touched.password && errors.password;
      var passConfirmedError = touched.passwordConfirmed && errors.passwordConfirmed;
      var tokenError = errors.token && touched.token;
      var user = this.props.invite.user;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components["k" /* Text */], {
        breakAll: true,
        mt: 1,
        mb: 3,
        fontSize: 5
      }, user), react_default.a.createElement(components["h" /* Label */], {
        hasError: passError
      }, passError || "Password"), react_default.a.createElement(components["g" /* Input */], {
        hasError: passError,
        value: values.password,
        onChange: handleChange,
        type: "password",
        name: "password",
        placeholder: "Password"
      }), react_default.a.createElement(components["h" /* Label */], {
        hasError: passConfirmedError
      }, passConfirmedError || "Confirm Password"), react_default.a.createElement(components["g" /* Input */], {
        hasError: passConfirmedError,
        value: values.passwordConfirmed,
        onChange: handleChange,
        type: "password",
        name: "passwordConfirmed",
        placeholder: "Password"
      }), this.isOTP() && react_default.a.createElement(Flex["a" /* default */], null, react_default.a.createElement(Box["a" /* default */], {
        width: "45%",
        mr: "0"
      }, react_default.a.createElement(components["h" /* Label */], {
        mt: 3,
        mb: 1,
        hasError: tokenError
      }, tokenError && errors.token || "Two factor token"), react_default.a.createElement(components["g" /* Input */], {
        id: "token",
        fontSize: 0,
        hasError: tokenError,
        autoComplete: "off",
        value: values.token,
        onChange: handleChange,
        placeholder: "123 456"
      })), react_default.a.createElement(Box["a" /* default */], {
        ml: "2",
        width: "55%",
        textAlign: "center",
        pt: 3
      }, react_default.a.createElement(components["c" /* Button */], {
        target: "_blank",
        block: true,
        as: "a",
        size: "small",
        link: true,
        href: "https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DiOS&hl=en&oco=0"
      }, "Download Google Authenticator"))));
    }
  }, {
    key: "isOTP",
    value: function isOTP() {
      var auth2faType = this.props.auth2faType;
      return InviteForm_needs2fa(auth2faType) && auth2faType === enums["a" /* Auth2faTypeEnum */].OTP;
    }
  }, {
    key: "renderSubmitBtn",
    value: function renderSubmitBtn(onClick) {
      var isProcessing = this.props.attempt.isProcessing;
      var $helpBlock = isProcessing && this.props.auth2faType === enums["a" /* Auth2faTypeEnum */].UTF ? "Insert your U2F key and press the button on the key" : null;
      var isDisabled = isProcessing;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components["c" /* Button */], {
        block: true,
        disabled: isDisabled,
        size: "large",
        type: "submit",
        onClick: onClick,
        mt: 4
      }, "Create My Teleport Account"), $helpBlock);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          auth2faType = _this$props.auth2faType,
          invite = _this$props.invite,
          attempt = _this$props.attempt;
      var isFailed = attempt.isFailed,
          message = attempt.message;
      var $error = isFailed ? react_default.a.createElement(InviteForm_ErrorMessage, {
        message: message
      }) : null;
      var needs2FAuth = InviteForm_needs2fa(auth2faType);
      var boxWidth = (needs2FAuth ? 712 : 464) + 'px';
      var $2FCode = null;

      if (needs2FAuth) {
        $2FCode = react_default.a.createElement(Box["a" /* default */], {
          flex: "1",
          bg: "bgQuaternary",
          p: "5"
        }, react_default.a.createElement(Invite2faData, {
          auth2faType: auth2faType,
          qr: invite.qr
        }));
      }

      return react_default.a.createElement(formik_esm["a" /* Formik */], {
        validate: this.onValidate,
        onSubmit: this.onSubmit,
        initialValues: this.initialValues
      }, function (props) {
        return react_default.a.createElement(components["d" /* Card */], {
          as: "form",
          bg: "bgSecondary",
          my: "4",
          mx: "auto",
          width: boxWidth
        }, react_default.a.createElement(Flex["a" /* default */], null, react_default.a.createElement(Box["a" /* default */], {
          flex: "3",
          p: "5"
        }, $error, _this2.renderNameAndPassFields(props), _this2.renderSubmitBtn(props.handleSubmit)), $2FCode));
      });
    }
  }]);

  return InviteForm;
}(react_default.a.Component);

_defineProperty(InviteForm_InviteForm, "propTypes", {
  auth2faType: prop_types_default.a.string,
  authType: prop_types_default.a.string,
  onSubmitWithU2f: prop_types_default.a.func.isRequired,
  onSubmit: prop_types_default.a.func.isRequired,
  attempt: prop_types_default.a.object.isRequired
});

var InviteForm_U2FError = function U2FError() {
  return react_default.a.createElement(components["m" /* Typography */].p, null, "click ", react_default.a.createElement("a", {
    target: "_blank",
    href: U2F_ERROR_CODES_URL
  }, "here"), "to learn more about U2F error codes");
};

var InviteForm_ErrorMessage = function ErrorMessage(_ref2) {
  var message = _ref2.message;
  message = message || '';
  var $helpBox = message.indexOf('U2F') !== -1 ? react_default.a.createElement(InviteForm_U2FError, null) : null;
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Alert["a" /* Danger */], null, message, " "), $helpBox);
};
/* harmony default export */ var Invite_InviteForm_InviteForm = (InviteForm_InviteForm);
// CONCATENATED MODULE: ./src/app/components/Invite/InviteForm/index.js

/* harmony default export */ var Invite_InviteForm = (Invite_InviteForm_InviteForm);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// CONCATENATED MODULE: ./src/app/components/Invite/InviteForm/ExpiredInvite.jsx
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  &:visted {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ExpiredInvite_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ExpiredInvite_typeof = function _typeof(obj) { return typeof obj; }; } else { ExpiredInvite_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ExpiredInvite_typeof(obj); }

function ExpiredInvite_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ExpiredInvite_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ExpiredInvite_createClass(Constructor, protoProps, staticProps) { if (protoProps) ExpiredInvite_defineProperties(Constructor.prototype, protoProps); if (staticProps) ExpiredInvite_defineProperties(Constructor, staticProps); return Constructor; }

function ExpiredInvite_possibleConstructorReturn(self, call) { if (call && (ExpiredInvite_typeof(call) === "object" || typeof call === "function")) { return call; } return ExpiredInvite_assertThisInitialized(self); }

function ExpiredInvite_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ExpiredInvite_getPrototypeOf(o) { ExpiredInvite_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ExpiredInvite_getPrototypeOf(o); }

function ExpiredInvite_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ExpiredInvite_setPrototypeOf(subClass, superClass); }

function ExpiredInvite_setPrototypeOf(o, p) { ExpiredInvite_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ExpiredInvite_setPrototypeOf(o, p); }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var ProductEnum = {
  Teleport: 'Teleport',
  Gravity: 'Gravity'
};

var ExpiredInvite_ExpiredInvite =
/*#__PURE__*/
function (_React$Component) {
  ExpiredInvite_inherits(ExpiredInvite, _React$Component);

  function ExpiredInvite(props) {
    ExpiredInvite_classCallCheck(this, ExpiredInvite);

    return ExpiredInvite_possibleConstructorReturn(this, ExpiredInvite_getPrototypeOf(ExpiredInvite).call(this, props));
  }

  ExpiredInvite_createClass(ExpiredInvite, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return react_default.a.createElement(components["d" /* Card */], {
        width: "540px",
        color: "text",
        p: 5,
        bg: "bgLight",
        mt: 5,
        mx: "auto"
      }, react_default.a.createElement(components["m" /* Typography */].h1, {
        textAlign: "center",
        fontSize: 8,
        color: "text",
        fontWeight: "bold",
        mb: 3
      }, "Invite code has expired"), react_default.a.createElement(components["m" /* Typography */].p, null, "It appears that your invite code isn't valid anymore. Please contact your account administrator and request another invite."), react_default.a.createElement(components["m" /* Typography */].p, null, "If you believe this is an issue with ", product, ", please create a ", react_default.a.createElement(GithubLink, null, " GitHub issue"), "."));
    }
  }]);

  return ExpiredInvite;
}(react_default.a.Component);

var GithubLink = styled_components_browser_esm["c" /* default */].a.attrs({
  href: 'https://github.com/gravitational/teleport/issues/new'
})(_templateObject(), function (props) {
  return props.theme.colors.link;
}, function (props) {
  return props.theme.colors.link;
});
ExpiredInvite_ExpiredInvite.propTypes = {
  /** The name of the product (gravity, teleport) */
  product: prop_types_default.a.oneOf([ProductEnum.Gravity, ProductEnum.Teleport])
};
ExpiredInvite_ExpiredInvite.defaultProps = {
  product: ProductEnum.Teleport
};
/* harmony default export */ var InviteForm_ExpiredInvite = (ExpiredInvite_ExpiredInvite);
// EXTERNAL MODULE: ./src/shared/components/Logo/index.js + 1 modules
var Logo = __webpack_require__("QmW9");

// EXTERNAL MODULE: ./src/shared/assets/images/teleport-medallion.svg
var teleport_medallion = __webpack_require__("BszX");
var teleport_medallion_default = /*#__PURE__*/__webpack_require__.n(teleport_medallion);

// CONCATENATED MODULE: ./src/app/components/Invite/Invite.jsx
function Invite_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Invite_typeof = function _typeof(obj) { return typeof obj; }; } else { Invite_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Invite_typeof(obj); }

function Invite_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Invite_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Invite_createClass(Constructor, protoProps, staticProps) { if (protoProps) Invite_defineProperties(Constructor.prototype, protoProps); if (staticProps) Invite_defineProperties(Constructor, staticProps); return Constructor; }

function Invite_possibleConstructorReturn(self, call) { if (call && (Invite_typeof(call) === "object" || typeof call === "function")) { return call; } return Invite_assertThisInitialized(self); }

function Invite_getPrototypeOf(o) { Invite_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Invite_getPrototypeOf(o); }

function Invite_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Invite_setPrototypeOf(subClass, superClass); }

function Invite_setPrototypeOf(o, p) { Invite_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Invite_setPrototypeOf(o, p); }

function Invite_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Invite_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/










var Invite_Invite =
/*#__PURE__*/
function (_React$Component) {
  Invite_inherits(Invite, _React$Component);

  function Invite() {
    var _getPrototypeOf2;

    var _this;

    Invite_classCallCheck(this, Invite);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Invite_possibleConstructorReturn(this, (_getPrototypeOf2 = Invite_getPrototypeOf(Invite)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Invite_defineProperty(Invite_assertThisInitialized(Invite_assertThisInitialized(_this)), "onSubmitWithU2f", function (username, password) {
      _this.props.acceptInviteWithU2f(username, password, _this.props.inviteToken);
    });

    Invite_defineProperty(Invite_assertThisInitialized(Invite_assertThisInitialized(_this)), "onSubmit", function (username, password, token) {
      _this.props.acceptInvite(username, password, token, _this.props.inviteToken);
    });

    return _this;
  }

  Invite_createClass(Invite, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchInvite(this.props.inviteToken);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fetchingInvite = _this$props.fetchingInvite,
          invite = _this$props.invite,
          attempt = _this$props.attempt;
      var auth2faType = config["a" /* default */].getAuth2faType();

      if (fetchingInvite.isFailed) {
        return react_default.a.createElement("div", null, react_default.a.createElement(Logo["a" /* default */], {
          src: teleport_medallion_default.a
        }), react_default.a.createElement(InviteForm_ExpiredInvite, null));
      }

      if (!invite) {
        return null;
      }

      return react_default.a.createElement("div", null, react_default.a.createElement(Logo["a" /* default */], {
        src: teleport_medallion_default.a
      }), react_default.a.createElement(Invite_InviteForm, {
        auth2faType: auth2faType,
        attempt: attempt,
        invite: invite,
        onSubmitWithU2f: this.onSubmitWithU2f,
        onSubmit: this.onSubmit
      }));
    }
  }]);

  return Invite;
}(react_default.a.Component);

function mapStateToProps() {
  return {
    invite: flux_user["a" /* getters */].invite,
    attempt: flux_user["a" /* getters */].attemp,
    fetchingInvite: flux_user["a" /* getters */].fetchingInvite
  };
}

function mapActionsToProps(props) {
  return {
    fetchInvite: actions["c" /* fetchInvite */],
    acceptInviteWithU2f: actions["b" /* acceptInviteWithU2f */],
    acceptInvite: actions["a" /* acceptInvite */],
    inviteToken: props.match.params.inviteToken
  };
}

/* harmony default export */ var components_Invite_Invite = (Object(DocumentTitle["b" /* withDocTitle */])("Invite", Object(nuclear["b" /* connect */])(mapStateToProps, mapActionsToProps)(Invite_Invite)));
// CONCATENATED MODULE: ./src/app/components/Invite/index.jsx
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_Invite = __webpack_exports__["a"] = (components_Invite_Invite);

/***/ }),

/***/ "cGG6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BearerToken */
/* harmony import */ var app_lib_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lZJN");
/* harmony import */ var app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LMli");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yaYm");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KdfW");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Z9Rw");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var EMPTY_TOKEN_CONTENT_LENGTH = 20;
var TOKEN_CHECKER_INTERVAL = 15 * 1000; //  every 15 sec

var logger = app_lib_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].create('services/sessions');
var BearerToken = function BearerToken(json) {
  _classCallCheck(this, BearerToken);

  this.accessToken = json.token;
  this.expiresIn = json.expires_in;
  this.created = new Date().getTime();
};
var sesstionCheckerTimerId = null;
var session = {
  logout: function logout() {
    var _this = this;

    var rememberLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return _api__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].delete(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.sessionPath).finally(function () {
      _this.clear();

      _history__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].goToLogin(rememberLocation);
    });
  },
  clear: function clear() {
    this._stopSessionChecker();

    _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].unsubscribe(receiveMessage);
    _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].setBearerToken(null);
    _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].clear();
  },
  ensureSession: function ensureSession() {
    var _this2 = this;

    var rememberLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this._stopSessionChecker();

    this._ensureLocalStorageSubscription();

    var token = this._getBearerToken();

    if (!token) {
      this.logout(rememberLocation);
      return Promise.reject("missing bearer token");
    }

    if (this._shouldRenewToken()) {
      return this._renewToken().then(this._startSessionChecker.bind(this)).catch(function () {
        return _this2.logout(rememberLocation);
      });
    } else {
      this._startSessionChecker();

      return Promise.resolve(token);
    }
  },
  _getBearerToken: function _getBearerToken() {
    var token = null;

    try {
      token = this._extractBearerTokenFromHtml();

      if (token) {
        _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].setBearerToken(token);
      } else {
        token = _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].getBearerToken();
      }
    } catch (err) {
      logger.error('Cannot find bearer token', err);
    }

    return token;
  },
  _extractBearerTokenFromHtml: function _extractBearerTokenFromHtml() {
    var el = document.querySelector('[name=grv_bearer_token]');
    var token = null;

    if (el !== null) {
      var encodedToken = el.content || '';

      if (encodedToken.length > EMPTY_TOKEN_CONTENT_LENGTH) {
        var decoded = window.atob(encodedToken);
        var json = JSON.parse(decoded);
        token = new BearerToken(json);
      } // remove initial data from HTML as it will be renewed with a time


      el.parentNode.removeChild(el);
    }

    return token;
  },
  _shouldRenewToken: function _shouldRenewToken() {
    if (this._getIsRenewing()) {
      return false;
    }

    return this._timeLeft() < TOKEN_CHECKER_INTERVAL * 1.5;
  },
  _shouldCheckStatus: function _shouldCheckStatus() {
    if (this._getIsRenewing()) {
      return false;
    }
    /*
    * double the threshold value for slow connections to avoid
    * access-denied response due to concurrent renew token request
    * made from other tab
    */


    return this._timeLeft() > TOKEN_CHECKER_INTERVAL * 2;
  },
  _renewToken: function _renewToken() {
    var _this3 = this;

    this._setAndBroadcastIsRenewing(true);

    return _api__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.renewTokenPath).then(this._receiveBearerToken.bind(this)).finally(function () {
      _this3._setAndBroadcastIsRenewing(false);
    });
  },
  _receiveBearerToken: function _receiveBearerToken(json) {
    var token = new BearerToken(json);
    _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].setBearerToken(token);
  },
  _fetchStatus: function _fetchStatus() {
    var _this4 = this;

    _api__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].get(app_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].api.userStatusPath).catch(function (err) {
      // indicates that session is no longer valid (caused by server restarts or updates)
      if (err.status == 403) {
        _this4.logout();
      }
    });
  },
  _setAndBroadcastIsRenewing: function _setAndBroadcastIsRenewing(value) {
    this._setIsRenewing(value);

    _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].broadcast(_localStorage__WEBPACK_IMPORTED_MODULE_3__[/* KeysEnum */ "a"].TOKEN_RENEW, value);
  },
  _setIsRenewing: function _setIsRenewing(value) {
    this._isRenewing = value;
  },
  _getIsRenewing: function _getIsRenewing() {
    return !!this._isRenewing;
  },
  _timeLeft: function _timeLeft() {
    var token = this._getBearerToken();

    if (!token) {
      return 0;
    }

    var expiresIn = token.expiresIn,
        created = token.created;

    if (!created || !expiresIn) {
      return 0;
    }

    expiresIn = expiresIn * 1000;
    var delta = created + expiresIn - new Date().getTime();
    return delta;
  },
  // detects localStorage changes from other tabs
  _ensureLocalStorageSubscription: function _ensureLocalStorageSubscription() {
    _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].subscribe(receiveMessage);
  },
  _startSessionChecker: function _startSessionChecker() {
    var _this5 = this;

    this._stopSessionChecker();

    sesstionCheckerTimerId = setInterval(function () {
      // calling ensureSession() will again invoke _startSessionChecker
      _this5.ensureSession(); // check if server has a valid session in case of server restarts


      if (_this5._shouldCheckStatus()) {
        _this5._fetchStatus();
      }
    }, TOKEN_CHECKER_INTERVAL);
  },
  _stopSessionChecker: function _stopSessionChecker() {
    clearInterval(sesstionCheckerTimerId);
    sesstionCheckerTimerId = null;
  }
};

function receiveMessage(event) {
  var key = event.key,
      newValue = event.newValue; // check if local storage has been cleared from another tab

  if (_localStorage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].getBearerToken() === null) {
    session.logout();
  } // renewToken has been invoked from another tab


  if (key === _localStorage__WEBPACK_IMPORTED_MODULE_3__[/* KeysEnum */ "a"].TOKEN_RENEW && !!newValue) {
    session._setIsRenewing(JSON.parse(newValue));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (session);

/***/ }),

/***/ "cxFd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ServerRec */
/* unused harmony export NodeStoreRec */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNodeStore; });
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSHT");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JPcv");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ausB");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var ServerRec =
/*#__PURE__*/
function (_Record) {
  _inherits(ServerRec, _Record);

  function ServerRec(props) {
    _classCallCheck(this, ServerRec);

    var tags = new immutable__WEBPACK_IMPORTED_MODULE_2__["List"](Object(nuclear_js__WEBPACK_IMPORTED_MODULE_1__["toImmutable"])(props.tags));
    return _possibleConstructorReturn(this, _getPrototypeOf(ServerRec).call(this, _objectSpread({}, props, {
      tags: tags
    })));
  }

  return ServerRec;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Record"])({
  id: '',
  siteId: '',
  hostname: '',
  tags: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"](),
  addr: ''
}));
var NodeStoreRec =
/*#__PURE__*/
function (_Record2) {
  _inherits(NodeStoreRec, _Record2);

  function NodeStoreRec() {
    _classCallCheck(this, NodeStoreRec);

    return _possibleConstructorReturn(this, _getPrototypeOf(NodeStoreRec).apply(this, arguments));
  }

  _createClass(NodeStoreRec, [{
    key: "findServer",
    value: function findServer(serverId) {
      return this.servers.find(function (s) {
        return s.id === serverId;
      });
    }
  }, {
    key: "getSiteServers",
    value: function getSiteServers(siteId) {
      return this.servers.filter(function (s) {
        return s.siteId === siteId;
      });
    }
  }, {
    key: "addSiteServers",
    value: function addSiteServers(jsonItems) {
      var list = new immutable__WEBPACK_IMPORTED_MODULE_2__["List"]().withMutations(function (state) {
        jsonItems.forEach(function (item) {
          return state.push(new ServerRec(item));
        });
        return state;
      });
      return list.equals(this.servers) ? this : this.set('servers', list);
    }
  }]);

  return NodeStoreRec;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Record"])({
  servers: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"]()
}));
function getNodeStore() {
  return app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].evaluate(['tlpt_nodes']);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(nuclear_js__WEBPACK_IMPORTED_MODULE_1__["Store"])({
  getInitialState: function getInitialState() {
    return new NodeStoreRec();
  },
  initialize: function initialize() {
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_3__[/* TLPT_NODES_RECEIVE */ "a"], function (state, items) {
      return state.addSiteServers(items);
    });
  }
}));

/***/ }),

/***/ "eowl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nr6O");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jKe7");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2INN");
/* harmony import */ var _components_nuclear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2qgS");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F86T");
/* harmony import */ var _components_Invite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("c877");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LMli");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jP+w");
/* harmony import */ var _shared_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("s1C8");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("0cfB");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AppError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Hwhx");
/* harmony import */ var _components_LoginSuccessful__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("bZAg");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/












Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_10__["setConfig"])({
  logLevel: 'no-errors-please'
});

var Root = function Root(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    history: props.history
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nuclear__WEBPACK_IMPORTED_MODULE_4__[/* Provider */ "a"], {
    reactor: props.reactor
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: _config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].routes.error,
    component: _components_AppError__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: _config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].routes.successfulLogin,
    component: _components_LoginSuccessful__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: _config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].routes.login,
    component: _components_Login__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: _config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].routes.newUser,
    component: _components_Invite__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: _config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].routes.app,
    component: _components_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_10__["hot"])(module)(Root));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "frOc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// CONCATENATED MODULE: ./src/shared/components/Button/Button.jsx
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border: none;\n  border-radius: 4px;\n  color: ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: bold;\n  display: inline-block;\n  line-height: 40px;\n  outline: none;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all .3s;\n  -webkit-font-smoothing: antialiased;\n\n  &:hover, &:focus {\n    background: ", ";\n  }\n\n  &:active {\n    background: ", ";\n    color: rgba(255, 255, 255, .24);\n    box-shadow: none;\n  }\n\n  &:disabled {\n    background: rgba(255, 255, 255, .24);\n    color: rgba(0, 0, 0, .24);\n  }\n\n  .icon {\n    font-size: 20px;\n    margin: -10px 0 0 0;\n    opacity: .87;\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    z-index: 1;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var size = function size(props) {
  switch (props.size) {
    case 'small':
      return {
        fontSize: '10px',
        lineHeight: '24px',
        padding: '0 8px'
      };

    case 'medium':
      return {
        fontSize: "12px",
        lineHeight: '40px',
        padding: '0 32px'
      };

    case 'large':
      return {
        fontSize: '14px',
        lineHeight: '56px',
        padding: '0 40px'
      };

    default:
      return {
        fontSize: "10px",
        lineHeight: '40px',
        padding: '0 24px'
      };
  }
};

var color = function color(props) {
  var theme = props.theme,
      secondary = props.secondary,
      warning = props.warning,
      link = props.link;

  if (secondary) {
    return {
      background: theme.colors.secondary,
      '&:hover, &:focus': {
        background: theme.colors.secondaryLight
      }
    };
  }

  if (link) {
    return {
      color: theme.colors.link,
      fontWeight: 'normal',
      background: 'none',
      textDecoration: 'underline',
      textTransform: 'none',
      '&:hover, &:focus': {
        background: theme.colors.bgSecondary
      }
    };
  }

  if (warning) {
    return {
      background: theme.colors.error,
      '&:hover, &:focus': {
        background: theme.colors.errorDark
      },
      '&:active': {
        opacity: .56
      }
    };
  }

  return {
    background: theme.colors.primary
  };
};

var block = function block(props) {
  return props.block ? {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%'
  } : null;
};

var Button = styled_components_browser_esm["c" /* default */].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primaryLight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primaryDark;
}, color, block, size, index_esm["o" /* space */]);
var numberStringOrArray = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.array]);
Button.propTypes = {
  /** Size */
  size: prop_types_default.a.oneOf(['small', 'medium', 'large']),
  block: prop_types_default.a.bool,
  secondary: prop_types_default.a.bool,

  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray
};
Button.defaultProps = {
  size: 'medium',
  theme: theme["b" /* default */]
};
Button.displayName = 'Button';
/* harmony default export */ var Button_Button = (Button);
// CONCATENATED MODULE: ./src/shared/components/Button/index.js

/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button_Button);

/***/ }),

/***/ "gC4k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECEIVE_USERACL; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var RECEIVE_USERACL = 'TLPT_USERACL_RECEIVE';

/***/ }),

/***/ "gMNw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ITEM; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var ADD_ITEM = 'TLPT_SSH_HISTORY';

/***/ }),

/***/ "gOk0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export isDevEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isTestEnv; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var isDevEnv = function isDevEnv() {
  return "production" === 'development';
};
var isTestEnv = function isTestEnv() {
  return process.env.NODE_ENV_TYPE === 'test';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("KCCg")))

/***/ }),

/***/ "hrax":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return storage; });
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xSHT");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var SET = 'MISC_SET';
var STORE_NAME = 'tlpt_misc'; // stores any temporary data

var store = Object(nuclear_js__WEBPACK_IMPORTED_MODULE_0__["Store"])({
  getInitialState: function getInitialState() {
    return new nuclear_js__WEBPACK_IMPORTED_MODULE_0__["Immutable"].Map();
  },
  initialize: function initialize() {
    this.on(SET, function (state, _ref) {
      var key = _ref.key,
          payload = _ref.payload;
      return state.set(key, payload);
    });
  }
});
var register = function register(reactor) {
  reactor.registerStores(_defineProperty({}, STORE_NAME, store));
};
var storage = {
  save: function save(key, payload) {
    app_reactor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].dispatch(SET, {
      key: key,
      payload: payload
    });
  },
  findByKey: function findByKey(key) {
    return app_reactor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].evaluate([STORE_NAME, key]);
  }
};

/***/ }),

/***/ "jP+w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var es_Switch = __webpack_require__("jKe7");

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 1 modules
var Route = __webpack_require__("2INN");

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/NavLink.js + 9 modules
var NavLink = __webpack_require__("uNOt");

// EXTERNAL MODULE: ./src/app/components/Errors/index.js + 3 modules
var Errors = __webpack_require__("B30r");

// CONCATENATED MODULE: ./src/app/components/Router/Router.jsx




var Router_NoMatch = function NoMatch(_ref) {
  var location = _ref.location;
  return react_default.a.createElement(Errors["d" /* NotFound */], {
    message: location.pathname
  });
}; // Adds default not found handler


var Router_Switch = function Switch(props) {
  return react_default.a.createElement(es_Switch["a" /* default */], null, props.children, react_default.a.createElement(Router_Route, {
    component: Router_NoMatch
  }));
};

var Router_Route = Route["a" /* default */];
var Router_NavLink = NavLink["a" /* default */];

// CONCATENATED MODULE: ./src/app/components/Router/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./src/app/components/nuclear.jsx
var nuclear = __webpack_require__("2qgS");

// EXTERNAL MODULE: ./src/app/flux/app/appStore.js
var appStore = __webpack_require__("SgOX");

// EXTERNAL MODULE: ./src/app/reactor.js
var reactor = __webpack_require__("xSHT");

// EXTERNAL MODULE: ./src/app/flux/app/actionTypes.js
var actionTypes = __webpack_require__("FCiP");

// EXTERNAL MODULE: ./src/app/flux/sites/actionTypes.js
var sites_actionTypes = __webpack_require__("qDpX");

// EXTERNAL MODULE: ./src/app/flux/user/actionTypes.js
var user_actionTypes = __webpack_require__("owjQ");

// EXTERNAL MODULE: ./src/app/flux/userAcl/actionTypes.js
var userAcl_actionTypes = __webpack_require__("gC4k");

// EXTERNAL MODULE: ./src/app/services/api.js
var api = __webpack_require__("Z9Rw");

// EXTERNAL MODULE: ./src/app/config.js
var config = __webpack_require__("LMli");

// EXTERNAL MODULE: ./src/app/flux/status/actions.js
var actions = __webpack_require__("ksSu");

// EXTERNAL MODULE: ./src/app/flux/nodes/actionTypes.js
var nodes_actionTypes = __webpack_require__("ausB");

// EXTERNAL MODULE: ./src/app/lib/logger.js
var logger = __webpack_require__("lZJN");

// CONCATENATED MODULE: ./src/app/flux/nodes/actions.js





var actions_logger = logger["a" /* default */].create('flux/nodes');
function fetchNodes(clusterId) {
  return api["a" /* default */].get(config["a" /* default */].api.getSiteNodesUrl(clusterId)).then(function (res) {
    return res.items || [];
  }).then(function (items) {
    return reactor["a" /* default */].dispatch(nodes_actionTypes["a" /* TLPT_NODES_RECEIVE */], items);
  }).catch(function (err) {
    actions_logger.error('fetchNodes', err);
    throw err;
  });
}
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("wd/R");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/app/flux/sessions/actionTypes.js
var sessions_actionTypes = __webpack_require__("zMbK");

// CONCATENATED MODULE: ./src/app/flux/sessions/actions.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var sessions_actions_logger = logger["a" /* default */].create('flux/sessions');
function fetchStoredSession(sid, siteId) {
  siteId = siteId || reactor["a" /* default */].evaluate(appStore["b" /* getters */].siteId);
  return api["a" /* default */].get(config["a" /* default */].api.getSessionEventsUrl({
    siteId: siteId,
    sid: sid
  })).then(function (json) {
    if (json && json.events) {
      reactor["a" /* default */].dispatch(sessions_actionTypes["b" /* RECEIVE_SITE_EVENTS */], {
        siteId: siteId,
        json: json.events
      });
    }
  });
}
function fetchSiteEvents(siteId, start, end) {
  // default values
  start = start || moment_default()(new Date()).endOf('day').toDate();
  end = end || moment_default()(end).subtract(3, 'day').startOf('day').toDate();
  start = start.toISOString();
  end = end.toISOString();
  return api["a" /* default */].get(config["a" /* default */].api.getSiteEventsFilterUrl({
    start: start,
    end: end,
    siteId: siteId
  })).then(function (json) {
    if (json && json.events) {
      reactor["a" /* default */].dispatch(sessions_actionTypes["b" /* RECEIVE_SITE_EVENTS */], {
        siteId: siteId,
        json: json.events
      });
    }
  }).catch(function (err) {
    sessions_actions_logger.error('fetchSiteEvents', err);
    throw err;
  });
}
function fetchActiveSessions(clusterId) {
  return api["a" /* default */].get(config["a" /* default */].api.getFetchSessionsUrl(clusterId)).then(function (res) {
    var json = {
      sessions: res.sessions || [],
      siteId: clusterId
    };
    reactor["a" /* default */].dispatch(sessions_actionTypes["a" /* RECEIVE_ACTIVE_SESSIONS */], json);
  }).catch(function (err) {
    sessions_actions_logger.error('fetchActiveSessions', err);
    throw err;
  });
}
// CONCATENATED MODULE: ./src/app/flux/app/actions.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/











var app_actions_logger = logger["a" /* default */].create('flux/app');
function addNavItem(item) {
  reactor["a" /* default */].dispatch(actionTypes["a" /* ADD_NAV_ITEM */], item);
}
function setSiteId(siteId) {
  reactor["a" /* default */].dispatch(actionTypes["b" /* SET_SITE_ID */], siteId);
}
function initApp(clusterId, featureActivator) {
  actions["c" /* initAppStatus */].start(); // get the list of available clusters

  return fetchInitData(clusterId).then(function () {
    featureActivator.onload();
    actions["c" /* initAppStatus */].success();
  }).catch(function (err) {
    actions["c" /* initAppStatus */].fail(err.message);
  });
}
function refresh() {
  return Promise.all([fetchActiveSessions(), fetchNodes()]);
}
function fetchInitData(clusterId) {
  return Promise.all([fetchSites(), fetchUserContext()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        masterSiteId = _ref2[0];

    setSiteId(masterSiteId);
    clusterId = clusterId || masterSiteId;
    return Promise.all([fetchNodes(clusterId), fetchActiveSessions(clusterId)]);
  });
}
function fetchSites() {
  return api["a" /* default */].get(config["a" /* default */].api.sitesBasePath).then(function (json) {
    var trusted = json.trusted || [];
    var allClusters = [json.current].concat(_toConsumableArray(trusted));
    reactor["a" /* default */].dispatch(sites_actionTypes["a" /* RECEIVE_CLUSTERS */], allClusters);
    return json.current.name;
  }).catch(function (err) {
    app_actions_logger.error('fetchSites', err);
  });
}
function fetchUserContext() {
  return api["a" /* default */].get(config["a" /* default */].api.userContextPath).then(function (json) {
    reactor["a" /* default */].dispatch(user_actionTypes["b" /* RECEIVE_USER */], {
      name: json.userName,
      authType: json.authType
    });
    reactor["a" /* default */].dispatch(actionTypes["c" /* SET_VERSION */], json.version);
    reactor["a" /* default */].dispatch(userAcl_actionTypes["a" /* RECEIVE_USERACL */], json.userAcl);
    app_actions_logger.info("Teleport ver:", json.version);
  });
}
// EXTERNAL MODULE: ./src/shared/components/index.js + 14 modules
var components = __webpack_require__("ryey");

// EXTERNAL MODULE: ./src/app/services/session.js
var services_session = __webpack_require__("cGG6");

// CONCATENATED MODULE: ./src/app/components/Hoc/withAuth.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var withAuth_withAuth = function withAuth(component) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithAuthWrapper, _React$Component);

    function WithAuthWrapper() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithAuthWrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithAuthWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        hasUser: false
      });

      return _this;
    }

    _createClass(WithAuthWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        services_session["a" /* default */].ensureSession(true).then(function () {
          _this2.setState({
            hasUser: true
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.hasUser) {
          return react_default.a.createElement(component, this.props);
        }

        return null;
      }
    }]);

    return WithAuthWrapper;
  }(react_default.a.Component), _defineProperty(_class, "displayName", "WithAuthWrapper"), _temp;
};

/* harmony default export */ var Hoc_withAuth = (withAuth_withAuth);
// EXTERNAL MODULE: ./src/app/flux/misc/store.js
var misc_store = __webpack_require__("hrax");

// CONCATENATED MODULE: ./src/app/components/Hoc/withStorage.jsx
function withStorage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { withStorage_typeof = function _typeof(obj) { return typeof obj; }; } else { withStorage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return withStorage_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { withStorage_defineProperty(target, key, source[key]); }); } return target; }

function withStorage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function withStorage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function withStorage_createClass(Constructor, protoProps, staticProps) { if (protoProps) withStorage_defineProperties(Constructor.prototype, protoProps); if (staticProps) withStorage_defineProperties(Constructor, staticProps); return Constructor; }

function withStorage_possibleConstructorReturn(self, call) { if (call && (withStorage_typeof(call) === "object" || typeof call === "function")) { return call; } return withStorage_assertThisInitialized(self); }

function withStorage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function withStorage_getPrototypeOf(o) { withStorage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withStorage_getPrototypeOf(o); }

function withStorage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) withStorage_setPrototypeOf(subClass, superClass); }

function withStorage_setPrototypeOf(o, p) { withStorage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withStorage_setPrototypeOf(o, p); }

function withStorage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var withStorage_withStorage = function withStorage(component) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    withStorage_inherits(WithTmpStorageWrapper, _React$Component);

    function WithTmpStorageWrapper(props, context) {
      withStorage_classCallCheck(this, WithTmpStorageWrapper);

      return withStorage_possibleConstructorReturn(this, withStorage_getPrototypeOf(WithTmpStorageWrapper).call(this, props, context));
    }

    withStorage_createClass(WithTmpStorageWrapper, [{
      key: "render",
      value: function render() {
        var props = this.props;
        return react_default.a.createElement(component, _objectSpread({}, props, {
          storage: misc_store["b" /* storage */]
        }));
      }
    }]);

    return WithTmpStorageWrapper;
  }(react_default.a.Component), withStorage_defineProperty(_class, "displayName", "withTmpStorageWrapper"), _temp;
};

/* harmony default export */ var Hoc_withStorage = (withStorage_withStorage);
// CONCATENATED MODULE: ./src/app/components/Hoc/index.js



// CONCATENATED MODULE: ./src/app/featureActivator.js
function featureActivator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function featureActivator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function featureActivator_createClass(Constructor, protoProps, staticProps) { if (protoProps) featureActivator_defineProperties(Constructor.prototype, protoProps); if (staticProps) featureActivator_defineProperties(Constructor, staticProps); return Constructor; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var featureActivator_logger = logger["a" /* default */].create('featureActivator');
/**
 * Invokes methods on a group of registered features.
 *
 */

var FeactureActivator =
/*#__PURE__*/
function () {
  function FeactureActivator() {
    featureActivator_classCallCheck(this, FeactureActivator);

    this._features = [];
  }

  featureActivator_createClass(FeactureActivator, [{
    key: "register",
    value: function register(feature) {
      if (!feature) {
        throw Error('Feature is undefined');
      }

      this._features.push(feature);
    }
    /**
     * to be called during app initialization. Becomes useful if feature wants to be
     * part of app initialization flow.
     */

  }, {
    key: "preload",
    value: function preload(context) {
      var promises = this._features.map(function (f) {
        return new Promise(function (resolve) {
          // feature should handle failed promises thus always resolve.
          f.init(context).finally(function () {
            resolve();
          });
        });
      });

      return Promise.all(promises);
    }
  }, {
    key: "onload",
    value: function onload(context) {
      var _this = this;

      this._features.forEach(function (f) {
        _this._invokeOnload(f, context);
      });
    }
  }, {
    key: "getFirstAvailable",
    value: function getFirstAvailable() {
      return this._features.find(function (f) {
        return !f.isFailed();
      });
    }
  }, {
    key: "getFeatures",
    value: function getFeatures() {
      return this._features;
    }
  }, {
    key: "_invokeOnload",
    value: function _invokeOnload(f) {
      try {
        for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          props[_key - 1] = arguments[_key];
        }

        f.onload.apply(f, props);
      } catch (err) {
        featureActivator_logger.error('failed to invoke feature onload()', err);
      }
    }
  }]);

  return FeactureActivator;
}();

/* harmony default export */ var app_featureActivator = (FeactureActivator);
// EXTERNAL MODULE: ./src/app/flux/user/index.js
var flux_user = __webpack_require__("S+Ht");

// EXTERNAL MODULE: ./src/app/flux/user/actions.js
var user_actions = __webpack_require__("DeKp");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/shared/components/TopNav/TopNavItem.jsx
var TopNavItem = __webpack_require__("2oKY");

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/scrollbarSize.js
var scrollbarSize = __webpack_require__("xUaa");
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize);

// CONCATENATED MODULE: ./src/shared/components/Popover/Transition.jsx
function Transition_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Transition_typeof = function _typeof(obj) { return typeof obj; }; } else { Transition_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Transition_typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Transition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Transition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Transition_createClass(Constructor, protoProps, staticProps) { if (protoProps) Transition_defineProperties(Constructor.prototype, protoProps); if (staticProps) Transition_defineProperties(Constructor, staticProps); return Constructor; }

function Transition_possibleConstructorReturn(self, call) { if (call && (Transition_typeof(call) === "object" || typeof call === "function")) { return call; } return Transition_assertThisInitialized(self); }

function Transition_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Transition_getPrototypeOf(o) { Transition_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Transition_getPrototypeOf(o); }

function Transition_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Transition_setPrototypeOf(subClass, superClass); }

function Transition_setPrototypeOf(o, p) { Transition_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Transition_setPrototypeOf(o, p); }




var Transition_Transition =
/*#__PURE__*/
function (_React$Component) {
  Transition_inherits(Transition, _React$Component);

  function Transition() {
    Transition_classCallCheck(this, Transition);

    return Transition_possibleConstructorReturn(this, Transition_getPrototypeOf(Transition).apply(this, arguments));
  }

  Transition_createClass(Transition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = react_dom_default.a.findDOMNode(this);
      this.props.onEntering(node);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutProperties(_this$props, ["children"]);

      delete childProps.onEntering;
      var child = react_default.a.Children.only(children);
      return react_default.a.cloneElement(child, childProps);
    }
  }]);

  return Transition;
}(react_default.a.Component);

/* harmony default export */ var Popover_Transition = (Transition_Transition);
// EXTERNAL MODULE: ./node_modules/dom-helpers/query/offset.js
var query_offset = __webpack_require__("A63a");
var offset_default = /*#__PURE__*/__webpack_require__.n(query_offset);

// EXTERNAL MODULE: ./node_modules/dom-helpers/query/position.js
var position = __webpack_require__("fpU1");
var position_default = /*#__PURE__*/__webpack_require__.n(position);

// EXTERNAL MODULE: ./node_modules/dom-helpers/query/scrollTop.js
var scrollTop = __webpack_require__("ZfQF");
var scrollTop_default = /*#__PURE__*/__webpack_require__.n(scrollTop);

// CONCATENATED MODULE: ./src/shared/components/utils/index.js




function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow(node) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var doc = ownerDocument(node);
  return doc.defaultView || doc.parentView || fallback;
}
function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return react_dom_default.a.findDOMNode(container) || defaultContainer;
}

function getContainerDimensions(containerNode) {
  var width, height, scroll;

  if (containerNode.tagName === 'BODY') {
    width = window.innerWidth;
    height = window.innerHeight;
    scroll = scrollTop_default()(ownerDocument(containerNode).documentElement) || scrollTop_default()(containerNode);
  } else {
    var _getOffset = offset_default()(containerNode);

    width = _getOffset.width;
    height = _getOffset.height;
    scroll = scrollTop_default()(containerNode);
  }

  return {
    width: width,
    height: height,
    scroll: scroll
  };
}

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;
  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerWidth = containerDimensions.width;
  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  }

  return 0;
}

function calculatePosition(placement, overlayNode, target, container, padding) {
  var childOffset = container.tagName === 'BODY' ? offset_default()(target) : position_default()(target, container);

  var _getOffset2 = offset_default()(overlayNode),
      overlayHeight = _getOffset2.height,
      overlayWidth = _getOffset2.width;

  var positionLeft, positionTop, arrowOffsetLeft, arrowOffsetTop;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);
    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = void 0;
  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = void 0;
  } else {
    throw new Error("calcOverlayPosition(): No such placement of \"".concat(placement, "\" found."));
  }

  return {
    positionLeft: positionLeft,
    positionTop: positionTop,
    arrowOffsetLeft: arrowOffsetLeft,
    arrowOffsetTop: arrowOffsetTop
  };
}
// EXTERNAL MODULE: ./node_modules/keycode/index.js
var keycode = __webpack_require__("3zPy");
var keycode_default = /*#__PURE__*/__webpack_require__.n(keycode);

// CONCATENATED MODULE: ./src/shared/components/Modal/Portal.jsx
function Portal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Portal_typeof = function _typeof(obj) { return typeof obj; }; } else { Portal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Portal_typeof(obj); }

function Portal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Portal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Portal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Portal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Portal_defineProperties(Constructor, staticProps); return Constructor; }

function Portal_possibleConstructorReturn(self, call) { if (call && (Portal_typeof(call) === "object" || typeof call === "function")) { return call; } return Portal_assertThisInitialized(self); }

function Portal_getPrototypeOf(o) { Portal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Portal_getPrototypeOf(o); }

function Portal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Portal_setPrototypeOf(subClass, superClass); }

function Portal_setPrototypeOf(o, p) { Portal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Portal_setPrototypeOf(o, p); }

function Portal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Portal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal_Portal =
/*#__PURE__*/
function (_React$Component) {
  Portal_inherits(Portal, _React$Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    Portal_classCallCheck(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Portal_possibleConstructorReturn(this, (_getPrototypeOf2 = Portal_getPrototypeOf(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Portal_defineProperty(Portal_assertThisInitialized(Portal_assertThisInitialized(_this)), "getMountNode", function () {
      return _this.mountNode;
    });

    return _this;
  }

  Portal_createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMountNode(this.props.container); // Only rerender if needed

      if (!this.props.disablePortal) {
        this.forceUpdate(this.props.onRendered);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.container !== this.props.container || prevProps.disablePortal !== this.props.disablePortal) {
        this.setMountNode(this.props.container); // Only rerender if needed

        if (!this.props.disablePortal) {
          this.forceUpdate(this.props.onRendered);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mountNode = null;
    }
  }, {
    key: "setMountNode",
    value: function setMountNode(container) {
      if (this.props.disablePortal) {
        this.mountNode = react_dom_default.a.findDOMNode(this).parentElement;
        return;
      }

      this.mountNode = Portal_getContainer(container, getOwnerDocument(this).body);
    }
    /**
     * @public
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disablePortal = _this$props.disablePortal;

      if (disablePortal) {
        return children;
      }

      return this.mountNode ? react_dom_default.a.createPortal(children, this.mountNode) : null;
    }
  }]);

  return Portal;
}(react_default.a.Component);

Portal_Portal.propTypes = {
  /**
   * The children to render into the `container`.
   */
  children: prop_types_default.a.node.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types_default.a.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   */
  onRendered: prop_types_default.a.func
};
Portal_Portal.defaultProps = {
  disablePortal: false
};

function Portal_getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return react_dom_default.a.findDOMNode(container) || defaultContainer;
}

function getOwnerDocument(element) {
  return ownerDocument(react_dom_default.a.findDOMNode(element));
}

/* harmony default export */ var Modal_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./src/shared/components/Modal/RootRef.jsx
function RootRef_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RootRef_typeof = function _typeof(obj) { return typeof obj; }; } else { RootRef_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RootRef_typeof(obj); }

function RootRef_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RootRef_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RootRef_createClass(Constructor, protoProps, staticProps) { if (protoProps) RootRef_defineProperties(Constructor.prototype, protoProps); if (staticProps) RootRef_defineProperties(Constructor, staticProps); return Constructor; }

function RootRef_possibleConstructorReturn(self, call) { if (call && (RootRef_typeof(call) === "object" || typeof call === "function")) { return call; } return RootRef_assertThisInitialized(self); }

function RootRef_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RootRef_getPrototypeOf(o) { RootRef_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RootRef_getPrototypeOf(o); }

function RootRef_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RootRef_setPrototypeOf(subClass, superClass); }

function RootRef_setPrototypeOf(o, p) { RootRef_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RootRef_setPrototypeOf(o, p); }





var RootRef_RootRef =
/*#__PURE__*/
function (_React$Component) {
  RootRef_inherits(RootRef, _React$Component);

  function RootRef() {
    RootRef_classCallCheck(this, RootRef);

    return RootRef_possibleConstructorReturn(this, RootRef_getPrototypeOf(RootRef).apply(this, arguments));
  }

  RootRef_createClass(RootRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ref = react_dom_default.a.findDOMNode(this);
      setRef(this.props.rootRef, this.ref);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var ref = react_dom_default.a.findDOMNode(this);

      if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
        if (prevProps.rootRef !== this.props.rootRef) {
          setRef(prevProps.rootRef, null);
        }

        this.ref = ref;
        setRef(this.props.rootRef, this.ref);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.ref = null;
      setRef(this.props.rootRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return RootRef;
}(react_default.a.Component);

function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

RootRef_RootRef.propTypes = {
  /**
   * The wrapped element.
   */
  children: prop_types_default.a.element.isRequired,

  /**
   * Provide a way to access the DOM node of the wrapped element.
   * You can provide a callback ref or a `React.createRef()` ref.
   */
  rootRef: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.object]).isRequired
};
/* harmony default export */ var Modal_RootRef = (RootRef_RootRef);
// CONCATENATED MODULE: ./src/shared/components/Modal/Modal.jsx
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1200;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: -1;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  opacity: 1;\n  touch-action: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Modal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Modal_typeof = function _typeof(obj) { return typeof obj; }; } else { Modal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Modal_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

function Modal_possibleConstructorReturn(self, call) { if (call && (Modal_typeof(call) === "object" || typeof call === "function")) { return call; } return Modal_assertThisInitialized(self); }

function Modal_getPrototypeOf(o) { Modal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Modal_getPrototypeOf(o); }

function Modal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Modal_setPrototypeOf(subClass, superClass); }

function Modal_setPrototypeOf(o, p) { Modal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Modal_setPrototypeOf(o, p); }

function Modal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Modal_inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    Modal_classCallCheck(this, Modal);

    _this = Modal_possibleConstructorReturn(this, Modal_getPrototypeOf(Modal).call(this));

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "mounted", false);

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleOpen", function () {
      var doc = ownerDocument(_this.mountNode); //const container = getContainer(this.props.container, doc.body);
      //this.props.manager.add(this, container);

      doc.addEventListener('keydown', _this.handleDocumentKeyDown);
      doc.addEventListener('focus', _this.enforceFocus, true);

      if (_this.dialogRef) {
        _this.handleOpened();
      }
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleOpened", function () {
      _this.autoFocus(); // Fix a bug on Chrome where the scroll isn't initially 0.


      _this.modalRef.scrollTop = 0;
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleClose", function () {
      var doc = ownerDocument(_this.mountNode);
      doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
      doc.removeEventListener('focus', _this.enforceFocus, true);

      _this.restoreLastFocus();
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleExited", function () {
      _this.setState({
        exited: true
      });
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleBackdropClick", function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.disableBackdropClick && _this.props.onClose) {
        _this.props.onClose(event, 'backdropClick');
      }
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleDocumentKeyDown", function (event) {
      // Ignore events that have been `event.preventDefault()` marked.
      if (keycode_default()(event) !== 'esc' || !_this.isTopModal() || event.defaultPrevented) {
        return;
      }

      if (_this.props.onEscapeKeyDown) {
        _this.props.onEscapeKeyDown(event);
      }

      if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
        _this.props.onClose(event, 'escapeKeyDown');
      }
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "enforceFocus", function () {
      // The Modal might not already be mounted.
      if (!_this.isTopModal() || _this.props.disableEnforceFocus || !_this.mounted || !_this.dialogRef) {
        return;
      }

      var currentActiveElement = ownerDocument(_this.mountNode).activeElement;

      if (!_this.dialogRef.contains(currentActiveElement)) {
        _this.dialogRef.focus();
      }
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handlePortalRef", function (ref) {
      _this.mountNode = ref ? ref.getMountNode() : ref;
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleModalRef", function (ref) {
      _this.modalRef = ref;
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "onRootRef", function (ref) {
      _this.dialogRef = ref;
    });

    _this.state = {
      exited: !props.open
    };
    return _this;
  }

  Modal_createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;

      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open && !this.props.open) {
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.lastFocus = ownerDocument(this.mountNode).activeElement;
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose();
      }
    }
  }, {
    key: "autoFocus",
    value: function autoFocus() {
      // We might render an empty child.
      if (this.props.disableAutoFocus || !this.dialogRef) {
        return;
      }

      var currentActiveElement = ownerDocument(this.mountNode).activeElement;

      if (!this.dialogRef.contains(currentActiveElement)) {
        if (!this.dialogRef.hasAttribute('tabIndex')) {
          this.dialogRef.setAttribute('tabIndex', -1);
        }

        this.lastFocus = currentActiveElement;
        this.dialogRef.focus();
      }
    }
  }, {
    key: "restoreLastFocus",
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus || !this.lastFocus) {
        return;
      } // Not all elements in IE 11 have a focus method.
      // Because IE 11 market share is low, we accept the restore focus being broken
      // and we silent the issue.


      if (this.lastFocus.focus) {
        this.lastFocus.focus();
      }

      this.lastFocus = null;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal() {
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          BackdropProps = _this$props.BackdropProps,
          children = _this$props.children,
          container = _this$props.container,
          disablePortal = _this$props.disablePortal,
          modalCss = _this$props.modalCss,
          hideBackdrop = _this$props.hideBackdrop,
          open = _this$props.open;
      var childProps = {};

      if (!open) {
        return null;
      }

      return react_default.a.createElement(Modal_Portal, {
        ref: this.handlePortalRef,
        container: container,
        disablePortal: disablePortal,
        onRendered: this.handleRendered
      }, react_default.a.createElement(StyledModal, {
        modalCss: modalCss,
        "data-mui-test": "Modal",
        ref: this.handleModalRef
      }, !hideBackdrop && react_default.a.createElement(Modal_Backdrop, _extends({
        onClick: this.handleBackdropClick
      }, BackdropProps)), react_default.a.createElement(Modal_RootRef, {
        rootRef: this.onRootRef
      }, react_default.a.cloneElement(children, childProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      }

      return null;
    }
  }]);

  return Modal;
}(react_default.a.Component);

Modal_Modal.propTypes = {
  /**
   * A backdrop component. This property enables custom backdrop rendering.
   */

  /**
   * Properties applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: prop_types_default.a.object,

  /**
   * A single child content element.
   */
  children: prop_types_default.a.element,

  /**
   * @ignore
   */
  className: prop_types_default.a.string,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: prop_types_default.a.bool,

  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: prop_types_default.a.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: prop_types_default.a.bool,

  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: prop_types_default.a.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types_default.a.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: prop_types_default.a.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: prop_types_default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: prop_types_default.a.bool,

  /**
   * A modal manager used to track and manage the state of open
   * Modals. This enables customizing how modals interact within a container.
   */
  manager: prop_types_default.a.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: prop_types_default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: prop_types_default.a.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: prop_types_default.a.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: prop_types_default.a.func,

  /**
   * If `true`, the modal is open.
   */
  open: prop_types_default.a.bool.isRequired
};
Modal_Modal.defaultProps = {
  BackdropComponent: Modal_Backdrop,
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disablePortal: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false
};
/* harmony default export */ var components_Modal_Modal = (Modal_Modal);

var Modal_Backdrop = function Backdrop(props) {
  var invisible = props.invisible,
      rest = Modal_objectWithoutProperties(props, ["invisible"]);

  return react_default.a.createElement(StyledBackdrop, _extends({
    "aria-hidden": "true",
    invisible: invisible
  }, rest));
};

var StyledBackdrop = styled_components_browser_esm["c" /* default */].div(_templateObject(), function (props) {
  return props.invisible ? 'transparent' : "rgba(0, 0, 0, 0.5)";
});
var StyledModal = styled_components_browser_esm["c" /* default */].div(_templateObject2(), function (props) {
  return props.modalCss && props.modalCss(props);
});
// CONCATENATED MODULE: ./src/shared/components/Modal/index.js

/* harmony default export */ var components_Modal = (components_Modal_Modal);
// CONCATENATED MODULE: ./src/shared/components/Popover/Popover.jsx
function Popover_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Popover_typeof = function _typeof(obj) { return typeof obj; }; } else { Popover_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Popover_typeof(obj); }

function Popover_extends() { Popover_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Popover_extends.apply(this, arguments); }

function Popover_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Popover_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Popover_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Popover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Popover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Popover_createClass(Constructor, protoProps, staticProps) { if (protoProps) Popover_defineProperties(Constructor.prototype, protoProps); if (staticProps) Popover_defineProperties(Constructor, staticProps); return Constructor; }

function Popover_possibleConstructorReturn(self, call) { if (call && (Popover_typeof(call) === "object" || typeof call === "function")) { return call; } return Popover_assertThisInitialized(self); }

function Popover_getPrototypeOf(o) { Popover_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Popover_getPrototypeOf(o); }

function Popover_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Popover_setPrototypeOf(subClass, superClass); }

function Popover_setPrototypeOf(o, p) { Popover_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Popover_setPrototypeOf(o, p); }

function Popover_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Popover_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Popover_templateObject() {
  var data = Popover_taggedTemplateLiteral(["\n  max-width: calc(100% - 32px);\n  maxHeight: calc(100% - 32px);\n  min-height: 16px;\n  min-width: 16px;\n  outline: none;\n  overflowX: hidden;\n  overflowY: auto;\n  position: absolute;\n  ", "\n"]);

  Popover_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Popover_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @inheritedComponent Modal







var StyledPopover = styled_components_browser_esm["c" /* default */].div(Popover_templateObject(), function (props) {
  return props.popoverCss && props.popoverCss(props);
});

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var Popover_Popover =
/*#__PURE__*/
function (_React$Component) {
  Popover_inherits(Popover, _React$Component);

  function Popover() {
    var _this;

    Popover_classCallCheck(this, Popover);

    _this = Popover_possibleConstructorReturn(this, Popover_getPrototypeOf(Popover).call(this));

    Popover_defineProperty(Popover_assertThisInitialized(Popover_assertThisInitialized(_this)), "handleGetOffsetTop", getOffsetTop);

    Popover_defineProperty(Popover_assertThisInitialized(Popover_assertThisInitialized(_this)), "handleGetOffsetLeft", getOffsetLeft);

    Popover_defineProperty(Popover_assertThisInitialized(Popover_assertThisInitialized(_this)), "setPositioningStyles", function (element) {
      var positioning = _this.getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }

      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }

      element.style.transformOrigin = positioning.transformOrigin;
    });

    Popover_defineProperty(Popover_assertThisInitialized(Popover_assertThisInitialized(_this)), "getPositioningStyle", function (element) {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          anchorReference = _this$props.anchorReference,
          marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

      var contentAnchorOffset = _this.getContentAnchorOffset(element);

      var elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      }; // Get the transform origin point on the element itself

      var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      } // Get the offset of of the anchoring element


      var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;

        top -= _diff;
        transformOrigin.vertical += _diff;
      } // Check if the horizontal axis needs shifting


      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;

        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;

        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: "".concat(top, "px"),
        left: "".concat(left, "px"),
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    });

    Popover_defineProperty(Popover_assertThisInitialized(Popover_assertThisInitialized(_this)), "handleEntering", function (element) {
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }

      _this.setPositioningStyles(element);
    });

    if (typeof window !== 'undefined') {
      _this.handleResize = function () {
        // Because we debounce the event, the open property might no longer be true
        // when the callback resolves.
        if (!_this.props.open) {
          return;
        }

        _this.setPositioningStyles(_this.paperRef);
      };
    }

    return _this;
  }

  Popover_createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.action) {
        this.props.action({
          updatePosition: this.handleResize
        });
      }
    }
  }, {
    key: "getAnchorOffset",
    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    value: function getAnchorOffset(contentAnchorOffset) {
      var _this$props2 = this.props,
          anchorEl = _this$props2.anchorEl,
          anchorOrigin = _this$props2.anchorOrigin; // If an anchor element wasn't provided, just use the parent body element of this Popover

      var anchorElement = getAnchorEl(anchorEl) || ownerDocument(this.paperRef).body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    } // Returns the vertical offset of inner content to anchor the transform on if provided

  }, {
    key: "getContentAnchorOffset",
    value: function getContentAnchorOffset(element) {
      var _this$props3 = this.props,
          getContentAnchorEl = _this$props3.getContentAnchorEl,
          anchorReference = _this$props3.anchorReference;
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        }
      }

      return contentAnchorOffset;
    } // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

  }, {
    key: "getTransformOrigin",
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;
      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          anchorEl = _this$props4.anchorEl,
          children = _this$props4.children,
          containerProp = _this$props4.container,
          open = _this$props4.open,
          popoverCss = _this$props4.popoverCss,
          other = Popover_objectWithoutProperties(_this$props4, ["anchorEl", "children", "container", "open", "popoverCss"]); // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container


      var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
      return react_default.a.createElement(components_Modal, Popover_extends({
        container: container,
        open: open,
        BackdropProps: {
          invisible: true
        }
      }, other), react_default.a.createElement(Popover_Transition, {
        onEntering: this.handleEntering
      }, react_default.a.createElement(StyledPopover, {
        popoverCss: popoverCss,
        "data-mui-test": "Popover",
        ref: function ref(_ref) {
          _this2.paperRef = react_dom_default.a.findDOMNode(_ref);
        }
      }, children)));
    }
  }]);

  return Popover;
}(react_default.a.Component);

Popover_Popover.propTypes = {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: prop_types_default.a.func,

  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types_default.a.shape({
    horizontal: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types_default.a.shape({
    left: prop_types_default.a.number.isRequired,
    top: prop_types_default.a.number.isRequired
  }),

  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types_default.a.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: prop_types_default.a.node,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),

  /**
   * The elevation of the popover.
   */
  elevation: prop_types_default.a.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` property.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: prop_types_default.a.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: prop_types_default.a.number,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: prop_types_default.a.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: prop_types_default.a.func,

  /**
   * If `true`, the popover is visible.
   */
  open: prop_types_default.a.bool.isRequired,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types_default.a.object,

  /**
   * @ignore
   */
  role: prop_types_default.a.string,

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types_default.a.shape({
    horizontal: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: prop_types_default.a.object
};
Popover_Popover.defaultProps = {
  anchorReference: 'anchorEl',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
/* harmony default export */ var components_Popover_Popover = (Popover_Popover);
// CONCATENATED MODULE: ./src/shared/components/Popover/index.js

/* harmony default export */ var components_Popover = (components_Popover_Popover);

// CONCATENATED MODULE: ./src/shared/components/Menu/MenuList.jsx
function MenuList_templateObject() {
  var data = MenuList_taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .24);\n  box-sizing: border-box;\n  max-height: calc(100% - 96px);\n  overflow: hidden;\n  position: relative;\n  padding:0;\n\n  ", "\n"]);

  MenuList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MenuList_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function MenuList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MenuList_typeof = function _typeof(obj) { return typeof obj; }; } else { MenuList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MenuList_typeof(obj); }

function MenuList_extends() { MenuList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuList_extends.apply(this, arguments); }

function MenuList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MenuList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuList_createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuList_defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuList_defineProperties(Constructor, staticProps); return Constructor; }

function MenuList_possibleConstructorReturn(self, call) { if (call && (MenuList_typeof(call) === "object" || typeof call === "function")) { return call; } return MenuList_assertThisInitialized(self); }

function MenuList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MenuList_getPrototypeOf(o) { MenuList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MenuList_getPrototypeOf(o); }

function MenuList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MenuList_setPrototypeOf(subClass, superClass); }

function MenuList_setPrototypeOf(o, p) { MenuList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MenuList_setPrototypeOf(o, p); }





var MenuList_MenuList =
/*#__PURE__*/
function (_React$Component) {
  MenuList_inherits(MenuList, _React$Component);

  function MenuList() {
    MenuList_classCallCheck(this, MenuList);

    return MenuList_possibleConstructorReturn(this, MenuList_getPrototypeOf(MenuList).apply(this, arguments));
  }

  MenuList_createClass(MenuList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = MenuList_objectWithoutProperties(_this$props, ["children"]);

      return react_default.a.createElement(StyledMenuList, MenuList_extends({
        role: "menu"
      }, other), children);
    }
  }]);

  return MenuList;
}(react_default.a.Component);

var StyledMenuList = styled_components_browser_esm["c" /* default */].div(MenuList_templateObject(), function (props) {
  return props.theme.colors.bgLight;
}, function (props) {
  return props.menuListCss && props.menuListCss(props);
});
MenuList_MenuList.propTypes = {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: prop_types_default.a.node,

  /**
   * @ignore
   */
  menuListCss: prop_types_default.a.func
};
/* harmony default export */ var Menu_MenuList = (MenuList_MenuList);
// CONCATENATED MODULE: ./src/shared/components/Menu/Menu.jsx
function Menu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Menu_typeof = function _typeof(obj) { return typeof obj; }; } else { Menu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Menu_typeof(obj); }

function Menu_extends() { Menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Menu_extends.apply(this, arguments); }

function Menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Menu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Menu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Menu_createClass(Constructor, protoProps, staticProps) { if (protoProps) Menu_defineProperties(Constructor.prototype, protoProps); if (staticProps) Menu_defineProperties(Constructor, staticProps); return Constructor; }

function Menu_possibleConstructorReturn(self, call) { if (call && (Menu_typeof(call) === "object" || typeof call === "function")) { return call; } return Menu_assertThisInitialized(self); }

function Menu_getPrototypeOf(o) { Menu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Menu_getPrototypeOf(o); }

function Menu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Menu_setPrototypeOf(subClass, superClass); }

function Menu_setPrototypeOf(o, p) { Menu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Menu_setPrototypeOf(o, p); }

function Menu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var POSITION = {
  vertical: 'top',
  horizontal: 'right'
};

var Menu_Menu =
/*#__PURE__*/
function (_React$Component) {
  Menu_inherits(Menu, _React$Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    Menu_classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Menu_possibleConstructorReturn(this, (_getPrototypeOf2 = Menu_getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Menu_defineProperty(Menu_assertThisInitialized(Menu_assertThisInitialized(_this)), "getContentAnchorEl", function () {
      if (_this.menuListRef.selectedItemRef) {
        return react_dom_default.a.findDOMNode(_this.menuListRef.selectedItemRef);
      }

      return react_dom_default.a.findDOMNode(_this.menuListRef).firstChild;
    });

    Menu_defineProperty(Menu_assertThisInitialized(Menu_assertThisInitialized(_this)), "handleMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    Menu_defineProperty(Menu_assertThisInitialized(Menu_assertThisInitialized(_this)), "handleEntering", function (element) {
      var menuList = react_dom_default.a.findDOMNode(_this.menuListRef); // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.

      if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
        var size = "".concat(scrollbarSize_default()(), "px");
        menuList.style['paddingRight'] = size;
        menuList.style.width = "calc(100% + ".concat(size, ")");
      }

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    });

    return _this;
  }

  Menu_createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          popoverCss = _this$props.popoverCss,
          menuListCss = _this$props.menuListCss,
          other = Menu_objectWithoutProperties(_this$props, ["children", "popoverCss", "menuListCss"]);

      return react_default.a.createElement(components_Popover, Menu_extends({
        popoverCss: popoverCss,
        getContentAnchorEl: this.getContentAnchorEl,
        onEntering: this.handleEntering,
        anchorOrigin: POSITION,
        transformOrigin: POSITION
      }, other), react_default.a.createElement(Menu_MenuList, {
        menuListCss: menuListCss,
        ref: this.handleMenuListRef
      }, children));
    }
  }]);

  return Menu;
}(react_default.a.Component);

Menu_Menu.propTypes = {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: prop_types_default.a.node,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`
   */
  onClose: prop_types_default.a.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: prop_types_default.a.func,

  /**
   * If `true`, the menu is visible.
   */
  open: prop_types_default.a.bool.isRequired,

  /**
   * `popoverCss` property applied to the [`Popover`] css.
   */
  popoverCss: prop_types_default.a.func,

  /**
   * `menuListCss` property applied to the [`MenuList`] css.
   */
  menuListCss: prop_types_default.a.func
};
/* harmony default export */ var components_Menu_Menu = (Menu_Menu);
// EXTERNAL MODULE: ./src/shared/components/TopNav/TopNavUserMenu/avatar.png
var TopNavUserMenu_avatar = __webpack_require__("9dLc");
var avatar_default = /*#__PURE__*/__webpack_require__.n(TopNavUserMenu_avatar);

// CONCATENATED MODULE: ./src/shared/components/TopNav/TopNavUserMenu/TopNavUserMenu.jsx
function TopNavUserMenu_templateObject() {
  var data = TopNavUserMenu_taggedTemplateLiteral(["\n  img {\n    display: inline-block;\n    float: right;\n    height: 24px;\n    margin: 24px 8px 24px 16px;\n  }\n\n  em {\n    font-size: 10px;\n    font-weight: 800;\n    font-style: normal;\n    margin: 0;\n  }\n"]);

  TopNavUserMenu_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function TopNavUserMenu_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function TopNavUserMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TopNavUserMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { TopNavUserMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TopNavUserMenu_typeof(obj); }

function TopNavUserMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TopNavUserMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TopNavUserMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) TopNavUserMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) TopNavUserMenu_defineProperties(Constructor, staticProps); return Constructor; }

function TopNavUserMenu_possibleConstructorReturn(self, call) { if (call && (TopNavUserMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return TopNavUserMenu_assertThisInitialized(self); }

function TopNavUserMenu_getPrototypeOf(o) { TopNavUserMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TopNavUserMenu_getPrototypeOf(o); }

function TopNavUserMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TopNavUserMenu_setPrototypeOf(subClass, superClass); }

function TopNavUserMenu_setPrototypeOf(o, p) { TopNavUserMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TopNavUserMenu_setPrototypeOf(o, p); }

function TopNavUserMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TopNavUserMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var TopNavUserMenu_TopNavUserMenu =
/*#__PURE__*/
function (_React$Component) {
  TopNavUserMenu_inherits(TopNavUserMenu, _React$Component);

  function TopNavUserMenu() {
    var _getPrototypeOf2;

    var _this;

    TopNavUserMenu_classCallCheck(this, TopNavUserMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = TopNavUserMenu_possibleConstructorReturn(this, (_getPrototypeOf2 = TopNavUserMenu_getPrototypeOf(TopNavUserMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    TopNavUserMenu_defineProperty(TopNavUserMenu_assertThisInitialized(TopNavUserMenu_assertThisInitialized(_this)), "setRef", function (e) {
      _this.btnRef = e;
    });

    return _this;
  }

  TopNavUserMenu_createClass(TopNavUserMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          onShow = _this$props.onShow,
          onClose = _this$props.onClose,
          open = _this$props.open,
          avatar = _this$props.avatar,
          anchorOrigin = _this$props.anchorOrigin,
          transformOrigin = _this$props.transformOrigin,
          children = _this$props.children,
          menuListCss = _this$props.menuListCss;
      var anchorEl = open ? this.btnRef : null;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(TopNavItem["a" /* default */], {
        style: {
          marginLeft: "auto"
        },
        onClick: onShow
      }, react_default.a.createElement(AvatarButton, {
        ref: this.setRef
      }, react_default.a.createElement("em", null, user), react_default.a.createElement("img", {
        src: avatar
      }))), react_default.a.createElement(components_Menu_Menu, {
        menuListCss: menuListCss,
        anchorOrigin: anchorOrigin,
        transformOrigin: transformOrigin,
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: onClose
      }, children));
    }
  }]);

  return TopNavUserMenu;
}(react_default.a.Component);

TopNavUserMenu_defineProperty(TopNavUserMenu_TopNavUserMenu, "displayName", 'TopNavMenu');

TopNavUserMenu_defineProperty(TopNavUserMenu_TopNavUserMenu, "defaultProps", {
  menuListCss: function menuListCss() {},
  avatar: avatar_default.a,
  open: false
});

TopNavUserMenu_defineProperty(TopNavUserMenu_TopNavUserMenu, "propTypes", {
  /** Callback fired when the component requests to be closed. */
  onClose: prop_types_default.a.func,

  /** Callback fired when the component requests to be open. */
  onShow: prop_types_default.a.func,

  /** If true the menu is visible */
  open: prop_types_default.a.bool
});

/* harmony default export */ var TopNav_TopNavUserMenu_TopNavUserMenu = (TopNavUserMenu_TopNavUserMenu);
var AvatarButton = styled_components_browser_esm["c" /* default */].div(TopNavUserMenu_templateObject());
// CONCATENATED MODULE: ./src/shared/components/TopNav/TopNavUserMenu/index.js

/* harmony default export */ var TopNav_TopNavUserMenu = (TopNav_TopNavUserMenu_TopNavUserMenu);
// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// CONCATENATED MODULE: ./src/shared/components/Menu/MenuItem.jsx
function MenuItem_templateObject() {
  var data = MenuItem_taggedTemplateLiteral(["\n  box-sizing: content-box;\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  overflow: hidden;\n  text-decoration: none;\n  white-space: nowrap;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n\n  ", "\n"]);

  MenuItem_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MenuItem_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function MenuItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { MenuItem_defineProperty(target, key, source[key]); }); } return target; }

function MenuItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defVals = {
  theme: theme["b" /* default */],
  fontSize: 1,
  px: [2, 2],
  minHeight: 5,
  color: theme["a" /* colors */].text,
  bg: theme["a" /* colors */].bgLight
};

var MenuItem_fromTheme = function fromTheme(props) {
  var values = MenuItem_objectSpread({}, defVals, props);

  return MenuItem_objectSpread({}, Object(index_esm["h" /* fontSize */])(values), Object(index_esm["o" /* space */])(values), Object(index_esm["m" /* minHeight */])(values), Object(index_esm["d" /* color */])(values), {
    fontWeight: values.theme.bold,
    "&:hover, &:focus": {
      background: values.theme.colors.bgSubtle,
      color: values.theme.colors.link
    }
  });
};

var MenuItem = styled_components_browser_esm["c" /* default */].div(MenuItem_templateObject(), MenuItem_fromTheme);
MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: prop_types_default.a.node
};
/* harmony default export */ var Menu_MenuItem = (MenuItem);
// EXTERNAL MODULE: ./src/shared/components/Icon/index.js
var components_Icon = __webpack_require__("893j");

// CONCATENATED MODULE: ./src/shared/components/Menu/MenuItemIcon.jsx
function MenuItemIcon_templateObject() {
  var data = MenuItemIcon_taggedTemplateLiteral(["\n  ", ":hover &,\n  ", ":focus & {\n    color: ", ";\n  }\n"]);

  MenuItemIcon_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MenuItemIcon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MenuItemIcon = Object(styled_components_browser_esm["c" /* default */])(components_Icon["w" /* default */])(MenuItemIcon_templateObject(), Menu_MenuItem, Menu_MenuItem, function (props) {
  return props.theme.colors.link;
});
MenuItemIcon.displayName = 'MenuItemIcon';
MenuItemIcon.defaultProps = {
  fontSize: 3,
  theme: theme["b" /* default */],
  mr: 1,
  color: 'text'
};
/* harmony default export */ var Menu_MenuItemIcon = (MenuItemIcon);
// EXTERNAL MODULE: ./src/shared/components/Button/index.js + 1 modules
var Button = __webpack_require__("frOc");

// CONCATENATED MODULE: ./src/app/components/AppBar/AppBar.jsx
function AppBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppBar_typeof = function _typeof(obj) { return typeof obj; }; } else { AppBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppBar_typeof(obj); }

function AppBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AppBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) AppBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) AppBar_defineProperties(Constructor, staticProps); return Constructor; }

function AppBar_possibleConstructorReturn(self, call) { if (call && (AppBar_typeof(call) === "object" || typeof call === "function")) { return call; } return AppBar_assertThisInitialized(self); }

function AppBar_getPrototypeOf(o) { AppBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AppBar_getPrototypeOf(o); }

function AppBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AppBar_setPrototypeOf(subClass, superClass); }

function AppBar_setPrototypeOf(o, p) { AppBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AppBar_setPrototypeOf(o, p); }

function AppBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AppBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var AppBar_AppBar =
/*#__PURE__*/
function (_React$Component) {
  AppBar_inherits(AppBar, _React$Component);

  function AppBar() {
    var _getPrototypeOf2;

    var _this;

    AppBar_classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AppBar_possibleConstructorReturn(this, (_getPrototypeOf2 = AppBar_getPrototypeOf(AppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AppBar_defineProperty(AppBar_assertThisInitialized(AppBar_assertThisInitialized(_this)), "state", {
      open: false
    });

    AppBar_defineProperty(AppBar_assertThisInitialized(AppBar_assertThisInitialized(_this)), "onShowMenu", function () {
      _this.setState({
        open: true
      });
    });

    AppBar_defineProperty(AppBar_assertThisInitialized(AppBar_assertThisInitialized(_this)), "onCloseMenu", function () {
      _this.setState({
        open: false
      });
    });

    AppBar_defineProperty(AppBar_assertThisInitialized(AppBar_assertThisInitialized(_this)), "onItemClick", function () {
      _this.onClose();
    });

    AppBar_defineProperty(AppBar_assertThisInitialized(AppBar_assertThisInitialized(_this)), "onLogout", function () {
      _this.props.onLogout();

      _this.onClose();
    });

    return _this;
  }

  AppBar_createClass(AppBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          username = _this$props.username,
          children = _this$props.children,
          topNavProps = _this$props.topNavProps;
      return react_default.a.createElement(components["l" /* TopNav */], topNavProps, children, react_default.a.createElement(TopNav_TopNavUserMenu, {
        menuListCss: AppBar_menuListCss,
        open: this.state.open,
        onShow: this.onShowMenu,
        onClose: this.onCloseMenu,
        user: username
      }, react_default.a.createElement(Menu_MenuItem, {
        py: 1,
        as: NavLink["a" /* default */],
        to: config["a" /* default */].routes.settingsAccount
      }, react_default.a.createElement(Menu_MenuItemIcon, {
        as: components_Icon["s" /* Profile */]
      }), "Account Settings"), react_default.a.createElement(Menu_MenuItem, null, react_default.a.createElement(Button["a" /* default */], {
        mt: 5,
        mb: 2,
        block: true,
        onClick: this.onLogout
      }, "Sign Out"))));
    }
  }]);

  return AppBar;
}(react_default.a.Component);

function mapStoreToProps() {
  return {
    username: flux_user["a" /* getters */].userName
  };
}

function mapActionsToProps() {
  return {
    onLogout: user_actions["g" /* logout */]
  };
}

var AppBar_menuListCss = function menuListCss() {
  return "\n  width: 250px;\n";
};

/* harmony default export */ var components_AppBar_AppBar = (Object(nuclear["b" /* connect */])(mapStoreToProps, mapActionsToProps)(AppBar_AppBar));
// CONCATENATED MODULE: ./src/shared/components/LogoButton/LogoButton.jsx
function LogoButton_templateObject() {
  var data = LogoButton_taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  border-bottom:  ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: ", ";\n  margin: 0;\n  outline: none;\n  padding: 0 16px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all .3s;\n  -webkit-font-smoothing: antialiased;\n  width: 240px;\n\n  &:hover {\n    background:  ", ";\n    border-bottom:  ", ";\n  }\n\n  &:active, {\n    background:  ", ";\n    color: ", ";\n    border-bottom:  ", ";\n  }\n\n  img {\n    display: inline-block;\n    float: left;\n    height: 24px;\n    margin: 24px 0 24px 16px;\n  }\n\n  em {\n    display: inline-block;\n    font-size: 10px;\n    font-weight: bold;\n    font-style: normal;\n    margin: 0;\n    opacity: .56;\n    text-transform: none;\n  }\n"]);

  LogoButton_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function LogoButton_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function LogoButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LogoButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LogoButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var LogoButton_LogoButton = function LogoButton(_ref) {
  var src = _ref.src,
      version = _ref.version,
      rest = LogoButton_objectWithoutProperties(_ref, ["src", "version"]);

  return react_default.a.createElement(StyledLogo, rest, react_default.a.createElement("img", {
    src: src
  }), react_default.a.createElement("em", null, version));
};

LogoButton_LogoButton.propTypes = {
  src: prop_types_default.a.string,
  version: prop_types_default.a.string
};
LogoButton_LogoButton.defaultProps = {
  src: '/',
  version: 'v#'
};
LogoButton_LogoButton.displayName = 'LogoButton';
var StyledLogo = styled_components_browser_esm["c" /* default */].a(LogoButton_templateObject(), function (props) {
  return props.active ? "4px solid ".concat(props.theme.colors.accent) : 'none';
}, function (props) {
  return props.active ? props.theme.colors.light : 'rgba(255, 255, 255, .56)';
}, function (props) {
  return props.active ? '68px' : '72px';
}, function (props) {
  return props.active ? props.theme.colors.bgSecondary : 'rgba(255, 255, 255, .06)';
}, function (props) {
  return props.active ? "4px solid ".concat(props.theme.colors.accent) : 'none';
}, function (props) {
  return props.active ? props.theme.colors.bgSecondary : props.theme.colors.bgPrimary;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.active ? "4px solid ".concat(props.theme.colors.accent) : 'none';
});
/* harmony default export */ var components_LogoButton_LogoButton = (LogoButton_LogoButton);
// CONCATENATED MODULE: ./src/shared/components/LogoButton/index.js

/* harmony default export */ var components_LogoButton = (components_LogoButton_LogoButton);
// EXTERNAL MODULE: ./src/shared/assets/images/teleport-logo.svg
var teleport_logo = __webpack_require__("aY1S");
var teleport_logo_default = /*#__PURE__*/__webpack_require__.n(teleport_logo);

// CONCATENATED MODULE: ./src/app/components/AppLogo/AppLogo.jsx








var AppLogo_AppLogo = function AppLogo(_ref) {
  var version = _ref.version;
  return react_default.a.createElement(components_LogoButton, {
    src: teleport_logo_default.a,
    version: version,
    as: NavLink["a" /* default */],
    to: config["a" /* default */].routes.app
  });
};

AppLogo_AppLogo.displayName = 'AppLogo';
AppLogo_AppLogo.propTypes = {
  version: prop_types_default.a.string
};
function withVersion() {
  var ver = Object(appStore["a" /* getStore */])().version || 'unknown version';
  return react_default.a.createElement(AppLogo_AppLogo, {
    version: ver
  });
}
// CONCATENATED MODULE: ./src/app/components/AppLogo/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_AppLogo = (withVersion);
// CONCATENATED MODULE: ./src/app/flux/sites/getters.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var SiteStatusEnum = {
  ONLINE: 'online',
  OFFLINE: 'offline'
};

var onlyOnline = function onlyOnline(s) {
  return s.status === SiteStatusEnum.ONLINE;
};

var getters_sites = [['tlpt_sites'], function (siteList) {
  return siteList.filter(onlyOnline).toArray();
}];
/* harmony default export */ var getters = ({
  sites: getters_sites
});
// CONCATENATED MODULE: ./src/app/components/Clusters/CardCluster/CardCluster.jsx
function CardCluster_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CardCluster_typeof = function _typeof(obj) { return typeof obj; }; } else { CardCluster_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CardCluster_typeof(obj); }

function _templateObject7() {
  var data = CardCluster_taggedTemplateLiteral(["\n  background: ", ";\n  box-sizing: border-box;\n  border-radius: 0 0 4px 4px;\n  clear: both;\n  font-size: 12px;\n  height: 48px;\n  line-height: 48px;\n  opacity: .56;\n  margin: 0;\n  padding: 0 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = CardCluster_taggedTemplateLiteral(["\n  border-radius: 4px;\n  padding: 40px;\n\n  ul {\n    font-size: 12px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    li {\n      color: ", ";\n      line-height: 24px;\n      margin: 0;\n    }\n\n    strong {\n      font-weight: bold;\n      color: ", ";\n      text-transform: uppercase;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = CardCluster_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  box-sizing: border-box;\n  float: left;\n  height: 72px;\n  margin: 0 16px 0 0;\n  padding: 16px;\n  text-align: center;\n  width: 72px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = CardCluster_taggedTemplateLiteral(["\n  opacity: .24;\n  right: 16px;\n  position: absolute;\n  top: 16px;\n  z-index: 2;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = CardCluster_taggedTemplateLiteral(["\n  background: ", ";\n  box-shadow: 0 2px 16px ", ";\n  border-radius: 200px;\n  border: 1px solid ", ";\n  height: 8px;\n  left: 16px;\n  position: absolute;\n  top: 24px;\n  width: 8px;\n  z-index: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function CardCluster_templateObject2() {
  var data = CardCluster_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px 4px 0 0;\n  padding: 16px 16px 8px 40px;\n  position: relative;\n  transition: all .3s;\n\n  h2 {\n    font-size: 12px;\n    line-height: 16px;\n    margin: 0;\n    text-transform: uppercase;\n  }\n\n  h3 {\n    font-size: 10px;\n    line-height: 16px;\n    margin: 0;\n    opacity: .56;\n    text-transform: uppercase;\n  }\n"]);

  CardCluster_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function CardCluster_templateObject() {
  var data = CardCluster_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .24);\n  cursor: pointer;\n  width: 408px;\n  padding: 0;\n  transition: all .3s;\n\n  &:hover {\n    box-shadow: 0 24px 64px rgba(0, 0, 0, .56);\n  }\n"]);

  CardCluster_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function CardCluster_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function CardCluster_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { CardCluster_defineProperty(target, key, source[key]); }); } return target; }

function CardCluster_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardCluster_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardCluster_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CardCluster_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CardCluster_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CardCluster_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardCluster_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardCluster_defineProperties(Constructor, staticProps); return Constructor; }

function CardCluster_possibleConstructorReturn(self, call) { if (call && (CardCluster_typeof(call) === "object" || typeof call === "function")) { return call; } return CardCluster_assertThisInitialized(self); }

function CardCluster_getPrototypeOf(o) { CardCluster_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardCluster_getPrototypeOf(o); }

function CardCluster_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CardCluster_setPrototypeOf(subClass, superClass); }

function CardCluster_setPrototypeOf(o, p) { CardCluster_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardCluster_setPrototypeOf(o, p); }

function CardCluster_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CardCluster_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var CardCluster_CardCluster =
/*#__PURE__*/
function (_React$Component) {
  CardCluster_inherits(CardCluster, _React$Component);

  function CardCluster() {
    var _getPrototypeOf2;

    var _this;

    CardCluster_classCallCheck(this, CardCluster);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = CardCluster_possibleConstructorReturn(this, (_getPrototypeOf2 = CardCluster_getPrototypeOf(CardCluster)).call.apply(_getPrototypeOf2, [this].concat(args)));

    CardCluster_defineProperty(CardCluster_assertThisInitialized(CardCluster_assertThisInitialized(_this)), "onClick", function () {
      _this.props.onClick(_this.props.name);
    });

    return _this;
  }

  CardCluster_createClass(CardCluster, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          nodeCount = _this$props.nodeCount,
          status = _this$props.status,
          connectedAt = _this$props.connectedAt,
          rest = CardCluster_objectWithoutProperties(_this$props, ["name", "nodeCount", "status", "connectedAt"]);

      var public_addr = 'wolfe.gravitational.com';
      var version = '#.#.#';

      var props = CardCluster_objectSpread({
        p: 4
      }, rest, {
        onClick: this.onClick
      });

      var lastSeen = null;

      if (status !== 'online') {
        lastSeen = react_default.a.createElement("div", null, "LAST SEEN: ", connectedAt);
      }

      return react_default.a.createElement(StyledCardCluster, props, react_default.a.createElement(ClusterHeader, null, react_default.a.createElement(ClusterStatus, {
        status: status
      }), react_default.a.createElement("h2", null, name), react_default.a.createElement("h3", null, nodeCount, " NODES"), react_default.a.createElement(ClusterSettings, null, react_default.a.createElement(components_Icon["l" /* Ellipsis */], null))), react_default.a.createElement(ClusterContent, null, react_default.a.createElement(ClusterIcon, null, react_default.a.createElement(components_Icon["j" /* Cluster */], {
        fontSize: "40px"
      })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement("strong", null, "STATUS: ", status)), react_default.a.createElement("li", null, public_addr), react_default.a.createElement("li", null, "Teleport v", version))), react_default.a.createElement(ClusterFooter, null, lastSeen));
    }
  }]);

  return CardCluster;
}(react_default.a.Component);
var StyledCardCluster = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(CardCluster_templateObject(), function (props) {
  return props.theme.colors.bgSecondary;
});
var ClusterHeader = styled_components_browser_esm["c" /* default */].header(CardCluster_templateObject2(), function (props) {
  return props.theme.colors.bgTertiary;
});
var ClusterStatus = styled_components_browser_esm["c" /* default */].div(_templateObject3(), function (props) {
  return props.status !== "online" ? props.theme.colors.error : props.theme.colors.success;
}, function (props) {
  return props.status !== "online" ? props.theme.colors.error : props.theme.colors.success;
}, function (props) {
  return props.theme.colors.bgTertiary;
});
var ClusterSettings = styled_components_browser_esm["c" /* default */].div(_templateObject4());
var ClusterIcon = styled_components_browser_esm["c" /* default */].div(_templateObject5(), function (props) {
  return props.theme.colors.bgQuaternary;
});
var ClusterContent = styled_components_browser_esm["c" /* default */].div(_templateObject6(), function (props) {
  return props.theme.colors.subtle;
}, function (props) {
  return props.theme.colors.light;
});
var ClusterFooter = styled_components_browser_esm["c" /* default */].footer(_templateObject7(), function (props) {
  return props.theme.colors.bgQuaternary;
});
/* harmony default export */ var Clusters_CardCluster_CardCluster = (CardCluster_CardCluster);
// CONCATENATED MODULE: ./src/app/components/Clusters/CardCluster/index.js

/* harmony default export */ var Clusters_CardCluster = (Clusters_CardCluster_CardCluster);
// EXTERNAL MODULE: ./node_modules/react-router/es/matchPath.js
var matchPath = __webpack_require__("SsKX");

// EXTERNAL MODULE: ./src/app/services/history.js
var services_history = __webpack_require__("yaYm");

// CONCATENATED MODULE: ./src/app/flux/sites/actions.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



function showCluster(clusterId) {
  var route = config["a" /* default */].getClusterUrl(clusterId);
  services_history["a" /* default */].push(route);
}
function changeCluster(clusterId) {
  var nodesUrl = config["a" /* default */].getClusterNodesUrl(clusterId);
  var sessionsUrl = config["a" /* default */].getClusterSessionsUrl(clusterId);
  var currentRoute = services_history["a" /* default */].original().location.pathname;
  var isNodeRoute = Object(matchPath["a" /* default */])(currentRoute, {
    path: config["a" /* default */].routes.clusterNodes,
    exact: true
  });
  var isSessionRoute = Object(matchPath["a" /* default */])(currentRoute, {
    path: config["a" /* default */].routes.clusterSessions,
    exact: true
  });

  if (isNodeRoute) {
    services_history["a" /* default */].push(nodesUrl);
  }

  if (isSessionRoute) {
    services_history["a" /* default */].push(sessionsUrl);
  }
}
// EXTERNAL MODULE: ./src/shared/components/Typography/index.js + 1 modules
var Typography = __webpack_require__("Ahhe");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("LvDl");

// CONCATENATED MODULE: ./src/app/components/InputSearch/InputSearch.jsx
function InputSearch_templateObject2() {
  var data = InputSearch_taggedTemplateLiteral(["\n  position: relative;\n  ", " {\n    left: ", "px;\n    opacity: .24;\n    position: absolute;\n    top: 25%;\n    ", "\n  }\n"]);

  InputSearch_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function InputSearch_templateObject() {
  var data = InputSearch_taggedTemplateLiteral(["\n  ", "\n"]);

  InputSearch_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function InputSearch_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function InputSearch_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { InputSearch_typeof = function _typeof(obj) { return typeof obj; }; } else { InputSearch_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return InputSearch_typeof(obj); }

function InputSearch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InputSearch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function InputSearch_createClass(Constructor, protoProps, staticProps) { if (protoProps) InputSearch_defineProperties(Constructor.prototype, protoProps); if (staticProps) InputSearch_defineProperties(Constructor, staticProps); return Constructor; }

function InputSearch_possibleConstructorReturn(self, call) { if (call && (InputSearch_typeof(call) === "object" || typeof call === "function")) { return call; } return InputSearch_assertThisInitialized(self); }

function InputSearch_getPrototypeOf(o) { InputSearch_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return InputSearch_getPrototypeOf(o); }

function InputSearch_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) InputSearch_setPrototypeOf(subClass, superClass); }

function InputSearch_setPrototypeOf(o, p) { InputSearch_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return InputSearch_setPrototypeOf(o, p); }

function InputSearch_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function InputSearch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






var InputSearch_InputSearch =
/*#__PURE__*/
function (_React$Component) {
  InputSearch_inherits(InputSearch, _React$Component);

  function InputSearch(props) {
    var _this;

    InputSearch_classCallCheck(this, InputSearch);

    _this = InputSearch_possibleConstructorReturn(this, InputSearch_getPrototypeOf(InputSearch).call(this, props));

    InputSearch_defineProperty(InputSearch_assertThisInitialized(InputSearch_assertThisInitialized(_this)), "onBlur", function () {
      _this.setState({
        isFocused: false
      });
    });

    InputSearch_defineProperty(InputSearch_assertThisInitialized(InputSearch_assertThisInitialized(_this)), "onFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    InputSearch_defineProperty(InputSearch_assertThisInitialized(InputSearch_assertThisInitialized(_this)), "onChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      _this.debouncedNotify();
    });

    _this.debouncedNotify = Object(lodash["debounce"])(function () {
      _this.props.onChange(_this.state.value);
    }, 200);
    var value = props.value || '';
    _this.state = {
      value: value,
      isFocused: false
    };
    return _this;
  }

  InputSearch_createClass(InputSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // set cursor
      var $el = react_dom_default.a.findDOMNode(this);

      if ($el) {
        var $input = $el.querySelector('input');
        var length = $input.value.length;
        $input.selectionEnd = length;
        $input.selectionStart = length;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$autoFocus = this.props.autoFocus,
          autoFocus = _this$props$autoFocus === void 0 ? false : _this$props$autoFocus;
      var isFocused = this.state.isFocused;
      return react_default.a.createElement(SearchField, {
        isFocused: isFocused
      }, react_default.a.createElement(components_Icon["q" /* Magnifier */], {
        fontSize: 4
      }), react_default.a.createElement(Input, {
        placeholder: "SEARCH...",
        autoFocus: autoFocus,
        value: this.state.value,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }]);

  return InputSearch;
}(react_default.a.Component);

function InputSearch_fromTheme(props) {
  return {
    background: props.theme.colors.bgSecondary,
    border: 'none',
    borderRadius: 200,
    color: props.theme.colors.light,
    fontSize: props.theme.fontSizes[2],
    height: props.theme.space[5],
    outline: 'none',
    paddingLeft: props.theme.space[5],
    paddingRight: props.theme.space[2],
    '&:focus, &:active': {
      background: props.theme.colors.bgLight,
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, .24)',
      color: props.theme.colors.link
    },
    '&::placeholder': {
      color: props.theme.colors.subtle,
      fontSize: props.theme.fontSizes[1]
    }
  };
}

var Input = styled_components_browser_esm["c" /* default */].input(InputSearch_templateObject(), InputSearch_fromTheme);
var SearchField = styled_components_browser_esm["c" /* default */].div(InputSearch_templateObject2(), components_Icon["w" /* default */], function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.isFocused && {
    color: props.theme.colors.bgSecondary
  };
});
/* harmony default export */ var components_InputSearch_InputSearch = (InputSearch_InputSearch);
// CONCATENATED MODULE: ./src/app/components/InputSearch/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_InputSearch = (components_InputSearch_InputSearch);
// CONCATENATED MODULE: ./src/app/components/Header/Header.jsx






var Header_Header = function Header(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$onSearchChange = _ref.onSearchChange,
      onSearchChange = _ref$onSearchChange === void 0 ? null : _ref$onSearchChange,
      _ref$searchValue = _ref.searchValue,
      searchValue = _ref$searchValue === void 0 ? '' : _ref$searchValue;
  var $search = null;

  if (onSearchChange) {
    $search = react_default.a.createElement(components_InputSearch, {
      autoFocus: true,
      value: searchValue,
      onChange: onSearchChange
    });
  }

  return react_default.a.createElement(components["e" /* Flex */], null, react_default.a.createElement(Typography["a" /* default */].h1, {
    mr: 5,
    mb: 0
  }, title), $search);
};

Header_Header.propTypes = {
  title: prop_types_default.a.string,
  searchValue: prop_types_default.a.string
};
Header_Header.displayName = 'Header';
/* harmony default export */ var components_Header_Header = (Header_Header);
// CONCATENATED MODULE: ./src/app/components/Header/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_Header = (components_Header_Header);
// CONCATENATED MODULE: ./src/app/components/Clusters/Clusters.jsx
function Clusters_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Clusters_typeof = function _typeof(obj) { return typeof obj; }; } else { Clusters_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Clusters_typeof(obj); }

function Clusters_templateObject() {
  var data = Clusters_taggedTemplateLiteral(["\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n"]);

  Clusters_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Clusters_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Clusters_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clusters_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clusters_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clusters_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clusters_defineProperties(Constructor, staticProps); return Constructor; }

function Clusters_possibleConstructorReturn(self, call) { if (call && (Clusters_typeof(call) === "object" || typeof call === "function")) { return call; } return Clusters_assertThisInitialized(self); }

function Clusters_getPrototypeOf(o) { Clusters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Clusters_getPrototypeOf(o); }

function Clusters_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Clusters_setPrototypeOf(subClass, superClass); }

function Clusters_setPrototypeOf(o, p) { Clusters_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Clusters_setPrototypeOf(o, p); }

function Clusters_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Clusters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/










var Clusters_Clusters =
/*#__PURE__*/
function (_React$Component) {
  Clusters_inherits(Clusters, _React$Component);

  function Clusters() {
    var _getPrototypeOf2;

    var _this;

    Clusters_classCallCheck(this, Clusters);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Clusters_possibleConstructorReturn(this, (_getPrototypeOf2 = Clusters_getPrototypeOf(Clusters)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Clusters_defineProperty(Clusters_assertThisInitialized(Clusters_assertThisInitialized(_this)), "onSelectCluster", function (clusterId) {
      _this.props.onSelectCluster(clusterId);
    });

    return _this;
  }

  Clusters_createClass(Clusters, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var clusters = this.props.clusters;
      var $clusters = clusters.map(function (cluster, index) {
        var name = cluster.name,
            nodeCount = cluster.nodeCount,
            connectedAt = cluster.connectedAt,
            status = cluster.status;
        var key = "".concat(name, "-").concat(index);
        return react_default.a.createElement(Clusters_CardCluster, {
          m: 2,
          key: key,
          onClick: _this2.onSelectCluster,
          nodeCount: nodeCount,
          name: name,
          connectedAt: connectedAt,
          status: status
        });
      });
      return react_default.a.createElement(components["e" /* Flex */], {
        flexDirection: "column",
        height: "100%"
      }, react_default.a.createElement(components_AppBar_AppBar, null, react_default.a.createElement(components_AppLogo, null)), react_default.a.createElement(Content, null, react_default.a.createElement(components["b" /* Box */], {
        mx: 4,
        mb: 3,
        mt: "1"
      }, react_default.a.createElement(components_Header, {
        title: "Clusters"
      })), react_default.a.createElement(components["e" /* Flex */], {
        flexWrap: "wrap",
        mx: 2
      }, $clusters)));
    }
  }]);

  return Clusters;
}(react_default.a.Component);

function Clusters_mapStoreToProps() {
  return {
    clusters: getters.sites
  };
}

function Clusters_mapActionsToProps() {
  return {
    onSelectCluster: showCluster
  };
}

var Content = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(Clusters_templateObject());
/* harmony default export */ var components_Clusters_Clusters = (Object(nuclear["b" /* connect */])(Clusters_mapStoreToProps, Clusters_mapActionsToProps)(Clusters_Clusters));
// CONCATENATED MODULE: ./src/app/components/Clusters/index.js

/* harmony default export */ var components_Clusters = (components_Clusters_Clusters);
// CONCATENATED MODULE: ./src/app/flux/terminal/getters.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* harmony default export */ var terminal_getters = ({
  store: ['tlpt_terminal']
});
// EXTERNAL MODULE: ./src/app/flux/fileTransfer/index.js + 1 modules
var fileTransfer = __webpack_require__("JeNE");

// EXTERNAL MODULE: ./src/app/flux/nodes/nodeStore.js
var nodeStore = __webpack_require__("cxFd");

// EXTERNAL MODULE: ./src/app/lib/term/enums.js
var enums = __webpack_require__("5vg5");

// CONCATENATED MODULE: ./src/app/lib/objectUtils.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
var PORT_REGEX = /:\d+$/;
function parseIp(addr) {
  addr = addr || '';
  return addr.replace(PORT_REGEX, '');
}
function isMatch(obj, searchValue, _ref) {
  var searchableProps = _ref.searchableProps,
      cb = _ref.cb;
  searchValue = searchValue.toLocaleUpperCase();
  var propNames = searchableProps || Object.getOwnPropertyNames(obj);

  for (var i = 0; i < propNames.length; i++) {
    var targetValue = obj[propNames[i]];

    if (targetValue) {
      if (typeof cb === 'function') {
        var result = cb(targetValue, searchValue, propNames[i]);

        if (result === true) {
          return result;
        }
      }

      if (targetValue.toString().toLocaleUpperCase().indexOf(searchValue) !== -1) {
        return true;
      }
    }
  }

  return false;
}
function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
// CONCATENATED MODULE: ./src/app/flux/sessions/getters.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






/*
** Getters
*/

var activeSessionList = function activeSessionList(clusterId) {
  return [['tlpt_sessions_active'], function (sessionList) {
    sessionList = sessionList.filter(function (n) {
      return n.get('siteId') === clusterId;
    });
    return sessionList.valueSeq().map(createActiveListItem).toJS();
  }];
};

var storedSessionList = function storedSessionList(clusterId) {
  return [['tlpt_sessions_archived'], function (sessionList) {
    sessionList = sessionList.filter(function (n) {
      return n.get('siteId') === clusterId;
    });
    return sessionList.valueSeq().map(createStoredListItem).toJS();
  }];
};

var getters_nodeIpById = function nodeIpById(sid) {
  return ['tlpt_sessions_events', sid, enums["a" /* EventTypeEnum */].START, 'addr.local'];
};

var storedSessionById = function storedSessionById(sid) {
  return ['tlpt_sessions_archived', sid];
};

var activeSessionById = function activeSessionById(sid) {
  return ['tlpt_sessions_active', sid];
};

var activePartiesById = function activePartiesById(sid) {
  return [['tlpt_sessions_active', sid, 'parties'], function (parties) {
    return parties ? parties.toJS() : [];
  }];
}; // creates a list of stored sessions which involves collecting the data from other stores


function createStoredListItem(session) {
  var sid = session.get('id');
  var siteId = session.siteId,
      nodeIp = session.nodeIp,
      created = session.created,
      server_id = session.server_id,
      parties = session.parties,
      last_active = session.last_active;
  var duration = moment_default()(last_active).diff(created);
  var nodeDisplayText = getNodeIpDisplayText(siteId, server_id, nodeIp);
  var createdDisplayText = getCreatedDisplayText(created);
  var sessionUrl = config["a" /* default */].getPlayerUrl({
    sid: sid,
    siteId: siteId
  });
  return {
    active: false,
    parties: createParties(parties),
    sid: sid,
    duration: duration,
    siteId: siteId,
    sessionUrl: sessionUrl,
    created: created,
    createdDisplayText: createdDisplayText,
    nodeDisplayText: nodeDisplayText,
    lastActive: last_active
  };
} // creates a list of active sessions which involves collecting the data from other stores


function createActiveListItem(session) {
  var sid = session.get('id');
  var parties = createParties(session.parties);
  var siteId = session.siteId,
      created = session.created,
      login = session.login,
      last_active = session.last_active,
      server_id = session.server_id;
  var duration = moment_default()(last_active).diff(created);
  var nodeIp = reactor["a" /* default */].evaluate(getters_nodeIpById(sid));
  var nodeDisplayText = getNodeIpDisplayText(siteId, server_id, nodeIp);
  var createdDisplayText = getCreatedDisplayText(created);
  var sessionUrl = config["a" /* default */].getTerminalLoginUrl({
    sid: sid,
    siteId: siteId,
    login: login,
    serverId: server_id
  });
  return {
    active: true,
    parties: parties,
    sid: sid,
    duration: duration,
    siteId: siteId,
    sessionUrl: sessionUrl,
    created: created,
    createdDisplayText: createdDisplayText,
    nodeDisplayText: nodeDisplayText,
    lastActive: last_active
  };
}

function createParties(partyRecs) {
  var parties = partyRecs.toJS();
  return parties.map(function (p) {
    var ip = parseIp(p.serverIp);
    return "".concat(p.user, " [").concat(ip, "]");
  });
}

function getCreatedDisplayText(date) {
  return moment_default()(date).format(config["a" /* default */].displayDateFormat);
}

function getNodeIpDisplayText(siteId, serverId, serverIp) {
  var server = Object(nodeStore["b" /* getNodeStore */])().findServer(serverId);
  var ipAddress = parseIp(serverIp);
  var displayText = ipAddress;

  if (server && server.hostname) {
    displayText = server.hostname;

    if (ipAddress) {
      displayText = "".concat(displayText, " [").concat(ipAddress, "]");
    }
  }

  return displayText;
}

/* harmony default export */ var sessions_getters = ({
  storedSessionList: storedSessionList,
  activeSessionList: activeSessionList,
  activeSessionById: activeSessionById,
  activePartiesById: activePartiesById,
  storedSessionById: storedSessionById,
  createStoredListItem: createStoredListItem
});
// EXTERNAL MODULE: ./src/app/flux/terminal/actionTypes.js
var terminal_actionTypes = __webpack_require__("PxPv");

// EXTERNAL MODULE: ./src/app/flux/sshHistory/actionTypes.js
var sshHistory_actionTypes = __webpack_require__("gMNw");

// CONCATENATED MODULE: ./src/app/flux/sshHistory/actions.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var actions_saveSshLogin = function saveSshLogin(_ref) {
  var login = _ref.login,
      serverId = _ref.serverId,
      siteId = _ref.siteId;
  reactor["a" /* default */].dispatch(sshHistory_actionTypes["a" /* ADD_ITEM */], {
    login: login,
    serverId: serverId,
    siteId: siteId
  });
};
// CONCATENATED MODULE: ./src/app/flux/terminal/actions.js
function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { actions_defineProperty(target, key, source[key]); }); } return target; }

function actions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/









var terminal_actions_logger = logger["a" /* default */].create('flux/terminal');

var actions_setStatus = function setStatus(json) {
  return reactor["a" /* default */].dispatch(terminal_actionTypes["c" /* TLPT_TERMINAL_SET_STATUS */], json);
};

function initStore(params) {
  var serverId = params.serverId;
  var server = Object(nodeStore["b" /* getNodeStore */])().findServer(serverId);
  var hostname = server ? server.hostname : '';
  reactor["a" /* default */].dispatch(terminal_actionTypes["b" /* TLPT_TERMINAL_INIT */], actions_objectSpread({}, params, {
    hostname: hostname
  }));
}

function createSid(login, siteId) {
  var data = {
    session: {
      terminal_params: {
        w: 45,
        h: 5
      },
      login: login
    }
  };
  return api["a" /* default */].post(config["a" /* default */].api.getSiteSessionUrl(siteId), data);
}

function initTerminal(params) {
  terminal_actions_logger.info('attempt to open a terminal', params);
  var sid = params.sid,
      login = params.login,
      siteId = params.siteId;
  actions_setStatus({
    isLoading: true
  });

  if (sid) {
    var activeSession = reactor["a" /* default */].evaluate(sessions_getters.activeSessionById(sid));

    if (activeSession) {
      // init store with existing sid
      initStore(params);
      actions_setStatus({
        isReady: true
      });
    } else {
      actions_setStatus({
        isNotFound: true
      });
    }

    return;
  }

  createSid(login, siteId).then(function (json) {
    var sid = json.session.id;

    var newRouteParams = actions_objectSpread({}, params, {
      sid: sid
    });

    initStore(newRouteParams);
    actions_setStatus({
      isReady: true
    });
    updateRoute(newRouteParams);
    actions_saveSshLogin(params);
  }).catch(function (err) {
    actions_setStatus({
      isError: true,
      errorText: err.message
    });
  });
}
function actions_close(clusterId) {
  reactor["a" /* default */].dispatch(terminal_actionTypes["a" /* TLPT_TERMINAL_CLOSE */]);
  var clusterUrl = config["a" /* default */].getClusterNodesUrl(clusterId);
  services_history["a" /* default */].push(clusterUrl);
}
function updateRoute(newRouteParams) {
  var routeUrl = config["a" /* default */].getTerminalLoginUrl(newRouteParams);
  services_history["a" /* default */].push(routeUrl);
}
// EXTERNAL MODULE: ./src/app/flux/userAcl/store.js
var userAcl_store = __webpack_require__("kTdT");

// CONCATENATED MODULE: ./src/app/flux/player/actions.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



function actions_open(siteId, sid) {
  var routeUrl = config["a" /* default */].getPlayerUrl({
    siteId: siteId,
    sid: sid
  });
  services_history["a" /* default */].push(routeUrl);
}
function player_actions_close(clusterId) {
  var canListSessions = Object(userAcl_store["b" /* getAcl */])().getSessionAccess().read;
  var clusterSessionUrl = config["a" /* default */].getClusterSessionsUrl(clusterId);
  var redirect = canListSessions ? clusterSessionUrl : config["a" /* default */].routes.app;
  services_history["a" /* default */].push(redirect);
}
// EXTERNAL MODULE: ./src/app/flux/fileTransfer/actionTypes.jsx
var fileTransfer_actionTypes = __webpack_require__("Bx5D");

// CONCATENATED MODULE: ./src/app/flux/fileTransfer/actions.js
function fileTransfer_actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { fileTransfer_actions_defineProperty(target, key, source[key]); }); } return target; }

function fileTransfer_actions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


function addFile(json) {
  reactor["a" /* default */].dispatch(fileTransfer_actionTypes["a" /* ADD */], json);
}
function removeFile(id) {
  reactor["a" /* default */].dispatch(fileTransfer_actionTypes["d" /* REMOVE */], id);
}
function updateStatus(json) {
  reactor["a" /* default */].dispatch(fileTransfer_actionTypes["e" /* UPDATE_STATUS */], json);
}
function openUploadDialog(params) {
  var json = fileTransfer_actions_objectSpread({}, params, {
    isUpload: true
  });

  reactor["a" /* default */].dispatch(fileTransfer_actionTypes["c" /* OPEN */], json);
}
function openDownloadDialog(params) {
  var json = fileTransfer_actions_objectSpread({}, params, {
    isUpload: false
  });

  reactor["a" /* default */].dispatch(fileTransfer_actionTypes["c" /* OPEN */], json);
}
function closeDialog() {
  reactor["a" /* default */].dispatch(fileTransfer_actionTypes["b" /* CLOSE */], {});
}
// CONCATENATED MODULE: ./src/app/components/Terminal/Elements/CloseButton.jsx
function CloseButton_templateObject() {
  var data = CloseButton_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 2px;\n  border: none;\n  cursor: pointer;\n  height: 16px;\n  outline: none;\n  padding: 0;\n  width: 16px;\n  &:hover {\n    background: ", ";\n  }\n  ", "\n"]);

  CloseButton_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function CloseButton_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function CloseButton_extends() { CloseButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CloseButton_extends.apply(this, arguments); }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




function CloseButton(props) {
  return react_default.a.createElement(StyledCloseButton, CloseButton_extends({
    title: "Close"
  }, props), react_default.a.createElement(components_Icon["i" /* Close */], null));
}
var StyledCloseButton = styled_components_browser_esm["c" /* default */].button(CloseButton_templateObject(), function (props) {
  return props.theme.colors.errorDark;
}, function (props) {
  return props.theme.colors.error;
}, index_esm["o" /* space */]);
// CONCATENATED MODULE: ./src/app/components/Terminal/Elements/index.js


// CONCATENATED MODULE: ./src/app/components/Terminal/ActionBar/ActionBar.jsx
function ActionBar_templateObject() {
  var data = ActionBar_taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  border-radius: 2px;\n  width: 24px;\n  height: 32px;\n  color: ", ";\n  cursor: pointer;\n  font-size:  ", "px;\n  display: flex;\n  opacity: .87;\n  outline: none;\n  align-items: center;\n  justify-content: center;\n  ", ";\n"]);

  ActionBar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ActionBar_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ActionBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionBar_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionBar_typeof(obj); }

function ActionBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionBar_defineProperties(Constructor, staticProps); return Constructor; }

function ActionBar_possibleConstructorReturn(self, call) { if (call && (ActionBar_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionBar_assertThisInitialized(self); }

function ActionBar_getPrototypeOf(o) { ActionBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionBar_getPrototypeOf(o); }

function ActionBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionBar_setPrototypeOf(subClass, superClass); }

function ActionBar_setPrototypeOf(o, p) { ActionBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionBar_setPrototypeOf(o, p); }

function ActionBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var ActionBar_ActionBar =
/*#__PURE__*/
function (_React$Component) {
  ActionBar_inherits(ActionBar, _React$Component);

  function ActionBar() {
    var _getPrototypeOf2;

    var _this;

    ActionBar_classCallCheck(this, ActionBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ActionBar_possibleConstructorReturn(this, (_getPrototypeOf2 = ActionBar_getPrototypeOf(ActionBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ActionBar_defineProperty(ActionBar_assertThisInitialized(ActionBar_assertThisInitialized(_this)), "close", function () {
      _this.props.onClose && _this.props.onClose();
    });

    ActionBar_defineProperty(ActionBar_assertThisInitialized(ActionBar_assertThisInitialized(_this)), "openUploadDialog", function () {
      _this.openFileTransferDialog(true);
    });

    ActionBar_defineProperty(ActionBar_assertThisInitialized(ActionBar_assertThisInitialized(_this)), "openDownloadDialog", function () {
      _this.openFileTransferDialog(false);
    });

    return _this;
  }

  ActionBar_createClass(ActionBar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isFileTransferDialogOpen = _this$props.isFileTransferDialogOpen,
          onOpenUploadDialog = _this$props.onOpenUploadDialog,
          onOpenDownloadDialog = _this$props.onOpenDownloadDialog,
          title = _this$props.title;
      return react_default.a.createElement(components["e" /* Flex */], {
        height: "32px",
        my: 1,
        alignItems: "flex-start"
      }, react_default.a.createElement(ActionBar_Tab, null, react_default.a.createElement(CloseButton, {
        mr: 1,
        onClick: this.close
      }), react_default.a.createElement(components["k" /* Text */], {
        maxWidth: 2,
        fontSize: 1
      }, title)), react_default.a.createElement(IconButton, {
        title: "Download files",
        disabled: isFileTransferDialogOpen,
        onClick: onOpenDownloadDialog
      }, react_default.a.createElement(components_Icon["k" /* Download */], null)), react_default.a.createElement(IconButton, {
        title: "Upload files",
        disabled: isFileTransferDialogOpen,
        onClick: onOpenUploadDialog
      }, react_default.a.createElement(components_Icon["u" /* Upload */], null)));
    }
  }]);

  return ActionBar;
}(react_default.a.Component);


ActionBar_ActionBar.propTypes = {
  isFileTransferDialogOpen: prop_types_default.a.bool.isRequired,
  onClose: prop_types_default.a.func.isRequired,
  onOpenDownloadDialog: prop_types_default.a.func.isRequired,
  onOpenUploadDialog: prop_types_default.a.func.isRequired,
  title: prop_types_default.a.string.isRequired
};

var isOpen = function isOpen(props) {
  if (props.disabled) {
    return {
      opacity: 0.24,
      cursor: "not-allowed"
    };
  }
};

var ActionBar_Tab = function Tab(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(components["e" /* Flex */], {
    mr: 2,
    py: 1,
    children: children
  });
};

var IconButton = styled_components_browser_esm["c" /* default */].button(ActionBar_templateObject(), function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.fontSizes[4];
}, isOpen);
// EXTERNAL MODULE: ./node_modules/xterm/dist/xterm.js
var xterm = __webpack_require__("Q92V");
var xterm_default = /*#__PURE__*/__webpack_require__.n(xterm);

// EXTERNAL MODULE: ./node_modules/events/events.js
var events_events = __webpack_require__("+qE3");

// EXTERNAL MODULE: ./node_modules/buffer/index.js
var buffer = __webpack_require__("tjlA");
var buffer_default = /*#__PURE__*/__webpack_require__.n(buffer);

// CONCATENATED MODULE: ./src/app/lib/term/protobuf.js
function protobuf_slicedToArray(arr, i) { return protobuf_arrayWithHoles(arr) || protobuf_iterableToArrayLimit(arr, i) || protobuf_nonIterableRest(); }

function protobuf_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function protobuf_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function protobuf_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function protobuf_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function protobuf_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function protobuf_createClass(Constructor, protoProps, staticProps) { if (protoProps) protobuf_defineProperties(Constructor.prototype, protoProps); if (staticProps) protobuf_defineProperties(Constructor, staticProps); return Constructor; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * convenience constant equal to 2^32.
 */

var TWO_TO_32 = 4294967296;
var MessageTypeEnum = {
  RAW: 'r',
  AUDIT: 'a',
  SESSION_END: 'c',
  RESIZE: 'w'
};
var messageFields = {
  payload: {
    code: 0x1a
  },
  version: {
    code: 10,
    length: 1,
    values: {
      v1: 49
    }
  },
  type: {
    length: 1,
    code: 0x12,
    values: {
      resize: MessageTypeEnum.RESIZE.charCodeAt(0),
      data: MessageTypeEnum.RAW.charCodeAt(0),
      event: MessageTypeEnum.AUDIT.charCodeAt(0),
      close: MessageTypeEnum.SESSION_END.charCodeAt(0)
    }
  }
};
var protobuf_Protobuf =
/*#__PURE__*/
function () {
  function Protobuf() {
    protobuf_classCallCheck(this, Protobuf);
  }

  protobuf_createClass(Protobuf, [{
    key: "encode",
    value: function encode(messageType, message) {
      var buffer = [];
      this.encodeVersion(buffer);
      this.encodeType(buffer, messageType);
      this.encodePayload(buffer, message);
      return buffer;
    }
  }, {
    key: "encodeResizeMessage",
    value: function encodeResizeMessage(message) {
      return this.encode(messageFields.type.values.resize, message);
    }
  }, {
    key: "encodeRawMessage",
    value: function encodeRawMessage(message) {
      return this.encode(messageFields.type.values.data, message);
    }
  }, {
    key: "encodePayload",
    value: function encodePayload(buffer, text) {
      // set type
      buffer.push(messageFields.payload.code); // encode payload

      var uintArray = this._textToUintArray(text);

      this.encodeVarint(buffer, uintArray.length);

      for (var i = 0; i < uintArray.length; i++) {
        buffer.push(uintArray[i]);
      }
    }
  }, {
    key: "encodeVersion",
    value: function encodeVersion(buffer) {
      buffer[0] = messageFields.version.code;
      buffer[1] = messageFields.version.length;
      buffer[2] = messageFields.version.values.v1;
    }
  }, {
    key: "encodeType",
    value: function encodeType(buffer, typeValue) {
      buffer[3] = messageFields.type.code;
      buffer[4] = messageFields.type.length;
      buffer[5] = typeValue;
    }
  }, {
    key: "encodeVarint",
    value: function encodeVarint(buffer, value) {
      var lowBits = value >>> 0;
      var highBits = Math.floor((value - lowBits) / TWO_TO_32) >>> 0;

      while (highBits > 0 || lowBits > 127) {
        buffer.push(lowBits & 0x7f | 0x80);
        lowBits = (lowBits >>> 7 | highBits << 25) >>> 0;
        highBits = highBits >>> 7;
      }

      buffer.push(lowBits);
    }
  }, {
    key: "decode",
    value: function decode(uintArray) {
      var version = this.decodeVersion(uintArray);
      var type = this.decodeType(uintArray);
      var payload = this.decodePayload(uintArray);
      return {
        version: version,
        type: type,
        payload: payload
      };
    }
  }, {
    key: "decodeVersion",
    value: function decodeVersion(uintArray) {
      if (uintArray[0] === messageFields.version.code && uintArray[1] === messageFields.version.length) {
        return String.fromCharCode(uintArray[2]);
      }

      throw new Error("invalid version field");
    }
  }, {
    key: "decodeType",
    value: function decodeType(uintArray) {
      if (uintArray[3] === messageFields.type.code && uintArray[4] === messageFields.type.length) {
        return String.fromCharCode(uintArray[5]);
      }

      throw new Error("invalid type field");
    }
  }, {
    key: "decodePayload",
    value: function decodePayload(uintArray) {
      if (!uintArray[6]) {
        return "";
      }

      if (uintArray[6] !== messageFields.payload.code) {
        throw new Error("invalid payload field");
      }

      var rawPayloadField = uintArray.slice(7);

      var _this$decodeVarint = this.decodeVarint(rawPayloadField),
          _this$decodeVarint2 = protobuf_slicedToArray(_this$decodeVarint, 2),
          startsAt = _this$decodeVarint2[0],
          payloadLength = _this$decodeVarint2[1];

      var payloadBytes = rawPayloadField.slice(startsAt, startsAt + payloadLength);
      return this._uintArrayToText(payloadBytes);
    }
  }, {
    key: "decodeVarint",
    value: function decodeVarint(uintArray) {
      var x = 0;
      var s = 0;

      for (var i = 0; i < uintArray.length; i++) {
        var b = uintArray[i];

        if (b < 0x80) {
          if (i > 9 || i == 9 && b > 1) {
            throw new Error("unable to decode varint: overflow");
          }

          return [i + 1, x | b << s];
        }

        x = x | b & 0x7f << s;
        s = s + 7;
      }

      throw new Error("unable to decode varint: empty array");
    }
  }, {
    key: "_textToUintArray",
    value: function _textToUintArray(text) {
      return buffer_default.a.Buffer(text);
    }
  }, {
    key: "_uintArrayToText",
    value: function _uintArrayToText(uintArray) {
      // use native TextDecoder if supported
      if (window.TextDecoder) {
        return new TextDecoder("utf-8").decode(uintArray);
      } else {
        return buffer_default.a.Buffer(uintArray).toString();
      }
    }
  }]);

  return Protobuf;
}(); // Polyfill for Uint8Array.slice for IE and Safari

if (!Uint8Array.prototype.slice) {
  Object.defineProperty(Uint8Array.prototype, 'slice', {
    value: Array.prototype.slice
  });
}
// CONCATENATED MODULE: ./src/app/lib/term/tty.js
function tty_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tty_typeof = function _typeof(obj) { return typeof obj; }; } else { tty_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tty_typeof(obj); }

function tty_slicedToArray(arr, i) { return tty_arrayWithHoles(arr) || tty_iterableToArrayLimit(arr, i) || tty_nonIterableRest(); }

function tty_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function tty_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function tty_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function tty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { tty_defineProperty(target, key, source[key]); }); } return target; }

function tty_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tty_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tty_createClass(Constructor, protoProps, staticProps) { if (protoProps) tty_defineProperties(Constructor.prototype, protoProps); if (staticProps) tty_defineProperties(Constructor, staticProps); return Constructor; }

function tty_possibleConstructorReturn(self, call) { if (call && (tty_typeof(call) === "object" || typeof call === "function")) { return call; } return tty_assertThisInitialized(self); }

function tty_getPrototypeOf(o) { tty_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tty_getPrototypeOf(o); }

function tty_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tty_setPrototypeOf(subClass, superClass); }

function tty_setPrototypeOf(o, p) { tty_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tty_setPrototypeOf(o, p); }

function tty_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var tty_logger = logger["a" /* default */].create('Tty');
var defaultOptions = {
  buffered: true
};

var tty_Tty =
/*#__PURE__*/
function (_EventEmitter) {
  tty_inherits(Tty, _EventEmitter);

  function Tty(addressResolver) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    tty_classCallCheck(this, Tty);

    _this = tty_possibleConstructorReturn(this, tty_getPrototypeOf(Tty).call(this));

    tty_defineProperty(tty_assertThisInitialized(tty_assertThisInitialized(_this)), "socket", null);

    tty_defineProperty(tty_assertThisInitialized(tty_assertThisInitialized(_this)), "_buffered", true);

    tty_defineProperty(tty_assertThisInitialized(tty_assertThisInitialized(_this)), "_attachSocketBufferTimer", void 0);

    tty_defineProperty(tty_assertThisInitialized(tty_assertThisInitialized(_this)), "_addressResolver", null);

    var options = tty_objectSpread({}, defaultOptions, props);

    _this._addressResolver = addressResolver;
    _this._buffered = options.buffered;
    _this._proto = new protobuf_Protobuf();
    _this._onOpenConnection = _this._onOpenConnection.bind(tty_assertThisInitialized(tty_assertThisInitialized(_this)));
    _this._onCloseConnection = _this._onCloseConnection.bind(tty_assertThisInitialized(tty_assertThisInitialized(_this)));
    _this._onMessage = _this._onMessage.bind(tty_assertThisInitialized(tty_assertThisInitialized(_this)));
    return _this;
  }

  tty_createClass(Tty, [{
    key: "disconnect",
    value: function disconnect() {
      var reasonCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : enums["b" /* StatusCodeEnum */].NORMAL;

      if (this.socket !== null) {
        this.socket.close(reasonCode);
      }
    }
  }, {
    key: "connect",
    value: function connect(w, h) {
      var connStr = this._addressResolver.getConnStr(w, h);

      this.socket = new WebSocket(connStr);
      this.socket.binaryType = 'arraybuffer';
      this.socket.onopen = this._onOpenConnection;
      this.socket.onmessage = this._onMessage;
      this.socket.onclose = this._onCloseConnection;
    }
  }, {
    key: "send",
    value: function send(data) {
      var msg = this._proto.encodeRawMessage(data);

      var bytearray = new Uint8Array(msg);
      this.socket.send(bytearray.buffer);
    }
  }, {
    key: "requestResize",
    value: function requestResize(w, h) {
      tty_logger.info('requesting new screen size', "w:".concat(w, " and h:").concat(h));
      var data = JSON.stringify({
        event: enums["a" /* EventTypeEnum */].RESIZE,
        width: w,
        height: h,
        size: "".concat(w, ":").concat(h)
      });

      var encoded = this._proto.encodeResizeMessage(data);

      var bytearray = new Uint8Array(encoded);
      this.socket.send(bytearray.buffer);
    }
  }, {
    key: "_flushBuffer",
    value: function _flushBuffer() {
      this.emit(enums["c" /* TermEventEnum */].DATA, this._attachSocketBuffer);
      this._attachSocketBuffer = null;
      clearTimeout(this._attachSocketBufferTimer);
      this._attachSocketBufferTimer = null;
    }
  }, {
    key: "_pushToBuffer",
    value: function _pushToBuffer(data) {
      if (this._attachSocketBuffer) {
        this._attachSocketBuffer += data;
      } else {
        this._attachSocketBuffer = data;
        setTimeout(this._flushBuffer.bind(this), 10);
      }
    }
  }, {
    key: "_onOpenConnection",
    value: function _onOpenConnection() {
      this.emit('open');
      tty_logger.info('websocket is open');
    }
  }, {
    key: "_onCloseConnection",
    value: function _onCloseConnection(e) {
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket.onclose = null;
      this.socket = null;
      this.emit(enums["c" /* TermEventEnum */].CONN_CLOSE, e);
      tty_logger.info('websocket is closed');
    }
  }, {
    key: "_onMessage",
    value: function _onMessage(ev) {
      try {
        var uintArray = new Uint8Array(ev.data);

        var msg = this._proto.decode(uintArray);

        switch (msg.type) {
          case MessageTypeEnum.AUDIT:
            this._processAuditPayload(msg.payload);

            break;

          case MessageTypeEnum.SESSION_END:
            this.emit(enums["c" /* TermEventEnum */].CLOSE, msg.payload);
            break;

          case MessageTypeEnum.RAW:
            if (this._buffered) {
              this._pushToBuffer(msg.payload);
            } else {
              this.emit(enums["c" /* TermEventEnum */].DATA, msg.payload);
            }

            break;

          default:
            throw Error('unknown message type', msg.type);
        }
      } catch (err) {
        tty_logger.error('failed to parse incoming message.', err);
      }
    }
  }, {
    key: "_processAuditPayload",
    value: function _processAuditPayload(payload) {
      var event = JSON.parse(payload);

      if (event.event === enums["a" /* EventTypeEnum */].RESIZE) {
        var _event$size$split = event.size.split(':'),
            _event$size$split2 = tty_slicedToArray(_event$size$split, 2),
            w = _event$size$split2[0],
            h = _event$size$split2[1];

        w = Number(w);
        h = Number(h);
        this.emit(enums["c" /* TermEventEnum */].RESIZE, {
          w: w,
          h: h
        });
      }
    }
  }]);

  return Tty;
}(events_events["EventEmitter"]);

/* harmony default export */ var tty = (tty_Tty);
// CONCATENATED MODULE: ./src/app/lib/term/terminal.js
function terminal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function terminal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function terminal_createClass(Constructor, protoProps, staticProps) { if (protoProps) terminal_defineProperties(Constructor.prototype, protoProps); if (staticProps) terminal_defineProperties(Constructor, staticProps); return Constructor; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var terminal_logger = logger["a" /* default */].create('lib/term/terminal');
var DISCONNECT_TXT = 'disconnected';
var GRV_CLASS = 'grv-terminal';
var WINDOW_RESIZE_DEBOUNCE_DELAY = 200;
/**
 * TtyTerminal is a wrapper on top of xtermjs that handles connections
 * and resize events
 */

var terminal_TtyTerminal =
/*#__PURE__*/
function () {
  function TtyTerminal(options) {
    terminal_classCallCheck(this, TtyTerminal);

    var addressResolver = options.addressResolver,
        el = options.el,
        _options$scrollBack = options.scrollBack,
        scrollBack = _options$scrollBack === void 0 ? 1000 : _options$scrollBack;
    this._el = el;
    this.tty = new tty(addressResolver);
    this.scrollBack = scrollBack;
    this.rows = undefined;
    this.cols = undefined;
    this.term = null;
    this.debouncedResize = Object(lodash["debounce"])(this._requestResize.bind(this), WINDOW_RESIZE_DEBOUNCE_DELAY);
  }

  terminal_createClass(TtyTerminal, [{
    key: "open",
    value: function open() {
      var _this = this;

      this._el.classList.add(GRV_CLASS); // render xtermjs with default values


      this.term = new xterm_default.a({
        cols: 15,
        rows: 5,
        scrollback: this.scrollBack,
        cursorBlink: false
      });
      this.term.open(this._el); // fit xterm to available space

      this.resize(this.cols, this.rows); // subscribe to xtermjs output

      this.term.on('data', function (data) {
        _this.tty.send(data);
      }); // subscribe to window resize events

      window.addEventListener('resize', this.debouncedResize); // subscribe to tty

      this.tty.on(enums["c" /* TermEventEnum */].RESET, this.reset.bind(this));
      this.tty.on(enums["c" /* TermEventEnum */].CONN_CLOSE, this._processClose.bind(this));
      this.tty.on(enums["c" /* TermEventEnum */].DATA, this._processData.bind(this)); // subscribe tty resize event (used by session player)

      this.tty.on(enums["c" /* TermEventEnum */].RESIZE, function (_ref) {
        var h = _ref.h,
            w = _ref.w;
        return _this.resize(w, h);
      });
      this.connect();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.tty.connect(this.cols, this.rows);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('resize', this.debouncedResize);

      this._disconnect();

      if (this.term !== null) {
        this.term.destroy();
        this.term.removeAllListeners();
      }

      this._el.innerHTML = null;

      this._el.classList.remove(GRV_CLASS);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.term.reset();
    }
  }, {
    key: "resize",
    value: function resize(cols, rows) {
      try {
        // if not defined, use the size of the container
        if (!Object(lodash["isInteger"])(cols) || !Object(lodash["isInteger"])(rows)) {
          var dim = this._getDimensions();

          cols = dim.cols;
          rows = dim.rows;
        }

        if (cols === this.cols && rows === this.rows) {
          return;
        }

        this.cols = cols;
        this.rows = rows;
        this.term.resize(cols, rows);
      } catch (err) {
        terminal_logger.error('xterm.resize', {
          w: cols,
          h: rows
        }, err);
        this.term.reset();
      }
    }
  }, {
    key: "_processData",
    value: function _processData(data) {
      try {
        this.term.write(data);
      } catch (err) {
        terminal_logger.error('xterm.write', data, err); // recover xtermjs by resetting it

        this.term.reset();
      }
    }
  }, {
    key: "_processClose",
    value: function _processClose(e) {
      var reason = e.reason;
      var displayText = DISCONNECT_TXT;

      if (reason) {
        displayText = "".concat(displayText, ": ").concat(reason);
      }

      displayText = "\x1B[31m".concat(displayText, "\x1B[m\r\n");
      this.term.write(displayText);
    }
  }, {
    key: "_disconnect",
    value: function _disconnect() {
      this.tty.disconnect();
      this.tty.removeAllListeners();
    }
  }, {
    key: "_requestResize",
    value: function _requestResize() {
      var _this$_getDimensions = this._getDimensions(),
          cols = _this$_getDimensions.cols,
          rows = _this$_getDimensions.rows;

      if (!Object(lodash["isInteger"])(cols) || !Object(lodash["isInteger"])(rows)) {
        terminal_logger.info("unable to calculate terminal dimensions (container might be hidden) ".concat(cols, ":").concat(rows));
        return;
      } // ensure min size


      var w = cols < 5 ? 5 : cols;
      var h = rows < 5 ? 5 : rows;
      this.resize(w, h);
      this.tty.requestResize(w, h);
    }
  }, {
    key: "_getDimensions",
    value: function _getDimensions() {
      var $terminal = this._el.querySelector('.terminal');

      var $fakeRow = document.createElement('div');
      $fakeRow.innerHTML = "<span>&nbsp;</span>";
      $terminal.appendChild($fakeRow);
      var fakeColHeight = $fakeRow.getBoundingClientRect().height;
      var fakeColWidth = $fakeRow.firstElementChild.getBoundingClientRect().width;
      var width = this._el.clientWidth;
      var height = this._el.clientHeight;
      var cols = Math.floor(width / fakeColWidth);
      var rows = Math.floor(height / fakeColHeight);
      $terminal.removeChild($fakeRow);
      return {
        cols: cols,
        rows: rows
      };
    }
  }]);

  return TtyTerminal;
}();

/* harmony default export */ var terminal = (terminal_TtyTerminal);
// CONCATENATED MODULE: ./src/app/lib/term/ttyAddressResolver.js
function ttyAddressResolver_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ttyAddressResolver_defineProperty(target, key, source[key]); }); } return target; }

function ttyAddressResolver_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ttyAddressResolver_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ttyAddressResolver_createClass(Constructor, protoProps, staticProps) { if (protoProps) ttyAddressResolver_defineProperties(Constructor.prototype, protoProps); if (staticProps) ttyAddressResolver_defineProperties(Constructor, staticProps); return Constructor; }

function ttyAddressResolver_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var ttyAddressResolver_AddressResolver =
/*#__PURE__*/
function () {
  function AddressResolver(params) {
    ttyAddressResolver_classCallCheck(this, AddressResolver);

    ttyAddressResolver_defineProperty(this, "_params", {
      login: null,
      target: function target() {
        throw Error('target method is not provided');
      },
      sid: null,
      clusterName: null,
      ttyUrl: null
    });

    this._params = ttyAddressResolver_objectSpread({}, params);
  }

  ttyAddressResolver_createClass(AddressResolver, [{
    key: "getConnStr",
    value: function getConnStr(w, h) {
      var _this$_params = this._params,
          getTarget = _this$_params.getTarget,
          ttyUrl = _this$_params.ttyUrl,
          login = _this$_params.login,
          sid = _this$_params.sid;
      var params = JSON.stringify(ttyAddressResolver_objectSpread({}, getTarget(), {
        login: login,
        sid: sid,
        term: {
          h: h,
          w: w
        }
      }));
      var encoded = window.encodeURI(params);
      return this.format(ttyUrl).replace(':params', encoded);
    }
  }, {
    key: "format",
    value: function format(url) {
      return url.replace(':fqdm', config["a" /* default */].getWsHostName()).replace(':token', this._params.token).replace(':cluster', this._params.cluster).replace(':sid', this._params.sid);
    }
  }]);

  return AddressResolver;
}();


// CONCATENATED MODULE: ./src/app/components/Terminal/Xterm/Xterm.jsx
function Xterm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Xterm_typeof = function _typeof(obj) { return typeof obj; }; } else { Xterm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Xterm_typeof(obj); }

function Xterm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Xterm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Xterm_createClass(Constructor, protoProps, staticProps) { if (protoProps) Xterm_defineProperties(Constructor.prototype, protoProps); if (staticProps) Xterm_defineProperties(Constructor, staticProps); return Constructor; }

function Xterm_possibleConstructorReturn(self, call) { if (call && (Xterm_typeof(call) === "object" || typeof call === "function")) { return call; } return Xterm_assertThisInitialized(self); }

function Xterm_getPrototypeOf(o) { Xterm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Xterm_getPrototypeOf(o); }

function Xterm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Xterm_setPrototypeOf(subClass, superClass); }

function Xterm_setPrototypeOf(o, p) { Xterm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Xterm_setPrototypeOf(o, p); }

function Xterm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Xterm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var Xterm_XTerm =
/*#__PURE__*/
function (_React$Component) {
  Xterm_inherits(XTerm, _React$Component);

  function XTerm() {
    var _getPrototypeOf2;

    var _this;

    Xterm_classCallCheck(this, XTerm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Xterm_possibleConstructorReturn(this, (_getPrototypeOf2 = Xterm_getPrototypeOf(XTerm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Xterm_defineProperty(Xterm_assertThisInitialized(Xterm_assertThisInitialized(_this)), "onRef", function (ref) {
      _this.containerRef = ref;
    });

    return _this;
  }

  Xterm_createClass(XTerm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          onSessionEnd = _this$props.onSessionEnd,
          ttyParams = _this$props.ttyParams,
          title = _this$props.title;
      var addressResolver = new ttyAddressResolver_AddressResolver(ttyParams);
      this.terminal = new terminal({
        el: this.containerRef,
        addressResolver: addressResolver
      });
      this.terminal.open();
      this.terminal.tty.on(enums["c" /* TermEventEnum */].CLOSE, onSessionEnd);
      document.title = title;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.terminal.destroy();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.terminal.term.focus();
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        ref: this.onRef
      });
    }
  }]);

  return XTerm;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/Elements/index.js
function Elements_templateObject4() {
  var data = Elements_taggedTemplateLiteral(["\n  font-size: ", "px;\n"]);

  Elements_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Elements_templateObject3() {
  var data = Elements_taggedTemplateLiteral(["\n  border: none;\n  box-sizing: border-box;\n  outline: none;\n  width: 360px;\n  ", "\n  ", "\n  ", "\n"]);

  Elements_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Elements_templateObject2() {
  var data = Elements_taggedTemplateLiteral(["\n  display: block;\n"]);

  Elements_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Elements_templateObject() {
  var data = Elements_taggedTemplateLiteral(["\n  background: none;\n  border-color: ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  text-transform: uppercase;\n  width: 88px;\n\n  &:disabled {\n    border: 1px solid ", ";\n    color: ", ";\n    opacity: .24;\n  }\n\n  ", "\n  ", "\n  ", "\n"]);

  Elements_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Elements_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var Elements_Button = styled_components_browser_esm["c" /* default */].button(Elements_templateObject(), function (props) {
  return props.theme.colors.terminal;
}, function (props) {
  return props.theme.colors.subtle;
}, function (props) {
  return props.theme.colors.subtle;
}, index_esm["d" /* color */], index_esm["o" /* space */], index_esm["c" /* border */]);
Elements_Button.defaultProps = {
  color: 'terminal',
  bg: 'none',
  px: 0,
  py: "4px",
  border: 1
};
var Label = Object(styled_components_browser_esm["c" /* default */])(components["k" /* Text */])(Elements_templateObject2());
Label.defaultProps = {
  caps: true,
  color: 'terminal',
  mb: 2,
  mt: 2
};
var Elements_Input = styled_components_browser_esm["c" /* default */].input(Elements_templateObject3(), index_esm["o" /* space */], index_esm["d" /* color */], index_esm["q" /* width */]);
Elements_Input.defaultProps = {
  bg: 'bgTerminal',
  color: 'terminal',
  mb: 3,
  mr: 2,
  px: 2,
  py: '4px'
};
var Elements_Header = function Header(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(components["k" /* Text */], {
    fontSize: 0,
    bold: true,
    caps: true,
    mb: 3,
    children: children
  });
};
var Form = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(Elements_templateObject4(), function (props) {
  return props.theme.fontSizes[0];
});
Form.defaultProps = {
  color: 'terminal',
  bg: 'dark'
};
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/DownloadForm/DownloadForm.jsx
function DownloadForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DownloadForm_typeof = function _typeof(obj) { return typeof obj; }; } else { DownloadForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DownloadForm_typeof(obj); }

function DownloadForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DownloadForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DownloadForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) DownloadForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) DownloadForm_defineProperties(Constructor, staticProps); return Constructor; }

function DownloadForm_possibleConstructorReturn(self, call) { if (call && (DownloadForm_typeof(call) === "object" || typeof call === "function")) { return call; } return DownloadForm_assertThisInitialized(self); }

function DownloadForm_getPrototypeOf(o) { DownloadForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DownloadForm_getPrototypeOf(o); }

function DownloadForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DownloadForm_setPrototypeOf(subClass, superClass); }

function DownloadForm_setPrototypeOf(o, p) { DownloadForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DownloadForm_setPrototypeOf(o, p); }

function DownloadForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DownloadForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var DownloadForm_FileDownloadSelector =
/*#__PURE__*/
function (_React$Component) {
  DownloadForm_inherits(FileDownloadSelector, _React$Component);

  function FileDownloadSelector() {
    var _getPrototypeOf2;

    var _this;

    DownloadForm_classCallCheck(this, FileDownloadSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = DownloadForm_possibleConstructorReturn(this, (_getPrototypeOf2 = DownloadForm_getPrototypeOf(FileDownloadSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    DownloadForm_defineProperty(DownloadForm_assertThisInitialized(DownloadForm_assertThisInitialized(_this)), "state", {
      path: '~/'
    });

    DownloadForm_defineProperty(DownloadForm_assertThisInitialized(DownloadForm_assertThisInitialized(_this)), "onChangePath", function (e) {
      _this.setState({
        path: e.target.value
      });
    });

    DownloadForm_defineProperty(DownloadForm_assertThisInitialized(DownloadForm_assertThisInitialized(_this)), "onDownload", function () {
      if (_this.isValidPath(_this.state.path)) {
        _this.props.onDownload(_this.state.path);
      }
    });

    DownloadForm_defineProperty(DownloadForm_assertThisInitialized(DownloadForm_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();

        _this.onDownload();
      }
    });

    return _this;
  }

  DownloadForm_createClass(FileDownloadSelector, [{
    key: "isValidPath",
    value: function isValidPath(path) {
      return path && path[path.length - 1] !== '/';
    }
  }, {
    key: "moveCaretAtEnd",
    value: function moveCaretAtEnd(e) {
      var tmp = e.target.value;
      e.target.value = '';
      e.target.value = tmp;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var path = this.state.path;
      var isBtnDisabled = !this.isValidPath(path);
      return react_default.a.createElement(Form, null, react_default.a.createElement(Elements_Header, null, "(SCP) Download Files"), react_default.a.createElement(Label, null, "File Path"), react_default.a.createElement(Elements_Input, {
        onChange: this.onChangePath,
        ref: function ref(e) {
          return _this2.inputRef = e;
        },
        value: path,
        mb: 0,
        autoFocus: true,
        onFocus: this.moveCaretAtEnd,
        onKeyDown: this.onKeyDown
      }), react_default.a.createElement(Elements_Button, {
        disabled: isBtnDisabled,
        onClick: this.onDownload
      }, "Download"));
    }
  }]);

  return FileDownloadSelector;
}(react_default.a.Component);

DownloadForm_defineProperty(DownloadForm_FileDownloadSelector, "propTypes", {
  onDownload: prop_types_default.a.func.isRequired
});


// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/DownloadForm/index.js

/* harmony default export */ var DownloadForm = (DownloadForm_FileDownloadSelector);
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/UploadForm/UploadForm.jsx
function UploadForm_templateObject() {
  var data = UploadForm_taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px dashed ", ";\n  color: ", ";\n  display: block;\n  margin: 16px 0;\n  height: 72px;\n  line-height: 72px;\n  text-align: center;\n  text-transform: uppercase;\n"]);

  UploadForm_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function UploadForm_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function UploadForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UploadForm_typeof = function _typeof(obj) { return typeof obj; }; } else { UploadForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UploadForm_typeof(obj); }

function UploadForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UploadForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UploadForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) UploadForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) UploadForm_defineProperties(Constructor, staticProps); return Constructor; }

function UploadForm_possibleConstructorReturn(self, call) { if (call && (UploadForm_typeof(call) === "object" || typeof call === "function")) { return call; } return UploadForm_assertThisInitialized(self); }

function UploadForm_getPrototypeOf(o) { UploadForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UploadForm_getPrototypeOf(o); }

function UploadForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UploadForm_setPrototypeOf(subClass, superClass); }

function UploadForm_setPrototypeOf(o, p) { UploadForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UploadForm_setPrototypeOf(o, p); }

function UploadForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UploadForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var UploadForm_UploadForm =
/*#__PURE__*/
function (_React$Component) {
  UploadForm_inherits(UploadForm, _React$Component);

  function UploadForm() {
    var _getPrototypeOf2;

    var _this;

    UploadForm_classCallCheck(this, UploadForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = UploadForm_possibleConstructorReturn(this, (_getPrototypeOf2 = UploadForm_getPrototypeOf(UploadForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "state", {
      files: [],
      remoteLocation: "~/"
    });

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "onFileSelected", function (e) {
      _this.addFiles([], e.target.files);

      _this.inputRef.focus();
    });

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "onFilePathChanged", function (e) {
      _this.setState({
        remoteLocation: e.target.value
      });
    });

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "onUpload", function () {
      var _this$state = _this.state,
          files = _this$state.files,
          remoteLocation = _this$state.remoteLocation;

      for (var i = 0; i < files.length; i++) {
        _this.props.onUpload(remoteLocation, files[i].name, files[i]);
      }

      _this.setState({
        files: []
      });

      _this.setFocus();
    });

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "onOpenFilePicker", function () {
      // reset all selected files
      _this.fileSelectorRef.value = "";

      _this.fileSelectorRef.click();
    });

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "onDrop", function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.addFiles(_this.state.files, e.dataTransfer.files);

      _this.setFocus();
    });

    UploadForm_defineProperty(UploadForm_assertThisInitialized(UploadForm_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();

        _this.onOpenFilePicker();
      }
    });

    return _this;
  }

  UploadForm_createClass(UploadForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('drop', this.onDocumentDrop);
      document.removeEventListener('dragover', this.preventDefault);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('dragover', this.preventDefault, false);
      document.addEventListener('drop', this.onDocumentDrop, false);
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "onDocumentDrop",
    value: function onDocumentDrop(e) {
      if (this.refDropzone && this.refDropzone.contains(e.target)) {
        return;
      }

      e.preventDefault();
      e.dataTransfer.effectAllowed = 'none';
      e.dataTransfer.dropEffect = 'none';
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      this.inputRef.focus();
    }
  }, {
    key: "moveCaretAtEnd",
    value: function moveCaretAtEnd(e) {
      var tmp = e.target.value;
      e.target.value = '';
      e.target.value = tmp;
    }
  }, {
    key: "addFiles",
    value: function addFiles(files) {
      var blobs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var i = 0; i < blobs.length; i++) {
        files.push(blobs[i]);
      }

      this.setState({
        files: files
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          remoteLocation = _this$state2.remoteLocation,
          files = _this$state2.files;
      var isDldBtnDisabled = !remoteLocation || files.length === 0;
      var hasFiles = files.length > 0;
      var dropZoneText = hasFiles ? "".concat(files.length, " files selected") : "Select files to upload or drag & drop them here";
      return react_default.a.createElement(Form, {
        color: "terminal"
      }, react_default.a.createElement(Elements_Header, null, "(SCP) UPLOAD Files"), react_default.a.createElement(Label, null, "Upload destination "), react_default.a.createElement(Elements_Input, {
        className: "grv-file-transfer-input m-r-sm",
        width: "100%",
        mb: 0,
        ref: function ref(e) {
          return _this2.inputRef = e;
        },
        value: remoteLocation,
        autoFocus: true,
        onFocus: this.moveCaretAtEnd,
        onChange: this.onFilePathChanged,
        onKeyDown: this.onKeyDown
      }), react_default.a.createElement("input", {
        ref: function ref(e) {
          return _this2.fileSelectorRef = e;
        },
        type: "file",
        multiple: true,
        style: {
          display: "none"
        },
        accept: "*.*",
        name: "file",
        onChange: this.onFileSelected
      }), react_default.a.createElement(Dropzone, {
        ref: function ref(e) {
          return _this2.refDropzone = e;
        },
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDrop: this.onDrop
      }, react_default.a.createElement("a", {
        onClick: this.onOpenFilePicker
      }, dropZoneText)), react_default.a.createElement(Elements_Button, {
        disabled: isDldBtnDisabled,
        onClick: this.onUpload
      }, "Upload"));
    }
  }]);

  return UploadForm;
}(react_default.a.Component);

UploadForm_defineProperty(UploadForm_UploadForm, "propTypes", {
  onUpload: prop_types_default.a.func.isRequired
});


var Dropzone = styled_components_browser_esm["c" /* default */].div(UploadForm_templateObject(), function (props) {
  return props.theme.colors.bgTerminal;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.terminal;
});
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/UploadForm/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var FileTransfer_UploadForm = (UploadForm_UploadForm);
// CONCATENATED MODULE: ./src/app/services/fileTransfer.js
function fileTransfer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { fileTransfer_defineProperty(target, key, source[key]); }); } return target; }

function fileTransfer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fileTransfer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { fileTransfer_typeof = function _typeof(obj) { return typeof obj; }; } else { fileTransfer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return fileTransfer_typeof(obj); }

function fileTransfer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fileTransfer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fileTransfer_createClass(Constructor, protoProps, staticProps) { if (protoProps) fileTransfer_defineProperties(Constructor.prototype, protoProps); if (staticProps) fileTransfer_defineProperties(Constructor, staticProps); return Constructor; }

function fileTransfer_possibleConstructorReturn(self, call) { if (call && (fileTransfer_typeof(call) === "object" || typeof call === "function")) { return call; } return fileTransfer_assertThisInitialized(self); }

function fileTransfer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function fileTransfer_getPrototypeOf(o) { fileTransfer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fileTransfer_getPrototypeOf(o); }

function fileTransfer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) fileTransfer_setPrototypeOf(subClass, superClass); }

function fileTransfer_setPrototypeOf(o, p) { fileTransfer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fileTransfer_setPrototypeOf(o, p); }




var fileTransfer_logger = logger["a" /* default */].create('api/fileTransfer');
var REQ_FAILED_TXT = 'Network request failed';

var Transfer =
/*#__PURE__*/
function (_EventEmitter) {
  fileTransfer_inherits(Transfer, _EventEmitter);

  function Transfer() {
    var _this;

    fileTransfer_classCallCheck(this, Transfer);

    _this = fileTransfer_possibleConstructorReturn(this, fileTransfer_getPrototypeOf(Transfer).call(this));
    _this._xhr = new XMLHttpRequest();
    var xhr = _this._xhr;

    xhr.onload = function () {
      var status = xhr.status;

      if (status === 200) {
        _this.handleSuccess(xhr);

        return;
      }

      _this.handleError(xhr);
    };

    xhr.onerror = function () {
      _this.emit('error', new Error(REQ_FAILED_TXT));
    };

    xhr.ontimeout = function () {
      _this.emit('error', new Error(REQ_FAILED_TXT));
    };

    xhr.onabort = function () {
      _this.emit('error', new DOMException('Aborted', 'AbortError'));
    };

    return _this;
  }

  fileTransfer_createClass(Transfer, [{
    key: "abort",
    value: function abort() {
      this._xhr.abort();
    }
  }, {
    key: "onProgress",
    value: function onProgress(cb) {
      this.on('progress', cb);
    }
  }, {
    key: "onCompleted",
    value: function onCompleted(cb) {
      this.on('completed', cb);
    }
  }, {
    key: "onError",
    value: function onError(cb) {
      this.on('error', cb);
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess() {
      throw Error('not implemented');
    }
  }, {
    key: "handleError",
    value: function handleError(xhr) {
      var errText = getErrorText(xhr.response);
      this.emit('error', new Error(errText));
    }
  }, {
    key: "handleProgress",
    value: function handleProgress(e) {
      var progress = 0; // if Content-Length is present

      if (e.lengthComputable) {
        progress = Math.round(e.loaded / e.total * 100);
      } else {
        var done = e.position || e.loaded;
        var total = e.totalSize || e.total;
        progress = Math.floor(done / total * 1000) / 10;
      }

      this.emit('progress', progress);
    }
  }]);

  return Transfer;
}(events_events["EventEmitter"]);

var Uploader =
/*#__PURE__*/
function (_Transfer) {
  fileTransfer_inherits(Uploader, _Transfer);

  function Uploader() {
    fileTransfer_classCallCheck(this, Uploader);

    return fileTransfer_possibleConstructorReturn(this, fileTransfer_getPrototypeOf(Uploader).call(this));
  }

  fileTransfer_createClass(Uploader, [{
    key: "handleSuccess",
    value: function handleSuccess() {
      this.emit('completed');
    }
  }, {
    key: "do",
    value: function _do(url, blob) {
      var _this2 = this;

      this._xhr.upload.addEventListener('progress', function (e) {
        _this2.handleProgress(e);
      });

      this._xhr.open('post', url, true);

      setHeaders(this._xhr);

      this._xhr.send(blob);
    }
  }]);

  return Uploader;
}(Transfer);
var Downloader =
/*#__PURE__*/
function (_Transfer2) {
  fileTransfer_inherits(Downloader, _Transfer2);

  function Downloader() {
    fileTransfer_classCallCheck(this, Downloader);

    return fileTransfer_possibleConstructorReturn(this, fileTransfer_getPrototypeOf(Downloader).call(this));
  }

  fileTransfer_createClass(Downloader, [{
    key: "do",
    value: function _do(url) {
      var _this3 = this;

      this._xhr.open('get', url, true);

      this._xhr.onprogress = function (e) {
        _this3.handleProgress(e);
      };

      setHeaders(this._xhr);
      this._xhr.responseType = 'blob';

      this._xhr.send();
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(xhr) {
      var fileName = getDispositionFileName(xhr);

      if (!fileName) {
        this.emit('error', new Error("Bad response"));
      } else {
        this.emit('completed', {
          fileName: fileName,
          blob: xhr.response
        });
      }
    } // parses blob response to get an error text

  }, {
    key: "handleError",
    value: function handleError(xhr) {
      var _this4 = this;

      var reader = new FileReader();

      reader.onerror = function (err) {
        _this4.emit('error', err);
      };

      reader.onload = function () {
        var text = getErrorText(reader.result);

        _this4.emit('error', new Error(text));
      };

      reader.readAsText(xhr.response);
    }
  }]);

  return Downloader;
}(Transfer);

function getDispositionFileName(xhr) {
  var fileName = "";
  var disposition = xhr.getResponseHeader("Content-Disposition");

  if (disposition) {
    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    var matches = filenameRegex.exec(disposition);

    if (matches != null && matches[1]) {
      fileName = matches[1].replace(/['"]/g, '');
    }
  }

  return decodeURIComponent(fileName);
} // TODO: as backend may return errors in different
// formats, look at different JSON structures to retreive the error message


function getErrorText(response, responseText) {
  var errText = 'Bad request';

  if (!response) {
    return responseText || errText;
  }

  try {
    var json = JSON.parse(response);

    if (json.message) {
      return json.message;
    }

    if (responseText) {
      return responseText;
    }
  } catch (err) {
    fileTransfer_logger.error('faild to parse error message', err);
  }

  return errText;
}

function setHeaders(xhr) {
  var headers = fileTransfer_objectSpread({}, Object(api["b" /* getAuthHeaders */])(), Object(api["c" /* getNoCacheHeaders */])());

  Object.keys(headers).forEach(function (key) {
    xhr.setRequestHeader(key, headers[key]);
  });
}
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/FileListItem/withHttpRequest.jsx
function withHttpRequest_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { withHttpRequest_typeof = function _typeof(obj) { return typeof obj; }; } else { withHttpRequest_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return withHttpRequest_typeof(obj); }

function withHttpRequest_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { withHttpRequest_defineProperty(target, key, source[key]); }); } return target; }

function withHttpRequest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function withHttpRequest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function withHttpRequest_createClass(Constructor, protoProps, staticProps) { if (protoProps) withHttpRequest_defineProperties(Constructor.prototype, protoProps); if (staticProps) withHttpRequest_defineProperties(Constructor, staticProps); return Constructor; }

function withHttpRequest_possibleConstructorReturn(self, call) { if (call && (withHttpRequest_typeof(call) === "object" || typeof call === "function")) { return call; } return withHttpRequest_assertThisInitialized(self); }

function withHttpRequest_getPrototypeOf(o) { withHttpRequest_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withHttpRequest_getPrototypeOf(o); }

function withHttpRequest_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) withHttpRequest_setPrototypeOf(subClass, superClass); }

function withHttpRequest_setPrototypeOf(o, p) { withHttpRequest_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withHttpRequest_setPrototypeOf(o, p); }

function withHttpRequest_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function withHttpRequest_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var withHttpRequest_withHttpRequest = function withHttpRequest(httpCtor) {
  return function (component) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      withHttpRequest_inherits(WithHttpRequestWrapper, _React$Component);

      function WithHttpRequestWrapper(props, context) {
        var _this;

        withHttpRequest_classCallCheck(this, WithHttpRequestWrapper);

        _this = withHttpRequest_possibleConstructorReturn(this, withHttpRequest_getPrototypeOf(WithHttpRequestWrapper).call(this, props, context));

        withHttpRequest_defineProperty(withHttpRequest_assertThisInitialized(withHttpRequest_assertThisInitialized(_this)), "state", {
          progress: "0",
          response: null
        });

        _this.http = new httpCtor();
        _this.fileId = props.file.id;
        _this.fileBlob = props.file.blob;
        _this.fileUrl = props.file.url;
        return _this;
      }

      withHttpRequest_createClass(WithHttpRequestWrapper, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.http.removeAllListeners();
          this.http.abort();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var handleProgress = function handleProgress(completed) {
            _this2.setState({
              progress: completed
            });
          };

          var handleCompleted = function handleCompleted(response) {
            _this2.state.response = response;

            _this2.props.onUpdate({
              id: _this2.fileId,
              isCompleted: true
            });
          };

          var handleFailed = function handleFailed(err) {
            _this2.props.onUpdate({
              id: _this2.fileId,
              isFailed: true,
              error: err.message
            });
          };

          this.props.onUpdate({
            id: this.fileId,
            isProcessing: true
          });
          this.http.onProgress(handleProgress);
          this.http.onCompleted(handleCompleted);
          this.http.onError(handleFailed);
          this.http.do(this.fileUrl, this.fileBlob);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state,
              response = _this$state.response,
              progress = _this$state.progress;
          return react_default.a.createElement(component, withHttpRequest_objectSpread({}, this.props, {
            httpResponse: response,
            httpProgress: progress
          }));
        }
      }]);

      return WithHttpRequestWrapper;
    }(react_default.a.Component), withHttpRequest_defineProperty(_class, "displayName", "WithHttpRequestWrapper"), withHttpRequest_defineProperty(_class, "propTypes", {
      onUpdate: prop_types_default.a.func.isRequired
    }), _temp;
  };
};

/* harmony default export */ var FileListItem_withHttpRequest = (withHttpRequest_withHttpRequest);
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/FileListItem/FileListItem.jsx
function FileListItem_templateObject6() {
  var data = FileListItem_taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  font-size: 12px;\n  height: 12px;\n  width: 12px;\n"]);

  FileListItem_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function FileListItem_templateObject5() {
  var data = FileListItem_taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to right,\n    ", " 0%,\n    ", " ", "%,\n    ", " 0%, ", " 100%\n  );\n\n  background: ", ";\n  color: ", ";\n  height: 24px;\n  line-height: 24px;\n  width: 360px;\n\n"]);

  FileListItem_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function FileListItem_templateObject4() {
  var data = FileListItem_taggedTemplateLiteral(["\n  fontSize: 12px;\n  height: 24px;\n  line-height: 24px;\n  width: 80px;\n  text-align: right;\n  color: ", ";\n"]);

  FileListItem_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function FileListItem_templateObject3() {
  var data = FileListItem_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]);

  FileListItem_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function FileListItem_templateObject2() {
  var data = FileListItem_taggedTemplateLiteral(["\n  height: 16px;\n  line-height: 16px;\n  color: ", ";\n"]);

  FileListItem_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function FileListItem_templateObject() {
  var data = FileListItem_taggedTemplateLiteral(["\n  margin-top: 4px;\n"]);

  FileListItem_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function FileListItem_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function FileListItem_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FileListItem_typeof = function _typeof(obj) { return typeof obj; }; } else { FileListItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FileListItem_typeof(obj); }

function FileListItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FileListItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FileListItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) FileListItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) FileListItem_defineProperties(Constructor, staticProps); return Constructor; }

function FileListItem_possibleConstructorReturn(self, call) { if (call && (FileListItem_typeof(call) === "object" || typeof call === "function")) { return call; } return FileListItem_assertThisInitialized(self); }

function FileListItem_getPrototypeOf(o) { FileListItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FileListItem_getPrototypeOf(o); }

function FileListItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FileListItem_setPrototypeOf(subClass, superClass); }

function FileListItem_setPrototypeOf(o, p) { FileListItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FileListItem_setPrototypeOf(o, p); }

function FileListItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FileListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








var FileListItem_FileListItem =
/*#__PURE__*/
function (_Component) {
  FileListItem_inherits(FileListItem, _Component);

  function FileListItem() {
    var _getPrototypeOf2;

    var _this;

    FileListItem_classCallCheck(this, FileListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FileListItem_possibleConstructorReturn(this, (_getPrototypeOf2 = FileListItem_getPrototypeOf(FileListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FileListItem_defineProperty(FileListItem_assertThisInitialized(FileListItem_assertThisInitialized(_this)), "savedToDisk", false);

    FileListItem_defineProperty(FileListItem_assertThisInitialized(FileListItem_assertThisInitialized(_this)), "onRemove", function () {
      _this.props.onRemove(_this.props.file.id);
    });

    return _this;
  }

  FileListItem_createClass(FileListItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props$file = this.props.file,
          isCompleted = _this$props$file.isCompleted,
          isUpload = _this$props$file.isUpload;

      if (isCompleted && !isUpload) {
        this.saveToDisk(this.props.httpResponse);
      }
    }
  }, {
    key: "saveToDisk",
    value: function saveToDisk(_ref) {
      var fileName = _ref.fileName,
          blob = _ref.blob;

      if (this.savedToDisk) {
        return;
      }

      this.savedToDisk = true; // if IE11

      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, fileName);
        return;
      }

      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          httpProgress = _this$props.httpProgress,
          file = _this$props.file;
      var name = file.name,
          isFailed = file.isFailed,
          isProcessing = file.isProcessing,
          isCompleted = file.isCompleted,
          error = file.error;
      var statusText = "".concat(httpProgress, "%");

      if (isFailed) {
        statusText = 'failed';
      }

      if (isCompleted) {
        statusText = 'complete';
      }

      return react_default.a.createElement(StyledFileListItem, null, react_default.a.createElement(Progress, null, react_default.a.createElement(ProgressIndicator, {
        isCompleted: isCompleted,
        progress: httpProgress
      }, name), react_default.a.createElement(FileListItem_CancelButton, {
        show: isProcessing,
        onClick: this.onRemove
      }), react_default.a.createElement(ProgressStatus, {
        isFailed: isFailed
      }, statusText)), react_default.a.createElement(FileListItem_Error, {
        show: isFailed,
        text: error
      }));
    }
  }]);

  return FileListItem;
}(react["Component"]);

FileListItem_defineProperty(FileListItem_FileListItem, "propTypes", {
  file: prop_types_default.a.object.isRequired,
  httpResponse: prop_types_default.a.object,
  onRemove: prop_types_default.a.func.isRequired
});


var FileListItemSend = FileListItem_withHttpRequest(Uploader)(FileListItem_FileListItem);
var FileListItemReceive = FileListItem_withHttpRequest(Downloader)(FileListItem_FileListItem);


var FileListItem_Error = function Error(_ref2) {
  var show = _ref2.show,
      text = _ref2.text;
  return show ? react_default.a.createElement(StyledError, null, text) : null;
};

var FileListItem_CancelButton = function CancelButton(_ref3) {
  var show = _ref3.show,
      onClick = _ref3.onClick;
  return show ? react_default.a.createElement(StyledButton, {
    onClick: onClick
  }, react_default.a.createElement(components_Icon["i" /* Close */], null)) : null;
};

var StyledFileListItem = styled_components_browser_esm["c" /* default */].div(FileListItem_templateObject());
var StyledError = styled_components_browser_esm["c" /* default */].div(FileListItem_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.error;
});
var Progress = styled_components_browser_esm["c" /* default */].div(FileListItem_templateObject3());
var ProgressStatus = styled_components_browser_esm["c" /* default */].div(FileListItem_templateObject4(), function (props) {
  return props.isFailed ? props.theme.colors.error : props.theme.colors.terminal;
});
var ProgressIndicator = styled_components_browser_esm["c" /* default */].div(FileListItem_templateObject5(), function (props) {
  return props.theme.colors.terminalDark;
}, function (props) {
  return props.theme.colors.terminalDark;
}, function (props) {
  return props.progress;
}, function (props) {
  return props.theme.colors.bgTerminal;
}, function (props) {
  return props.theme.colors.bgTerminal;
}, function (props) {
  return props.isCompleted ? 'none' : '';
}, function (props) {
  return props.isCompleted ? props.theme.colors.inverse : props.theme.colors.terminal;
});
var StyledButton = Object(styled_components_browser_esm["c" /* default */])(CloseButton)(FileListItem_templateObject6(), function (props) {
  return props.theme.colors.error;
}, function (props) {
  return props.theme.colors.light;
});
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/FileListItem/index.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/FileList/FileList.jsx
function FileList_templateObject4() {
  var data = FileList_taggedTemplateLiteral(["\n  overflow: auto;\n  max-height: 300px;\n  // scrollbars\n  padding-right: 16px;\n  margin-right: -16px;\n"]);

  FileList_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function FileList_templateObject3() {
  var data = FileList_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"]);

  FileList_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function FileList_templateObject2() {
  var data = FileList_taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-weight: ", ";\n"]);

  FileList_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function FileList_templateObject() {
  var data = FileList_taggedTemplateLiteral(["\n"]);

  FileList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function FileList_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




function FileList(_ref) {
  var files = _ref.files,
      onUpdate = _ref.onUpdate,
      onRemove = _ref.onRemove;

  if (files.length === 0) {
    return null;
  }

  var $files = files.map(function (file) {
    var key = file.id;
    var props = {
      onUpdate: onUpdate,
      key: key,
      file: file,
      onRemove: onRemove
    };
    return file.isUpload ? react_default.a.createElement(FileListItemSend, props) : react_default.a.createElement(FileListItemReceive, props);
  });
  return react_default.a.createElement(List, {
    mt: 3
  }, react_default.a.createElement(ListHeaders, null, react_default.a.createElement(ListTitle, {
    width: "360px"
  }, "File"), react_default.a.createElement(ListTitle, {
    width: "80px",
    textAlign: "right"
  }, "Status")), react_default.a.createElement(ListItems, null, $files));
}
var List = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(FileList_templateObject());
var ListTitle = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(FileList_templateObject2(), function (props) {
  return props.theme.bold;
});
var ListHeaders = styled_components_browser_esm["c" /* default */].div(FileList_templateObject3());
var ListItems = styled_components_browser_esm["c" /* default */].div(FileList_templateObject4());
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/FileList/index.js

/* harmony default export */ var FileTransfer_FileList = (FileList);
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/FileTransfer.jsx
function FileTransfer_templateObject2() {
  var data = FileTransfer_taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  font-size: ", "px;\n  height: 20px;\n  opacity: .56;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  transition: all .3s;\n  width: 20px;\n  &:hover {\n    opacity: 1;\n  }\n"]);

  FileTransfer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function FileTransfer_templateObject() {
  var data = FileTransfer_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .24);\n  box-sizing: border-box;\n  font-size: ", "px;\n  color: ", ";\n  padding: 16px;\n  // replace it with the Portal component\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 496px;\n  z-index: 2;\n"]);

  FileTransfer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function FileTransfer_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function FileTransfer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FileTransfer_typeof = function _typeof(obj) { return typeof obj; }; } else { FileTransfer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FileTransfer_typeof(obj); }

function FileTransfer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FileTransfer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FileTransfer_createClass(Constructor, protoProps, staticProps) { if (protoProps) FileTransfer_defineProperties(Constructor.prototype, protoProps); if (staticProps) FileTransfer_defineProperties(Constructor, staticProps); return Constructor; }

function FileTransfer_possibleConstructorReturn(self, call) { if (call && (FileTransfer_typeof(call) === "object" || typeof call === "function")) { return call; } return FileTransfer_assertThisInitialized(self); }

function FileTransfer_getPrototypeOf(o) { FileTransfer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FileTransfer_getPrototypeOf(o); }

function FileTransfer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FileTransfer_setPrototypeOf(subClass, superClass); }

function FileTransfer_setPrototypeOf(o, p) { FileTransfer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FileTransfer_setPrototypeOf(o, p); }

function FileTransfer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FileTransfer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








var FileTransfer_FileTransferDialog =
/*#__PURE__*/
function (_Component) {
  FileTransfer_inherits(FileTransferDialog, _Component);

  function FileTransferDialog() {
    var _getPrototypeOf2;

    var _this;

    FileTransfer_classCallCheck(this, FileTransferDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FileTransfer_possibleConstructorReturn(this, (_getPrototypeOf2 = FileTransfer_getPrototypeOf(FileTransferDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FileTransfer_defineProperty(FileTransfer_assertThisInitialized(FileTransfer_assertThisInitialized(_this)), "onDownload", function (location) {
      _this.transfer(location, location, false);
    });

    FileTransfer_defineProperty(FileTransfer_assertThisInitialized(FileTransfer_assertThisInitialized(_this)), "onUpload", function (location, filename, blob) {
      _this.transfer(location, filename, true, blob);
    });

    FileTransfer_defineProperty(FileTransfer_assertThisInitialized(FileTransfer_assertThisInitialized(_this)), "onKeyDown", function (e) {
      // escape
      if (e.keyCode !== 27) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      _this.onClose();
    });

    FileTransfer_defineProperty(FileTransfer_assertThisInitialized(FileTransfer_assertThisInitialized(_this)), "onClose", function () {
      var isTransfering = _this.props.store.isTransfering();

      if (!isTransfering) {
        _this.props.onClose();
      }

      if (isTransfering && window.confirm("Are you sure you want to cancel file transfers?")) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  FileTransfer_createClass(FileTransferDialog, [{
    key: "transfer",
    value: function transfer(location, name, isUpload) {
      var blob = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      this.props.onTransferStart({
        location: location,
        name: name,
        isUpload: isUpload,
        blob: blob
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          store = _this$props.store,
          onTransferUpdate = _this$props.onTransferUpdate,
          onTransferRemove = _this$props.onTransferRemove;

      if (!store.isOpen) {
        return null;
      }

      var files = store.files,
          isUpload = store.isUpload;
      var latestFirst = files.toArray().reverse();
      return react_default.a.createElement(StyledFileTransfer, {
        onKeyDown: this.onKeyDown
      }, !isUpload && react_default.a.createElement(DownloadForm, {
        onDownload: this.onDownload
      }), isUpload && react_default.a.createElement(FileTransfer_UploadForm, {
        onUpload: this.onUpload
      }), react_default.a.createElement(FileTransfer_FileList, {
        onRemove: onTransferRemove,
        onUpdate: onTransferUpdate,
        files: latestFirst
      }), react_default.a.createElement(FileTransfer_CloseButton, {
        onClick: this.onClose
      }));
    }
  }]);

  return FileTransferDialog;
}(react["Component"]);

FileTransfer_defineProperty(FileTransfer_FileTransferDialog, "propTypes", {
  store: prop_types_default.a.object.isRequired,
  onTransferRemove: prop_types_default.a.func.isRequired,
  onTransferStart: prop_types_default.a.func.isRequired,
  onTransferUpdate: prop_types_default.a.func.isRequired,
  onClose: prop_types_default.a.func.isRequired
});


var StyledFileTransfer = styled_components_browser_esm["c" /* default */].div(FileTransfer_templateObject(), function (props) {
  return props.theme.colors.dark;
}, function (props) {
  return props.theme.fontSizes[0];
}, function (props) {
  return props.theme.colors.terminal;
});
var FileTransfer_CloseButton = Object(styled_components_browser_esm["c" /* default */])(CloseButton)(FileTransfer_templateObject2(), function (props) {
  return props.theme.colors.dark;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.fontSizes[4];
});
// CONCATENATED MODULE: ./src/app/components/Terminal/FileTransfer/index.jsx

/* harmony default export */ var FileTransfer = (FileTransfer_FileTransferDialog);
// EXTERNAL MODULE: ./src/shared/components/Alert/index.jsx + 1 modules
var Alert = __webpack_require__("LcJ4");

// CONCATENATED MODULE: ./src/app/components/Terminal/Terminal.jsx
function Terminal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Terminal_typeof = function _typeof(obj) { return typeof obj; }; } else { Terminal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Terminal_typeof(obj); }

function Terminal_templateObject2() {
  var data = Terminal_taggedTemplateLiteral(["\n  background-color:", ";\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  .grv-terminal {\n    height: 100%;\n    width: 100%;\n    font-size: 14px;\n    line-height: normal;\n    overflow: auto;\n  }\n\n  .grv-terminal .terminal {\n    font-family: ", ";\n    border: none;\n    font-size: inherit;\n    line-height: normal;\n    position: relative;\n  }\n\n  .grv-terminal .terminal .xterm-viewport {\n    background-color:", ";\n    overflow-y: hidden;\n  }\n\n  .grv-terminal .terminal * {\n    font-weight: normal!important;\n  }\n"]);

  Terminal_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Terminal_templateObject() {
  var data = Terminal_taggedTemplateLiteral(["\n  height: 100%;\n  overflow: auto;\n  width: 100%;\n"]);

  Terminal_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Terminal_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Terminal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Terminal_defineProperty(target, key, source[key]); }); } return target; }

function Terminal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Terminal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Terminal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Terminal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Terminal_defineProperties(Constructor, staticProps); return Constructor; }

function Terminal_possibleConstructorReturn(self, call) { if (call && (Terminal_typeof(call) === "object" || typeof call === "function")) { return call; } return Terminal_assertThisInitialized(self); }

function Terminal_getPrototypeOf(o) { Terminal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Terminal_getPrototypeOf(o); }

function Terminal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Terminal_setPrototypeOf(subClass, superClass); }

function Terminal_setPrototypeOf(o, p) { Terminal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Terminal_setPrototypeOf(o, p); }

function Terminal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Terminal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
















var Terminal_Terminal =
/*#__PURE__*/
function (_React$Component) {
  Terminal_inherits(Terminal, _React$Component);

  function Terminal(props) {
    var _this;

    Terminal_classCallCheck(this, Terminal);

    _this = Terminal_possibleConstructorReturn(this, Terminal_getPrototypeOf(Terminal).call(this, props));

    Terminal_defineProperty(Terminal_assertThisInitialized(Terminal_assertThisInitialized(_this)), "startNew", function () {
      var newTermParams = Terminal_objectSpread({}, _this.props.termParams, {
        sid: undefined
      });

      _this.props.updateRoute(newTermParams);

      _this.props.initTerminal(newTermParams);
    });

    Terminal_defineProperty(Terminal_assertThisInitialized(Terminal_assertThisInitialized(_this)), "replay", function () {
      var _this$props$termParam = _this.props.termParams,
          siteId = _this$props$termParam.siteId,
          sid = _this$props$termParam.sid;

      _this.props.onOpenPlayer(siteId, sid);
    });

    Terminal_defineProperty(Terminal_assertThisInitialized(Terminal_assertThisInitialized(_this)), "onCloseFileTransfer", function () {
      _this.props.onCloseFileTransfer();

      if (_this.termRef) {
        _this.termRef.focus();
      }
    });

    Terminal_defineProperty(Terminal_assertThisInitialized(Terminal_assertThisInitialized(_this)), "onOpenUploadDialog", function () {
      _this.props.onOpenUploadDialog(_this.props.termParams);
    });

    Terminal_defineProperty(Terminal_assertThisInitialized(Terminal_assertThisInitialized(_this)), "onOpenDownloadDialog", function () {
      _this.props.onOpenDownloadDialog(_this.props.termParams);
    });

    Terminal_defineProperty(Terminal_assertThisInitialized(Terminal_assertThisInitialized(_this)), "onClose", function () {
      _this.props.onClose(_this.props.termParams.siteId);
    });

    return _this;
  }

  Terminal_createClass(Terminal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.props.initTerminal(_this2.props.termParams);
      }, 0);
    }
  }, {
    key: "renderXterm",
    value: function renderXterm(termStore) {
      var _this3 = this;

      var status = termStore.status;
      var title = termStore.getServerLabel();

      if (status.isLoading) {
        return react_default.a.createElement(components["b" /* Box */], {
          textAlign: "center",
          m: 10
        }, react_default.a.createElement(components["f" /* Indicator */], null));
      }

      if (status.isError) {
        return react_default.a.createElement(Terminal_ErrorIndicator, {
          text: status.errorText
        });
      }

      if (status.isNotFound) {
        return react_default.a.createElement(Terminal_SidNotFoundError, {
          onReplay: this.replay,
          onNew: this.startNew
        });
      }

      if (status.isReady) {
        var ttyParams = termStore.getTtyParams();
        return react_default.a.createElement(Xterm_XTerm, {
          ref: function ref(e) {
            return _this3.termRef = e;
          },
          title: title,
          onSessionEnd: this.onClose,
          ttyParams: ttyParams
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          termStore = _this$props.termStore,
          fileStore = _this$props.fileStore,
          onTransferUpdate = _this$props.onTransferUpdate,
          onTransferStart = _this$props.onTransferStart,
          onTransferRemove = _this$props.onTransferRemove;
      var title = termStore.getServerLabel();
      var isFileTransferDialogOpen = fileStore.isOpen;
      var $xterm = this.renderXterm(termStore);
      return react_default.a.createElement(Modal_Portal, null, react_default.a.createElement(StyledTerminal, null, react_default.a.createElement(FileTransfer, {
        store: fileStore,
        onTransferRemove: onTransferRemove,
        onTransferUpdate: onTransferUpdate,
        onTransferStart: onTransferStart,
        onClose: this.onCloseFileTransfer
      }), react_default.a.createElement(components["e" /* Flex */], {
        flexDirection: "column",
        height: "100%",
        width: "100%"
      }, react_default.a.createElement(components["b" /* Box */], {
        px: 2
      }, react_default.a.createElement(ActionBar_ActionBar, {
        onOpenUploadDialog: this.onOpenUploadDialog,
        onOpenDownloadDialog: this.onOpenDownloadDialog,
        isFileTransferDialogOpen: isFileTransferDialogOpen,
        title: title,
        onClose: this.onClose
      })), react_default.a.createElement(XtermBox, {
        px: 2
      }, $xterm))));
    }
  }]);

  return Terminal;
}(react_default.a.Component);

var Terminal_ErrorIndicator = function ErrorIndicator(_ref) {
  var text = _ref.text;
  return react_default.a.createElement(Alert["a" /* Danger */], {
    m: 10
  }, "Connection error", react_default.a.createElement(components["k" /* Text */], {
    fontSize: 1
  }, " ", text, " "));
};

var Terminal_SidNotFoundError = function SidNotFoundError(_ref2) {
  var onNew = _ref2.onNew,
      onReplay = _ref2.onReplay;
  return react_default.a.createElement(components["b" /* Box */], {
    my: 10,
    mx: "auto",
    width: "300px"
  }, react_default.a.createElement(components["m" /* Typography */].h4, {
    textAlign: "center"
  }, "The session is no longer active"), react_default.a.createElement(components["c" /* Button */], {
    block: true,
    onClick: onNew,
    my: 4
  }, react_default.a.createElement(components_Icon["h" /* Cli */], null), " Start New Session"), react_default.a.createElement(components["c" /* Button */], {
    block: true,
    secondary: true,
    onClick: onReplay
  }, react_default.a.createElement(components_Icon["g" /* CirclePlay */], null), " Replay Session"));
};

function Terminal_mapStoreToProps() {
  return {
    termStore: terminal_getters.store,
    fileStore: fileTransfer["a" /* getters */].store
  };
}

function mapStateToProps(props) {
  var _props$match$params = props.match.params,
      sid = _props$match$params.sid,
      login = _props$match$params.login,
      siteId = _props$match$params.siteId,
      serverId = _props$match$params.serverId;
  return {
    onOpenUploadDialog: openUploadDialog,
    onOpenDownloadDialog: openDownloadDialog,
    onTransferRemove: removeFile,
    onTransferStart: addFile,
    onTransferUpdate: updateStatus,
    onCloseFileTransfer: closeDialog,
    onClose: actions_close,
    onOpenPlayer: actions_open,
    updateRoute: updateRoute,
    initTerminal: initTerminal,
    termParams: {
      sid: sid,
      login: login,
      siteId: siteId,
      serverId: serverId
    }
  };
}

/* harmony default export */ var components_Terminal_Terminal = (Object(nuclear["b" /* connect */])(Terminal_mapStoreToProps, mapStateToProps)(Terminal_Terminal));
var XtermBox = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(Terminal_templateObject());
var StyledTerminal = styled_components_browser_esm["c" /* default */].div(Terminal_templateObject2(), function (props) {
  return props.theme.colors.bgTerminal;
}, theme["c" /* fonts */].mono, function (props) {
  return props.theme.colors.bgTerminal;
});
// CONCATENATED MODULE: ./src/app/components/Terminal/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_Terminal = (components_Terminal_Terminal);
// EXTERNAL MODULE: ./src/app/components/Player/ProgressBar/Slider/Slider.jsx
var Slider = __webpack_require__("KHiX");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);

// CONCATENATED MODULE: ./src/app/components/Player/ProgressBar/Slider/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var ProgressBar_Slider = (Slider_default.a);
// CONCATENATED MODULE: ./src/app/components/Player/ProgressBar/ProgressBar.jsx
function ProgressBar_templateObject4() {
  var data = ProgressBar_taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  color: ", ";\n  padding: 16px;\n\n  .grv-slider {\n    display: block;\n    padding: 0;\n    height: 24px;\n  }\n\n  .grv-slider .bar {\n    border-radius: 200px;\n    height: 8px;\n    margin: 8px 0;\n  }\n\n  .grv-slider .handle {\n    background-color: ", ";\n    border-radius: 200px;\n    box-shadow: 0 0 4px rgba(0, 0, 0, .12), 0 4px 4px rgba(0, 0, 0, .24);\n    width: 16px;\n    height: 16px;\n    left: -8px;\n    top: 4px;\n  }\n\n  .grv-slider .bar-0 {\n    background-color: ", ";\n    box-shadow: none;\n  }\n\n  .grv-slider .bar-1 {\n    background-color: ", ";\n  }\n"]);

  ProgressBar_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ProgressBar_templateObject3() {
  var data = ProgressBar_taggedTemplateLiteral(["\n  background: ", ";\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: 24px;\n  height: 24px;\n  margin-right: 16px;\n  outline: none;\n  opacity: .87;\n  padding: 0;\n  text-align: center;\n  transition: all .3s;\n  width: 24px;\n\n  &:hover {\n    opacity: 1;\n\n    .icon {\n      color: ", ";\n    }\n  }\n\n  .icon {\n    height: 24px;\n    width: 24px;\n  }\n"]);

  ProgressBar_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ProgressBar_templateObject2() {
  var data = ProgressBar_taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", "px;\n  line-height: 24px;\n  margin-right: 16px;\n  opacity: .56;\n"]);

  ProgressBar_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ProgressBar_templateObject() {
  var data = ProgressBar_taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);

  ProgressBar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ProgressBar_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ProgressBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProgressBar_typeof = function _typeof(obj) { return typeof obj; }; } else { ProgressBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProgressBar_typeof(obj); }

function ProgressBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProgressBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProgressBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProgressBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProgressBar_defineProperties(Constructor, staticProps); return Constructor; }

function ProgressBar_possibleConstructorReturn(self, call) { if (call && (ProgressBar_typeof(call) === "object" || typeof call === "function")) { return call; } return ProgressBar_assertThisInitialized(self); }

function ProgressBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProgressBar_getPrototypeOf(o) { ProgressBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProgressBar_getPrototypeOf(o); }

function ProgressBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProgressBar_setPrototypeOf(subClass, superClass); }

function ProgressBar_setPrototypeOf(o, p) { ProgressBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProgressBar_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var ProgressBar_ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  ProgressBar_inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    ProgressBar_classCallCheck(this, ProgressBar);

    return ProgressBar_possibleConstructorReturn(this, ProgressBar_getPrototypeOf(ProgressBar).apply(this, arguments));
  }

  ProgressBar_createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isPlaying = _this$props.isPlaying,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onToggle = _this$props.onToggle,
          time = _this$props.time;
      var Icon = isPlaying ? components_Icon["f" /* CirclePause */] : components_Icon["g" /* CirclePlay */];
      return react_default.a.createElement(StyledProgessBar, null, react_default.a.createElement(ActionButton, {
        onClick: onToggle
      }, react_default.a.createElement(Icon, null)), react_default.a.createElement(TimeText, null, time), react_default.a.createElement(SliderContainer, null, react_default.a.createElement(ProgressBar_Slider, {
        min: min,
        max: max,
        value: value,
        onChange: onChange,
        defaultValue: 1,
        withBars: true,
        className: "grv-slider"
      })));
    }
  }]);

  return ProgressBar;
}(react_default.a.Component);


var SliderContainer = styled_components_browser_esm["c" /* default */].div(ProgressBar_templateObject());
var TimeText = Object(styled_components_browser_esm["c" /* default */])(components["k" /* Text */])(ProgressBar_templateObject2(), theme["c" /* fonts */].mono, function (props) {
  return props.theme.fontSizes[1];
});
var ActionButton = styled_components_browser_esm["c" /* default */].button(ProgressBar_templateObject3(), function (props) {
  return props.theme.colors.dark;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.colors.primary;
});
var StyledProgessBar = styled_components_browser_esm["c" /* default */].div(ProgressBar_templateObject4(), function (props) {
  return props.theme.colors.dark;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.colors.success;
}, function (props) {
  return props.theme.colors.text;
});
// CONCATENATED MODULE: ./src/app/components/Player/ProgressBar/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var Player_ProgressBar = (ProgressBar_ProgressBar);
// EXTERNAL MODULE: ./node_modules/xterm/dist/xterm.css
var dist_xterm = __webpack_require__("k2hz");

// CONCATENATED MODULE: ./src/app/components/Player/Xterm/Xterm.jsx
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = Xterm_Xterm_getPrototypeOf(object); if (object === null) break; } return object; }

function Xterm_Xterm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Xterm_Xterm_typeof = function _typeof(obj) { return typeof obj; }; } else { Xterm_Xterm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Xterm_Xterm_typeof(obj); }

function Xterm_Xterm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Xterm_Xterm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Xterm_Xterm_createClass(Constructor, protoProps, staticProps) { if (protoProps) Xterm_Xterm_defineProperties(Constructor.prototype, protoProps); if (staticProps) Xterm_Xterm_defineProperties(Constructor, staticProps); return Constructor; }

function Xterm_Xterm_possibleConstructorReturn(self, call) { if (call && (Xterm_Xterm_typeof(call) === "object" || typeof call === "function")) { return call; } return Xterm_Xterm_assertThisInitialized(self); }

function Xterm_Xterm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Xterm_Xterm_getPrototypeOf(o) { Xterm_Xterm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Xterm_Xterm_getPrototypeOf(o); }

function Xterm_Xterm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Xterm_Xterm_setPrototypeOf(subClass, superClass); }

function Xterm_Xterm_setPrototypeOf(o, p) { Xterm_Xterm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Xterm_Xterm_setPrototypeOf(o, p); }

function Xterm_Xterm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var Xterm_Xterm =
/*#__PURE__*/
function (_React$Component) {
  Xterm_Xterm_inherits(Xterm, _React$Component);

  function Xterm() {
    Xterm_Xterm_classCallCheck(this, Xterm);

    return Xterm_Xterm_possibleConstructorReturn(this, Xterm_Xterm_getPrototypeOf(Xterm).apply(this, arguments));
  }

  Xterm_Xterm_createClass(Xterm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tty = this.props.tty;
      this.terminal = new PlayerXtermCtrl(tty, this.refs.container);
      this.terminal.open();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.terminal.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.props.tty.isLoading; // need to hide the terminal cursor while fetching for events

      var style = {
        visibility: isLoading ? "hidden" : "initial"
      };
      return react_default.a.createElement("div", {
        style: style,
        ref: "container"
      });
    }
  }]);

  return Xterm;
}(react_default.a.Component);

Xterm_Xterm_defineProperty(Xterm_Xterm, "propTypes", {
  tty: prop_types_default.a.object.isRequired
});



var PlayerXtermCtrl =
/*#__PURE__*/
function (_XtermCtrl) {
  Xterm_Xterm_inherits(PlayerXtermCtrl, _XtermCtrl);

  function PlayerXtermCtrl(tty, el) {
    var _this;

    Xterm_Xterm_classCallCheck(this, PlayerXtermCtrl);

    _this = Xterm_Xterm_possibleConstructorReturn(this, Xterm_Xterm_getPrototypeOf(PlayerXtermCtrl).call(this, {
      el: el,
      scrollBack: 1000
    }));
    _this.tty = tty;
    return _this;
  }

  Xterm_Xterm_createClass(PlayerXtermCtrl, [{
    key: "connect",
    value: function connect() {}
  }, {
    key: "open",
    value: function open() {
      _get(Xterm_Xterm_getPrototypeOf(PlayerXtermCtrl.prototype), "open", this).call(this);
    }
  }, {
    key: "resize",
    value: function resize(cols, rows) {
      // ensure that cursor is visible as xterm hides it on blur event
      this.term.cursorState = 1;

      _get(Xterm_Xterm_getPrototypeOf(PlayerXtermCtrl.prototype), "resize", this).call(this, cols, rows);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(Xterm_Xterm_getPrototypeOf(PlayerXtermCtrl.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_disconnect",
    value: function _disconnect() {}
  }, {
    key: "_requestResize",
    value: function _requestResize() {}
  }]);

  return PlayerXtermCtrl;
}(terminal);
// CONCATENATED MODULE: ./src/app/components/Player/Xterm/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var Player_Xterm = (Xterm_Xterm);
// CONCATENATED MODULE: ./src/app/lib/term/ttyPlayer.js
function ttyPlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ttyPlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { ttyPlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ttyPlayer_typeof(obj); }

function ttyPlayer_possibleConstructorReturn(self, call) { if (call && (ttyPlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return ttyPlayer_assertThisInitialized(self); }

function ttyPlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ttyPlayer_getPrototypeOf(o) { ttyPlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ttyPlayer_getPrototypeOf(o); }

function ttyPlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ttyPlayer_setPrototypeOf(subClass, superClass); }

function ttyPlayer_setPrototypeOf(o, p) { ttyPlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ttyPlayer_setPrototypeOf(o, p); }

function ttyPlayer_slicedToArray(arr, i) { return ttyPlayer_arrayWithHoles(arr) || ttyPlayer_iterableToArrayLimit(arr, i) || ttyPlayer_nonIterableRest(); }

function ttyPlayer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function ttyPlayer_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ttyPlayer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ttyPlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ttyPlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ttyPlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ttyPlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ttyPlayer_defineProperties(Constructor, staticProps); return Constructor; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var ttyPlayer_logger = logger["a" /* default */].create('TtyPlayer');
var STREAM_START_INDEX = 0;
var URL_PREFIX_EVENTS = '/events';
var PLAY_SPEED = 5;
var Buffer = buffer_default.a.Buffer;
var MAX_SIZE = 5242880; // 5mg

var ttyPlayer_EventProvider =
/*#__PURE__*/
function () {
  function EventProvider(_ref) {
    var url = _ref.url;

    ttyPlayer_classCallCheck(this, EventProvider);

    this.url = url;
    this.events = [];
  }

  ttyPlayer_createClass(EventProvider, [{
    key: "getDuration",
    value: function getDuration() {
      var eventCount = this.events.length;

      if (eventCount === 0) {
        return 0;
      }

      return this.events[eventCount - 1].msNormalized;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      return this._fetchEvents().then(function (events) {
        _this.events = events;

        var printEvents = _this.events.filter(onlyPrintEvents);

        if (printEvents.length === 0) {
          return;
        }

        return _this._fetchContent(printEvents).then(function (buffer) {
          _this._populatePrintEvents(buffer, printEvents);
        });
      });
    }
  }, {
    key: "_fetchEvents",
    value: function _fetchEvents() {
      var _this2 = this;

      var url = this.url + URL_PREFIX_EVENTS;
      return api["a" /* default */].get(url).then(function (json) {
        if (!json.events) {
          return [];
        }

        return _this2._createEvents(json.events);
      });
    }
  }, {
    key: "_fetchContent",
    value: function _fetchContent(events) {
      // calclulate the size of the session in bytes to know how many
      // chunks to load due to maximum chunk size.
      var offset = events[0].offset;
      var end = events.length - 1;
      var totalSize = events[end].offset - offset + events[end].bytes;
      var chunkCount = Math.ceil(totalSize / MAX_SIZE); // create a fetch request for each chunk

      var promises = [];

      for (var i = 0; i < chunkCount; i++) {
        var url = "".concat(this.url, "/stream?offset=").concat(offset, "&bytes=").concat(MAX_SIZE);
        promises.push(api["a" /* default */].fetch(url, {}).then(function (response) {
          return response.text();
        }));
        offset = offset + MAX_SIZE;
      } // fetch all session chunks and then merge them in one


      return Promise.all(promises).then(function () {
        for (var _len = arguments.length, responses = new Array(_len), _key = 0; _key < _len; _key++) {
          responses[_key] = arguments[_key];
        }

        responses = promises.length === 1 ? [[responses]] : responses;
        var allBytes = responses.reduce(function (byteStr, r) {
          return byteStr + r[0];
        }, '');
        return new Buffer(allBytes);
      });
    }
  }, {
    key: "_populatePrintEvents",
    value: function _populatePrintEvents(buffer, events) {
      var byteStrOffset = events[0].bytes;
      events[0].data = buffer.slice(0, byteStrOffset).toString('utf8');

      for (var i = 1; i < events.length; i++) {
        var bytes = events[i].bytes;
        events[i].data = buffer.slice(byteStrOffset, byteStrOffset + bytes).toString('utf8');
        byteStrOffset += bytes;
      }
    }
  }, {
    key: "_createEvents",
    value: function _createEvents(json) {
      var w, h;
      var events = []; // filter print events and ensure that each has the right screen size and valid values

      for (var i = 0; i < json.length; i++) {
        var _json$i = json[i],
            ms = _json$i.ms,
            event = _json$i.event,
            offset = _json$i.offset,
            time = _json$i.time,
            bytes = _json$i.bytes; // grab new screen size for the next events

        if (event === enums["a" /* EventTypeEnum */].RESIZE || event === enums["a" /* EventTypeEnum */].START) {
          var _json$i$size$split = json[i].size.split(':');

          var _json$i$size$split2 = ttyPlayer_slicedToArray(_json$i$size$split, 2);

          w = _json$i$size$split2[0];
          h = _json$i$size$split2[1];
        } // session has ended, stop here


        if (event === enums["a" /* EventTypeEnum */].END) {
          var start = new Date(events[0].time);
          var end = new Date(time);
          var duration = end.getTime() - start.getTime();
          events.push({
            eventType: event,
            ms: duration,
            time: new Date(time)
          });
          break;
        } // process only PRINT events


        if (event !== enums["a" /* EventTypeEnum */].PRINT) {
          continue;
        }

        events.push({
          eventType: enums["a" /* EventTypeEnum */].PRINT,
          ms: ms,
          bytes: bytes,
          offset: offset,
          data: null,
          w: Number(w),
          h: Number(h),
          time: new Date(time)
        });
      }

      return this._normalizeEventsByTime(events);
    }
  }, {
    key: "_normalizeEventsByTime",
    value: function _normalizeEventsByTime(events) {
      if (!events || events.length === 0) {
        return [];
      }

      events.forEach(function (e) {
        e.displayTime = formatDisplayTime(e.ms);
        e.ms = e.ms > 0 ? Math.floor(e.ms / 10) : 0;
        e.msNormalized = e.ms;
      });
      var cur = events[0];
      var tmp = [];

      for (var i = 1; i < events.length; i++) {
        var sameSize = cur.w === events[i].w && cur.h === events[i].h;
        var delay = events[i].ms - cur.ms; // merge events with tiny delay

        if (delay < 2 && sameSize) {
          cur.bytes += events[i].bytes;
          continue;
        } // avoid long delays between chunks


        events[i].msNormalized = cur.msNormalized + shortenTime(delay);
        tmp.push(cur);
        cur = events[i];
      }

      if (tmp.indexOf(cur) === -1) {
        tmp.push(cur);
      }

      return tmp;
    }
  }]);

  return EventProvider;
}();

function formatDisplayTime(ms) {
  if (ms <= 0) {
    return '00:00';
  }

  var totalSec = Math.floor(ms / 1000);
  var totalDays = totalSec % 31536000 % 86400;
  var h = Math.floor(totalDays / 3600);
  var m = Math.floor(totalDays % 3600 / 60);
  var s = totalDays % 3600 % 60;
  m = m > 9 ? m : '0' + m;
  s = s > 9 ? s : '0' + s;
  h = h > 0 ? h + ':' : '';
  return "".concat(h).concat(m, ":").concat(s);
}

function shortenTime(value) {
  if (value >= 25 && value < 50) {
    return 25;
  } else if (value >= 50 && value < 100) {
    return 50;
  } else if (value >= 100) {
    return 100;
  } else {
    return value;
  }
}

function onlyPrintEvents(e) {
  return e.eventType === enums["a" /* EventTypeEnum */].PRINT;
}

var ttyPlayer_TtyPlayer =
/*#__PURE__*/
function (_Tty) {
  ttyPlayer_inherits(TtyPlayer, _Tty);

  function TtyPlayer(_ref2) {
    var _this3;

    var url = _ref2.url;

    ttyPlayer_classCallCheck(this, TtyPlayer);

    _this3 = ttyPlayer_possibleConstructorReturn(this, ttyPlayer_getPrototypeOf(TtyPlayer).call(this, {}));
    _this3.currentEventIndex = 0;
    _this3.current = 0;
    _this3.duration = 0;
    _this3.isPlaying = false;
    _this3.isError = false;
    _this3.isReady = false;
    _this3.isLoading = true;
    _this3.errText = '';
    _this3._posToEventIndexMap = [];
    _this3._eventProvider = new ttyPlayer_EventProvider({
      url: url
    });
    return _this3;
  } // override


  ttyPlayer_createClass(TtyPlayer, [{
    key: "send",
    value: function send() {} // override

  }, {
    key: "connect",
    value: function connect() {
      var _this4 = this;

      this._setStatusFlag({
        isLoading: true
      });

      this._change();

      return this._eventProvider.init().then(function () {
        _this4._init();

        _this4._setStatusFlag({
          isReady: true
        });
      }).catch(function (err) {
        ttyPlayer_logger.error('unable to init event provider', err);

        _this4.handleError(err);
      }).finally(this._change.bind(this));
    }
  }, {
    key: "handleError",
    value: function handleError(err) {
      this._setStatusFlag({
        isError: true,
        errText: err.message
      });
    }
  }, {
    key: "_init",
    value: function _init() {
      var _this5 = this;

      this.duration = this._eventProvider.getDuration();

      this._eventProvider.events.forEach(function (item) {
        return _this5._posToEventIndexMap.push(item.msNormalized);
      });
    }
  }, {
    key: "move",
    value: function move(newPos) {
      if (!this.isReady) {
        return;
      }

      if (newPos === undefined) {
        newPos = this.current + 1;
      }

      if (newPos < 0) {
        newPos = 0;
      }

      if (newPos > this.duration) {
        this.stop();
      }

      var newEventIndex = this._getEventIndex(newPos) + 1;

      if (newEventIndex === this.currentEventIndex) {
        this.current = newPos;

        this._change();

        return;
      }

      var isRewind = this.currentEventIndex > newEventIndex;

      try {
        // we cannot playback the content within terminal so instead:
        // 1. tell terminal to reset.
        // 2. tell terminal to render 1 huge chunk that has everything up to current
        // location.
        if (isRewind) {
          this.emit(enums["c" /* TermEventEnum */].RESET);
        }

        var from = isRewind ? 0 : this.currentEventIndex;
        var to = newEventIndex;

        var events = this._eventProvider.events.slice(from, to);

        var printEvents = events.filter(onlyPrintEvents);

        this._display(printEvents);

        this.currentEventIndex = newEventIndex;
        this.current = newPos;

        this._change();
      } catch (err) {
        ttyPlayer_logger.error('move', err);
        this.handleError(err);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isPlaying = false;
      this.timer = clearInterval(this.timer);

      this._change();
    }
  }, {
    key: "play",
    value: function play() {
      if (this.isPlaying) {
        return;
      }

      this.isPlaying = true; // start from the beginning if at the end

      if (this.current >= this.duration) {
        this.current = STREAM_START_INDEX;
        this.emit(enums["c" /* TermEventEnum */].RESET);
      }

      this.timer = setInterval(this.move.bind(this), PLAY_SPEED);

      this._change();
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (this.currentEventIndex) {
        var displayTime = this._eventProvider.events[this.currentEventIndex - 1].displayTime;
        return displayTime;
      } else {
        return '--:--';
      }
    }
  }, {
    key: "getEventCount",
    value: function getEventCount() {
      return this._eventProvider.events.length;
    }
  }, {
    key: "_display",
    value: function _display(events) {
      if (!events || events.length === 0) {
        return;
      }

      var groups = [{
        data: [events[0].data],
        w: events[0].w,
        h: events[0].h
      }];
      var cur = groups[0]; // group events by screen size and construct 1 chunk of data per group

      for (var i = 1; i < events.length; i++) {
        if (cur.w === events[i].w && cur.h === events[i].h) {
          cur.data.push(events[i].data);
        } else {
          cur = {
            data: [events[i].data],
            w: events[i].w,
            h: events[i].h
          };
          groups.push(cur);
        }
      } // render each group


      for (var _i2 = 0; _i2 < groups.length; _i2++) {
        var str = groups[_i2].data.join('');

        var _groups$_i = groups[_i2],
            h = _groups$_i.h,
            w = _groups$_i.w;

        if (str.length > 0) {
          this.emit(enums["c" /* TermEventEnum */].RESIZE, {
            h: h,
            w: w
          });
          this.emit(enums["c" /* TermEventEnum */].DATA, str);
        }
      }
    }
  }, {
    key: "_setStatusFlag",
    value: function _setStatusFlag(newStatus) {
      var _newStatus$isReady = newStatus.isReady,
          isReady = _newStatus$isReady === void 0 ? false : _newStatus$isReady,
          _newStatus$isError = newStatus.isError,
          isError = _newStatus$isError === void 0 ? false : _newStatus$isError,
          _newStatus$isLoading = newStatus.isLoading,
          isLoading = _newStatus$isLoading === void 0 ? false : _newStatus$isLoading,
          _newStatus$errText = newStatus.errText,
          errText = _newStatus$errText === void 0 ? '' : _newStatus$errText;
      this.isReady = isReady;
      this.isError = isError;
      this.isLoading = isLoading;
      this.errText = errText;
    }
  }, {
    key: "_getEventIndex",
    value: function _getEventIndex(num) {
      var arr = this._posToEventIndexMap;
      var low = 0;
      var hi = arr.length - 1;

      while (hi - low > 1) {
        var mid = Math.floor((low + hi) / 2);

        if (arr[mid] < num) {
          low = mid;
        } else {
          hi = mid;
        }
      }

      if (num - arr[low] <= arr[hi] - num) {
        return low;
      }

      return hi;
    }
  }, {
    key: "_change",
    value: function _change() {
      this.emit('change');
    }
  }]);

  return TtyPlayer;
}(tty);
/* harmony default export */ var ttyPlayer = (ttyPlayer_TtyPlayer);

// CONCATENATED MODULE: ./src/app/components/Player/Player.jsx
function Player_templateObject3() {
  var data = Player_taggedTemplateLiteral(["\n  height: 100%;\n  overflow: auto;\n  width: 100%;\n"]);

  Player_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Player_templateObject2() {
  var data = Player_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  justify-content: space-between;\n"]);

  Player_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Player_templateObject() {
  var data = Player_taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  overflow: auto;\n  width: 100%;\n"]);

  Player_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Player_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Player_extends() { Player_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Player_extends.apply(this, arguments); }

function Player_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Player_typeof = function _typeof(obj) { return typeof obj; }; } else { Player_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Player_typeof(obj); }

function Player_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Player_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Player_createClass(Constructor, protoProps, staticProps) { if (protoProps) Player_defineProperties(Constructor.prototype, protoProps); if (staticProps) Player_defineProperties(Constructor, staticProps); return Constructor; }

function Player_possibleConstructorReturn(self, call) { if (call && (Player_typeof(call) === "object" || typeof call === "function")) { return call; } return Player_assertThisInitialized(self); }

function Player_getPrototypeOf(o) { Player_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Player_getPrototypeOf(o); }

function Player_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Player_setPrototypeOf(subClass, superClass); }

function Player_setPrototypeOf(o, p) { Player_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Player_setPrototypeOf(o, p); }

function Player_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Player_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








var Player_Player =
/*#__PURE__*/
function (_React$Component) {
  Player_inherits(Player, _React$Component);

  function Player(props) {
    var _this;

    Player_classCallCheck(this, Player);

    _this = Player_possibleConstructorReturn(this, Player_getPrototypeOf(Player).call(this, props));

    Player_defineProperty(Player_assertThisInitialized(Player_assertThisInitialized(_this)), "updateState", function () {
      var newState = _this.calculateState();

      _this.setState(newState);
    });

    Player_defineProperty(Player_assertThisInitialized(Player_assertThisInitialized(_this)), "onTogglePlayStop", function () {
      if (_this.state.isPlaying) {
        _this.tty.stop();
      } else {
        _this.tty.play();
      }
    });

    Player_defineProperty(Player_assertThisInitialized(Player_assertThisInitialized(_this)), "onMove", function (value) {
      _this.tty.move(value);
    });

    var url = _this.props.url;
    _this.tty = new ttyPlayer_TtyPlayer({
      url: url
    });
    _this.state = _this.calculateState();
    return _this;
  }

  Player_createClass(Player, [{
    key: "calculateState",
    value: function calculateState() {
      return {
        eventCount: this.tty.getEventCount(),
        duration: this.tty.duration,
        min: 1,
        time: this.tty.getCurrentTime(),
        isLoading: this.tty.isLoading,
        isPlaying: this.tty.isPlaying,
        isError: this.tty.isError,
        errText: this.tty.errText,
        current: this.tty.current,
        canPlay: this.tty.length > 1
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tty.on('change', this.updateState);
      this.tty.connect();
      this.tty.play();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tty.stop();
      this.tty.removeAllListeners();
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(Container, null, this.renderContent());
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$state = this.state,
          isError = _this$state.isError,
          errText = _this$state.errText,
          isLoading = _this$state.isLoading,
          eventCount = _this$state.eventCount;

      if (isError) {
        return react_default.a.createElement(Player_StatusBox, null, react_default.a.createElement(Alert["a" /* Danger */], {
          m: 10
        }, "Connection Error", react_default.a.createElement(components["k" /* Text */], {
          fontSize: 1
        }, " ", errText || "Error", " ")));
      }

      if (isLoading) {
        return react_default.a.createElement(Player_StatusBox, null, react_default.a.createElement(components["f" /* Indicator */], null));
      }

      if (!isLoading && eventCount === 0) {
        return react_default.a.createElement(Player_StatusBox, null, react_default.a.createElement(components["m" /* Typography */].h4, null, "Recording for this session is not available."));
      }

      return react_default.a.createElement(PlayerBox, null, react_default.a.createElement(Player_XtermBox, {
        px: 2
      }, react_default.a.createElement(Player_Xterm, {
        tty: this.tty
      })), this.renderProgressBar());
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar() {
      var _this$state2 = this.state,
          isPlaying = _this$state2.isPlaying,
          time = _this$state2.time,
          min = _this$state2.min,
          duration = _this$state2.duration,
          current = _this$state2.current,
          eventCount = _this$state2.eventCount;

      if (eventCount <= 0) {
        return null;
      }

      return react_default.a.createElement(Player_ProgressBar, {
        isPlaying: isPlaying,
        time: time,
        min: min,
        max: duration,
        value: current,
        onToggle: this.onTogglePlayStop,
        onChange: this.onMove
      });
    }
  }]);

  return Player;
}(react_default.a.Component);



var Player_StatusBox = function StatusBox(props) {
  return react_default.a.createElement(components["b" /* Box */], Player_extends({
    width: "100%",
    textAlign: "center",
    p: 3
  }, props));
};

var Container = styled_components_browser_esm["c" /* default */].div(Player_templateObject());
var PlayerBox = styled_components_browser_esm["c" /* default */].div(Player_templateObject2());
var Player_XtermBox = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(Player_templateObject3());
// EXTERNAL MODULE: ./src/app/components/DocumentTitle/index.js + 1 modules
var DocumentTitle = __webpack_require__("tOzQ");

// CONCATENATED MODULE: ./src/app/components/Player/PlayerDialog.jsx
function PlayerDialog_templateObject2() {
  var data = PlayerDialog_taggedTemplateLiteral(["\n  background-color:", ";\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  .grv-terminal {\n    font-size: 14px;\n    height: 100%;\n    line-height: normal;\n    width: 100%;\n  }\n\n  .grv-terminal .terminal {\n    border: none;\n    font-family: ", ";\n    font-size: inherit;\n    line-height: normal;\n    position: relative;\n  }\n\n  .grv-terminal .terminal .xterm-viewport {\n    background-color:", ";\n    overflow-y: hidden;\n  }\n\n  .grv-terminal .terminal * {\n    font-weight: normal!important;\n  }\n"]);

  PlayerDialog_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function PlayerDialog_templateObject() {
  var data = PlayerDialog_taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  height: 32px;\n"]);

  PlayerDialog_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function PlayerDialog_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PlayerDialog_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PlayerDialog_typeof = function _typeof(obj) { return typeof obj; }; } else { PlayerDialog_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PlayerDialog_typeof(obj); }

function PlayerDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PlayerDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PlayerDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) PlayerDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) PlayerDialog_defineProperties(Constructor, staticProps); return Constructor; }

function PlayerDialog_possibleConstructorReturn(self, call) { if (call && (PlayerDialog_typeof(call) === "object" || typeof call === "function")) { return call; } return PlayerDialog_assertThisInitialized(self); }

function PlayerDialog_getPrototypeOf(o) { PlayerDialog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PlayerDialog_getPrototypeOf(o); }

function PlayerDialog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PlayerDialog_setPrototypeOf(subClass, superClass); }

function PlayerDialog_setPrototypeOf(o, p) { PlayerDialog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PlayerDialog_setPrototypeOf(o, p); }

function PlayerDialog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PlayerDialog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/











var PlayerDialog_PlayerDialog =
/*#__PURE__*/
function (_React$Component) {
  PlayerDialog_inherits(PlayerDialog, _React$Component);

  function PlayerDialog(props) {
    var _this;

    PlayerDialog_classCallCheck(this, PlayerDialog);

    _this = PlayerDialog_possibleConstructorReturn(this, PlayerDialog_getPrototypeOf(PlayerDialog).call(this, props));

    PlayerDialog_defineProperty(PlayerDialog_assertThisInitialized(PlayerDialog_assertThisInitialized(_this)), "onClose", function () {
      var siteId = _this.props.match.params.siteId;
      player_actions_close(siteId);
    });

    var _props$match$params = props.match.params,
        sid = _props$match$params.sid,
        _siteId = _props$match$params.siteId;
    _this.url = config["a" /* default */].api.getFetchSessionUrl({
      siteId: _siteId,
      sid: sid
    });
    return _this;
  }

  PlayerDialog_createClass(PlayerDialog, [{
    key: "render",
    value: function render() {
      var siteId = this.props.match.params.siteId;
      var title = "".concat(siteId, " \xB7 Player");
      return react_default.a.createElement(Modal_Portal, null, react_default.a.createElement(DocumentTitle["a" /* default */], {
        title: title
      }, react_default.a.createElement(StyledDialog, null, react_default.a.createElement(StyledActionBar, {
        px: 2
      }, react_default.a.createElement(CloseButton, {
        onClick: this.onClose
      })), react_default.a.createElement(Player_Player, {
        url: this.url
      }))));
    }
  }]);

  return PlayerDialog;
}(react_default.a.Component);

var StyledActionBar = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(PlayerDialog_templateObject());
var StyledDialog = styled_components_browser_esm["c" /* default */].div(PlayerDialog_templateObject2(), function (props) {
  return props.theme.colors.bgTerminal;
}, theme["c" /* fonts */].mono, function (props) {
  return props.theme.colors.bgTerminal;
});
/* harmony default export */ var Player_PlayerDialog = (PlayerDialog_PlayerDialog);
// CONCATENATED MODULE: ./src/app/components/Player/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


/* harmony default export */ var components_Player = (Player_PlayerDialog);

// EXTERNAL MODULE: ./src/shared/components/SideNav/SideNavItem.jsx
var SideNavItem = __webpack_require__("/3tl");

// CONCATENATED MODULE: ./src/shared/components/SideNav/SideNavItemIcon.jsx
function SideNavItemIcon_templateObject() {
  var data = SideNavItemIcon_taggedTemplateLiteral(["\n  ", ":active &,\n  ", ".active & {\n    opacity: 1;\n  }\n\n  opacity: .56;\n"]);

  SideNavItemIcon_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function SideNavItemIcon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SideNavItemIcon = Object(styled_components_browser_esm["c" /* default */])(components_Icon["w" /* default */])(SideNavItemIcon_templateObject(), SideNavItem["a" /* default */], SideNavItem["a" /* default */]);
SideNavItemIcon.displayName = 'SideNavItemIcon';
SideNavItemIcon.defaultProps = {
  fontSize: 4,
  theme: theme["b" /* default */],
  ml: -5,
  mr: 2
};
/* harmony default export */ var SideNav_SideNavItemIcon = (SideNavItemIcon);
// CONCATENATED MODULE: ./src/app/flux/userAcl/getters.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var userAcl = ['tlpt_user_acl'];
/* harmony default export */ var userAcl_getters = ({
  userAcl: userAcl
});
// CONCATENATED MODULE: ./src/app/flux/nodes/getters.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var siteNodes = [['tlpt_nodes'], ['tlpt', 'siteId'], function (nodeStore, siteId) {
  return nodeStore.getSiteServers(siteId);
}];
/* harmony default export */ var nodes_getters = ({
  siteNodes: siteNodes,
  nodesByCluster: function nodesByCluster(clusterId) {
    return [['tlpt_nodes'], function (nodeStore) {
      return nodeStore.getSiteServers(clusterId);
    }];
  }
});
// EXTERNAL MODULE: ./src/app/flux/sshHistory/store.js
var sshHistory_store = __webpack_require__("SwYS");

// CONCATENATED MODULE: ./src/shared/components/DataTable/StyledTable.jsx
function StyledTable_templateObject2() {
  var data = StyledTable_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin: 48px auto;\n  max-width: 720px;\n  padding: 32px;\n  text-align: center;\n\n  h2 {\n    font-size: 32px;\n    font-weight: 300;\n    line-height: 40px;\n    margin: 0 0 16px 0;\n  }\n\n  p {\n    font-size: 12px;\n    line-height: 24px;\n    margin: 0;\n  }\n\n  a {\n    color: ", ";\n  }\n"]);

  StyledTable_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function StyledTable_templateObject() {
  var data = StyledTable_taggedTemplateLiteral(["\n  background: ", ";\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .24);\n  border-collapse: collapse;\n  border-spacing: 0;\n  border-radius: 4px;\n  font-size: 12px;\n  margin: 40px 0;\n  width: 100%;\n\n\n  & > thead > tr > th,\n  & > tbody > tr > th,\n  & > tfoot > tr > th,\n  & > thead > tr > td,\n  & > tbody > tr > td,\n  & > tfoot > tr > td {\n    line-height: 24px;\n    padding: 16px;\n    vertical-align: top;\n  }\n\n\n  & > thead> tr > th,\n  & > tbody> tr > th,\n  & > tfoot> tr > th,\n  & > thead> tr > td,\n  & > tbody> tr > td,\n  & > tfoot> tr > td {\n    line-height: 24px;\n    padding: 16px;\n    vertical-align: top;\n  }\n\n\n  & > thead > tr > th {\n    background: ", ";\n    color: rgba(255, 255, 255, .56);\n    cursor: pointer;\n    font-size: 10px;\n    font-weight: 600;\n    height: 24px;\n    line-height: 24px;\n    padding: 0 16px;\n    text-align: left;\n    text-transform: uppercase;\n\n    .icon {\n      font-weight: bold;\n      margin-left: 8px;\n    }\n  }\n\n  .no-data {\n    font-size: 14px;\n    font-weight: 500;\n    opacity: .24;\n    margin: 24px 0;\n  }\n"]);

  StyledTable_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function StyledTable_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var StyledTable = styled_components_browser_esm["c" /* default */].table(StyledTable_templateObject(), function (props) {
  return props.theme.colors.bgSecondary;
}, function (props) {
  return props.theme.colors.bgQuaternary;
});
var StyledEmptyIndicator = styled_components_browser_esm["c" /* default */].div(StyledTable_templateObject2(), function (props) {
  return props.theme.colors.bgQuaternary;
}, function (props) {
  return props.theme.colors.link;
});
// EXTERNAL MODULE: ./src/shared/components/Icon/Icon.jsx
var Icon_Icon = __webpack_require__("IMWB");

// CONCATENATED MODULE: ./src/shared/components/DataTable/Table.jsx
function Table_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Table_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Table_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Table_typeof = function _typeof(obj) { return typeof obj; }; } else { Table_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Table_typeof(obj); }

function Table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Table_defineProperty(target, key, source[key]); }); } return target; }

function Table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Table_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_defineProperties(Constructor, staticProps); return Constructor; }

function Table_possibleConstructorReturn(self, call) { if (call && (Table_typeof(call) === "object" || typeof call === "function")) { return call; } return Table_assertThisInitialized(self); }

function Table_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Table_getPrototypeOf(o) { Table_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Table_getPrototypeOf(o); }

function Table_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Table_setPrototypeOf(subClass, superClass); }

function Table_setPrototypeOf(o, p) { Table_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Table_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/**
* Sort indicator used by SortHeaderCell
*/

var SortTypes = {
  ASC: 'ASC',
  DESC: 'DESC'
};

var Table_Table =
/*#__PURE__*/
function (_React$Component) {
  Table_inherits(Table, _React$Component);

  function Table() {
    Table_classCallCheck(this, Table);

    return Table_possibleConstructorReturn(this, Table_getPrototypeOf(Table).apply(this, arguments));
  }

  Table_createClass(Table, [{
    key: "renderHeader",
    value: function renderHeader(children) {
      var _this = this;

      var data = this.props.data;
      var cells = children.map(function (item, index) {
        return _this.renderCell(item.props.header, Table_objectSpread({
          index: index,
          key: index,
          isHeader: true,
          data: data
        }, item.props));
      });
      return react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, cells));
    }
  }, {
    key: "renderBody",
    value: function renderBody(children) {
      var _this2 = this;

      var data = this.props.data;
      var count = this.props.rowCount;
      var rows = [];

      var _loop = function _loop(i) {
        var cells = children.map(function (item, index) {
          return _this2.renderCell(item.props.cell, Table_objectSpread({
            rowIndex: i,
            key: index,
            isHeader: false,
            data: data
          }, item.props));
        });
        rows.push(react_default.a.createElement("tr", {
          key: i
        }, cells));
      };

      for (var i = 0; i < count; i++) {
        _loop(i);
      }

      if (rows.length) {
        return react_default.a.createElement("tbody", null, rows);
      } else {
        return react_default.a.createElement("tbody", null, react_default.a.createElement("tr", null, react_default.a.createElement("td", {
          align: "center",
          colSpan: children ? children.length : 0
        }, react_default.a.createElement("h3", {
          className: "no-data"
        }, "NO DATA AVAIALBLE"))));
      }
    }
  }, {
    key: "renderCell",
    value: function renderCell(cell, cellProps) {
      var content = null;

      if (react_default.a.isValidElement(cell)) {
        content = react_default.a.cloneElement(cell, cellProps);
      } else if (typeof cell === 'function') {
        content = cell(cellProps);
      }

      return content;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footer = null;

      if (this.props.footer) {
        footer = react_default.a.createElement("tfoot", null, react_default.a.createElement("tr", null, react_default.a.createElement("td", {
          colSpan: "100%"
        }, this.props.footer)));
      }

      return footer;
    }
  }, {
    key: "renderTopBar",
    value: function renderTopBar() {
      var topbar = null;

      if (this.props.topbar) {
        topbar = react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("td", {
          colSpan: "100%"
        }, this.props.topbar)));
      }

      return topbar;
    }
  }, {
    key: "render",
    value: function render() {
      var children = [];
      react_default.a.Children.forEach(this.props.children, function (child) {
        if (child == null) {
          return;
        }

        if (!child.props._isColumn) {
          throw 'Should be Column';
        }

        children.push(child);
      });
      return react_default.a.createElement(StyledTable, null, this.renderTopBar(), this.renderHeader(children), this.renderBody(children), this.renderFooter());
    }
  }]);

  return Table;
}(react_default.a.Component);

var Table_SortIndicator = function SortIndicator(_ref) {
  var sortDir = _ref.sortDir;

  if (sortDir === SortTypes.DESC) {
    return react_default.a.createElement(Icon_Icon["w" /* SortDesc */], null);
  }

  if (sortDir === SortTypes.ASC) {
    return react_default.a.createElement(Icon_Icon["v" /* SortAsc */], null);
  }

  return react_default.a.createElement(Icon_Icon["u" /* Sort */], null);
};

var Column =
/*#__PURE__*/
function (_React$Component2) {
  Table_inherits(Column, _React$Component2);

  function Column() {
    Table_classCallCheck(this, Column);

    return Table_possibleConstructorReturn(this, Table_getPrototypeOf(Column).apply(this, arguments));
  }

  Table_createClass(Column, [{
    key: "render",
    value: function render() {
      throw new Error("Component Column should never render");
    }
  }]);

  return Column;
}(react_default.a.Component);

Table_defineProperty(Column, "defaultProps", {
  _isColumn: true
});

var Table_Cell = function Cell(props) {
  var isHeader = props.isHeader,
      children = props.children;
  var cell = react_default.a.createElement("td", null, children);

  if (isHeader) {
    cell = react_default.a.createElement("th", null, children);
  }

  return cell;
};

var Table_TextCell = function TextCell(_ref2) {
  var rowIndex = _ref2.rowIndex,
      data = _ref2.data,
      columnKey = _ref2.columnKey,
      props = Table_objectWithoutProperties(_ref2, ["rowIndex", "data", "columnKey"]);

  return react_default.a.createElement(Table_Cell, props, data[rowIndex][columnKey]);
};

var Table_SortHeaderCell =
/*#__PURE__*/
function (_React$Component3) {
  Table_inherits(SortHeaderCell, _React$Component3);

  function SortHeaderCell() {
    var _getPrototypeOf2;

    var _this3;

    Table_classCallCheck(this, SortHeaderCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = Table_possibleConstructorReturn(this, (_getPrototypeOf2 = Table_getPrototypeOf(SortHeaderCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Table_defineProperty(Table_assertThisInitialized(Table_assertThisInitialized(_this3)), "onSortChange", function (e) {
      e.preventDefault();

      if (!_this3.props.onSortChange) {
        return;
      }

      var _this3$props = _this3.props,
          sortDir = _this3$props.sortDir,
          columnKey = _this3$props.columnKey; // default

      var newDir = SortTypes.DESC;

      if (sortDir) {
        newDir = sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
      }

      _this3.props.onSortChange(columnKey, newDir);
    });

    return _this3;
  }

  Table_createClass(SortHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sortDir = _this$props.sortDir,
          title = _this$props.title,
          props = Table_objectWithoutProperties(_this$props, ["sortDir", "title"]);

      return react_default.a.createElement(Table_Cell, props, react_default.a.createElement("a", {
        onClick: this.onSortChange
      }, title), react_default.a.createElement(Table_SortIndicator, {
        sortDir: sortDir
      }));
    }
  }]);

  return SortHeaderCell;
}(react_default.a.Component);

var Table_EmptyIndicator =
/*#__PURE__*/
function (_React$Component4) {
  Table_inherits(EmptyIndicator, _React$Component4);

  function EmptyIndicator() {
    Table_classCallCheck(this, EmptyIndicator);

    return Table_possibleConstructorReturn(this, Table_getPrototypeOf(EmptyIndicator).apply(this, arguments));
  }

  Table_createClass(EmptyIndicator, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          title = _this$props2.title;
      var noResults = title || "No Results Found";
      return react_default.a.createElement(StyledEmptyIndicator, null, react_default.a.createElement("h2", null, noResults), react_default.a.createElement("p", null, children));
    }
  }]);

  return EmptyIndicator;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/shared/components/DataTable/Paged/Paged.jsx
function Paged_templateObject2() {
  var data = Paged_taggedTemplateLiteral(["\n  display: flex;\n  height: 24px;\n\n  h5 {\n    font-size: 11px;\n    font-weight: 300;\n    margin: 0;\n    opacity: .87;\n  }\n\n  button {\n    background: none;\n    border: none;\n    border-radius: 200px;\n    cursor: pointer;\n    height: 24px;\n    padding: 0;\n    margin: 0 2px;\n    min-width: 24px;\n    outline: none;\n    transition: all .3s;\n\n    &:hover {\n      background: ", ";\n      ", " {\n        opacity: 1;\n      }\n    }\n\n    ", " {\n      opacity: .56;\n      transition: all .3s;\n    }\n  }\n"]);

  Paged_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Paged_templateObject() {
  var data = Paged_taggedTemplateLiteral(["\n  margin-left: auto;\n"]);

  Paged_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Paged_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Paged_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Paged_typeof = function _typeof(obj) { return typeof obj; }; } else { Paged_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Paged_typeof(obj); }

function Paged_extends() { Paged_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Paged_extends.apply(this, arguments); }

function Paged_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Paged_defineProperty(target, key, source[key]); }); } return target; }

function Paged_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Paged_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Paged_createClass(Constructor, protoProps, staticProps) { if (protoProps) Paged_defineProperties(Constructor.prototype, protoProps); if (staticProps) Paged_defineProperties(Constructor, staticProps); return Constructor; }

function Paged_possibleConstructorReturn(self, call) { if (call && (Paged_typeof(call) === "object" || typeof call === "function")) { return call; } return Paged_assertThisInitialized(self); }

function Paged_getPrototypeOf(o) { Paged_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Paged_getPrototypeOf(o); }

function Paged_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Paged_setPrototypeOf(subClass, superClass); }

function Paged_setPrototypeOf(o, p) { Paged_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Paged_setPrototypeOf(o, p); }

function Paged_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Paged_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var Paged_PagedTable =
/*#__PURE__*/
function (_React$Component) {
  Paged_inherits(PagedTable, _React$Component);

  function PagedTable(props) {
    var _this;

    Paged_classCallCheck(this, PagedTable);

    _this = Paged_possibleConstructorReturn(this, Paged_getPrototypeOf(PagedTable).call(this, props));

    Paged_defineProperty(Paged_assertThisInitialized(Paged_assertThisInitialized(_this)), "onPrev", function () {
      var _this$state = _this.state,
          startFrom = _this$state.startFrom,
          pageSize = _this$state.pageSize;
      startFrom = startFrom - pageSize;

      if (startFrom < 0) {
        startFrom = 0;
      }

      _this.setState({
        startFrom: startFrom
      });
    });

    Paged_defineProperty(Paged_assertThisInitialized(Paged_assertThisInitialized(_this)), "onNext", function () {
      var _this$props$data = _this.props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data;
      var _this$state2 = _this.state,
          startFrom = _this$state2.startFrom,
          pageSize = _this$state2.pageSize;
      var newStartFrom = startFrom + pageSize;

      if (newStartFrom < data.length) {
        newStartFrom = startFrom + pageSize;

        _this.setState({
          startFrom: newStartFrom
        });
      }
    });

    var _this$props$pageSize = _this.props.pageSize,
        _pageSize = _this$props$pageSize === void 0 ? 7 : _this$props$pageSize;

    _this.state = {
      startFrom: 0,
      pageSize: _pageSize
    };
    return _this;
  }

  Paged_createClass(PagedTable, [{
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          startFrom = _this$state3.startFrom,
          pageSize = _this$state3.pageSize;
      var _this$props$data2 = this.props.data,
          data = _this$props$data2 === void 0 ? [] : _this$props$data2;
      var totalRows = data.length;
      var $pager = null;
      var endAt = 0;
      var pagedData = data;

      if (data.length > 0) {
        endAt = startFrom + (pageSize > data.length ? data.length : pageSize);

        if (endAt > data.length) {
          endAt = data.length;
        }

        pagedData = data.slice(startFrom, endAt);
      }

      var tableProps = Paged_objectSpread({}, this.props, {
        rowCount: pagedData.length,
        data: pagedData
      });

      var infoProps = {
        pageSize: pageSize,
        startFrom: startFrom,
        endAt: endAt,
        totalRows: totalRows
      };

      if (totalRows > pageSize) {
        $pager = react_default.a.createElement(Paged_PageInfo, Paged_extends({}, infoProps, {
          onPrev: this.onPrev,
          onNext: this.onNext
        }));
      }

      return react_default.a.createElement(Table_Table, Paged_extends({}, tableProps, {
        topbar: $pager,
        footer: $pager
      }));
    }
  }]);

  return PagedTable;
}(react_default.a.Component);

var Paged_PageInfo = function PageInfo(props) {
  var startFrom = props.startFrom,
      endAt = props.endAt,
      totalRows = props.totalRows,
      onPrev = props.onPrev,
      onNext = props.onNext,
      pageSize = props.pageSize;
  var shouldBeDisplayed = totalRows > pageSize;

  if (!shouldBeDisplayed) {
    return null;
  }

  var isPrevDisabled = startFrom === 0;
  var isNextDisabled = endAt === totalRows;
  return react_default.a.createElement(Pager, null, react_default.a.createElement("h5", null, "SHOWING ", react_default.a.createElement("strong", null, startFrom + 1), " to ", react_default.a.createElement("strong", null, endAt), " of ", react_default.a.createElement("strong", null, totalRows)), react_default.a.createElement(ButtonList, null, react_default.a.createElement("button", {
    onClick: onPrev,
    title: "Previous Page",
    disabled: isPrevDisabled
  }, react_default.a.createElement(components_Icon["c" /* CircleArrowLeft */], {
    fontSize: "3"
  })), react_default.a.createElement("button", {
    onClick: onNext,
    title: "Next Page",
    disabled: isNextDisabled
  }, react_default.a.createElement(components_Icon["d" /* CircleArrowRight */], {
    fontSize: "3"
  }))));
};

/* harmony default export */ var Paged = (Paged_PagedTable);
var ButtonList = styled_components_browser_esm["c" /* default */].div(Paged_templateObject());
var Pager = styled_components_browser_esm["c" /* default */].nav(Paged_templateObject2(), function (props) {
  return props.theme.colors.bgQuaternary;
}, components_Icon["w" /* default */], components_Icon["w" /* default */]);
// CONCATENATED MODULE: ./src/shared/components/DataTable/Paged/index.js

/* harmony default export */ var DataTable_Paged = (Paged);
// CONCATENATED MODULE: ./src/shared/components/DataTable/index.js



// CONCATENATED MODULE: ./src/app/components/ClusterNodes/NodeList/NodeList.jsx
function NodeList_templateObject2() {
  var data = NodeList_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 2px;\n  display: flex;\n  height: 24px;\n  margin: 0 8px 0 0;\n  position: relative;\n  width: 56px;\n\n  > ul {\n    background: ", ";\n    border-radius: 4px;\n    box-sizing: border-box;\n    box-shadow: 0 0 8px rgba(0, 0, 0, .12),  0 8px 32px rgba(0, 0, 0, .24);\n    list-style-type: none;\n    margin: 0;\n    min-width: 136px;\n    padding: 8px;\n    position: absolute;\n    top: 26px;\n    z-index: 1;\n\n    li {\n      line-height: 32px;\n      margin: 0;\n\n      a {\n        color: ", ";\n        display: block;\n        line-height: 32px;\n        padding: 0 8px;\n        text-decoration: none;\n      }\n    }\n\n    input {\n      background: ", ";\n      border 1px solid ", ";\n      border-radius: 2px;\n      box-sizing: border-box;\n      color: ", ";\n      outline: none;\n      padding: 0 8px;\n      height: 40px;\n      transition: all .3s;\n      width: 100%;\n\n      &:focus {\n        background: ", ";\n        border 1px solid ", ";\n        box-shadow: inset 0 2px 4px rgba(0, 0, 0, .24);\n      }\n    }\n  }\n\n  > button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    height: 24px;\n    margin: 0;\n    outline: none;\n    padding: 0;\n    width: 24px;\n\n    .icon {\n      opacity: .56;\n      transition: all .3s;\n    }\n\n    &:hover, &:focus {\n      background: ", ";\n      transition: all .3s;\n\n      .icon {\n        opacity: 1;\n      }\n    }\n  }\n\n  > a {\n    background: ", ";\n    border-radius: 2px 0 0 2px;\n    border: 1px solid ", ";\n    box-sizing: border-box;\n    box-shadow: 0 0 2px rgba(0, 0, 0, .12),  0 2px 2px rgba(0, 0, 0, .24);\n    display: inline-block;\n    height: 24px;\n    overflow: hidden;\n    position: relative;\n    width: 32px;\n    text-decoration: none;\n\n    &:hover, &:focus {\n      box-shadow: 0 0 8px rgba(0, 0, 0, .12),  0 8px 8px rgba(0, 0, 0, .24);\n\n      > strong {\n        opacity: 1;\n      }\n\n      .icon {\n        opacity: 0;\n      }\n    }\n\n    > strong {\n      font-size:  ", ";\n      font-weight: 500;\n      color: ", ";\n      display: block;\n      opacity: 0;\n      text-align: center;\n      text-decoration: none;\n      transition: all .3s;\n    }\n\n    .icon {\n      font-size: 36px;\n      opacity: .56;\n      position: absolute;\n      top: -6px;\n      left: -2px;\n      transition: all .3s;\n    }\n  }\n"]);

  NodeList_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function NodeList_templateObject() {
  var data = NodeList_taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 200px;\n  display: inline-block;\n  margin: 0 8px 0 0;\n  opacity: .56;\n  padding: 0 8px;\n"]);

  NodeList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function NodeList_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function NodeList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NodeList_typeof = function _typeof(obj) { return typeof obj; }; } else { NodeList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NodeList_typeof(obj); }

function NodeList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NodeList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NodeList_createClass(Constructor, protoProps, staticProps) { if (protoProps) NodeList_defineProperties(Constructor.prototype, protoProps); if (staticProps) NodeList_defineProperties(Constructor, staticProps); return Constructor; }

function NodeList_possibleConstructorReturn(self, call) { if (call && (NodeList_typeof(call) === "object" || typeof call === "function")) { return call; } return NodeList_assertThisInitialized(self); }

function NodeList_getPrototypeOf(o) { NodeList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NodeList_getPrototypeOf(o); }

function NodeList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NodeList_setPrototypeOf(subClass, superClass); }

function NodeList_setPrototypeOf(o, p) { NodeList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NodeList_setPrototypeOf(o, p); }

function NodeList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NodeList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NodeList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NodeList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NodeList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/










var NodeList_EmptyValue = function EmptyValue(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Empty' : _ref$text;
  return react_default.a.createElement("small", null, react_default.a.createElement("span", null, text));
};

var NodeList_TagCell = function TagCell(_ref2) {
  var rowIndex = _ref2.rowIndex,
      data = _ref2.data,
      props = NodeList_objectWithoutProperties(_ref2, ["rowIndex", "data"]);

  var tags = data[rowIndex].tags;
  var $content = tags.map(function (item, index) {
    return react_default.a.createElement(StyledTag, {
      key: index,
      title: "".concat(item.name, ":").concat(item.value)
    }, item.name, ": ", item.value);
  });

  if ($content.length === 0) {
    $content = react_default.a.createElement(NodeList_EmptyValue, {
      text: "No assigned labels"
    });
  }

  return react_default.a.createElement(Table_Cell, props, $content);
};

var NodeList_LoginCell =
/*#__PURE__*/
function (_React$Component) {
  NodeList_inherits(LoginCell, _React$Component);

  function LoginCell() {
    var _getPrototypeOf2;

    var _this;

    NodeList_classCallCheck(this, LoginCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = NodeList_possibleConstructorReturn(this, (_getPrototypeOf2 = NodeList_getPrototypeOf(LoginCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this)), "state", {
      dropdownOpen: false
    });

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this)), "onKeyPress", function (e) {
      if (e.key === 'Enter' && e.target.value) {
        var url = _this.makeUrl(e.target.value);

        services_history["a" /* default */].push(url);
      }
    });

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this)), "onShowLoginsClick", function () {
      _this.setState({
        dropdownOpen: !_this.state.dropdownOpen
      }); // this.refs.customLogin.focus();

    });

    return _this;
  }

  NodeList_createClass(LoginCell, [{
    key: "makeUrl",
    value: function makeUrl(login) {
      var _this$props = this.props,
          data = _this$props.data,
          rowIndex = _this$props.rowIndex;
      var _data$rowIndex = data[rowIndex],
          siteId = _data$rowIndex.siteId,
          id = _data$rowIndex.id;

      var onLogin = login || function () {};

      return config["a" /* default */].getTerminalLoginUrl({
        siteId: siteId,
        serverId: id,
        login: onLogin
      });
    }
  }, {
    key: "renderLoginButton",
    value: function renderLoginButton() {}
  }, {
    key: "renderEmptyMessage",
    value: function renderEmptyMessage() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          logins = _this$props2.logins,
          props = NodeList_objectWithoutProperties(_this$props2, ["logins"]);

      var $lis = [];
      var defaultLogin = logins[0] || '';
      var defaultTermUrl = this.makeUrl(defaultLogin);
      var dropdown = null;

      for (var i = 0; i < logins.length; i++) {
        var termUrl = this.makeUrl(logins[i]);
        $lis.push(react_default.a.createElement("li", {
          key: i
        }, react_default.a.createElement(NavLink["a" /* default */], {
          to: termUrl
        }, logins[i])));
      }

      if (this.state.dropdownOpen) {
        dropdown = react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement("input", {
          ref: "customLogin",
          placeholder: "Enter login name...",
          onKeyPress: this.onKeyPress
        })), $lis);
      }

      return react_default.a.createElement(Table_Cell, props, react_default.a.createElement("div", null, logins.length === 0 && react_default.a.createElement(NodeList_EmptyValue, {
        text: "No assigned logins"
      }), logins.length > 0 && react_default.a.createElement(StyledSession, null, react_default.a.createElement(NavLink["a" /* default */], {
        to: defaultTermUrl
      }, react_default.a.createElement(components_Icon["h" /* Cli */], null), react_default.a.createElement("strong", null, defaultLogin)), react_default.a.createElement("button", {
        onClick: this.onShowLoginsClick
      }, react_default.a.createElement(components_Icon["b" /* CarrotDown */], null)), dropdown)));
    }
  }]);

  return LoginCell;
}(react_default.a.Component);

var NodeList_NodeList =
/*#__PURE__*/
function (_React$Component2) {
  NodeList_inherits(NodeList, _React$Component2);

  function NodeList(props) {
    var _this2;

    NodeList_classCallCheck(this, NodeList);

    _this2 = NodeList_possibleConstructorReturn(this, NodeList_getPrototypeOf(NodeList).call(this, props));

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this2)), "storageKey", 'NodeList');

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this2)), "searchableProps", ['addr', 'hostname', 'tags']);

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this2)), "onSortChange", function (columnKey, sortDir) {
      _this2.state.colSortDirs = NodeList_defineProperty({}, columnKey, sortDir);

      _this2.setState(_this2.state);
    });

    NodeList_defineProperty(NodeList_assertThisInitialized(NodeList_assertThisInitialized(_this2)), "onSshInputEnter", function (login, host) {
      var url = config["a" /* default */].getTerminalLoginUrl({
        siteId: _this2.props.siteId,
        serverId: host,
        login: login
      });
      services_history["a" /* default */].push(url);
    });

    if (props.storage) {
      _this2.state = props.storage.findByKey(_this2.storageKey);
    }

    if (!_this2.state) {
      _this2.state = {
        colSortDirs: {
          hostname: SortTypes.DESC
        }
      };
    }

    return _this2;
  }

  NodeList_createClass(NodeList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.storage) {
        this.props.storage.save(this.storageKey, this.state);
      }
    }
  }, {
    key: "searchAndFilterCb",
    value: function searchAndFilterCb(targetValue, searchValue, propName) {
      if (propName === 'tags') {
        return targetValue.some(function (item) {
          var name = item.name,
              value = item.value;
          return name.toLocaleUpperCase().indexOf(searchValue) !== -1 || value.toLocaleUpperCase().indexOf(searchValue) !== -1;
        });
      }
    }
  }, {
    key: "sortAndFilter",
    value: function sortAndFilter(data, searchValue) {
      var _this3 = this;

      var colSortDirs = this.state.colSortDirs;
      var filtered = data.filter(function (obj) {
        return isMatch(obj, searchValue, {
          searchableProps: _this3.searchableProps,
          cb: _this3.searchAndFilterCb
        });
      });
      var columnKey = Object.getOwnPropertyNames(colSortDirs)[0];
      var sortDir = colSortDirs[columnKey];
      var sorted = Object(lodash["sortBy"])(filtered, columnKey);

      if (sortDir === SortTypes.ASC) {
        sorted = sorted.reverse();
      }

      return sorted;
    }
  }, {
    key: "renderEmptyIndicator",
    value: function renderEmptyIndicator(searchValue) {
      return react_default.a.createElement(Table_EmptyIndicator, {
        title: "No Results Found for \"".concat(searchValue, "\"")
      }, "For tips on getting better search results, please read ", react_default.a.createElement("a", {
        href: "https://gravitational.com/teleport/docs"
      }, "our documentation"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          nodeRecords = _this$props3.nodeRecords,
          logins = _this$props3.logins,
          onLoginClick = _this$props3.onLoginClick,
          searchValue = _this$props3.searchValue;
      var data = this.sortAndFilter(nodeRecords, searchValue); // no results found

      if (data.length === 0 && searchValue.length > 0) {
        return this.renderEmptyIndicator(searchValue);
      }

      return react_default.a.createElement(DataTable_Paged, {
        rowCount: data.length,
        data: data,
        pageSize: 50
      }, react_default.a.createElement(Column, {
        onLoginClick: onLoginClick,
        header: react_default.a.createElement(Table_Cell, null, "Login as"),
        cell: react_default.a.createElement(NodeList_LoginCell, {
          logins: logins
        })
      }), react_default.a.createElement(Column, {
        columnKey: "hostname",
        header: react_default.a.createElement(Table_SortHeaderCell, {
          sortDir: this.state.colSortDirs.hostname,
          onSortChange: this.onSortChange,
          title: "Hostname"
        }),
        cell: react_default.a.createElement(Table_TextCell, null)
      }), react_default.a.createElement(Column, {
        columnKey: "addr",
        header: react_default.a.createElement(Table_SortHeaderCell, {
          sortDir: this.state.colSortDirs.addr,
          onSortChange: this.onSortChange,
          title: "Address"
        }),
        cell: react_default.a.createElement(Table_TextCell, null)
      }), react_default.a.createElement(Column, {
        header: react_default.a.createElement(Table_Cell, null, "Labels"),
        cell: react_default.a.createElement(NodeList_TagCell, null)
      }));
    }
  }]);

  return NodeList;
}(react_default.a.Component);

/* harmony default export */ var ClusterNodes_NodeList_NodeList = (NodeList_NodeList);
var StyledTag = styled_components_browser_esm["c" /* default */].div(NodeList_templateObject(), function (props) {
  return props.theme.colors.bgQuaternary;
});
var StyledSession = styled_components_browser_esm["c" /* default */].div(NodeList_templateObject2(), function (props) {
  return props.theme.colors.bgQuaternary;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.colors.link;
}, function (props) {
  return props.theme.colors.subtle;
}, function (props) {
  return props.theme.colors.subtle;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.light;
}, function (props) {
  return props.theme.colors.link;
}, function (props) {
  return props.theme.colors.bgTertiary;
}, function (props) {
  return props.theme.colors.bgTerminal;
}, function (props) {
  return props.theme.colors.dark;
}, function (props) {
  return props.theme.fontSizes[0];
}, function (props) {
  return props.theme.colors.terminal;
});
// CONCATENATED MODULE: ./src/app/components/ClusterNodes/NodeList/index.js

/* harmony default export */ var ClusterNodes_NodeList = (ClusterNodes_NodeList_NodeList);
// CONCATENATED MODULE: ./src/app/components/ClusterNodes/ClusterNodes.jsx
function ClusterNodes_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ClusterNodes_typeof = function _typeof(obj) { return typeof obj; }; } else { ClusterNodes_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ClusterNodes_typeof(obj); }

function ClusterNodes_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ClusterNodes_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ClusterNodes_createClass(Constructor, protoProps, staticProps) { if (protoProps) ClusterNodes_defineProperties(Constructor.prototype, protoProps); if (staticProps) ClusterNodes_defineProperties(Constructor, staticProps); return Constructor; }

function ClusterNodes_possibleConstructorReturn(self, call) { if (call && (ClusterNodes_typeof(call) === "object" || typeof call === "function")) { return call; } return ClusterNodes_assertThisInitialized(self); }

function ClusterNodes_getPrototypeOf(o) { ClusterNodes_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ClusterNodes_getPrototypeOf(o); }

function ClusterNodes_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ClusterNodes_setPrototypeOf(subClass, superClass); }

function ClusterNodes_setPrototypeOf(o, p) { ClusterNodes_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ClusterNodes_setPrototypeOf(o, p); }

function ClusterNodes_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ClusterNodes_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var ClusterNodes_ClusterNodes =
/*#__PURE__*/
function (_React$Component) {
  ClusterNodes_inherits(ClusterNodes, _React$Component);

  function ClusterNodes() {
    var _getPrototypeOf2;

    var _this;

    ClusterNodes_classCallCheck(this, ClusterNodes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ClusterNodes_possibleConstructorReturn(this, (_getPrototypeOf2 = ClusterNodes_getPrototypeOf(ClusterNodes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ClusterNodes_defineProperty(ClusterNodes_assertThisInitialized(ClusterNodes_assertThisInitialized(_this)), "state", {
      filter: ''
    });

    ClusterNodes_defineProperty(ClusterNodes_assertThisInitialized(ClusterNodes_assertThisInitialized(_this)), "onFilterChange", function (value) {
      _this.state.filter = value;

      _this.setState(_this.state);
    });

    return _this;
  }

  ClusterNodes_createClass(ClusterNodes, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          nodes = _this$props.nodes,
          sshHistory = _this$props.sshHistory,
          aclStore = _this$props.aclStore,
          sites = _this$props.sites,
          siteId = _this$props.siteId,
          storage = _this$props.storage;
      var logins = aclStore.getSshLogins().toJS();
      var nodeRecords = nodes.toJS();
      var filter = this.state.filter;
      return react_default.a.createElement("div", null, react_default.a.createElement(components_Header, {
        title: "Nodes",
        searchValue: filter,
        onSearchChange: this.onFilterChange
      }), react_default.a.createElement(ClusterNodes_NodeList, {
        searchValue: filter,
        sshHistory: sshHistory,
        storage: storage,
        siteId: siteId,
        sites: sites,
        nodeRecords: nodeRecords,
        logins: logins
      }));
    }
  }]);

  return ClusterNodes;
}(react_default.a.Component);

function ClusterNodes_mapStoreToProps(props) {
  var clusterId = props.clusterId;
  return {
    nodes: nodes_getters.nodesByCluster(clusterId),
    aclStore: userAcl_getters.userAcl,
    sshHistory: sshHistory_store["a" /* getters */].store
  };
}

/* harmony default export */ var components_ClusterNodes_ClusterNodes = (Object(nuclear["b" /* connect */])(ClusterNodes_mapStoreToProps)(ClusterNodes_ClusterNodes));
// CONCATENATED MODULE: ./src/app/components/ClusterNodes/index.js

/* harmony default export */ var components_ClusterNodes = (components_ClusterNodes_ClusterNodes);
// CONCATENATED MODULE: ./src/app/flux/storedSessionsFilter/getters.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var getters_filter = [['tlpt_sessions_filter'], function (filter) {
  return filter.toJS();
}];
/* harmony default export */ var storedSessionsFilter_getters = ({
  filter: getters_filter
});
// CONCATENATED MODULE: ./src/app/flux/storedSessionsFilter/actions.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var storedSessionsFilter_actions_logger = logger["a" /* default */].create('Modules/Sessions');
function fetchSiteEventsWithinTimeRange(clusterId) {
  var _reactor$evaluate = reactor["a" /* default */].evaluate(storedSessionsFilter_getters.filter),
      start = _reactor$evaluate.start,
      end = _reactor$evaluate.end;

  return fetchSiteEvents(clusterId, start, end).catch(function (err) {
    storedSessionsFilter_actions_logger.error('fetching filtered set of sessions', err.message);
  });
}
// CONCATENATED MODULE: ./src/app/components/ClusterSessions/DataProvider.jsx
function DataProvider_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataProvider_typeof = function _typeof(obj) { return typeof obj; }; } else { DataProvider_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataProvider_typeof(obj); }

function DataProvider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataProvider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataProvider_createClass(Constructor, protoProps, staticProps) { if (protoProps) DataProvider_defineProperties(Constructor.prototype, protoProps); if (staticProps) DataProvider_defineProperties(Constructor, staticProps); return Constructor; }

function DataProvider_possibleConstructorReturn(self, call) { if (call && (DataProvider_typeof(call) === "object" || typeof call === "function")) { return call; } return DataProvider_assertThisInitialized(self); }

function DataProvider_getPrototypeOf(o) { DataProvider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DataProvider_getPrototypeOf(o); }

function DataProvider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DataProvider_setPrototypeOf(subClass, superClass); }

function DataProvider_setPrototypeOf(o, p) { DataProvider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DataProvider_setPrototypeOf(o, p); }

function DataProvider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DataProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var DEFAULT_INTERVAL = 3000; // every 3 sec

var DataProvider =
/*#__PURE__*/
function (_Component) {
  DataProvider_inherits(DataProvider, _Component);

  function DataProvider(props) {
    var _this;

    DataProvider_classCallCheck(this, DataProvider);

    _this = DataProvider_possibleConstructorReturn(this, DataProvider_getPrototypeOf(DataProvider).call(this, props));

    DataProvider_defineProperty(DataProvider_assertThisInitialized(DataProvider_assertThisInitialized(_this)), "_timerId", null);

    DataProvider_defineProperty(DataProvider_assertThisInitialized(DataProvider_assertThisInitialized(_this)), "_request", null);

    _this._intervalTime = props.time || DEFAULT_INTERVAL;
    return _this;
  }

  DataProvider_createClass(DataProvider, [{
    key: "fetch",
    value: function fetch() {
      var _this2 = this;

      // do not refetch if still in progress
      if (this._request) {
        return;
      }

      this._request = this.props.onFetch().finally(function () {
        _this2._request = null;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch();
      this._timerId = setInterval(this.fetch.bind(this), this._intervalTime);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this._timerId);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return DataProvider;
}(react["Component"]);


// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/app/components/ClusterSessions/SessionList/SessionListCells.jsx
function SessionListCells_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SessionListCells_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SessionListCells_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








var SessionListCells_DateCreatedCell = function DateCreatedCell(_ref) {
  var rowIndex = _ref.rowIndex,
      data = _ref.data,
      props = SessionListCells_objectWithoutProperties(_ref, ["rowIndex", "data"]);

  var createdDisplayText = data[rowIndex].createdDisplayText;
  return react_default.a.createElement(Table_Cell, props, createdDisplayText);
};

var SessionListCells_DescriptionCell = function DescriptionCell(props) {
  return react_default.a.createElement(Table_Cell, props, "Description");
};

var SessionListCells_DurationCell = function DurationCell(_ref2) {
  var rowIndex = _ref2.rowIndex,
      data = _ref2.data,
      props = SessionListCells_objectWithoutProperties(_ref2, ["rowIndex", "data"]);

  var duration = data[rowIndex].duration;
  var displayDate = moment_default.a.duration(duration).humanize();
  return react_default.a.createElement(Table_Cell, props, displayDate);
};

var SessionListCells_SingleUserCell = function SingleUserCell(_ref3) {
  var rowIndex = _ref3.rowIndex,
      data = _ref3.data,
      props = SessionListCells_objectWithoutProperties(_ref3, ["rowIndex", "data"]);

  var user = data[rowIndex].user;
  return react_default.a.createElement(Table_Cell, props, react_default.a.createElement("span", null, user));
};

var SessionListCells_TypeCell = function TypeCell(_ref4) {
  var rowIndex = _ref4.rowIndex,
      data = _ref4.data,
      props = SessionListCells_objectWithoutProperties(_ref4, ["rowIndex", "data"]);

  var _data$rowIndex$event = data[rowIndex].event,
      event = _data$rowIndex$event === void 0 ? '' : _data$rowIndex$event;
  var message = '';

  switch (event) {
    case 'session':
      message = '';
      break;

    case 'active-session':
      message = '';
      break;

    default:
      message = "Terminal Session";
  }

  return react_default.a.createElement(Table_Cell, props, react_default.a.createElement("div", null, message));
};

var SessionListCells_UsersCell = function UsersCell(_ref5) {
  var rowIndex = _ref5.rowIndex,
      data = _ref5.data,
      props = SessionListCells_objectWithoutProperties(_ref5, ["rowIndex", "data"]);

  var _data$rowIndex = data[rowIndex],
      parties = _data$rowIndex.parties,
      user = _data$rowIndex.user;
  var $users = react_default.a.createElement("div", null, user);

  if (parties.length > 0) {
    $users = parties.map(function (item, itemIndex) {
      return react_default.a.createElement("div", {
        key: itemIndex
      }, item);
    });
  }

  return react_default.a.createElement(Table_Cell, props, react_default.a.createElement("div", null, $users));
};

var SessionListCells_SessionIdCell = function SessionIdCell(_ref6) {
  var rowIndex = _ref6.rowIndex,
      canJoin = _ref6.canJoin,
      data = _ref6.data,
      props = SessionListCells_objectWithoutProperties(_ref6, ["rowIndex", "canJoin", "data"]);

  var _data$rowIndex2 = data[rowIndex],
      sessionUrl = _data$rowIndex2.sessionUrl,
      active = _data$rowIndex2.active,
      sid = _data$rowIndex2.sid;
  var isDisabled = active && !canJoin;
  var sidShort = sid.slice(0, 8);
  var actionText = active ? 'join' : 'play';
  var btnClass = classnames_default()({
    '': !active,
    'warning': active,
    'disabled': isDisabled
  });
  return react_default.a.createElement(Table_Cell, props, react_default.a.createElement(components["e" /* Flex */], {
    flexDirection: "row",
    align: "center"
  }, isDisabled && react_default.a.createElement("button", {
    className: btnClass
  }, actionText), !isDisabled && react_default.a.createElement(NavLink["a" /* default */], {
    to: sessionUrl,
    className: btnClass,
    type: "button"
  }, react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    status: btnClass,
    title: sidShort
  }, actionText, " Session"))));
};

var SessionListCells_NodeCell = function NodeCell(_ref7) {
  var rowIndex = _ref7.rowIndex,
      data = _ref7.data,
      props = SessionListCells_objectWithoutProperties(_ref7, ["rowIndex", "data"]);

  var nodeDisplayText = data[rowIndex].nodeDisplayText;
  return react_default.a.createElement(Table_Cell, props, nodeDisplayText);
};


// CONCATENATED MODULE: ./src/app/components/ClusterSessions/SessionList/SessionList.jsx
function SessionList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SessionList_typeof = function _typeof(obj) { return typeof obj; }; } else { SessionList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SessionList_typeof(obj); }

function SessionList_toConsumableArray(arr) { return SessionList_arrayWithoutHoles(arr) || SessionList_iterableToArray(arr) || SessionList_nonIterableSpread(); }

function SessionList_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function SessionList_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function SessionList_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function SessionList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SessionList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SessionList_createClass(Constructor, protoProps, staticProps) { if (protoProps) SessionList_defineProperties(Constructor.prototype, protoProps); if (staticProps) SessionList_defineProperties(Constructor, staticProps); return Constructor; }

function SessionList_possibleConstructorReturn(self, call) { if (call && (SessionList_typeof(call) === "object" || typeof call === "function")) { return call; } return SessionList_assertThisInitialized(self); }

function SessionList_getPrototypeOf(o) { SessionList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SessionList_getPrototypeOf(o); }

function SessionList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SessionList_setPrototypeOf(subClass, superClass); }

function SessionList_setPrototypeOf(o, p) { SessionList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SessionList_setPrototypeOf(o, p); }

function SessionList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SessionList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







var SessionList_SessionList =
/*#__PURE__*/
function (_React$Component) {
  SessionList_inherits(SessionList, _React$Component);

  function SessionList(props) {
    var _this;

    SessionList_classCallCheck(this, SessionList);

    _this = SessionList_possibleConstructorReturn(this, SessionList_getPrototypeOf(SessionList).call(this, props));

    SessionList_defineProperty(SessionList_assertThisInitialized(SessionList_assertThisInitialized(_this)), "searchableProps", ['nodeDisplayText', 'createdDisplayText', 'sid', 'parties']);

    SessionList_defineProperty(SessionList_assertThisInitialized(SessionList_assertThisInitialized(_this)), "onSortChange", function (columnKey, sortDir) {
      _this.state.colSortDirs = SessionList_defineProperty({}, columnKey, sortDir);

      _this.setState(_this.state);
    });

    if (props.storage) {
      _this.state = props.storage.findByKey('SessionList');
    }

    if (!_this.state) {
      _this.state = {
        colSortDirs: {
          created: 'ASC'
        }
      };
    }

    return _this;
  }

  SessionList_createClass(SessionList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.storage) {
        this.props.storage.save('SessionList', this.state);
      }
    }
  }, {
    key: "searchAndFilterCb",
    value: function searchAndFilterCb(targetValue, searchValue, propName) {
      if (propName === 'parties') {
        targetValue = targetValue || [];
        return targetValue.join('').toLocaleUpperCase().indexOf(searchValue) !== -1;
      }
    }
  }, {
    key: "sortAndFilter",
    value: function sortAndFilter(data, searchValue) {
      var _this2 = this;

      var filtered = data.filter(function (obj) {
        return isMatch(obj, searchValue, {
          searchableProps: _this2.searchableProps,
          cb: _this2.searchAndFilterCb
        });
      });
      var columnKey = Object.getOwnPropertyNames(this.state.colSortDirs)[0];
      var sortDir = this.state.colSortDirs[columnKey];
      var sorted = Object(lodash["sortBy"])(filtered, columnKey);

      if (sortDir === SortTypes.ASC) {
        sorted = sorted.reverse();
      }

      return sorted;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          filter = _this$props.filter,
          canJoin = _this$props.canJoin,
          searchValue = _this$props.searchValue,
          storedSessions = _this$props.storedSessions,
          activeSessions = _this$props.activeSessions;
      var start = filter.start,
          end = filter.end;
      var stored = storedSessions.filter(function (item) {
        return moment_default()(item.created).isBetween(start, end);
      });
      var active = activeSessions.filter(function (item) {
        return item.parties.length > 0;
      }).filter(function (item) {
        return moment_default()(item.created).isBetween(start, end);
      });
      stored = this.sortAndFilter(stored, searchValue);
      active = this.sortAndFilter(active, searchValue); // always display active sessions first

      var data = SessionList_toConsumableArray(active).concat(SessionList_toConsumableArray(stored));

      return react_default.a.createElement(DataTable_Paged, {
        rowCount: data.length,
        data: data,
        pageSize: 50
      }, react_default.a.createElement(Column, {
        header: react_default.a.createElement(Table_Cell, null, " Type "),
        cell: react_default.a.createElement(SessionListCells_TypeCell, null)
      }), react_default.a.createElement(Column, {
        header: react_default.a.createElement(Table_Cell, null, " User / IP Address "),
        cell: react_default.a.createElement(SessionListCells_UsersCell, null)
      }), react_default.a.createElement(Column, {
        columnKey: "description",
        header: react_default.a.createElement(Table_Cell, null, "Description"),
        cell: react_default.a.createElement(SessionListCells_DescriptionCell, null)
      }), react_default.a.createElement(Column, {
        columnKey: "created",
        header: react_default.a.createElement(Table_SortHeaderCell, {
          sortDir: this.state.colSortDirs.created,
          onSortChange: this.onSortChange,
          title: "Created (UTC)"
        }),
        cell: react_default.a.createElement(SessionListCells_DateCreatedCell, null)
      }), react_default.a.createElement(Column, {
        header: react_default.a.createElement(Table_Cell, null, " Actions "),
        cell: react_default.a.createElement(SessionListCells_SessionIdCell, {
          canJoin: canJoin,
          container: this
        })
      }));
    }
  }]);

  return SessionList;
}(react_default.a.Component);

/* harmony default export */ var ClusterSessions_SessionList_SessionList = (SessionList_SessionList);
// CONCATENATED MODULE: ./src/app/components/ClusterSessions/SessionList/index.js

/* harmony default export */ var ClusterSessions_SessionList = (ClusterSessions_SessionList_SessionList);
// CONCATENATED MODULE: ./src/app/components/ClusterSessions/ClusterSessions.jsx
function ClusterSessions_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ClusterSessions_typeof = function _typeof(obj) { return typeof obj; }; } else { ClusterSessions_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ClusterSessions_typeof(obj); }

function ClusterSessions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ClusterSessions_defineProperty(target, key, source[key]); }); } return target; }

function ClusterSessions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ClusterSessions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ClusterSessions_createClass(Constructor, protoProps, staticProps) { if (protoProps) ClusterSessions_defineProperties(Constructor.prototype, protoProps); if (staticProps) ClusterSessions_defineProperties(Constructor, staticProps); return Constructor; }

function ClusterSessions_possibleConstructorReturn(self, call) { if (call && (ClusterSessions_typeof(call) === "object" || typeof call === "function")) { return call; } return ClusterSessions_assertThisInitialized(self); }

function ClusterSessions_getPrototypeOf(o) { ClusterSessions_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ClusterSessions_getPrototypeOf(o); }

function ClusterSessions_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ClusterSessions_setPrototypeOf(subClass, superClass); }

function ClusterSessions_setPrototypeOf(o, p) { ClusterSessions_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ClusterSessions_setPrototypeOf(o, p); }

function ClusterSessions_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ClusterSessions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/











var ClusterSessions_end = moment_default()(new Date()).endOf('day').toDate();
var ClusterSessions_start = moment_default()(ClusterSessions_end).subtract(20, 'day').startOf('day').toDate();
var defaultState = {
  searchValue: '',
  dateFilter: {
    start: ClusterSessions_start,
    end: ClusterSessions_end
  }
};
var ClusterSessions_ClusterSessions =
/*#__PURE__*/
function (_React$Component) {
  ClusterSessions_inherits(ClusterSessions, _React$Component);

  function ClusterSessions() {
    var _getPrototypeOf2;

    var _this;

    ClusterSessions_classCallCheck(this, ClusterSessions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ClusterSessions_possibleConstructorReturn(this, (_getPrototypeOf2 = ClusterSessions_getPrototypeOf(ClusterSessions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ClusterSessions_defineProperty(ClusterSessions_assertThisInitialized(ClusterSessions_assertThisInitialized(_this)), "state", ClusterSessions_objectSpread({}, defaultState));

    ClusterSessions_defineProperty(ClusterSessions_assertThisInitialized(ClusterSessions_assertThisInitialized(_this)), "onSearchValueChange", function (value) {
      _this.state.searchValue = value;

      _this.setState(_this.state);
    });

    ClusterSessions_defineProperty(ClusterSessions_assertThisInitialized(ClusterSessions_assertThisInitialized(_this)), "refresh", function () {
      var _this$props = _this.props,
          clusterId = _this$props.clusterId,
          fetch = _this$props.fetch;
      var _this$state$dateFilte = _this.state.dateFilter,
          start = _this$state$dateFilte.start,
          end = _this$state$dateFilte.end;
      return fetch(clusterId, start, end);
    });

    return _this;
  }

  ClusterSessions_createClass(ClusterSessions, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          searchValue = _this$state.searchValue,
          dateFilter = _this$state.dateFilter;
      var _this$props2 = this.props,
          clusterId = _this$props2.clusterId,
          canJoin = _this$props2.canJoin,
          storedSessions = _this$props2.storedSessions,
          activeSessions = _this$props2.activeSessions,
          storage = _this$props2.storage;
      var title = "".concat(clusterId, " \xB7 Sessions");
      return react_default.a.createElement(DocumentTitle["a" /* default */], {
        title: title
      }, react_default.a.createElement(components_Header, {
        title: "Audit Log",
        searchValue: searchValue,
        onSearchChange: this.onSearchValueChange
      }), react_default.a.createElement(ClusterSessions_SessionList, {
        canJoin: canJoin,
        searchValue: searchValue,
        storage: storage,
        activeSessions: activeSessions,
        storedSessions: storedSessions,
        filter: dateFilter
      }), react_default.a.createElement(DataProvider, {
        onFetch: this.refresh
      }));
    }
  }]);

  return ClusterSessions;
}(react_default.a.Component);

function ClusterSessions_mapStoreToProps(props) {
  var clusterId = props.clusterId;
  return {
    activeSessions: sessions_getters.activeSessionList(clusterId),
    storedSessions: sessions_getters.storedSessionList(clusterId)
  };
}

function ClusterSessions_mapStateToProps() {
  return {
    fetch: fetchSiteEventsWithinTimeRange,
    canJoin: config["a" /* default */].canJoinSessions
  };
}

var SessionsWithStorage = Hoc_withStorage(ClusterSessions_ClusterSessions);
/* harmony default export */ var components_ClusterSessions_ClusterSessions = (Object(nuclear["b" /* connect */])(ClusterSessions_mapStoreToProps, ClusterSessions_mapStateToProps)(SessionsWithStorage));
// CONCATENATED MODULE: ./src/app/components/ClusterSessions/index.js

/* harmony default export */ var components_ClusterSessions = (components_ClusterSessions_ClusterSessions);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js
var react_select_esm = __webpack_require__("y2Vs");

// CONCATENATED MODULE: ./src/app/components/Cluster/ClusterSelector/ClusterSelector.jsx
function ClusterSelector_templateObject() {
  var data = ClusterSelector_taggedTemplateLiteral(["\n  display: inline-bock;\n  padding-left: 24px;\n  position: relative;\n\n  .icon {\n    opacity: .56;\n    position: absolute;\n    top: 3px;\n    left: 0;\n  }\n"]);

  ClusterSelector_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ClusterSelector_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ClusterSelector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ClusterSelector_defineProperty(target, key, source[key]); }); } return target; }

function ClusterSelector_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ClusterSelector_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ClusterSelector_typeof = function _typeof(obj) { return typeof obj; }; } else { ClusterSelector_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ClusterSelector_typeof(obj); }

function ClusterSelector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ClusterSelector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ClusterSelector_createClass(Constructor, protoProps, staticProps) { if (protoProps) ClusterSelector_defineProperties(Constructor.prototype, protoProps); if (staticProps) ClusterSelector_defineProperties(Constructor, staticProps); return Constructor; }

function ClusterSelector_possibleConstructorReturn(self, call) { if (call && (ClusterSelector_typeof(call) === "object" || typeof call === "function")) { return call; } return ClusterSelector_assertThisInitialized(self); }

function ClusterSelector_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ClusterSelector_getPrototypeOf(o) { ClusterSelector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ClusterSelector_getPrototypeOf(o); }

function ClusterSelector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ClusterSelector_setPrototypeOf(subClass, superClass); }

function ClusterSelector_setPrototypeOf(o, p) { ClusterSelector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ClusterSelector_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






var ClusterSelector_ClusterSelector =
/*#__PURE__*/
function (_React$Component) {
  ClusterSelector_inherits(ClusterSelector, _React$Component);

  function ClusterSelector() {
    ClusterSelector_classCallCheck(this, ClusterSelector);

    return ClusterSelector_possibleConstructorReturn(this, ClusterSelector_getPrototypeOf(ClusterSelector).apply(this, arguments));
  }

  ClusterSelector_createClass(ClusterSelector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          options = _this$props.options,
          onChange = _this$props.onChange;
      var selected = options.find(function (o) {
        return o.value === value;
      });
      var title = {
        label: "".concat(selected.value, " Cluster"),
        value: selected.value
      };
      return react_default.a.createElement(StyledSelector, null, react_default.a.createElement(components_Icon["j" /* Cluster */], null), react_default.a.createElement(react_select_esm["a" /* default */], {
        styles: customStyles,
        value: title,
        onChange: onChange,
        options: options
      }));
    }
  }]);

  return ClusterSelector;
}(react_default.a.Component);

var customStyles = {
  option: function option(provided, state) {
    return ClusterSelector_objectSpread({}, provided, {
      color: state.isSelected ? theme["a" /* colors */].light : theme["a" /* colors */].text
    });
  },
  input: function input(provided) {
    return ClusterSelector_objectSpread({}, provided, {
      border: 'none',
      color: 'rgba(255, 255, 255, .87)',
      margin: 0,
      padding: 0,
      width: '100%'
    });
  },
  noOptionsMessage: function noOptionsMessage(provided) {
    return ClusterSelector_objectSpread({}, provided, {
      color: 'blue',
      margin: 0,
      padding: 0,
      width: '100%'
    });
  },
  menu: function menu(provided) {
    return ClusterSelector_objectSpread({}, provided, {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      border: 'none',
      margin: 0,
      padding: 0,
      width: '100%'
    });
  },
  dropdownIndicator: function dropdownIndicator() {
    return {
      border: 'none',
      height: '24px',
      margin: '0',
      opacity: .24,
      width: '24px'
    };
  },
  valueContainer: function valueContainer() {
    return {
      border: 'none',
      color: 'rgba(255, 255, 255, .87)',
      width: '100%'
    };
  },
  container: function container(provided) {
    return ClusterSelector_objectSpread({}, provided, {
      border: 'none',
      color: 'rgba(255, 255, 255, .87)',
      height: '24px',
      marginBottom: '8px',
      padding: '0',
      width: '200px'
    });
  },
  indicatorsContainer: function indicatorsContainer(provided) {
    return ClusterSelector_objectSpread({}, provided, {
      border: 'none',
      color: 'rgba(255, 255, 255, .87)',
      height: '24px',
      padding: 0,
      position: 'absolute',
      right: 0,
      top: 0
    });
  },
  indicatorSeparator: function indicatorSeparator() {
    return {
      display: 'none'
    };
  },
  control: function control(provided) {
    return ClusterSelector_objectSpread({}, provided, {
      border: 'none',
      background: 'none',
      color: 'rgba(255, 255, 255, .87)',
      height: '24px',
      lineHeight: '24px',
      minHeight: 'auto',
      width: '100%',
      padding: '0 24px 0 0'
    });
  },
  singleValue: function singleValue(provided, state) {
    var opacity = state.isDisabled ? 0.5 : 1;
    var transition = 'opacity 300ms';
    return ClusterSelector_objectSpread({}, provided, {
      border: 'none',
      color: 'rgba(255, 255, 255, .87)',
      fontSize: '14px',
      opacity: opacity,
      transition: transition
    });
  }
};
var StyledSelector = styled_components_browser_esm["c" /* default */].div(ClusterSelector_templateObject());
/* harmony default export */ var Cluster_ClusterSelector_ClusterSelector = (ClusterSelector_ClusterSelector);
// CONCATENATED MODULE: ./src/app/components/Cluster/ClusterSelector/index.js

/* harmony default export */ var Cluster_ClusterSelector = (Cluster_ClusterSelector_ClusterSelector);
// CONCATENATED MODULE: ./src/app/components/Cluster/Cluster.jsx
function Cluster_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Cluster_typeof = function _typeof(obj) { return typeof obj; }; } else { Cluster_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Cluster_typeof(obj); }

function Cluster_templateObject() {
  var data = Cluster_taggedTemplateLiteral(["\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n"]);

  Cluster_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Cluster_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Cluster_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cluster_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cluster_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cluster_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cluster_defineProperties(Constructor, staticProps); return Constructor; }

function Cluster_possibleConstructorReturn(self, call) { if (call && (Cluster_typeof(call) === "object" || typeof call === "function")) { return call; } return Cluster_assertThisInitialized(self); }

function Cluster_getPrototypeOf(o) { Cluster_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Cluster_getPrototypeOf(o); }

function Cluster_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Cluster_setPrototypeOf(subClass, superClass); }

function Cluster_setPrototypeOf(o, p) { Cluster_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Cluster_setPrototypeOf(o, p); }

function Cluster_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Cluster_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

















var Cluster_Cluster =
/*#__PURE__*/
function (_React$Component) {
  Cluster_inherits(Cluster, _React$Component);

  function Cluster() {
    var _getPrototypeOf2;

    var _this;

    Cluster_classCallCheck(this, Cluster);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Cluster_possibleConstructorReturn(this, (_getPrototypeOf2 = Cluster_getPrototypeOf(Cluster)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Cluster_defineProperty(Cluster_assertThisInitialized(Cluster_assertThisInitialized(_this)), "onChangeCluster", function (option) {
      _this.props.onChangeCluster(option.value);
    });

    return _this;
  }

  Cluster_createClass(Cluster, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          clusterId = _this$props.clusterId,
          clusters = _this$props.clusters;
      var clusterOptions = clusters.map(function (c) {
        return {
          value: c.name,
          label: c.name
        };
      });
      return react_default.a.createElement(components["e" /* Flex */], {
        height: "100%"
      }, react_default.a.createElement(components["i" /* SideNav */], null, react_default.a.createElement(components_AppLogo, null), react_default.a.createElement(components["j" /* SideNavItem */], {
        as: Router_NavLink,
        exact: true,
        to: config["a" /* default */].getClusterUrl(clusterId)
      }, react_default.a.createElement(SideNav_SideNavItemIcon, {
        as: components_Icon["o" /* Layers */]
      }), "Nodes"), react_default.a.createElement(components["j" /* SideNavItem */], {
        as: Router_NavLink,
        to: config["a" /* default */].getClusterSessionsUrl(clusterId)
      }, react_default.a.createElement(SideNav_SideNavItemIcon, {
        as: components_Icon["p" /* ListBullet */]
      }), "Audit Log")), react_default.a.createElement(components["e" /* Flex */], {
        flexDirection: "column",
        width: "100%"
      }, react_default.a.createElement(components_AppBar_AppBar, {
        topNavProps: {
          pl: 5
        }
      }, react_default.a.createElement(Cluster_ClusterSelector, {
        value: clusterId,
        onChange: this.onChangeCluster,
        options: clusterOptions
      })), react_default.a.createElement(Cluster_Content, {
        px: 5
      }, react_default.a.createElement(Router_Switch, null, react_default.a.createElement(Router_Route, {
        exact: true,
        path: config["a" /* default */].routes.cluster
      }, react_default.a.createElement(components_ClusterNodes, {
        clusterId: clusterId
      })), react_default.a.createElement(Router_Route, {
        exact: true,
        path: config["a" /* default */].routes.clusterSessions
      }, react_default.a.createElement(components_ClusterSessions, {
        clusterId: clusterId
      })), react_default.a.createElement(Router_Route, {
        path: config["a" /* default */].routes.terminal,
        component: components_Terminal
      }), react_default.a.createElement(Router_Route, {
        path: config["a" /* default */].routes.player,
        component: components_Player
      })))));
    }
  }]);

  return Cluster;
}(react_default.a.Component);

function Cluster_mapStoreToProps() {
  return {
    clusters: getters.sites
  };
}

function Cluster_mapStateToProps(props) {
  var clusterId = props.match.params.clusterId;
  return {
    onChangeCluster: changeCluster,
    clusterId: clusterId
  };
}

var Cluster_Content = Object(styled_components_browser_esm["c" /* default */])(components["b" /* Box */])(Cluster_templateObject());
/* harmony default export */ var components_Cluster_Cluster = (Object(nuclear["b" /* connect */])(Cluster_mapStoreToProps, Cluster_mapStateToProps)(Cluster_Cluster));
// CONCATENATED MODULE: ./src/app/components/Cluster/index.js

/* harmony default export */ var components_Cluster = (components_Cluster_Cluster);
// EXTERNAL MODULE: ./src/app/services/auth.js
var auth = __webpack_require__("LU+r");

// CONCATENATED MODULE: ./src/app/flux/settingsAccount/actions.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var settingsAccount_actions_logger = logger["a" /* default */].create("flux/settingsAccount/actions");
function changePasswordWithU2f(oldPsw, newPsw) {
  var promise = auth["a" /* default */].changePasswordWithU2f(oldPsw, newPsw);

  _handleChangePasswordPromise(promise);
}
function changePassword(oldPass, newPass, token) {
  var promise = auth["a" /* default */].changePassword(oldPass, newPass, token);

  _handleChangePasswordPromise(promise);
}
function resetPasswordChangeAttempt() {
  actions["a" /* changePasswordStatus */].clear();
}

function _handleChangePasswordPromise(promise) {
  actions["a" /* changePasswordStatus */].start();
  return promise.then(function () {
    actions["a" /* changePasswordStatus */].success();
  }).catch(function (err) {
    settingsAccount_actions_logger.error("change password", err);
    actions["a" /* changePasswordStatus */].fail(err.message); // logout a user in case of access denied error
    // (most likely a user exceeded a number of allowed attempts)

    if (err.status == 403) {
      services_session["a" /* default */].logout();
    }

    throw err;
  });
}
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 2 modules
var formik_esm = __webpack_require__("KYPV");

// EXTERNAL MODULE: ./src/app/services/enums.js
var services_enums = __webpack_require__("l3S1");

// CONCATENATED MODULE: ./src/app/components/Settings/PasswordForm/PasswordForm.jsx
function PasswordForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PasswordForm_typeof = function _typeof(obj) { return typeof obj; }; } else { PasswordForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PasswordForm_typeof(obj); }

function PasswordForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PasswordForm_defineProperty(target, key, source[key]); }); } return target; }

function PasswordForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PasswordForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PasswordForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) PasswordForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) PasswordForm_defineProperties(Constructor, staticProps); return Constructor; }

function PasswordForm_possibleConstructorReturn(self, call) { if (call && (PasswordForm_typeof(call) === "object" || typeof call === "function")) { return call; } return PasswordForm_assertThisInitialized(self); }

function PasswordForm_getPrototypeOf(o) { PasswordForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PasswordForm_getPrototypeOf(o); }

function PasswordForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PasswordForm_setPrototypeOf(subClass, superClass); }

function PasswordForm_setPrototypeOf(o, p) { PasswordForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PasswordForm_setPrototypeOf(o, p); }

function PasswordForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PasswordForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






var PasswordForm_defaultState = {
  oldPass: '',
  newPass: '',
  newPassConfirmed: '',
  token: ''
};

var PasswordForm_PasswordForm =
/*#__PURE__*/
function (_React$Component) {
  PasswordForm_inherits(PasswordForm, _React$Component);

  function PasswordForm() {
    var _getPrototypeOf2;

    var _this;

    PasswordForm_classCallCheck(this, PasswordForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PasswordForm_possibleConstructorReturn(this, (_getPrototypeOf2 = PasswordForm_getPrototypeOf(PasswordForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    PasswordForm_defineProperty(PasswordForm_assertThisInitialized(PasswordForm_assertThisInitialized(_this)), "initialValues", {
      oldPass: '',
      newPass: '',
      newPassConfirmed: '',
      token: ''
    });

    PasswordForm_defineProperty(PasswordForm_assertThisInitialized(PasswordForm_assertThisInitialized(_this)), "hasBeenClicked", false);

    PasswordForm_defineProperty(PasswordForm_assertThisInitialized(PasswordForm_assertThisInitialized(_this)), "state", PasswordForm_objectSpread({}, PasswordForm_defaultState));

    PasswordForm_defineProperty(PasswordForm_assertThisInitialized(PasswordForm_assertThisInitialized(_this)), "onSubmit", function (values) {
      var oldPass = values.oldPass,
          newPass = values.newPass,
          token = values.token;

      if (_this.props.auth2faType === services_enums["a" /* Auth2faTypeEnum */].UTF) {
        _this.props.onChangePassWithU2f(oldPass, newPass);
      } else {
        _this.props.onChangePass(oldPass, newPass, token);
      }
    });

    PasswordForm_defineProperty(PasswordForm_assertThisInitialized(PasswordForm_assertThisInitialized(_this)), "onValidate", function (values) {
      var oldPass = values.oldPass,
          newPass = values.newPass,
          token = values.token,
          newPassConfirmed = values.newPassConfirmed;
      var errors = {};

      if (!oldPass) {
        errors.oldPass = 'Current Password is required';
      }

      if (!newPass) {
        errors.newPass = 'Password cannot be empty';
      } else if (oldPass.length < 6) {
        errors.newPass = 'Enter at least 6 characters';
      }

      if (!newPassConfirmed) {
        errors.newPassConfirmed = 'Please confirm your new password';
      } else if (newPassConfirmed !== newPass) {
        errors.newPassConfirmed = 'Password does not match';
      }

      if (_this.isOtp() && !token) {
        errors.token = 'Token is required';
      }

      return errors;
    });

    return _this;
  }

  PasswordForm_createClass(PasswordForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onDestory && this.props.onDestory();
    }
  }, {
    key: "isU2f",
    value: function isU2f() {
      return this.props.auth2faType === services_enums["a" /* Auth2faTypeEnum */].UTF;
    }
  }, {
    key: "isOtp",
    value: function isOtp() {
      return this.props.auth2faType === services_enums["a" /* Auth2faTypeEnum */].OTP;
    }
  }, {
    key: "renderFields",
    value: function renderFields(_ref) {
      var values = _ref.values,
          errors = _ref.errors,
          touched = _ref.touched,
          handleChange = _ref.handleChange;
      var isOtpEnabled = this.isOtp();
      var oldPassError = touched.oldPass && errors.oldPass;
      var newPassError = touched.newPass && errors.newPass;
      var newPassConfirmedError = touched.newPassConfirmed && errors.newPassConfirmed;
      var tokenError = touched.token && errors.token;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components["h" /* Label */], {
        hasError: Boolean(oldPassError)
      }, oldPassError || "Current Password"), react_default.a.createElement(components["g" /* Input */], {
        hasError: Boolean(oldPassError),
        value: values.oldPass,
        onChange: handleChange,
        type: "password",
        name: "oldPass",
        placeholder: "Password"
      }), isOtpEnabled && react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components["h" /* Label */], {
        hasError: Boolean(tokenError)
      }, tokenError || "2nd factor token"), react_default.a.createElement(components["g" /* Input */], {
        width: "50%",
        hasError: Boolean(tokenError),
        value: values.oldPass,
        onChange: handleChange,
        type: "text",
        name: "token",
        placeholder: "OTP Token"
      })), react_default.a.createElement(components["h" /* Label */], {
        hasError: Boolean(newPassError)
      }, newPassError || "New Password"), react_default.a.createElement(components["g" /* Input */], {
        hasError: Boolean(newPassError),
        value: values.newPass,
        onChange: handleChange,
        type: "password",
        name: "newPass",
        placeholder: "New Password"
      }), react_default.a.createElement(components["h" /* Label */], {
        hasError: Boolean(newPassConfirmedError)
      }, newPassConfirmedError || "Confirm Password"), react_default.a.createElement(components["g" /* Input */], {
        hasError: Boolean(newPassConfirmedError),
        value: values.newPassConfirmed,
        onChange: handleChange,
        type: "password",
        name: "newPassConfirmed",
        placeholder: "Confirm Password"
      }));
    }
  }, {
    key: "renderAttempt",
    value: function renderAttempt(attempt) {
      var isFailed = attempt.isFailed,
          isProcessing = attempt.isProcessing,
          isSuccess = attempt.isSuccess,
          message = attempt.message;
      var waitForU2fKeyResponse = isProcessing && this.isU2f();

      if (isFailed) {
        return react_default.a.createElement(Alert["a" /* Danger */], null, message);
      }

      if (isSuccess) {
        return react_default.a.createElement(Alert["c" /* Success */], null, "Your password has been changed");
      }

      if (waitForU2fKeyResponse) {
        return react_default.a.createElement(Alert["b" /* Info */], null, "Insert your U2F key and press the button on the key");
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var attempt = this.props.attempt;
      return react_default.a.createElement(formik_esm["a" /* Formik */], {
        validate: this.onValidate,
        onSubmit: this.onSubmit,
        initialValues: this.initialValues
      }, function (props) {
        return react_default.a.createElement(components["d" /* Card */], {
          as: "form",
          bg: "bgSecondary",
          mt: "4",
          mb: "4",
          width: "456px",
          p: "5"
        }, _this2.renderAttempt(attempt), _this2.renderFields(props), react_default.a.createElement(components["c" /* Button */], {
          block: true,
          disabled: attempt.isProcessing,
          size: "large",
          type: "submit",
          onClick: props.handleSubmit,
          mt: 4
        }, "Update Password"));
      });
    }
  }]);

  return PasswordForm;
}(react_default.a.Component);

PasswordForm_defineProperty(PasswordForm_PasswordForm, "propTypes", {
  attempt: prop_types_default.a.object.isRequired,
  onChangePass: prop_types_default.a.func.isRequired,
  onChangePassWithU2f: prop_types_default.a.func.isRequired
});

/* harmony default export */ var Settings_PasswordForm_PasswordForm = (PasswordForm_PasswordForm);
// CONCATENATED MODULE: ./src/app/components/Settings/PasswordForm/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var Settings_PasswordForm = (Settings_PasswordForm_PasswordForm);
// CONCATENATED MODULE: ./src/app/components/Settings/Settings.jsx
function Settings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Settings_typeof = function _typeof(obj) { return typeof obj; }; } else { Settings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Settings_typeof(obj); }

function Settings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Settings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Settings_createClass(Constructor, protoProps, staticProps) { if (protoProps) Settings_defineProperties(Constructor.prototype, protoProps); if (staticProps) Settings_defineProperties(Constructor, staticProps); return Constructor; }

function Settings_possibleConstructorReturn(self, call) { if (call && (Settings_typeof(call) === "object" || typeof call === "function")) { return call; } return Settings_assertThisInitialized(self); }

function Settings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Settings_getPrototypeOf(o) { Settings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Settings_getPrototypeOf(o); }

function Settings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Settings_setPrototypeOf(subClass, superClass); }

function Settings_setPrototypeOf(o, p) { Settings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Settings_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/











var Settings_Settings =
/*#__PURE__*/
function (_React$Component) {
  Settings_inherits(Settings, _React$Component);

  function Settings() {
    Settings_classCallCheck(this, Settings);

    return Settings_possibleConstructorReturn(this, Settings_getPrototypeOf(Settings).apply(this, arguments));
  }

  Settings_createClass(Settings, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth2faType = _this$props.auth2faType,
          onChangePass = _this$props.onChangePass,
          onChangePassWithU2f = _this$props.onChangePassWithU2f,
          onDestory = _this$props.onDestory,
          attempt = _this$props.attempt;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components_AppBar_AppBar, null, react_default.a.createElement(components_AppLogo, null)), react_default.a.createElement(components["b" /* Box */], {
        mx: 4,
        mb: 3,
        mt: "1"
      }, react_default.a.createElement(components_Header, {
        title: "Account Settings"
      })), react_default.a.createElement(components["b" /* Box */], {
        mx: 4
      }, react_default.a.createElement(Settings_PasswordForm, {
        auth2faType: auth2faType,
        onChangePass: onChangePass,
        onChangePassWithU2f: onChangePassWithU2f,
        onDestory: onDestory,
        attempt: attempt
      })));
    }
  }]);

  return Settings;
}(react_default.a.Component);

function Settings_mapStoreToProps() {
  return {
    attempt: flux_user["a" /* getters */].pswChangeAttempt
  };
}

function Settings_mapActionsToProps() {
  return {
    auth2faType: config["a" /* default */].getAuth2faType(),
    onChangePass: changePassword,
    onChangePassWithU2f: changePasswordWithU2f,
    onDestory: resetPasswordChangeAttempt
  };
}

/* harmony default export */ var components_Settings_Settings = (Object(DocumentTitle["b" /* withDocTitle */])("Settings", Object(nuclear["b" /* connect */])(Settings_mapStoreToProps, Settings_mapActionsToProps)(Settings_Settings)));
// CONCATENATED MODULE: ./src/app/components/Settings/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_Settings = (components_Settings_Settings);
// CONCATENATED MODULE: ./src/app/components/App/App.jsx
function App_templateObject2() {
  var data = App_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  App_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function App_templateObject() {
  var data = App_taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n"]);

  App_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function App_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/















var App_logger = logger["a" /* default */].create('components/app');

var App_App =
/*#__PURE__*/
function (_Component) {
  App_inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    App_classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = App_possibleConstructorReturn(this, (_getPrototypeOf2 = App_getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    App_defineProperty(App_assertThisInitialized(App_assertThisInitialized(_this)), "state", {
      renderingError: null
    });

    return _this;
  }

  App_createClass(App, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      App_logger.error('render', err);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var featureActivator = new app_featureActivator();
      var match = this.props.match;
      initApp(match.params.siteId, featureActivator);
    }
  }, {
    key: "render",
    value: function render() {
      var initAttempt = this.props.initAttempt;
      var isProcessing = initAttempt.isProcessing,
          isSuccess = initAttempt.isSuccess,
          isFailed = initAttempt.isFailed,
          message = initAttempt.message;

      if (isFailed) {
        return react_default.a.createElement(Errors["b" /* Failed */], {
          message: message
        });
      }

      if (this.state.renderingError) {
        return react_default.a.createElement(Errors["b" /* Failed */], {
          message: this.state.renderingError.message
        });
      }

      if (isProcessing) {
        return react_default.a.createElement(StyledIndicator, null, react_default.a.createElement(components["f" /* Indicator */], null));
      }

      if (!isSuccess) {
        return null;
      }

      return react_default.a.createElement(StyledApp, null, react_default.a.createElement(Router_Switch, null, react_default.a.createElement(Router_Route, {
        exact: true,
        path: config["a" /* default */].routes.app,
        component: components_Clusters
      }), react_default.a.createElement(Router_Route, {
        exact: true,
        path: config["a" /* default */].routes.settingsAccount,
        component: components_Settings
      }), react_default.a.createElement(Router_Route, {
        path: config["a" /* default */].routes.cluster,
        component: components_Cluster
      }), "/>"));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        renderingError: error
      };
    }
  }]);

  return App;
}(react["Component"]);

function App_mapStateToProps() {
  return {
    initAttempt: appStore["b" /* getters */].initAttempt
  };
}

/* harmony default export */ var components_App_App = (Hoc_withAuth(Object(nuclear["b" /* connect */])(App_mapStateToProps)(App_App)));
var StyledApp = styled_components_browser_esm["c" /* default */].div(App_templateObject());
var StyledIndicator = Object(styled_components_browser_esm["c" /* default */])(StyledApp)(App_templateObject2());
// CONCATENATED MODULE: ./src/app/components/App/index.js

/* harmony default export */ var components_App = __webpack_exports__["a"] = (components_App_App);

/***/ }),

/***/ "kTdT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessListRec */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAcl; });
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSHT");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JPcv");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gC4k");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



 // sort logins by making 'root' as the first in the list

var sortLogins = function sortLogins(loginList) {
  var index = loginList.indexOf('root');

  if (index !== -1) {
    loginList = loginList.remove(index);
    return loginList.sort().unshift('root');
  }

  return loginList;
};

var Access = new immutable__WEBPACK_IMPORTED_MODULE_2__["Record"]({
  list: false,
  read: false,
  edit: false,
  create: false,
  remove: false
});
var AccessListRec =
/*#__PURE__*/
function (_Record) {
  _inherits(AccessListRec, _Record);

  function AccessListRec() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AccessListRec);

    var map = Object(nuclear_js__WEBPACK_IMPORTED_MODULE_1__["toImmutable"])(json);
    var sshLogins = new immutable__WEBPACK_IMPORTED_MODULE_2__["List"](map.get('sshLogins'));
    var params = {
      sshLogins: sortLogins(sshLogins),
      authConnectors: new Access(map.get('authConnectors')),
      trustedClusters: new Access(map.get('trustedClusters')),
      roles: new Access(map.get('roles')),
      sessions: new Access(map.get('sessions'))
    };
    return _possibleConstructorReturn(this, _getPrototypeOf(AccessListRec).call(this, params));
  }

  _createClass(AccessListRec, [{
    key: "getSessionAccess",
    value: function getSessionAccess() {
      return this.get('sessions');
    }
  }, {
    key: "getRoleAccess",
    value: function getRoleAccess() {
      return this.get('roles');
    }
  }, {
    key: "getConnectorAccess",
    value: function getConnectorAccess() {
      return this.get('authConnectors');
    }
  }, {
    key: "getClusterAccess",
    value: function getClusterAccess() {
      return this.get('trustedClusters');
    }
  }, {
    key: "getSshLogins",
    value: function getSshLogins() {
      return this.get('sshLogins');
    }
  }]);

  return AccessListRec;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Record"])({
  authConnectors: new Access(),
  trustedClusters: new Access(),
  roles: new Access(),
  sessions: new Access(),
  sshLogins: new immutable__WEBPACK_IMPORTED_MODULE_2__["List"]()
}));
function getAcl() {
  return app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].evaluate(['tlpt_user_acl']);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(nuclear_js__WEBPACK_IMPORTED_MODULE_1__["Store"])({
  getInitialState: function getInitialState() {
    return new AccessListRec();
  },
  initialize: function initialize() {
    this.on(_actionTypes__WEBPACK_IMPORTED_MODULE_3__[/* RECEIVE_USERACL */ "a"], function (state, json) {
      return new AccessListRec(json);
    });
  }
}));

/***/ }),

/***/ "ksSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initAppStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchInviteStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return signupStatus; });
/* unused harmony export initSettingsStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePasswordStatus; });
/* harmony import */ var app_reactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSHT");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tGXY");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LYgY");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



function makeStatus(reqType) {
  return {
    start: function start() {
      app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* START */ "c"], {
        type: reqType
      });
    },
    success: function success(message) {
      app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"], {
        type: reqType,
        message: message
      });
    },
    fail: function fail(message) {
      app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* FAIL */ "b"], {
        type: reqType,
        message: message
      });
    },
    clear: function clear() {
      app_reactor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dispatch(_actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* CLEAR */ "a"], {
        type: reqType
      });
    }
  };
}
var initAppStatus = makeStatus(_constants__WEBPACK_IMPORTED_MODULE_2__[/* TRYING_TO_INIT_APP */ "c"]);
var loginStatus = makeStatus(_constants__WEBPACK_IMPORTED_MODULE_2__[/* TRYING_TO_LOGIN */ "e"]);
var fetchInviteStatus = makeStatus(_constants__WEBPACK_IMPORTED_MODULE_2__[/* FETCHING_INVITE */ "a"]);
var signupStatus = makeStatus(_constants__WEBPACK_IMPORTED_MODULE_2__[/* TRYING_TO_SIGN_UP */ "f"]);
var initSettingsStatus = makeStatus(_constants__WEBPACK_IMPORTED_MODULE_2__[/* TRYING_TO_INIT_SETTINGS */ "d"]);
var changePasswordStatus = makeStatus(_constants__WEBPACK_IMPORTED_MODULE_2__[/* TRYING_TO_CHANGE_PSW */ "b"]);

/***/ }),

/***/ "l3S1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthProviderTypeEnum; });
/* unused harmony export RestRespCodeEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth2faTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AuthTypeEnum; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var AuthProviderTypeEnum = {
  OIDC: 'oidc',
  SAML: 'saml',
  GITHUB: 'github'
};
var RestRespCodeEnum = {
  FORBIDDEN: 403
};
var Auth2faTypeEnum = {
  UTF: 'u2f',
  OTP: 'otp',
  DISABLED: 'off'
};
var AuthTypeEnum = {
  LOCAL: 'local',
  SSO: 'sso'
};

/***/ }),

/***/ "lZJN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    _classCallCheck(this, Logger);

    this.name = name;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';

      if (true) {
        var _window$console;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_window$console = window.console)[level].apply(_window$console, ["%c[".concat(this.name, "]"), "color: blue;"].concat(args));
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.log.apply(this, ['trace'].concat(args));
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.log.apply(this, ['warn'].concat(args));
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.log.apply(this, ['info'].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.log.apply(this, ['error'].concat(args));
    }
  }]);

  return Logger;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  create: function create() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return _construct(Logger, args);
  }
});

/***/ }),

/***/ "oHDm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initAppAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchInviteAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return signupAttempt; });
/* unused harmony export initSettingsAttempt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePasswordAttempt; });
/* harmony import */ var _statusStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PVWJ");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LYgY");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var STORE_NAME = 'tlpt_status';
var makeGetter = function makeGetter(reqType) {
  return [[STORE_NAME, reqType], function (rec) {
    return rec || new _statusStore__WEBPACK_IMPORTED_MODULE_0__[/* TrackRec */ "a"]();
  }];
};
var initAppAttempt = makeGetter(_constants__WEBPACK_IMPORTED_MODULE_1__[/* TRYING_TO_INIT_APP */ "c"]);
var loginAttempt = makeGetter(_constants__WEBPACK_IMPORTED_MODULE_1__[/* TRYING_TO_LOGIN */ "e"]);
var fetchInviteAttempt = makeGetter(_constants__WEBPACK_IMPORTED_MODULE_1__[/* FETCHING_INVITE */ "a"]);
var signupAttempt = makeGetter(_constants__WEBPACK_IMPORTED_MODULE_1__[/* TRYING_TO_SIGN_UP */ "f"]);
var initSettingsAttempt = makeGetter(_constants__WEBPACK_IMPORTED_MODULE_1__[/* TRYING_TO_INIT_SETTINGS */ "d"]);
var changePasswordAttempt = makeGetter(_constants__WEBPACK_IMPORTED_MODULE_1__[/* TRYING_TO_CHANGE_PSW */ "b"]);

/***/ }),

/***/ "owjQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RECEIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECEIVE_INVITE; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var RECEIVE_USER = 'TLPT_RECEIVE_USER';
var RECEIVE_INVITE = 'TLPT_RECEIVE_USER_INVITE';

/***/ }),

/***/ "qDpX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECEIVE_CLUSTERS; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var RECEIVE_CLUSTERS = 'TLPT_CLUSTER_RECEIVE';

/***/ }),

/***/ "rVcD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/app/index.jsx
var app = __webpack_require__("eowl");

// EXTERNAL MODULE: ./src/app/services/history.js
var services_history = __webpack_require__("yaYm");

// EXTERNAL MODULE: ./src/app/config.js
var config = __webpack_require__("LMli");

// EXTERNAL MODULE: ./src/app/reactor.js
var reactor = __webpack_require__("xSHT");

// EXTERNAL MODULE: ./node_modules/nuclear-js/dist/nuclear.js
var nuclear = __webpack_require__("L7e8");

// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.js
var immutable = __webpack_require__("JPcv");

// EXTERNAL MODULE: ./src/app/services/localStorage.js
var localStorage = __webpack_require__("KdfW");

// EXTERNAL MODULE: ./src/app/flux/terminal/actionTypes.js
var actionTypes = __webpack_require__("PxPv");

// CONCATENATED MODULE: ./src/app/flux/terminal/store.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var TermStatusRec = new immutable["Record"]({
  isReady: false,
  isLoading: false,
  isNotFound: false,
  isError: false,
  errorText: undefined
});
var store_TermRec =
/*#__PURE__*/
function (_Record) {
  _inherits(TermRec, _Record);

  function TermRec() {
    _classCallCheck(this, TermRec);

    return _possibleConstructorReturn(this, _getPrototypeOf(TermRec).apply(this, arguments));
  }

  _createClass(TermRec, [{
    key: "getClusterName",
    value: function getClusterName() {
      return this.siteId;
    }
  }, {
    key: "getTtyParams",
    value: function getTtyParams() {
      var _localStorage$getBear = localStorage["b" /* default */].getBearerToken(),
          accessToken = _localStorage$getBear.accessToken;

      var server_id = this.serverId;
      return {
        login: this.login,
        sid: this.sid,
        token: accessToken,
        ttyUrl: config["a" /* default */].api.ttyWsAddr,
        cluster: this.siteId,
        getTarget: function getTarget() {
          return {
            server_id: server_id
          };
        }
      };
    }
  }, {
    key: "setStatus",
    value: function setStatus(json) {
      return this.setIn(['status'], new TermStatusRec(json));
    }
  }, {
    key: "getServerLabel",
    value: function getServerLabel() {
      if (this.hostname && this.login) {
        return "".concat(this.login, "@").concat(this.hostname);
      }

      if (this.serverId && this.login) {
        return "".concat(this.login, "@").concat(this.serverId);
      }

      return '';
    }
  }]);

  return TermRec;
}(Object(immutable["Record"])({
  status: TermStatusRec(),
  hostname: null,
  login: null,
  siteId: null,
  serverId: null,
  sid: null
}));
/* harmony default export */ var store = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return new store_TermRec();
  },
  initialize: function initialize() {
    this.on(actionTypes["b" /* TLPT_TERMINAL_INIT */], function (state, json) {
      return new store_TermRec(json);
    });
    this.on(actionTypes["a" /* TLPT_TERMINAL_CLOSE */], function () {
      return new store_TermRec();
    });
    this.on(actionTypes["c" /* TLPT_TERMINAL_SET_STATUS */], function (state, json) {
      return state.setStatus(json);
    });
  }
}));
// EXTERNAL MODULE: ./src/app/flux/userAcl/store.js
var userAcl_store = __webpack_require__("kTdT");

// EXTERNAL MODULE: ./src/app/flux/nodes/nodeStore.js
var nodeStore = __webpack_require__("cxFd");

// CONCATENATED MODULE: ./src/app/flux/settings/actionTypes.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var INIT = 'SETTINGS_INIT';
var ADD_NAV_ITEM = 'SETTINGS_ADD_NAV_ITEM';
var SET_RES_TO_DELETE = 'SETTINGS_SET_RES_TO_DELETE';
// CONCATENATED MODULE: ./src/app/flux/settings/store.js
function store_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { store_typeof = function _typeof(obj) { return typeof obj; }; } else { store_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return store_typeof(obj); }

function store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function store_createClass(Constructor, protoProps, staticProps) { if (protoProps) store_defineProperties(Constructor.prototype, protoProps); if (staticProps) store_defineProperties(Constructor, staticProps); return Constructor; }

function store_possibleConstructorReturn(self, call) { if (call && (store_typeof(call) === "object" || typeof call === "function")) { return call; } return store_assertThisInitialized(self); }

function store_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function store_getPrototypeOf(o) { store_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return store_getPrototypeOf(o); }

function store_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) store_setPrototypeOf(subClass, superClass); }

function store_setPrototypeOf(o, p) { store_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return store_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var SettingsRec =
/*#__PURE__*/
function (_Record) {
  store_inherits(SettingsRec, _Record);

  function SettingsRec(params) {
    store_classCallCheck(this, SettingsRec);

    return store_possibleConstructorReturn(this, store_getPrototypeOf(SettingsRec).call(this, params));
  }

  store_createClass(SettingsRec, [{
    key: "isReady",
    value: function isReady() {
      return this.isInitialized;
    }
  }, {
    key: "getNavItems",
    value: function getNavItems() {
      return this.navItems.toJS();
    }
  }, {
    key: "addNavItem",
    value: function addNavItem(navItem) {
      return this.set('navItems', this.navItems.push(navItem));
    }
  }]);

  return SettingsRec;
}(Object(immutable["Record"])({
  isInitialized: false,
  navItems: new immutable["List"]()
}));

/* harmony default export */ var settings_store = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return new SettingsRec();
  },
  initialize: function initialize() {
    this.on(INIT, function (state) {
      return state.set('isInitialized', true);
    });
    this.on(ADD_NAV_ITEM, function (state, navItem) {
      return state.addNavItem(navItem);
    });
  }
}));
// EXTERNAL MODULE: ./src/app/flux/status/statusStore.js
var statusStore = __webpack_require__("PVWJ");

// EXTERNAL MODULE: ./src/app/flux/user/actionTypes.js
var user_actionTypes = __webpack_require__("owjQ");

// EXTERNAL MODULE: ./src/app/services/enums.js
var enums = __webpack_require__("l3S1");

// CONCATENATED MODULE: ./src/app/flux/user/userStore.js
function userStore_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { userStore_typeof = function _typeof(obj) { return typeof obj; }; } else { userStore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return userStore_typeof(obj); }

function userStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function userStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function userStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) userStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) userStore_defineProperties(Constructor, staticProps); return Constructor; }

function userStore_possibleConstructorReturn(self, call) { if (call && (userStore_typeof(call) === "object" || typeof call === "function")) { return call; } return userStore_assertThisInitialized(self); }

function userStore_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function userStore_getPrototypeOf(o) { userStore_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return userStore_getPrototypeOf(o); }

function userStore_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) userStore_setPrototypeOf(subClass, superClass); }

function userStore_setPrototypeOf(o, p) { userStore_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return userStore_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var userStore_UserRec =
/*#__PURE__*/
function (_Record) {
  userStore_inherits(UserRec, _Record);

  function UserRec(params) {
    userStore_classCallCheck(this, UserRec);

    return userStore_possibleConstructorReturn(this, userStore_getPrototypeOf(UserRec).call(this, params));
  }

  userStore_createClass(UserRec, [{
    key: "isSso",
    value: function isSso() {
      return this.get('authType') === enums["c" /* AuthTypeEnum */].SSO;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.get('name');
    }
  }]);

  return UserRec;
}(Object(immutable["Record"])({
  name: '',
  authType: ''
}));

/* harmony default export */ var userStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return Object(nuclear["toImmutable"])(null);
  },
  initialize: function initialize() {
    this.on(user_actionTypes["b" /* RECEIVE_USER */], receiveUser);
  }
}));

function receiveUser(state, json) {
  return new userStore_UserRec(json);
}
// CONCATENATED MODULE: ./src/app/flux/user/userInviteStore.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var Invite = new immutable["Record"]({
  invite_token: '',
  user: '',
  qr: ''
});
/* harmony default export */ var userInviteStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return Object(nuclear["toImmutable"])(null);
  },
  initialize: function initialize() {
    this.on(user_actionTypes["a" /* RECEIVE_INVITE */], receiveInvite);
  }
}));

function receiveInvite(state, json) {
  return new Invite(json);
}
// EXTERNAL MODULE: ./src/app/flux/sites/actionTypes.js
var sites_actionTypes = __webpack_require__("qDpX");

// CONCATENATED MODULE: ./src/app/flux/sites/siteStore.js
function siteStore_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { siteStore_typeof = function _typeof(obj) { return typeof obj; }; } else { siteStore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return siteStore_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function siteStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function siteStore_possibleConstructorReturn(self, call) { if (call && (siteStore_typeof(call) === "object" || typeof call === "function")) { return call; } return siteStore_assertThisInitialized(self); }

function siteStore_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function siteStore_getPrototypeOf(o) { siteStore_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return siteStore_getPrototypeOf(o); }

function siteStore_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) siteStore_setPrototypeOf(subClass, superClass); }

function siteStore_setPrototypeOf(o, p) { siteStore_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return siteStore_setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var SiteRec =
/*#__PURE__*/
function (_Record) {
  siteStore_inherits(SiteRec, _Record);

  function SiteRec(json) {
    siteStore_classCallCheck(this, SiteRec);

    var params = _objectSpread({}, json, {
      connectedAt: json.last_connected
    });

    return siteStore_possibleConstructorReturn(this, siteStore_getPrototypeOf(SiteRec).call(this, params));
  }

  return SiteRec;
}(Object(immutable["Record"])({
  name: null,
  status: '',
  nodeCount: 0,
  connectedAt: null
}));
/* harmony default export */ var siteStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return new immutable["List"]();
  },
  initialize: function initialize() {
    this.on(sites_actionTypes["a" /* RECEIVE_CLUSTERS */], receiveSites);
  }
}));

function receiveSites(state, json) {
  return new immutable["List"](json.map(function (o) {
    return new SiteRec(o);
  }));
}
// EXTERNAL MODULE: ./src/app/flux/sessions/actionTypes.js
var sessions_actionTypes = __webpack_require__("zMbK");

// CONCATENATED MODULE: ./src/app/flux/sessions/eventStore.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


/* harmony default export */ var eventStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return Object(nuclear["toImmutable"])({});
  },
  initialize: function initialize() {
    this.on(sessions_actionTypes["b" /* RECEIVE_SITE_EVENTS */], receive);
  }
}));

function receive(state, _ref) {
  var json = _ref.json;
  var jsonEvents = json || [];
  return state.withMutations(function (state) {
    jsonEvents.forEach(function (item) {
      var sid = item.sid,
          event = item.event;

      if (!state.has(sid)) {
        state.set(sid, Object(nuclear["toImmutable"])({}));
      }

      state.setIn([sid, event], Object(nuclear["toImmutable"])(item));
    });
  });
}
// EXTERNAL MODULE: ./src/app/lib/term/enums.js
var term_enums = __webpack_require__("5vg5");

// CONCATENATED MODULE: ./src/app/flux/sessions/archivedSessionStore.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var StoredSessionRec = Object(immutable["Record"])({
  id: undefined,
  user: undefined,
  created: undefined,
  nodeIp: undefined,
  last_active: undefined,
  server_id: undefined,
  siteId: undefined,
  parties: Object(immutable["List"])()
});
/* harmony default export */ var archivedSessionStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return Object(nuclear["toImmutable"])({});
  },
  initialize: function initialize() {
    this.on(sessions_actionTypes["b" /* RECEIVE_SITE_EVENTS */], archivedSessionStore_receive);
  }
})); // uses events to build stored session objects

function archivedSessionStore_receive(state, _ref) {
  var siteId = _ref.siteId,
      json = _ref.json;
  var jsonEvents = json || [];
  var tmp = {};
  return state.withMutations(function (state) {
    jsonEvents.forEach(function (item) {
      if (item.event !== term_enums["a" /* EventTypeEnum */].START && item.event !== term_enums["a" /* EventTypeEnum */].END) {
        return;
      }

      var sid = item.sid,
          user = item.user,
          time = item.time,
          event = item.event,
          server_id = item.server_id;
      tmp[sid] = tmp[sid] || {};
      tmp[sid].id = sid;
      tmp[sid].user = user;
      tmp[sid].siteId = siteId;

      if (event === term_enums["a" /* EventTypeEnum */].START) {
        tmp[sid].created = time;
        tmp[sid].server_id = server_id;
        tmp[sid].nodeIp = item['addr.local'];
        tmp[sid].parties = [{
          user: user,
          serverIp: item['addr.remote']
        }];
      } // update the store only with new items


      if (event === term_enums["a" /* EventTypeEnum */].END && !state.has(sid)) {
        tmp[sid].last_active = time;
        state.set(sid, new StoredSessionRec(Object(nuclear["toImmutable"])(tmp[sid])));
      }
    });
  });
}
// CONCATENATED MODULE: ./src/app/flux/sessions/activeSessionStore.js
function activeSessionStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { activeSessionStore_defineProperty(target, key, source[key]); }); } return target; }

function activeSessionStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var ActiveSessionRec = Object(immutable["Record"])({
  id: undefined,
  namespace: undefined,
  login: undefined,
  active: undefined,
  created: undefined,
  last_active: undefined,
  server_id: undefined,
  siteId: undefined,
  parties: Object(immutable["List"])()
});
var PartyRecord = Object(immutable["Record"])({
  user: undefined,
  serverIp: undefined,
  serverId: undefined
});

var activeSessionStore_defaultState = function defaultState() {
  return Object(nuclear["toImmutable"])({});
};

/* harmony default export */ var activeSessionStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    return activeSessionStore_defaultState();
  },
  initialize: function initialize() {
    this.on(sessions_actionTypes["a" /* RECEIVE_ACTIVE_SESSIONS */], activeSessionStore_receive);
  }
}));

function activeSessionStore_receive(state, _ref) {
  var siteId = _ref.siteId,
      sessions = _ref.sessions;
  sessions = sessions || [];
  var newState = activeSessionStore_defaultState().withMutations(function (newState) {
    return sessions.filter(function (item) {
      return item.active === true;
    }).forEach(function (item) {
      var rec = createSessionRec(siteId, item);
      newState.set(rec.id, rec);
    });
  });
  return newState.equals(state) ? state : newState;
}

function createSessionRec(siteId, json) {
  var parties = createParties(json.parties);
  var rec = new ActiveSessionRec(Object(nuclear["toImmutable"])(activeSessionStore_objectSpread({}, json, {
    siteId: siteId,
    parties: parties
  })));
  return rec;
}

function createParties(jsonArray) {
  jsonArray = jsonArray || [];
  var list = new immutable["List"]();
  return list.withMutations(function (list) {
    jsonArray.forEach(function (item) {
      var party = new PartyRecord({
        user: item.user,
        serverIp: item.remote_addr,
        serverId: item.server_id
      });
      list.push(party);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("wd/R");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/app/flux/storedSessionsFilter/actionTypes.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var TLPT_STORED_SESSINS_FILTER_SET_RANGE = 'TLPT_STORED_SESSINS_FILTER_SET_RANGE';
var TLPT_STORED_SESSINS_FILTER_SET_STATUS = 'TLPT_STORED_SESSINS_FILTER_SET_STATUS';
var TLPT_STORED_SESSINS_FILTER_RECEIVE_MORE = 'TLPT_STORED_SESSINS_FILTER_RECEIVE_MORE';
// CONCATENATED MODULE: ./src/app/flux/storedSessionsFilter/storedSessionFilterStore.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/* harmony default export */ var storedSessionFilterStore = (Object(nuclear["Store"])({
  getInitialState: function getInitialState() {
    var end = moment_default()(new Date()).endOf('day').toDate();
    var start = moment_default()(end).subtract(3, 'day').startOf('day').toDate();
    var state = {
      start: start,
      end: end
    };
    return Object(nuclear["toImmutable"])(state);
  },
  initialize: function initialize() {
    this.on(TLPT_STORED_SESSINS_FILTER_SET_RANGE, setRange);
  }
}));

function setRange(state, newState) {
  return state.merge(newState);
}
// EXTERNAL MODULE: ./src/app/flux/sshHistory/store.js
var sshHistory_store = __webpack_require__("SwYS");

// EXTERNAL MODULE: ./src/app/flux/misc/store.js
var misc_store = __webpack_require__("hrax");

// EXTERNAL MODULE: ./src/app/flux/fileTransfer/index.js + 1 modules
var fileTransfer = __webpack_require__("JeNE");

// EXTERNAL MODULE: ./src/app/flux/app/appStore.js
var appStore = __webpack_require__("SgOX");

// CONCATENATED MODULE: ./src/app/flux/index.js
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

















reactor["a" /* default */].registerStores({
  'tlpt_settings': settings_store,
  'tlpt_terminal': store,
  'tlpt_nodes': nodeStore["a" /* default */],
  'tlpt_user': userStore,
  'tlpt_user_invite': userInviteStore,
  'tlpt_user_acl': userAcl_store["a" /* default */],
  'tlpt_sites': siteStore,
  'tlpt_status': statusStore["b" /* default */],
  'tlpt_sessions_events': eventStore,
  'tlpt_sessions_archived': archivedSessionStore,
  'tlpt_sessions_active': activeSessionStore,
  'tlpt_sessions_filter': storedSessionFilterStore
});
Object(appStore["c" /* register */])(reactor["a" /* default */]);
Object(sshHistory_store["b" /* register */])(reactor["a" /* default */]);
Object(misc_store["a" /* register */])(reactor["a" /* default */]);
Object(fileTransfer["b" /* register */])(reactor["a" /* default */]);
// CONCATENATED MODULE: ./src/boot.js
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/







services_history["a" /* default */].init();
config["a" /* default */].init(window.GRV_CONFIG);

var boot_render = function render(Component) {
  react_dom_default.a.render(react_default.a.createElement(Component, {
    reactor: reactor["a" /* default */],
    history: services_history["a" /* default */].original()
  }), document.getElementById('app'));
};

boot_render(app["a" /* default */]);

/***/ }),

/***/ "ryey":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("za5s");

// CONCATENATED MODULE: ./src/shared/components/Input/Input.jsx
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  appearance: none;\n  border-radius: 4px;\n  background: ", ";\n  border: ", ";\n  box-sizing: border-box;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, .24);\n  color: ", ";\n  font-family: inherit;\n  font-size: 16px;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin: 0 0 24px 0;\n  outline: none;\n  padding: 0 16px;\n  transition: all .3s;\n  width: 100%;\n\n  ::-ms-clear {\n    display: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  ", " ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Input = styled_components_browser_esm["c" /* default */].input(_templateObject(), function (props) {
  return props.hasError ? props.theme.colors.bgError : '#FFF';
}, function (props) {
  return props.hasError ? "2px solid ".concat(props.theme.colors.error) : 'none';
}, theme["a" /* colors */].text, function (props) {
  return props.theme.colors.subtle;
}, index_esm["o" /* space */], index_esm["q" /* width */]);
Input.displayName = 'Input';
Input.propTypes = {
  placeholder: prop_types_default.a.string,
  hasError: prop_types_default.a.bool
};
/* harmony default export */ var Input_Input = (Input);
// CONCATENATED MODULE: ./src/shared/components/Input/index.js

/* harmony default export */ var components_Input = (Input_Input);
// EXTERNAL MODULE: ./src/shared/components/Button/index.js + 1 modules
var Button = __webpack_require__("frOc");

// EXTERNAL MODULE: ./src/shared/components/Alert/index.jsx + 1 modules
var Alert = __webpack_require__("LcJ4");

// EXTERNAL MODULE: ./src/shared/components/Box/index.js + 1 modules
var Box = __webpack_require__("7EWF");

// CONCATENATED MODULE: ./src/shared/components/Card/Card.jsx
function Card_templateObject() {
  var data = Card_taggedTemplateLiteral(["\n  box-shadow: 0 0 32px rgba(0, 0, 0, .12), 0 8px 32px rgba(0, 0, 0, .24);\n  border-radius: 12px;\n  footer {\n    background-color: ", ";\n  }\n"]);

  Card_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Card_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Card = Object(styled_components_browser_esm["c" /* default */])(Box["a" /* default */])(Card_templateObject(), function (props) {
  return props.theme.colors.bgPrimary;
});
Card.defaultProps = {
  theme: theme["b" /* default */],
  bg: 'bgSecondary'
};
Card.displayName = 'Card';
/* harmony default export */ var Card_Card = (Card);
// CONCATENATED MODULE: ./src/shared/components/Card/index.js

/* harmony default export */ var components_Card = (Card_Card);
// CONCATENATED MODULE: ./src/shared/components/Text/Text.jsx
function Text_templateObject() {
  var data = Text_taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  Text_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Text_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var caps = function caps(props) {
  return props.caps ? {
    textTransform: 'uppercase'
  } : null;
};
var breakAll = function breakAll(props) {
  return props.breakAll ? {
    wordBreak: 'break-all'
  } : null;
};
var regular = function regular(props) {
  return props.regular ? {
    fontWeight: props.theme.regular
  } : null;
};
var bold = function bold(props) {
  return props.bold ? {
    fontWeight: props.theme.bold
  } : null;
};
var italic = function italic(props) {
  return props.italic ? {
    fontStyle: 'italic'
  } : null;
};
var Text = styled_components_browser_esm["c" /* default */].div(Text_templateObject(), breakAll, italic, index_esm["h" /* fontSize */], index_esm["o" /* space */], index_esm["d" /* color */], caps, regular, bold, index_esm["p" /* textAlign */]);
Text.displayName = 'Text';
var numberStringOrArray = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.array]);
Text.propTypes = {
  fontSize: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.array]),
  textAlign: prop_types_default.a.oneOf(['left', 'center', 'right', 'justify']),
  caps: prop_types_default.a.bool,
  regular: prop_types_default.a.bool,
  bold: prop_types_default.a.bool,
  italic: prop_types_default.a.bool,
  color: prop_types_default.a.string,

  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,

  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
};
Text.defaultProps = {
  theme: theme["b" /* default */],
  margin: 0
};
Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');
Text.s = Text.withComponent('s');
/* harmony default export */ var Text_Text = (Text);
// CONCATENATED MODULE: ./src/shared/components/Text/index.js

/* harmony default export */ var components_Text = (Text_Text);
// CONCATENATED MODULE: ./src/shared/components/Label/Label.jsx
function Label_templateObject() {
  var data = Label_taggedTemplateLiteral(["\n  color: ", ";\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n  opacity: ", ";\n  text-transform: uppercase;\n  width: 100%;\n"]);

  Label_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Label_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Label = styled_components_browser_esm["c" /* default */].label(Label_templateObject(), function (props) {
  return props.hasError ? props.theme.colors.error : props.theme.colors.light;
}, function (props) {
  return props.hasError ? 1 : .87;
});
Label.propTypes = {
  hasError: prop_types_default.a.bool
};
Label.defaultProps = {
  hasError: false,
  fontSize: 0
};
Label.displayName = 'Label';
/* harmony default export */ var Label_Label = (Label);
// CONCATENATED MODULE: ./src/shared/components/Label/index.js

/* harmony default export */ var components_Label = (Label_Label);
// EXTERNAL MODULE: ./src/shared/components/Typography/index.js + 1 modules
var Typography = __webpack_require__("Ahhe");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/shared/components/Icon/index.js
var Icon = __webpack_require__("893j");

// EXTERNAL MODULE: ./src/shared/assets/icomoon/style.css
var style = __webpack_require__("ec++");

// CONCATENATED MODULE: ./src/shared/components/Indicator/Indicator.jsx
function Indicator_templateObject() {
  var data = Indicator_taggedTemplateLiteral(["\n  animation: anim-rotate 2s infinite linear;\n  color: #fff;\n  display: inline-block;\n  font-size: 32px;\n  height: 32px;\n  opacity: .87;\n  width: 32px;\n  line-height: 32px;\n  margin: 16px;\n  text-shadow: 0 0 .25em rgba(255,255,255, .3);\n\n  @keyframes anim-rotate {\n    0% {\n      transform: rotate(0);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n"]);

  Indicator_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Indicator_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WHEN_TO_DISPLAY = 100; // 0.2s;

var Indicator_Indicator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Indicator, _React$Component);

  function Indicator(props) {
    var _this;

    _classCallCheck(this, Indicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Indicator).call(this, props));
    _this._timer = null;
    _this.state = {
      canDisplay: false
    };
    return _this;
  }

  _createClass(Indicator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._timer = setTimeout(function () {
        _this2.setState({
          canDisplay: true
        });
      }, WHEN_TO_DISPLAY);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.canDisplay) {
        return null;
      }

      return react_default.a.createElement(StyledSpinner, this.props);
    }
  }]);

  return Indicator;
}(react_default.a.Component);

var StyledSpinner = Object(styled_components_browser_esm["c" /* default */])(Icon["t" /* Spinner */])(Indicator_templateObject());
/* harmony default export */ var components_Indicator_Indicator = (Indicator_Indicator);
// CONCATENATED MODULE: ./src/shared/components/Indicator/index.js

/* harmony default export */ var components_Indicator = (components_Indicator_Indicator);
// CONCATENATED MODULE: ./src/shared/components/SideNav/SideNav.jsx
function SideNav_templateObject() {
  var data = SideNav_taggedTemplateLiteral(["\n  background: ", ";\n  min-width: 240px;\n  width: 240px;\n  overflow: auto;\n  height: 100%;\n"]);

  SideNav_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function SideNav_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SideNav = styled_components_browser_esm["c" /* default */].nav(SideNav_templateObject(), function (props) {
  return props.theme.colors.bgSecondary;
});
SideNav.displayName = 'SideNav';
/* harmony default export */ var SideNav_SideNav = (SideNav);
// EXTERNAL MODULE: ./src/shared/components/SideNav/SideNavItem.jsx
var SideNavItem = __webpack_require__("/3tl");

// CONCATENATED MODULE: ./src/shared/components/SideNav/index.js


/* harmony default export */ var components_SideNav = (SideNav_SideNav);

// CONCATENATED MODULE: ./src/shared/components/TopNav/TopNav.jsx
function TopNav_templateObject() {
  var data = TopNav_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-shrink: 0;\n  ", "\n"]);

  TopNav_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function TopNav_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var TopNav = styled_components_browser_esm["c" /* default */].nav(TopNav_templateObject(), index_esm["o" /* space */]);
/* harmony default export */ var TopNav_TopNav = (TopNav);
// EXTERNAL MODULE: ./src/shared/components/TopNav/TopNavItem.jsx
var TopNavItem = __webpack_require__("2oKY");

// CONCATENATED MODULE: ./src/shared/components/TopNav/index.js


/* harmony default export */ var components_TopNav = (TopNav_TopNav);

// EXTERNAL MODULE: ./src/shared/components/Flex/index.js + 1 modules
var Flex = __webpack_require__("Z9o+");

// CONCATENATED MODULE: ./src/shared/components/index.js
/* concated harmony reexport Alert */__webpack_require__.d(__webpack_exports__, "a", function() { return Alert["d" /* default */]; });
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "b", function() { return Box["a" /* default */]; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "c", function() { return Button["a" /* default */]; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "d", function() { return components_Card; });
/* concated harmony reexport Flex */__webpack_require__.d(__webpack_exports__, "e", function() { return Flex["a" /* default */]; });
/* concated harmony reexport Typography */__webpack_require__.d(__webpack_exports__, "m", function() { return Typography["a" /* default */]; });
/* concated harmony reexport Indicator */__webpack_require__.d(__webpack_exports__, "f", function() { return components_Indicator; });
/* concated harmony reexport Input */__webpack_require__.d(__webpack_exports__, "g", function() { return components_Input; });
/* concated harmony reexport Label */__webpack_require__.d(__webpack_exports__, "h", function() { return components_Label; });
/* concated harmony reexport SideNav */__webpack_require__.d(__webpack_exports__, "i", function() { return components_SideNav; });
/* concated harmony reexport SideNavItem */__webpack_require__.d(__webpack_exports__, "j", function() { return SideNavItem["a" /* default */]; });
/* concated harmony reexport Text */__webpack_require__.d(__webpack_exports__, "k", function() { return components_Text; });
/* concated harmony reexport TopNav */__webpack_require__.d(__webpack_exports__, "l", function() { return components_TopNav; });
/* unused concated harmony import TopNavItem */














/***/ }),

/***/ "s1C8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// CONCATENATED MODULE: ./src/shared/components/ThemeProvider/globals.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  html {\n    font-family: ", ";\n    font-weight: 400;\n  }\n\n  body {\n    margin: 0;\n    background-color: ", ";\n    color: ", ";\n    padding: 0;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(styled_components_browser_esm["b" /* createGlobalStyle */])(_templateObject(), function (props) {
  return props.theme.font;
}, function (props) {
  return props.theme.colors.bgPrimary;
}, function (props) {
  return props.theme.colors.light;
});

// EXTERNAL MODULE: ./src/shared/components/theme.js + 1 modules
var theme = __webpack_require__("K0cP");

// CONCATENATED MODULE: ./src/shared/components/ThemeProvider/index.js





var ThemeProvider_ThemeProvider = function ThemeProvider(props) {
  return react_default.a.createElement(styled_components_browser_esm["a" /* ThemeProvider */], {
    theme: props.theme || theme["b" /* default */]
  }, react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(GlobalStyle, null), props.children));
};

/* harmony default export */ var components_ThemeProvider = __webpack_exports__["a"] = (ThemeProvider_ThemeProvider);

/***/ }),

/***/ "tGXY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var START = 'TLPT_STATUS_START';
var SUCCESS = 'TLPT_STATUS_SUCCESS';
var FAIL = 'TLPT_STATUS_FAIL';
var CLEAR = 'TLPT_STATUS_CLEAR';

/***/ }),

/***/ "tOzQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/app/components/DocumentTitle/DocumentTitle.jsx
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var DocumentTitle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocumentTitle, _React$Component);

  function DocumentTitle() {
    _classCallCheck(this, DocumentTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentTitle).apply(this, arguments));
  }

  _createClass(DocumentTitle, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.title !== this.props.title) {
        this.setTitle(this.props.title);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTitle(this.props.title);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return document.title;
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      document.title = title;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DocumentTitle;
}(react_default.a.Component);


var DocumentTitle_withDocTitle = function withDocTitle(title, component) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(WithWindowTitle, _React$Component2);

    function WithWindowTitle() {
      _classCallCheck(this, WithWindowTitle);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithWindowTitle).apply(this, arguments));
    }

    _createClass(WithWindowTitle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setTitle(title);
      }
    }, {
      key: "setTitle",
      value: function setTitle(title) {
        document.title = title;
      }
    }, {
      key: "render",
      value: function render() {
        return react_default.a.createElement(component, _objectSpread({}, this.props));
      }
    }]);

    return WithWindowTitle;
  }(react_default.a.Component), _defineProperty(_class, "displayName", "withDocTitleWrapper"), _temp;
};
// CONCATENATED MODULE: ./src/app/components/DocumentTitle/index.js
/* concated harmony reexport withDocTitle */__webpack_require__.d(__webpack_exports__, "b", function() { return DocumentTitle_withDocTitle; });
/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* harmony default export */ var components_DocumentTitle = __webpack_exports__["a"] = (DocumentTitle);


/***/ }),

/***/ "xSHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L7e8");
/* harmony import */ var nuclear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nuclear_js__WEBPACK_IMPORTED_MODULE_0__);
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var CSS = 'color: blue'; // reactor options

var options = {
  debug: "production" === 'development'
};
var logger = {
  dispatchStart: function dispatchStart(reactorState, actionType, payload) {
    window.console.log("%creactor.dispatch(\"".concat(actionType, "\", "), CSS, payload, ")");
  },
  dispatchError: function dispatchError(reactorState, error) {
    window.console.debug('Dispatch error: ' + error);
  },
  dispatchEnd: function dispatchEnd(reactorState, state, dirtyStores) {
    var stateChanges = state.filter(function (val, key) {
      return dirtyStores.contains(key);
    });
    window.console.log('%cupdated store -> ', CSS, stateChanges.toJS());
  }
};

if (options.debug) {
  options.logger = logger;
}

var reactor = new nuclear_js__WEBPACK_IMPORTED_MODULE_0__["Reactor"](options);
window.reactor = reactor;
/* harmony default export */ __webpack_exports__["a"] = (reactor);

/***/ }),

/***/ "yaYm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bpk+");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SsKX");
/* harmony import */ var app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LMli");
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



var _inst = null;
var history = {
  original: function original() {
    return _inst;
  },
  init: function init(history) {
    _inst = history || history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default()();
  },
  push: function push(route) {
    var withRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    route = this.ensureSafeRoute(route);

    if (withRefresh) {
      this._pageRefresh(route);
    } else {
      _inst.push(route);
    }
  },
  goBack: function goBack(number) {
    this.original().goBack(number);
  },
  goToLogin: function goToLogin(rememberLocation) {
    var url = app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].routes.login;

    if (rememberLocation) {
      var redirectUrl = _inst.createHref(_inst.location);

      redirectUrl = this.ensureSafeRoute(redirectUrl);
      redirectUrl = this.ensureBaseUrl(redirectUrl);
      url = "".concat(url, "?redirect_uri=").concat(redirectUrl);
    }

    this._pageRefresh(url);
  },
  getRedirectParam: function getRedirectParam() {
    var loc = this.original().location;

    if (loc.query && loc.query.redirect_uri) {
      return loc.query.redirect_uri;
    }

    return '';
  },
  ensureSafeRoute: function ensureSafeRoute(url) {
    url = this._canPush(url) ? url : app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].routes.app;
    return url;
  },
  ensureBaseUrl: function ensureBaseUrl(url) {
    url = url || '';

    if (url.indexOf(app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].baseUrl) !== 0) {
      url = app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].baseUrl + url;
    }

    return url;
  },
  getRoutes: function getRoutes() {
    return Object.getOwnPropertyNames(app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].routes).map(function (p) {
      return app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].routes[p];
    });
  },
  _canPush: function _canPush(route) {
    route = route || '';
    var routes = this.getRoutes();

    if (route.indexOf(app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].baseUrl) === 0) {
      route = route.replace(app_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].baseUrl, '');
    }

    return routes.some(match(route));
  },
  _pageRefresh: function _pageRefresh(route) {
    window.location.href = this.ensureBaseUrl(route);
  }
};

var match = function match(url) {
  return function (route) {
    return Object(react_router__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(url, {
      path: route,
      exact: true
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (history);

/***/ }),

/***/ "zMbK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECEIVE_ACTIVE_SESSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RECEIVE_SITE_EVENTS; });
/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var RECEIVE_ACTIVE_SESSIONS = 'TLPT_SESSIONS_RECEIVE_ACTIVE';
var RECEIVE_SITE_EVENTS = 'TLPT_SESSIONS_RECEIVE_EVENTS';

/***/ })

/******/ });