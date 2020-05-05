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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/fonts/lato/lato.scss":
/*!*****************************************!*\
  !*** ./src/assets/fonts/lato/lato.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/fonts/montserrat/stylesheet.scss":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/montserrat/stylesheet.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/componentns/Layouts/Btn/Btn.js":
/*!********************************************!*\
  !*** ./src/componentns/Layouts/Btn/Btn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Btn_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Btn.module.scss */ "./src/componentns/Layouts/Btn/Btn.module.scss");
/* harmony import */ var _Btn_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Btn_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Layouts/Btn/Btn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  styleBtn,
  className,
  onClick
}) => {
  const attribute = {
    className: _Btn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[styleBtn] + (className ? ' ' + className : '')
  };
  if (onClick) attribute.onClick = onClick;
  return __jsx("div", _extends({}, attribute, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), title);
});

/***/ }),

/***/ "./src/componentns/Layouts/Btn/Btn.module.scss":
/*!*****************************************************!*\
  !*** ./src/componentns/Layouts/Btn/Btn.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"redLarge": "Btn_redLarge__2Ne2t",
	"red": "Btn_red__1pZQN",
	"black": "Btn_black__1Uku5",
	"blackTransparent": "Btn_blackTransparent__1TgDK",
	"green": "Btn_green__2a6JY"
};

/***/ }),

/***/ "./src/componentns/Root.js":
/*!*********************************!*\
  !*** ./src/componentns/Root.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_window_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/window/actions */ "./src/store/window/actions.js");
var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/Root.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Root = ({
  children,
  changeWindowSize,
  size
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    changeWindowSize();
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);

      if (size.windowInnerWidth !== window.innerWidth) {
        changeWindowSize();
      }
    });
  }, []);
  return __jsx("div", {
    id: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, children);
};

const mapStateToProps = state => {
  return {
    size: state.window.size
  };
};

