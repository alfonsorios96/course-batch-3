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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dislpay contents using the selected lng
var displayContent = function displayContent(content) {
  console.log(content);
  var contentP = JSON.parse(content);
  console.log(contentP); // Display page elements

  document.getElementById('blogName').innerHTML = contentP.page.title;
  document.getElementById('footerName').innerHTML = contentP.page.footer; // Display list blogs

  document.getElementById('list').innerHTML = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = contentP.posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      // Get a DOM node templete used for blog records
      var itm = document.getElementById('card');
      var clone = itm.cloneNode(true);
      clone.removeAttribute('id');
      var nods = clone.childNodes;
      nods[0].innerHTML = element.title;
      nods[1].innerHTML = element.description;
      nods[3].innerHTML = element.text; // Insert into DOM the new element

      document.getElementById('list').appendChild(clone);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}; // Handle event on the select box change


var handleChangeLng = function handleChangeLng(event) {
  console.log(event.target.value);
  retrieveLngData(event.target.value, displayContent);
}; // Make request to get lng data


var retrieveLngData = function retrieveLngData(lng, callback) {
  // Define URL service
  var url = 'http://127.0.0.1:8080/dist/';

  switch (lng) {
    case 'eng':
      url += 'eng.json';
      break;

    case 'mxn':
      url += 'mxn.json';

    default:
      break;
  } // Generate request


  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };

  xhttp.open('GET', url, true);
  xhttp.send();
};

(function () {
  // Load by defaul content in mxn
  retrieveLngData('mxn', displayContent); // Add event to select box lnaguage

  document.getElementById('lng').addEventListener('change', handleChangeLng);
})();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map