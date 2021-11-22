module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Yq+":
/***/ (function(module, exports) {

module.exports = require("sitemap");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pQJ8");


/***/ }),

/***/ "Ochb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNuggets", function() { return getNuggets; });
/**
 * Serverless funciton for /api/nuggets.
 * Fetches nuggets from DEV.to with given params.
 */
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      page,
      per_page,
      tag
    } = req.query;
    const nuggets = await getNuggets({
      page: String(page),
      per_page: String(per_page),
      tag: String(tag)
    });
    res.status(200).json(nuggets);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
});
/**
 * Props for {@link getNuggets}.
 */

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetNuggetsProps}.
 */
async function getNuggets({
  page = '1',
  per_page = process.env.NUGGETS_PER_PAGE,
  tag = ''
} = {}) {
  console.log('Getting nuggets: ', page, per_page, tag);
  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);
  const url = `https://dev.to/api/articles?`;
  const params = new URLSearchParams({
    page,
    per_page: '100'
  });
  console.log(url + params);
  const response = await fetch(url + params, {
    headers
  });
  let nuggets = await response.json();
  nuggets = nuggets.filter(nugget => {
    return nugget.tag_list.includes('nuggets') && (tag ? nugget.tag_list.includes(tag) : true);
  });
  const start = (+page - 1) * +per_page;
  const end = start + +per_page;
  console.log('Start: ', start, ' End: ', end);
  nuggets = nuggets.slice(start, end);
  return nuggets;
}

/***/ }),

/***/ "PPbN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/**
 * Serverless funciton for /api/posts.
 * Fetches posts from DEV.to with given params.
 */
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      page,
      per_page,
      tag
    } = req.query;
    const posts = await getPosts({
      page: String(page),
      per_page: String(per_page),
      tag: String(tag)
    });
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
});
/**
 * Props for {@link getPosts}.
 */

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetPostsProps}.
 */
async function getPosts({
  page = '1',
  per_page = process.env.POSTS_PER_PAGE,
  tag = ''
} = {}) {
  const url = `https://dev.to/api/articles?`;
  const params = new URLSearchParams({
    page: '1',
    per_page: '100'
  });
  console.log(url + params);
  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);
  const response = await fetch(url + params);
  let posts = await response.json();
  posts = posts.filter(post => {
    return (tag ? post.tag_list.includes(tag) : true) && !post.tag_list.includes('nuggets');
  });
  const start = (+page - 1) * +per_page;
  const end = start + +per_page;
  console.log('Start: ', start, ' End: ', end);
  posts = posts.slice(start, end);
  return posts;
}

/***/ }),

/***/ "pQJ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sitemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Yq+");
/* harmony import */ var sitemap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sitemap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nuggets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ochb");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PPbN");



/**
 * Serverless function that generate sitemap for the website.
 */

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const smStream = new sitemap__WEBPACK_IMPORTED_MODULE_0__["SitemapStream"]({
      hostname: process.env.NEXT_PUBLIC_FRONT_END_DOMAIN
    });
    smStream.write({
      url: `/about`,
      changefreq: 'monthly'
    });
    smStream.write({
      url: `/works`,
      changefreq: 'monthly'
    });
    smStream.write({
      url: `/posts`,
      changefreq: 'daily'
    });
    smStream.write({
      url: `/nuggets`,
      changefreq: 'daily'
    }); // List of posts.

    const posts = await Object(_posts__WEBPACK_IMPORTED_MODULE_2__["getPosts"])({
      page: '1',
      per_page: '100'
    });
    posts.forEach(post => {
      smStream.write({
        url: `/posts/${post.id}/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    }); // List of nuggets.

    const nuggets = await Object(_nuggets__WEBPACK_IMPORTED_MODULE_1__["getNuggets"])({
      page: '1',
      per_page: '100'
    });
    nuggets.forEach(nugget => {
      smStream.write({
        url: `/nuggets/${nugget.id}/${nugget.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    }); // End sitemap stream.

    smStream.end(); // XML sitemap string.

    const sitemapOutput = (await Object(sitemap__WEBPACK_IMPORTED_MODULE_0__["streamToPromise"])(smStream)).toString(); // Change headers.

    res.writeHead(200, {
      'Content-Type': 'application/xml'
    }); // Display output to user.

    res.end(sitemapOutput);
  } catch (e) {
    console.error(e);
    res.send(JSON.stringify(e));
  }
});

/***/ })

/******/ });