const mapDispatchToProps = dispatch => ({
  changeWindowSize: () => dispatch(Object(_store_window_actions__WEBPACK_IMPORTED_MODULE_3__["changeWindowSize"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Root));

/***/ }),

/***/ "./src/componentns/TopSidebar/Logo/Logo.js":
/*!*************************************************!*\
  !*** ./src/componentns/TopSidebar/Logo/Logo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/TopSidebar/Logo/Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  isSmallLogo
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, !isSmallLogo ? __jsx("svg", {
  width: "307",
  height: "38",
  viewBox: "0 0 307 38",
  fill: "none",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M1.65 26.67V16.92C1.65 14.58 2.46 13.41 4.08 13.41H9.09C11.13 13.41 12.15 14.1 12.15 15.48C12.15 16.86 11.13 17.55 9.09 17.55H6.48V26.67C6.48 29.03 5.68 30.21 4.08 30.21C2.46 30.21 1.65 29.03 1.65 26.67ZM17.4942 26.4H22.6842V17.28H19.0842C18.3442 17.28 17.9742 17.65 17.9742 18.39V24.45C17.9742 25.07 17.8142 25.72 17.4942 26.4ZM25.7142 30H14.6742C14.6742 31.4 14.6542 32.21 14.6142 32.43C14.4342 33.39 13.9142 33.87 13.0542 33.87C11.5542 33.87 10.8042 33.08 10.8042 31.5V28.41C10.8042 27.39 11.0442 26.77 11.5242 26.55C11.9442 26.45 12.3742 26.36 12.8142 26.28C13.2942 26.06 13.5342 25.45 13.5342 24.45V18.33C13.5342 16.53 14.0142 15.24 14.9742 14.46C15.8542 13.76 17.2142 13.41 19.0542 13.41H25.0842C26.0642 13.41 26.7342 13.75 27.0942 14.43C27.3542 14.91 27.4842 15.67 27.4842 16.71V26.4C28.8842 26.4 29.5842 27.09 29.5842 28.47V31.5C29.5842 33.08 28.8342 33.87 27.3342 33.87C26.4942 33.87 25.9842 33.38 25.8042 32.4C25.7442 32.14 25.7142 31.34 25.7142 30ZM35.5256 23.16C35.6256 24.1 36.0156 24.82 36.6956 25.32C37.3756 25.82 38.2056 26.07 39.1856 26.07C40.0056 26.07 40.9956 25.81 42.1556 25.29C43.3156 24.75 44.0356 24.48 44.3156 24.48C45.5956 24.48 46.2356 25.11 46.2356 26.37C46.2356 26.85 46.0556 27.33 45.6956 27.81C45.0556 28.69 44.0356 29.36 42.6356 29.82C41.4556 30.22 40.2256 30.42 38.9456 30.42C36.5456 30.42 34.5456 29.6 32.9456 27.96C31.3456 26.3 30.5456 24.26 30.5456 21.84C30.5456 19.44 31.3056 17.39 32.8256 15.69C34.3656 13.99 36.3256 13.14 38.7056 13.14C39.8856 13.14 40.9556 13.36 41.9156 13.8C43.2956 14.44 44.4256 15.39 45.3056 16.65C46.1856 17.91 46.6256 19.28 46.6256 20.76C46.6256 21.56 46.3356 22.17 45.7556 22.59C45.2556 22.97 44.5956 23.16 43.7756 23.16H35.5256ZM35.4656 19.98H41.8556C41.7956 19.14 41.4656 18.45 40.8656 17.91C40.2856 17.37 39.5756 17.1 38.7356 17.1C37.8756 17.1 37.1556 17.37 36.5756 17.91C35.9956 18.43 35.6256 19.12 35.4656 19.98ZM69.0933 17.55H65.4933C64.7533 17.55 64.3833 17.92 64.3833 18.66V26.34C64.3833 27.56 64.0433 28.51 63.3633 29.19C62.6833 29.87 61.7333 30.21 60.5133 30.21C59.4333 30.21 58.6933 30.14 58.2933 30C57.5533 29.72 57.1833 29.15 57.1833 28.29C57.1833 27.45 57.4533 26.9 57.9933 26.64C58.3733 26.44 59.0233 26.34 59.9433 26.34V18.69C59.9433 16.71 60.3833 15.33 61.2633 14.55C62.0833 13.79 63.4933 13.41 65.4933 13.41H71.4933C72.4733 13.41 73.1433 13.75 73.5033 14.43C73.7633 14.91 73.8933 15.67 73.8933 16.71V26.67C73.8933 29.03 73.0933 30.21 71.4933 30.21C70.5333 30.21 69.8633 29.84 69.4833 29.1C69.2233 28.56 69.0933 27.75 69.0933 26.67V17.55ZM77.9559 13.41C78.6559 13.41 79.1959 13.64 79.5759 14.1C79.8359 14.4 80.1159 14.95 80.4159 15.75L83.1759 23.07L86.1459 15.33C86.6459 14.05 87.3559 13.41 88.2759 13.41C89.8759 13.41 90.6759 14.18 90.6759 15.72C90.6759 16.22 90.5459 16.78 90.2859 17.4L82.8759 34.95C82.3159 36.27 81.6059 36.93 80.7459 36.93C80.0259 36.93 79.4459 36.72 79.0059 36.3C78.5659 35.88 78.3459 35.31 78.3459 34.59C78.3459 34.11 78.4859 33.56 78.7659 32.94L80.7459 28.59L75.8559 17.16C75.6759 16.74 75.5859 16.29 75.5859 15.81C75.5859 15.13 75.8059 14.56 76.2459 14.1C76.7059 13.64 77.2759 13.41 77.9559 13.41ZM98.2102 20.22H100.1V16.53C100.1 14.45 100.9 13.41 102.5 13.41C104.1 13.41 104.9 14.45 104.9 16.53V27.09C104.9 29.19 104.1 30.24 102.5 30.24C101.68 30.24 101.06 29.91 100.64 29.25C100.28 28.69 100.1 27.97 100.1 27.09V23.61C98.0802 23.61 96.8002 23.58 96.2602 23.52C94.6402 23.38 93.4402 23 92.6602 22.38C91.7202 21.64 91.2502 20.39 91.2502 18.63V16.53C91.2502 14.45 92.0502 13.41 93.6502 13.41C95.2502 13.41 96.0502 14.45 96.0502 16.53V18.63C96.0502 19.31 96.2502 19.76 96.6502 19.98C96.9502 20.14 97.4702 20.22 98.2102 20.22ZM113.152 26.58H117.862V16.92C117.862 14.58 118.662 13.41 120.262 13.41C121.862 13.41 122.662 14.58 122.662 16.92V26.58H127.372V16.95C127.372 14.59 128.172 13.41 129.772 13.41C131.372 13.41 132.172 14.59 132.172 16.95V26.58C132.172 28.86 131.182 30 129.202 30H111.322C110.342 30 109.592 29.66 109.072 28.98C108.592 28.38 108.352 27.58 108.352 26.58V16.95C108.352 14.59 109.152 13.41 110.752 13.41C112.352 13.41 113.152 14.59 113.152 16.95V26.58ZM140.291 23.16C140.391 24.1 140.781 24.82 141.461 25.32C142.141 25.82 142.971 26.07 143.951 26.07C144.771 26.07 145.761 25.81 146.921 25.29C148.081 24.75 148.801 24.48 149.081 24.48C150.361 24.48 151.001 25.11 151.001 26.37C151.001 26.85 150.821 27.33 150.461 27.81C149.821 28.69 148.801 29.36 147.401 29.82C146.221 30.22 144.991 30.42 143.711 30.42C141.311 30.42 139.311 29.6 137.711 27.96C136.111 26.3 135.311 24.26 135.311 21.84C135.311 19.44 136.071 17.39 137.591 15.69C139.131 13.99 141.091 13.14 143.471 13.14C144.651 13.14 145.721 13.36 146.681 13.8C148.061 14.44 149.191 15.39 150.071 16.65C150.951 17.91 151.391 19.28 151.391 20.76C151.391 21.56 151.101 22.17 150.521 22.59C150.021 22.97 149.361 23.16 148.541 23.16H140.291ZM140.231 19.98H146.621C146.561 19.14 146.231 18.45 145.631 17.91C145.051 17.37 144.341 17.1 143.501 17.1C142.641 17.1 141.921 17.37 141.341 17.91C140.761 18.43 140.391 19.12 140.231 19.98ZM152.714 27.42C152.714 26.64 152.984 25.98 153.524 25.44C154.064 24.88 154.724 24.6 155.504 24.6C156.304 24.6 156.964 24.87 157.484 25.41C158.024 25.95 158.294 26.62 158.294 27.42C158.294 28.2 158.024 28.86 157.484 29.4C156.944 29.94 156.284 30.21 155.504 30.21C154.724 30.21 154.064 29.94 153.524 29.4C152.984 28.86 152.714 28.2 152.714 27.42ZM152.714 18.09C152.714 17.33 152.984 16.68 153.524 16.14C154.084 15.58 154.744 15.3 155.504 15.3C156.284 15.3 156.944 15.57 157.484 16.11C158.024 16.65 158.294 17.31 158.294 18.09C158.294 18.87 158.024 19.53 157.484 20.07C156.944 20.61 156.284 20.88 155.504 20.88C154.724 20.88 154.064 20.61 153.524 20.07C152.984 19.53 152.714 18.87 152.714 18.09Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M175.728 22.32L181.548 16.92C181.548 15.8 181.668 14.99 181.908 14.49C182.268 13.77 182.948 13.41 183.948 13.41C184.948 13.41 185.628 13.77 185.988 14.49C186.228 14.99 186.348 15.8 186.348 16.92V26.67C186.348 27.79 186.228 28.6 185.988 29.1C185.628 29.84 184.948 30.21 183.948 30.21C182.948 30.21 182.268 29.84 181.908 29.1C181.668 28.6 181.548 27.79 181.548 26.67V21.93L175.728 26.67C175.728 27.77 175.608 28.58 175.368 29.1C175.008 29.84 174.338 30.21 173.358 30.21C171.718 30.21 170.898 29.03 170.898 26.67V16.92C170.898 15.84 171.028 15.04 171.288 14.52C171.668 13.78 172.358 13.41 173.358 13.41C174.338 13.41 175.008 13.77 175.368 14.49C175.608 14.99 175.728 15.8 175.728 16.92V22.32ZM193.892 23.34V26.67C193.892 29.03 193.102 30.21 191.522 30.21C189.882 30.21 189.062 29.03 189.062 26.67V16.92C189.062 14.58 189.882 13.41 191.522 13.41C193.102 13.41 193.892 14.58 193.892 16.92V19.92H199.202V16.92C199.202 14.58 200.002 13.41 201.602 13.41C203.202 13.41 204.002 14.58 204.002 16.92V26.67C204.002 29.03 203.202 30.21 201.602 30.21C200.002 30.21 199.202 29.03 199.202 26.67V23.34H193.892ZM210.406 17.55H208.336C206.316 17.55 205.306 16.86 205.306 15.48C205.306 14.1 206.316 13.41 208.336 13.41H217.276C219.316 13.41 220.336 14.1 220.336 15.48C220.336 16.86 219.316 17.55 217.276 17.55H215.206V26.67C215.206 29.03 214.406 30.21 212.806 30.21C211.206 30.21 210.406 29.03 210.406 26.67V17.55ZM225.838 23.16C225.938 24.1 226.328 24.82 227.008 25.32C227.688 25.82 228.518 26.07 229.498 26.07C230.318 26.07 231.308 25.81 232.468 25.29C233.628 24.75 234.348 24.48 234.628 24.48C235.908 24.48 236.548 25.11 236.548 26.37C236.548 26.85 236.368 27.33 236.008 27.81C235.368 28.69 234.348 29.36 232.948 29.82C231.768 30.22 230.538 30.42 229.258 30.42C226.858 30.42 224.858 29.6 223.258 27.96C221.658 26.3 220.858 24.26 220.858 21.84C220.858 19.44 221.618 17.39 223.138 15.69C224.678 13.99 226.638 13.14 229.018 13.14C230.198 13.14 231.268 13.36 232.228 13.8C233.608 14.44 234.738 15.39 235.618 16.65C236.498 17.91 236.938 19.28 236.938 20.76C236.938 21.56 236.648 22.17 236.068 22.59C235.568 22.97 234.908 23.16 234.088 23.16H225.838ZM225.778 19.98H232.168C232.108 19.14 231.778 18.45 231.178 17.91C230.598 17.37 229.888 17.1 229.048 17.1C228.188 17.1 227.468 17.37 226.888 17.91C226.308 18.43 225.938 19.12 225.778 19.98ZM244.02 29.1H243.9V33.3C243.9 35.62 243.13 36.78 241.59 36.78C239.95 36.78 239.13 35.6 239.13 33.24V16.92C239.13 14.58 239.95 13.41 241.59 13.41C242.55 13.41 243.32 13.92 243.9 14.94C244.88 13.84 246.21 13.29 247.89 13.29C250.13 13.29 251.95 14.17 253.35 15.93C254.63 17.57 255.27 19.53 255.27 21.81C255.27 23.51 254.88 25.07 254.1 26.49C253.3 27.99 252.17 29.1 250.71 29.82C249.79 30.28 248.83 30.51 247.83 30.51C246.37 30.51 245.1 30.04 244.02 29.1ZM243.9 22.11C243.9 23.21 244.15 24.11 244.65 24.81C245.23 25.61 246.05 26.01 247.11 26.01C248.17 26.01 248.99 25.57 249.57 24.69C250.07 23.91 250.32 22.97 250.32 21.87C250.32 20.79 250.06 19.87 249.54 19.11C248.96 18.23 248.15 17.79 247.11 17.79C246.23 17.79 245.47 18.09 244.83 18.69C244.21 19.27 243.9 20.41 243.9 22.11ZM262.505 23.34V26.67C262.505 29.03 261.715 30.21 260.135 30.21C258.495 30.21 257.675 29.03 257.675 26.67V16.92C257.675 14.58 258.495 13.41 260.135 13.41C261.715 13.41 262.505 14.58 262.505 16.92V19.92H267.815V16.92C267.815 14.58 268.615 13.41 270.215 13.41C271.815 13.41 272.615 14.58 272.615 16.92V26.67C272.615 29.03 271.815 30.21 270.215 30.21C268.615 30.21 267.815 29.03 267.815 26.67V23.34H262.505ZM279.949 23.16C280.049 24.1 280.439 24.82 281.119 25.32C281.799 25.82 282.629 26.07 283.609 26.07C284.429 26.07 285.419 25.81 286.579 25.29C287.739 24.75 288.459 24.48 288.739 24.48C290.019 24.48 290.659 25.11 290.659 26.37C290.659 26.85 290.479 27.33 290.119 27.81C289.479 28.69 288.459 29.36 287.059 29.82C285.879 30.22 284.649 30.42 283.369 30.42C280.969 30.42 278.969 29.6 277.369 27.96C275.769 26.3 274.969 24.26 274.969 21.84C274.969 19.44 275.729 17.39 277.249 15.69C278.789 13.99 280.749 13.14 283.129 13.14C284.309 13.14 285.379 13.36 286.339 13.8C287.719 14.44 288.849 15.39 289.729 16.65C290.609 17.91 291.049 19.28 291.049 20.76C291.049 21.56 290.759 22.17 290.179 22.59C289.679 22.97 289.019 23.16 288.199 23.16H279.949ZM279.889 19.98H286.279C286.219 19.14 285.889 18.45 285.289 17.91C284.709 17.37 283.999 17.1 283.159 17.1C282.299 17.1 281.579 17.37 280.999 17.91C280.419 18.43 280.049 19.12 279.889 19.98ZM296.422 17.55H294.352C292.332 17.55 291.322 16.86 291.322 15.48C291.322 14.1 292.332 13.41 294.352 13.41H303.292C305.332 13.41 306.352 14.1 306.352 15.48C306.352 16.86 305.332 17.55 303.292 17.55H301.222V26.67C301.222 29.03 300.422 30.21 298.822 30.21C297.222 30.21 296.422 29.03 296.422 26.67V17.55Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
})) : __jsx("svg", {
  width: "244",
  height: "19",
  viewBox: "0 0 244 19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 18
  }
}, __jsx("path", {
  d: "M0 10.8058V3.01892C0 1.15006 0.651543 0.215637 1.95463 0.215637H5.98454C7.62546 0.215637 8.44592 0.766709 8.44592 1.86885C8.44592 2.971 7.62546 3.52207 5.98454 3.52207H3.88513V10.8058C3.88513 12.6906 3.24163 13.633 1.95463 13.633C0.651543 13.633 0 12.6906 0 10.8058Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M12.7447 10.5902H16.9194V3.30643H14.0236C13.4284 3.30643 13.1308 3.60193 13.1308 4.19294V9.03279C13.1308 9.52795 13.0021 10.0471 12.7447 10.5902ZM19.3566 13.4653H10.4763C10.4763 14.5834 10.4603 15.2304 10.4281 15.4061C10.2833 16.1728 9.86502 16.5561 9.17325 16.5561C7.96669 16.5561 7.36341 15.9252 7.36341 14.6633V12.1955C7.36341 11.3808 7.55646 10.8857 7.94256 10.71C8.2804 10.6301 8.62628 10.5582 8.9802 10.4943C9.3663 10.3186 9.55935 9.83144 9.55935 9.03279V4.14502C9.55935 2.70744 9.94545 1.67718 10.7177 1.05423C11.4255 0.495167 12.5195 0.215637 13.9995 0.215637H18.8499C19.6382 0.215637 20.1771 0.48718 20.4667 1.03026C20.6758 1.41362 20.7804 2.0206 20.7804 2.8512V10.5902C21.9065 10.5902 22.4696 11.1412 22.4696 12.2434V14.6633C22.4696 15.9252 21.8663 16.5561 20.6597 16.5561C19.984 16.5561 19.5738 16.1648 19.429 15.3821C19.3808 15.1744 19.3566 14.5355 19.3566 13.4653Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M27.2487 8.00252C27.3291 8.75326 27.6428 9.32829 28.1898 9.72762C28.7368 10.1269 29.4044 10.3266 30.1927 10.3266C30.8523 10.3266 31.6486 10.119 32.5817 9.70366C33.5147 9.27238 34.0939 9.05675 34.3191 9.05675C35.3487 9.05675 35.8635 9.5599 35.8635 10.5662C35.8635 10.9496 35.7187 11.3329 35.4291 11.7163C34.9143 12.4191 34.0939 12.9542 32.9678 13.3216C32.0186 13.641 31.0292 13.8008 29.9996 13.8008C28.0691 13.8008 26.4604 13.1459 25.1734 11.8361C23.8864 10.5103 23.2429 8.88104 23.2429 6.9483C23.2429 5.03153 23.8542 3.39428 25.0769 2.03657C26.3156 0.678857 27.8922 0 29.8066 0C30.7557 0 31.6164 0.175704 32.3886 0.527113C33.4986 1.03825 34.4076 1.79697 35.1154 2.80328C35.8233 3.80958 36.1772 4.90374 36.1772 6.08575C36.1772 6.72467 35.9439 7.21185 35.4774 7.54729C35.0752 7.85078 34.5443 8.00252 33.8847 8.00252H27.2487ZM27.2004 5.4628H32.3404C32.2921 4.79193 32.0266 4.24086 31.544 3.80958C31.0775 3.37831 30.5064 3.16267 29.8307 3.16267C29.1389 3.16267 28.5598 3.37831 28.0933 3.80958C27.6267 4.22488 27.3291 4.77596 27.2004 5.4628Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M54.2496 3.52207H51.3539C50.7586 3.52207 50.461 3.81757 50.461 4.40858V10.5422C50.461 11.5166 50.1875 12.2753 49.6405 12.8184C49.0936 13.3615 48.3294 13.633 47.3481 13.633C46.4794 13.633 45.8841 13.5771 45.5624 13.4653C44.9671 13.2417 44.6695 12.7865 44.6695 12.0996C44.6695 11.4288 44.8867 10.9895 45.3211 10.7818C45.6267 10.6221 46.1496 10.5422 46.8896 10.5422V4.43254C46.8896 2.8512 47.2435 1.74905 47.9514 1.1261C48.6109 0.519126 49.7451 0.215637 51.3539 0.215637H56.1801C56.9684 0.215637 57.5073 0.48718 57.7969 1.03026C58.006 1.41362 58.1106 2.0206 58.1106 2.8512V10.8058C58.1106 12.6906 57.4671 13.633 56.1801 13.633C55.4079 13.633 54.869 13.3375 54.5633 12.7465C54.3542 12.3153 54.2496 11.6683 54.2496 10.8058V3.52207Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M61.3785 0.215637C61.9416 0.215637 62.3759 0.399328 62.6816 0.766709C62.8907 1.00631 63.1159 1.44557 63.3573 2.08449L65.5773 7.93064L67.9663 1.74905C68.3685 0.726776 68.9396 0.215637 69.6796 0.215637C70.9666 0.215637 71.6101 0.830602 71.6101 2.06053C71.6101 2.45986 71.5056 2.9071 71.2964 3.40227L65.336 17.4187C64.8856 18.4729 64.3145 19 63.6227 19C63.0435 19 62.577 18.8323 62.2231 18.4968C61.8692 18.1614 61.6922 17.7062 61.6922 17.1311C61.6922 16.7478 61.8048 16.3085 62.03 15.8134L63.6227 12.3392L59.6893 3.21059C59.5445 2.87516 59.4721 2.51576 59.4721 2.13241C59.4721 1.58932 59.6491 1.13409 60.003 0.766709C60.373 0.399328 60.8315 0.215637 61.3785 0.215637Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M77.6705 5.65448H79.1907V2.70744C79.1907 1.04624 79.8342 0.215637 81.1212 0.215637C82.4082 0.215637 83.0517 1.04624 83.0517 2.70744V11.1412C83.0517 12.8184 82.4082 13.657 81.1212 13.657C80.4616 13.657 79.9629 13.3934 79.6251 12.8663C79.3355 12.4191 79.1907 11.8441 79.1907 11.1412V8.36192C77.5659 8.36192 76.5363 8.33796 76.1019 8.29004C74.7988 8.17823 73.8336 7.87474 73.2062 7.37957C72.4501 6.78857 72.072 5.79025 72.072 4.38462V2.70744C72.072 1.04624 72.7155 0.215637 74.0025 0.215637C75.2895 0.215637 75.933 1.04624 75.933 2.70744V4.38462C75.933 4.9277 76.0939 5.2871 76.4156 5.4628C76.6569 5.59059 77.0752 5.65448 77.6705 5.65448Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M89.6893 10.7339H93.4779V3.01892C93.4779 1.15006 94.1214 0.215637 95.4084 0.215637C96.6954 0.215637 97.3389 1.15006 97.3389 3.01892V10.7339H101.128V3.04288C101.128 1.15805 101.771 0.215637 103.058 0.215637C104.345 0.215637 104.989 1.15805 104.989 3.04288V10.7339C104.989 12.5549 104.192 13.4653 102.6 13.4653H88.2173C87.429 13.4653 86.8257 13.1938 86.4075 12.6507C86.0214 12.1715 85.8283 11.5326 85.8283 10.7339V3.04288C85.8283 1.15805 86.4718 0.215637 87.7588 0.215637C89.0458 0.215637 89.6893 1.15805 89.6893 3.04288V10.7339Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M111.519 8.00252C111.6 8.75326 111.914 9.32829 112.461 9.72762C113.007 10.1269 113.675 10.3266 114.463 10.3266C115.123 10.3266 115.919 10.119 116.852 9.70366C117.785 9.27238 118.365 9.05675 118.59 9.05675C119.619 9.05675 120.134 9.5599 120.134 10.5662C120.134 10.9496 119.989 11.3329 119.7 11.7163C119.185 12.4191 118.365 12.9542 117.238 13.3216C116.289 13.641 115.3 13.8008 114.27 13.8008C112.34 13.8008 110.731 13.1459 109.444 11.8361C108.157 10.5103 107.514 8.88104 107.514 6.9483C107.514 5.03153 108.125 3.39428 109.348 2.03657C110.586 0.678857 112.163 0 114.077 0C115.026 0 115.887 0.175704 116.659 0.527113C117.769 1.03825 118.678 1.79697 119.386 2.80328C120.094 3.80958 120.448 4.90374 120.448 6.08575C120.448 6.72467 120.215 7.21185 119.748 7.54729C119.346 7.85078 118.815 8.00252 118.155 8.00252H111.519ZM111.471 5.4628H116.611C116.563 4.79193 116.297 4.24086 115.815 3.80958C115.348 3.37831 114.777 3.16267 114.101 3.16267C113.41 3.16267 112.831 3.37831 112.364 3.80958C111.897 4.22488 111.6 4.77596 111.471 5.4628Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M121.512 11.4048C121.512 10.7818 121.729 10.2547 122.163 9.82346C122.598 9.37621 123.128 9.15259 123.756 9.15259C124.399 9.15259 124.93 9.36822 125.348 9.7995C125.783 10.2308 126 10.7659 126 11.4048C126 12.0277 125.783 12.5549 125.348 12.9861C124.914 13.4174 124.383 13.633 123.756 13.633C123.128 13.633 122.598 13.4174 122.163 12.9861C121.729 12.5549 121.512 12.0277 121.512 11.4048ZM121.512 3.95334C121.512 3.34636 121.729 2.82724 122.163 2.39597C122.614 1.94872 123.144 1.7251 123.756 1.7251C124.383 1.7251 124.914 1.94073 125.348 2.37201C125.783 2.80328 126 3.33039 126 3.95334C126 4.57629 125.783 5.10341 125.348 5.53468C124.914 5.96595 124.383 6.18159 123.756 6.18159C123.128 6.18159 122.598 5.96595 122.163 5.53468C121.729 5.10341 121.512 4.57629 121.512 3.95334Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M139.851 7.37817L144.491 3.03807C144.491 2.1379 144.587 1.48689 144.778 1.08503C145.066 0.506346 145.608 0.217005 146.405 0.217005C147.202 0.217005 147.745 0.506346 148.032 1.08503C148.223 1.48689 148.319 2.1379 148.319 3.03807V10.8744C148.319 11.7745 148.223 12.4256 148.032 12.8274C147.745 13.4222 147.202 13.7195 146.405 13.7195C145.608 13.7195 145.066 13.4222 144.778 12.8274C144.587 12.4256 144.491 11.7745 144.491 10.8744V7.06472L139.851 10.8744C139.851 11.7585 139.755 12.4095 139.564 12.8274C139.277 13.4222 138.743 13.7195 137.961 13.7195C136.654 13.7195 136 12.7712 136 10.8744V3.03807C136 2.17005 136.104 1.52707 136.311 1.10914C136.614 0.514383 137.164 0.217005 137.961 0.217005C138.743 0.217005 139.277 0.506346 139.564 1.08503C139.755 1.48689 139.851 2.1379 139.851 3.03807V7.37817Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M154.334 8.19797V10.8744C154.334 12.7712 153.704 13.7195 152.444 13.7195C151.136 13.7195 150.483 12.7712 150.483 10.8744V3.03807C150.483 1.15736 151.136 0.217005 152.444 0.217005C153.704 0.217005 154.334 1.15736 154.334 3.03807V5.44924H158.567V3.03807C158.567 1.15736 159.205 0.217005 160.481 0.217005C161.757 0.217005 162.395 1.15736 162.395 3.03807V10.8744C162.395 12.7712 161.757 13.7195 160.481 13.7195C159.205 13.7195 158.567 12.7712 158.567 10.8744V8.19797H154.334Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M167.501 3.54442H165.85C164.24 3.54442 163.434 2.98985 163.434 1.88071C163.434 0.771574 164.24 0.217005 165.85 0.217005H172.978C174.605 0.217005 175.418 0.771574 175.418 1.88071C175.418 2.98985 174.605 3.54442 172.978 3.54442H171.328V10.8744C171.328 12.7712 170.69 13.7195 169.414 13.7195C168.138 13.7195 167.501 12.7712 167.501 10.8744V3.54442Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M179.805 8.0533C179.885 8.8088 180.196 9.38748 180.738 9.78934C181.28 10.1912 181.942 10.3921 182.723 10.3921C183.377 10.3921 184.166 10.1832 185.091 9.76523C186.016 9.33122 186.59 9.11421 186.813 9.11421C187.834 9.11421 188.344 9.62056 188.344 10.6333C188.344 11.019 188.201 11.4048 187.914 11.7906C187.403 12.4979 186.59 13.0364 185.474 13.4061C184.533 13.7276 183.552 13.8883 182.532 13.8883C180.618 13.8883 179.023 13.2293 177.748 11.9112C176.472 10.577 175.834 8.9374 175.834 6.99239C175.834 5.06345 176.44 3.41582 177.652 2.04949C178.88 0.683165 180.443 0 182.34 0C183.281 0 184.134 0.176819 184.9 0.530457C186 1.04484 186.901 1.80838 187.603 2.82107C188.304 3.83376 188.655 4.93486 188.655 6.12437C188.655 6.76734 188.424 7.25761 187.961 7.59518C187.563 7.90059 187.037 8.0533 186.383 8.0533H179.805ZM179.757 5.49746H184.852C184.804 4.82234 184.541 4.26777 184.063 3.83376C183.6 3.39975 183.034 3.18274 182.364 3.18274C181.679 3.18274 181.104 3.39975 180.642 3.83376C180.18 4.25169 179.885 4.80626 179.757 5.49746Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M194.302 12.8274H194.206V16.203C194.206 18.0677 193.592 19 192.364 19C191.057 19 190.403 18.0516 190.403 16.1548V3.03807C190.403 1.15736 191.057 0.217005 192.364 0.217005C193.13 0.217005 193.744 0.626904 194.206 1.4467C194.988 0.562606 196.048 0.120558 197.388 0.120558C199.174 0.120558 200.625 0.827835 201.741 2.24239C202.762 3.56049 203.272 5.13579 203.272 6.96828C203.272 8.3346 202.961 9.58841 202.339 10.7297C201.701 11.9353 200.8 12.8274 199.636 13.4061C198.903 13.7758 198.137 13.9607 197.34 13.9607C196.176 13.9607 195.163 13.5829 194.302 12.8274ZM194.206 7.20939C194.206 8.09349 194.406 8.81684 194.804 9.37944C195.267 10.0224 195.921 10.3439 196.766 10.3439C197.611 10.3439 198.265 9.99027 198.727 9.283C199.126 8.65609 199.325 7.90059 199.325 7.0165C199.325 6.14848 199.118 5.40905 198.703 4.79822C198.241 4.09095 197.595 3.73731 196.766 3.73731C196.064 3.73731 195.458 3.97843 194.948 4.46066C194.453 4.92682 194.206 5.84306 194.206 7.20939Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M209.04 8.19797V10.8744C209.04 12.7712 208.41 13.7195 207.151 13.7195C205.843 13.7195 205.189 12.7712 205.189 10.8744V3.03807C205.189 1.15736 205.843 0.217005 207.151 0.217005C208.41 0.217005 209.04 1.15736 209.04 3.03807V5.44924H213.274V3.03807C213.274 1.15736 213.912 0.217005 215.188 0.217005C216.463 0.217005 217.101 1.15736 217.101 3.03807V10.8744C217.101 12.7712 216.463 13.7195 215.188 13.7195C213.912 13.7195 213.274 12.7712 213.274 10.8744V8.19797H209.04Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M222.949 8.0533C223.029 8.8088 223.34 9.38748 223.882 9.78934C224.424 10.1912 225.086 10.3921 225.867 10.3921C226.521 10.3921 227.31 10.1832 228.235 9.76523C229.16 9.33122 229.734 9.11421 229.957 9.11421C230.978 9.11421 231.488 9.62056 231.488 10.6333C231.488 11.019 231.345 11.4048 231.058 11.7906C230.547 12.4979 229.734 13.0364 228.618 13.4061C227.677 13.7276 226.696 13.8883 225.676 13.8883C223.762 13.8883 222.168 13.2293 220.892 11.9112C219.616 10.577 218.978 8.9374 218.978 6.99239C218.978 5.06345 219.584 3.41582 220.796 2.04949C222.024 0.683165 223.587 0 225.484 0C226.425 0 227.278 0.176819 228.044 0.530457C229.144 1.04484 230.045 1.80838 230.747 2.82107C231.448 3.83376 231.799 4.93486 231.799 6.12437C231.799 6.76734 231.568 7.25761 231.105 7.59518C230.707 7.90059 230.181 8.0533 229.527 8.0533H222.949ZM222.901 5.49746H227.996C227.948 4.82234 227.685 4.26777 227.207 3.83376C226.744 3.39975 226.178 3.18274 225.508 3.18274C224.823 3.18274 224.249 3.39975 223.786 3.83376C223.324 4.25169 223.029 4.80626 222.901 5.49746Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M236.083 3.54442H234.432C232.822 3.54442 232.016 2.98985 232.016 1.88071C232.016 0.771574 232.822 0.217005 234.432 0.217005H241.56C243.187 0.217005 244 0.771574 244 1.88071C244 2.98985 243.187 3.54442 241.56 3.54442H239.91V10.8744C239.91 12.7712 239.272 13.7195 237.996 13.7195C236.72 13.7195 236.083 12.7712 236.083 10.8744V3.54442Z",
  fill: "#F3473C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 11
  }
})))));

/***/ }),

/***/ "./src/componentns/TopSidebar/TopSidebar.js":
/*!**************************************************!*\
  !*** ./src/componentns/TopSidebar/TopSidebar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopSidebar.module.scss */ "./src/componentns/TopSidebar/TopSidebar.module.scss");
/* harmony import */ var _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layouts_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layouts/Btn/Btn */ "./src/componentns/Layouts/Btn/Btn.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo/Logo */ "./src/componentns/TopSidebar/Logo/Logo.js");
var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/componentns/TopSidebar/TopSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TopSidebar = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.topSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: props.mobileMenuStatus ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider',
    type: "button" //onClick={ toggleMobileMenu }
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hamburger-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "hamburger-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 43
    }
  }))), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isSmallLogo: props.windowInnerWidth <= 700,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pickRegion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u043E\u043D"), __jsx("svg", {
    width: "25",
    height: "32",
    viewBox: "0 0 25 32",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 31.0105L13.4135 30.2129C21.0954 23.5052 25 17.6483 25 12.5C25 5.20926 19.3096 0 12.5 0C5.69035 0 0 5.20926 0 12.5C0 17.6483 3.90459 23.5052 11.5865 30.2129L12.5 31.0105ZM12.5 27.3102C5.98139 21.4354 2.77776 16.4572 2.77776 12.4999C2.77776 6.80074 7.17237 2.77768 12.5 2.77768C17.8276 2.77768 22.2222 6.80074 22.2222 12.4999C22.2222 16.4572 19.0186 21.4354 12.5 27.3102ZM12.5 5.55555C16.3353 5.55555 19.4445 8.66468 19.4445 12.5C19.4445 16.3353 16.3353 19.4444 12.5 19.4444C8.66471 19.4444 5.55557 16.3353 5.55557 12.5C5.55557 8.66468 8.66471 5.55555 12.5 5.55555ZM8.33333 12.5C8.33333 10.1988 10.1988 8.33333 12.5 8.33333C14.8012 8.33333 16.6667 10.1988 16.6667 12.5C16.6667 14.8012 14.8012 16.6667 12.5 16.6667C10.1988 16.6667 8.33333 14.8012 8.33333 12.5Z",
    fill: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })))), props.windowInnerWidth <= 700 ? __jsx("div", {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileSideBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "20",
    height: "14",
    viewBox: "0 0 20 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z",
    fill: "#E8E8E8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), __jsx(_Layouts_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _TopSidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileBtn,
    styleBtn: 'red',
    title: 'Заказать консультацию',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("svg", {
    width: "17",
    height: "20",
    viewBox: "0 0 17 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.06178 20L8.65094 19.4856C13.6053 15.1595 16.1236 11.3821 16.1236 8.06178C16.1236 3.35967 12.4536 0 8.06178 0C3.66995 0 0 3.35967 0 8.06178C0 11.3821 2.51824 15.1595 7.47262 19.4856L8.06178 20ZM8.06178 17.6136C3.85766 13.8247 1.79151 10.614 1.79151 8.06179C1.79151 4.38616 4.62577 1.79152 8.06178 1.79152C11.4978 1.79152 14.3321 4.38616 14.3321 8.06179C14.3321 10.614 12.2659 13.8247 8.06178 17.6136ZM8.06178 3.58304C10.5353 3.58304 12.5405 5.58825 12.5405 8.06181C12.5405 10.5354 10.5353 12.5406 8.06178 12.5406C5.58823 12.5406 3.58301 10.5354 3.58301 8.06181C3.58301 5.58825 5.58823 3.58304 8.06178 3.58304ZM5.37452 8.06178C5.37452 6.57765 6.57765 5.37452 8.06178 5.37452C9.54591 5.37452 10.749 6.57765 10.749 8.06178C10.749 9.54591 9.54591 10.749 8.06178 10.749C6.57765 10.749 5.37452 9.54591 5.37452 8.06178Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))) : null);
};

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(TopSidebar));

/***/ }),

/***/ "./src/componentns/TopSidebar/TopSidebar.module.scss":
/*!***********************************************************!*\
  !*** ./src/componentns/TopSidebar/TopSidebar.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"topSidebar": "TopSidebar_topSidebar__2rGnQ",
	"pickRegion": "TopSidebar_pickRegion__2fGmp",
	"mobileSideBar": "TopSidebar_mobileSideBar__1jGkT",
	"mobileBtn": "TopSidebar_mobileBtn__xso4m"
};

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentns_Root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentns/Root */ "./src/componentns/Root.js");
/* harmony import */ var _utils_with_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/with-redux-store */ "./src/utils/with-redux-store.js");
/* harmony import */ var _componentns_TopSidebar_TopSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentns/TopSidebar/TopSidebar */ "./src/componentns/TopSidebar/TopSidebar.js");
/* harmony import */ var _assets_fonts_lato_lato_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/fonts/lato/lato.scss */ "./src/assets/fonts/lato/lato.scss");
/* harmony import */ var _assets_fonts_lato_lato_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_lato_lato_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_fonts_montserrat_stylesheet_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/fonts/montserrat/stylesheet.scss */ "./src/assets/fonts/montserrat/stylesheet.scss");
/* harmony import */ var _assets_fonts_montserrat_stylesheet_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_montserrat_stylesheet_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/hamburger.scss */ "./src/styles/hamburger.scss");
/* harmony import */ var _styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










 // import 'typeface-montserrat'



class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(_componentns_Root__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    })), __jsx(_componentns_TopSidebar_TopSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_with_redux_store__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ "./src/store/home/faq/actions.js":
/*!***************************************!*\
  !*** ./src/store/home/faq/actions.js ***!
  \***************************************/
/*! exports provided: CHANGE_HOME_FAQ_DROPDOWN, CHANGE_FAQ_LIST_MOBILE, changeHomeFaqDropDown, showMoreQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_HOME_FAQ_DROPDOWN", function() { return CHANGE_HOME_FAQ_DROPDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_FAQ_LIST_MOBILE", function() { return CHANGE_FAQ_LIST_MOBILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHomeFaqDropDown", function() { return changeHomeFaqDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoreQuestion", function() { return showMoreQuestion; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

const CHANGE_HOME_FAQ_DROPDOWN = 'CHANGE_HOME_FAQ_DROPDOWN';
const CHANGE_FAQ_LIST_MOBILE = 'CHANGE_FAQ_LIST_MOBILE';
const changeHomeFaqDropDown = arr => ({
  type: CHANGE_HOME_FAQ_DROPDOWN,
  arr
});
const showMoreQuestion = () => (dispatch, getState) => {
  const faq = getState().home.faq;
  const showItems = faq.showMobileItems;
  const faqList = faq.faqList.slice();
  let faqListMobile = faq.faqListMobile.slice();
  console.log(faqList.slice(faqListMobile.length, faqListMobile.length + showItems));
  faqListMobile = [].concat(_toConsumableArray(faqListMobile), _toConsumableArray(faqList.slice(faqListMobile.length, faqListMobile.length + showItems)));
  dispatch({
    type: CHANGE_FAQ_LIST_MOBILE,
    faqListMobile
  });
};

/***/ }),

/***/ "./src/store/home/faq/reducer.js":
/*!***************************************!*\
  !*** ./src/store/home/faq/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/store/home/faq/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const faqList = [{
  title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.',
  isActive: true
}, {
  title: 'Что делать если пропал интернет?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет и роутер уже много раз перезагружал?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}, {
  title: 'Что делать если пропал интернет?',
  description: 'Первым делом. находим наш пароль от сети вайфай. Поднимаем наши документы на предоставление провайдером услуг интернета. Для чего? скажете вы, ведь нам нужно проверить драйвера на работоспособность.'
}];
const defaultValue = {
  faqList,
  faqListMobile: faqList.slice(0, 4),
  showMobileItems: 4
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(defaultValue, {
  [_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_HOME_FAQ_DROPDOWN"]]: (state, {
    arr
  }) => _objectSpread({}, state, {
    faqList: arr
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_FAQ_LIST_MOBILE"]]: (state, {
    faqListMobile
  }) => _objectSpread({}, state, {
    faqListMobile
  })
}));

/***/ }),

/***/ "./src/store/home/reducer.js":
/*!***********************************!*\
  !*** ./src/store/home/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _faq_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq/reducer */ "./src/store/home/faq/reducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);



const defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  faq: _faq_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");




const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];

if (true) {
  middleware.push(Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
    collapsed: true
  }));
}

const initializeStore = preloadedState => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware));

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/reducer */ "./src/store/home/reducer.js");
/* harmony import */ var _window_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/reducer */ "./src/store/window/reducer.js");



const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  home: _home_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  window: _window_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (combinedReducer);

/***/ }),

/***/ "./src/store/window/actions.js":
/*!*************************************!*\
  !*** ./src/store/window/actions.js ***!
  \*************************************/
/*! exports provided: CHANGE_WINDOW_SIZE, changeWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WINDOW_SIZE", function() { return CHANGE_WINDOW_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeWindowSize", function() { return changeWindowSize; });
const CHANGE_WINDOW_SIZE = 'CHANGE_WINDOW_SIZE';
const changeWindowSize = () => {
  return {
    type: CHANGE_WINDOW_SIZE,
    size: {
      windowInnerHeight: window.innerHeight,
      windowInnerWidth: window.innerWidth
    }
  };
};

/***/ }),

/***/ "./src/store/window/reducer.js":
/*!*************************************!*\
  !*** ./src/store/window/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/store/window/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultProps = {
  size: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(defaultProps, {
  [_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_WINDOW_SIZE"]]: (state, {
    size
  }) => _objectSpread({}, state, {
    size
  })
}));

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/hamburger.scss":
/*!***********************************!*\
  !*** ./src/styles/hamburger.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/*! exports provided: createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else return state;
  };
};

/***/ }),

/***/ "./src/utils/with-redux-store.js":
/*!***************************************!*\
  !*** ./src/utils/with-redux-store.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
var _jsxFileName = "/Users/petrpozoga/WIB/where-better/src/utils/with-redux-store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.store = store;
      return _objectSpread({}, App.getInitialProps ? await App.getInitialProps(appContext) : {}, {
        initialReduxState: store.getState()
      });
    }

    render() {
      const {
        initialReduxState
      } = this.props;
      return __jsx(App, _extends({}, this.props, {
        store: getOrCreateStore(initialReduxState),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 14
        }
      }));
    }

  };
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map