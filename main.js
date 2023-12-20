/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  font-family: sans-serif;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

#btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.btn {
  height: 40px;
  width: 80px;
  margin: 0 10px;
}

#main-container {
  width: 700px;
  display: flex;
  justify-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: sans-serif;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n\n#btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n}\n\n.btn {\n  height: 40px;\n  width: 80px;\n  margin: 0 10px;\n}\n\n#main-container {\n  width: 700px;\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/modules/shared.js");


// Import functions







// Create contact info
function loadContact() {
  const contactSection = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  contactSection.id = "contact-section";
  contactSection.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createH1)("Contact"));

  // Add items
  const createList = () => {
    const list = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUl)();

    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("The Frustrated Cat"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Address"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Phone Number"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Email"));

    return list;
  };

  // Append items
  contactSection.appendChild(createList());

  return contactSection;
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/modules/shared.js");


// Import functions







// Create about section of page
function createAbout() {
  // Create div container and add ID
  const aboutContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  aboutContainer.id = "about-container";

  // Append items
  aboutContainer.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createH2)("About:"));
  aboutContainer.appendChild(
    (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createP)(
      "Greetings, traveler, I am the Frustrated Cat. The Frustrated Cat is the greatest restaurant ever. That's all you need to know."
    )
  );

  return aboutContainer;
}

// Create function to show restaurant hours on screen
function createHours() {
  // Create div container and add ID
  const hoursContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  hoursContainer.id = "hours-container";

  // Append items
  hoursContainer.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createH2)("Hours:"));

  // Create list of hours
  const createList = () => {
    const list = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUl)();

    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Monday"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Tuesday"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Wednesday"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Thursday"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Friday"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Saturday"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Sunday"));

    return list;
  };

  // Append items
  hoursContainer.appendChild(createList());

  return hoursContainer;
}

// Create contact section of page
function createLocation() {
  // Create div container and add ID
  const contactContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  contactContainer.id = "location-container";

  // Append items
  contactContainer.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createH2)("Location:"));
  contactContainer.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createP)("123 nunya biz"));

  return contactContainer;
}

// Add all items to page
function loadHome() {
  const homeContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  homeContainer.id = "home-container";
  homeContainer.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createH1)("Welcome to the Frustrated Cat"));

  // Append each section
  homeContainer.appendChild(createAbout());
  homeContainer.appendChild(createHours());
  homeContainer.appendChild(createLocation());

  return homeContainer;
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/modules/shared.js");


// Import functions







// Create beverages section
function createBeverages() {
  const beveragesSection = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  beveragesSection.id = "beverages-section";

  // Create list of items
  const createList = () => {
    const list = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUl)();

    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Water"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Tea"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Lemonade"));

    return list;
  };

  // Append items
  beveragesSection.appendChild(createList());

  return beveragesSection;
}

// Create appetizers section
function createAppetizers() {
  const appetizersSection = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  appetizersSection.id = "appetizers-section";

  // Create list of items
  const createList = () => {
    const list = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUl)();

    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Nachos"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Nuggs"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Fries"));

    return list;
  };

  //Append items
  appetizersSection.appendChild(createList());

  return appetizersSection;
}

// Create entre section
function createEntre() {
  const entreSection = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  entreSection.id = "entre-section";

  const createList = () => {
    const list = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUl)();

    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Steak"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Chicken"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Tacos"));

    return list;
  };

  // Append items
  entreSection.appendChild(createList());

  return entreSection;
}

// Create desert section
function createDeset() {
  const desertSection = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  desertSection.id = "desert-section";

  const createList = () => {
    const list = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUl)();

    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Cookie"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Ice Cream"));
    list.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createLi)("Cake"));

    return list;
  };

  // Append items
  desertSection.appendChild(createList());

  return desertSection;
}

// Add all items to page
function loadMenu() {
  const menuContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  menuContainer.id = "menu-container";
  menuContainer.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.createH1)("Menu"));

  // Append items
  menuContainer.appendChild(createBeverages());
  menuContainer.appendChild(createAppetizers());
  menuContainer.appendChild(createEntre());
  menuContainer.appendChild(createDeset());

  return menuContainer;
}


/***/ }),

/***/ "./src/modules/shared.js":
/*!*******************************!*\
  !*** ./src/modules/shared.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBtn: () => (/* binding */ createBtn),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createH1: () => (/* binding */ createH1),
/* harmony export */   createH2: () => (/* binding */ createH2),
/* harmony export */   createLi: () => (/* binding */ createLi),
/* harmony export */   createP: () => (/* binding */ createP),
/* harmony export */   createUl: () => (/* binding */ createUl)
/* harmony export */ });
function createDiv() {
  const div = document.createElement("div");
  return div;
}

function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

function createH2(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
}

function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function createUl() {
  const ul = document.createElement("ul");
  return ul;
}

function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function createBtn(text) {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.textContent = text;
  return btn;
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/shared */ "./src/modules/shared.js");


// Import items







// Put buttons in content div
function createPageStructure() {
  const content = document.getElementById("content");

  // Create button container
  const btnContainer = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_4__.createDiv)();
  btnContainer.id = "btn-container";

  const createBtns = () => {
    //Create button elements
    const homeBtn = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_4__.createBtn)("Home");
    const menuBtn = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_4__.createBtn)("Menu");
    const contactBtn = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_4__.createBtn)("Contact");

    // Add IDs
    homeBtn.id = "home-btn";
    menuBtn.id = "menu-btn";
    contactBtn.id = "contact-btn";

    // Add classes
    homeBtn.classList.add("btn");
    menuBtn.classList.add("btn");
    contactBtn.classList.add("btn");

    return { homeBtn, menuBtn, contactBtn };
  };

  // Add tab buttons
  const createdBtns = createBtns();
  btnContainer.appendChild(createdBtns.homeBtn);
  btnContainer.appendChild(createdBtns.menuBtn);
  btnContainer.appendChild(createdBtns.contactBtn);

  // Create main container for all tabs pages to go in
  const mainContainer = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_4__.createDiv)();
  mainContainer.id = "main-container";

  // Append items
  content.appendChild(btnContainer);
  content.appendChild(mainContainer);

  // Append loadHome to show it when page is initially opened
  mainContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return { content, btnContainer, mainContainer };
}

// Choose page
function choosePage() {
  const pageStructure = createPageStructure();
  let btn = document.querySelectorAll(".btn");

  // Select page
  btn.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (e.target.id === "home-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "home-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
        }
      } else if (e.target.id === "menu-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "menu-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
      } else if (e.target.id === "contact-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "contact-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
        }
      }
    });
  });
}

// Initate all
function initiatePage() {
  choosePage();
}

initiatePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5REFBUTtBQUM1RDtBQUNBLFVBQVU7QUFDVixrREFBa0QseURBQVE7QUFDMUQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseURBQVE7QUFDNUQ7QUFDQSxVQUFVO0FBQ1Ysa0RBQWtELHlEQUFRO0FBQzFEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDREQUFXO0FBQy9EO0FBQ0EsVUFBVTtBQUNWLGtEQUFrRCw0REFBVztBQUM3RDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuI21haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNidG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBJbXBvcnQgZnVuY3Rpb25zXG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgxIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlUCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlVWwgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUxpIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5cbi8vIENyZWF0ZSBjb250YWN0IGluZm9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBjb250YWN0U2VjdGlvbi5pZCA9IFwiY29udGFjdC1zZWN0aW9uXCI7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUgxKFwiQ29udGFjdFwiKSk7XG5cbiAgLy8gQWRkIGl0ZW1zXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZVVsKCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiVGhlIEZydXN0cmF0ZWQgQ2F0XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiQWRkcmVzc1wiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlBob25lIE51bWJlclwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkVtYWlsXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBjb250YWN0U2VjdGlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBJbXBvcnQgZnVuY3Rpb25zXG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgxIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlUCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlVWwgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUxpIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5cbi8vIENyZWF0ZSBhYm91dCBzZWN0aW9uIG9mIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICAvLyBDcmVhdGUgZGl2IGNvbnRhaW5lciBhbmQgYWRkIElEXG4gIGNvbnN0IGFib3V0Q29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGFib3V0Q29udGFpbmVyLmlkID0gXCJhYm91dC1jb250YWluZXJcIjtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSDIoXCJBYm91dDpcIikpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQKFxuICAgICAgXCJHcmVldGluZ3MsIHRyYXZlbGVyLCBJIGFtIHRoZSBGcnVzdHJhdGVkIENhdC4gVGhlIEZydXN0cmF0ZWQgQ2F0IGlzIHRoZSBncmVhdGVzdCByZXN0YXVyYW50IGV2ZXIuIFRoYXQncyBhbGwgeW91IG5lZWQgdG8ga25vdy5cIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gYWJvdXRDb250YWluZXI7XG59XG5cbi8vIENyZWF0ZSBmdW5jdGlvbiB0byBzaG93IHJlc3RhdXJhbnQgaG91cnMgb24gc2NyZWVuXG5mdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcbiAgLy8gQ3JlYXRlIGRpdiBjb250YWluZXIgYW5kIGFkZCBJRFxuICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBob3Vyc0NvbnRhaW5lci5pZCA9IFwiaG91cnMtY29udGFpbmVyXCI7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUgyKFwiSG91cnM6XCIpKTtcblxuICAvLyBDcmVhdGUgbGlzdCBvZiBob3Vyc1xuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVVbCgpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIk1vbmRheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlR1ZXNkYXlcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJXZWRuZXNkYXlcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJUaHVyc2RheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkZyaWRheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlNhdHVyZGF5XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiU3VuZGF5XCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBob3Vyc0NvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlIGNvbnRhY3Qgc2VjdGlvbiBvZiBwYWdlXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgLy8gQ3JlYXRlIGRpdiBjb250YWluZXIgYW5kIGFkZCBJRFxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhY3RDb250YWluZXIuaWQgPSBcImxvY2F0aW9uLWNvbnRhaW5lclwiO1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUgyKFwiTG9jYXRpb246XCIpKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQKFwiMTIzIG51bnlhIGJpelwiKSk7XG5cbiAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbi8vIEFkZCBhbGwgaXRlbXMgdG8gcGFnZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgaG9tZUNvbnRhaW5lci5pZCA9IFwiaG9tZS1jb250YWluZXJcIjtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIMShcIldlbGNvbWUgdG8gdGhlIEZydXN0cmF0ZWQgQ2F0XCIpKTtcblxuICAvLyBBcHBlbmQgZWFjaCBzZWN0aW9uXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XG5cbiAgcmV0dXJuIGhvbWVDb250YWluZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gSW1wb3J0IGZ1bmN0aW9uc1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlSDIgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZVAgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZVVsIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVMaSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuXG4vLyBDcmVhdGUgYmV2ZXJhZ2VzIHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUJldmVyYWdlcygpIHtcbiAgY29uc3QgYmV2ZXJhZ2VzU2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBiZXZlcmFnZXNTZWN0aW9uLmlkID0gXCJiZXZlcmFnZXMtc2VjdGlvblwiO1xuXG4gIC8vIENyZWF0ZSBsaXN0IG9mIGl0ZW1zXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZVVsKCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiV2F0ZXJcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJUZWFcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJMZW1vbmFkZVwiKSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgYmV2ZXJhZ2VzU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBiZXZlcmFnZXNTZWN0aW9uO1xufVxuXG4vLyBDcmVhdGUgYXBwZXRpemVycyBzZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVBcHBldGl6ZXJzKCkge1xuICBjb25zdCBhcHBldGl6ZXJzU2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBhcHBldGl6ZXJzU2VjdGlvbi5pZCA9IFwiYXBwZXRpemVycy1zZWN0aW9uXCI7XG5cbiAgLy8gQ3JlYXRlIGxpc3Qgb2YgaXRlbXNcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlVWwoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJOYWNob3NcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJOdWdnc1wiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkZyaWVzXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vQXBwZW5kIGl0ZW1zXG4gIGFwcGV0aXplcnNTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGFwcGV0aXplcnNTZWN0aW9uO1xufVxuXG4vLyBDcmVhdGUgZW50cmUgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlRW50cmUoKSB7XG4gIGNvbnN0IGVudHJlU2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBlbnRyZVNlY3Rpb24uaWQgPSBcImVudHJlLXNlY3Rpb25cIjtcblxuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVVbCgpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlN0ZWFrXCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiQ2hpY2tlblwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlRhY29zXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBlbnRyZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKTtcblxuICByZXR1cm4gZW50cmVTZWN0aW9uO1xufVxuXG4vLyBDcmVhdGUgZGVzZXJ0IHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZURlc2V0KCkge1xuICBjb25zdCBkZXNlcnRTZWN0aW9uID0gY3JlYXRlRGl2KCk7XG4gIGRlc2VydFNlY3Rpb24uaWQgPSBcImRlc2VydC1zZWN0aW9uXCI7XG5cbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlVWwoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJDb29raWVcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJJY2UgQ3JlYW1cIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJDYWtlXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBkZXNlcnRTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGRlc2VydFNlY3Rpb247XG59XG5cbi8vIEFkZCBhbGwgaXRlbXMgdG8gcGFnZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgbWVudUNvbnRhaW5lci5pZCA9IFwibWVudS1jb250YWluZXJcIjtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIMShcIk1lbnVcIikpO1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJldmVyYWdlcygpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBcHBldGl6ZXJzKCkpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVudHJlKCkpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlc2V0KCkpO1xuXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIMSh0ZXh0KSB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBoMTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSDIodGV4dCkge1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gaDI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVAodGV4dCkge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVWwoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpKHRleHQpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdG4odGV4dCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlRGl2LFxuICBjcmVhdGVIMSxcbiAgY3JlYXRlSDIsXG4gIGNyZWF0ZVAsXG4gIGNyZWF0ZVVsLFxuICBjcmVhdGVMaSxcbiAgY3JlYXRlQnRuLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBJbXBvcnQgaXRlbXNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9tb2R1bGVzL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlQnRuIH0gZnJvbSBcIi4vbW9kdWxlcy9zaGFyZWRcIjtcblxuLy8gUHV0IGJ1dHRvbnMgaW4gY29udGVudCBkaXZcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VTdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIGJ1dHRvbiBjb250YWluZXJcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGJ0bkNvbnRhaW5lci5pZCA9IFwiYnRuLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGNyZWF0ZUJ0bnMgPSAoKSA9PiB7XG4gICAgLy9DcmVhdGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUJ0bihcIkhvbWVcIik7XG4gICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUJ0bihcIk1lbnVcIik7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bihcIkNvbnRhY3RcIik7XG5cbiAgICAvLyBBZGQgSURzXG4gICAgaG9tZUJ0bi5pZCA9IFwiaG9tZS1idG5cIjtcbiAgICBtZW51QnRuLmlkID0gXCJtZW51LWJ0blwiO1xuICAgIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3QtYnRuXCI7XG5cbiAgICAvLyBBZGQgY2xhc3Nlc1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuXG4gICAgcmV0dXJuIHsgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0biB9O1xuICB9O1xuXG4gIC8vIEFkZCB0YWIgYnV0dG9uc1xuICBjb25zdCBjcmVhdGVkQnRucyA9IGNyZWF0ZUJ0bnMoKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRCdG5zLmhvbWVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZEJ0bnMubWVudUJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkQnRucy5jb250YWN0QnRuKTtcblxuICAvLyBDcmVhdGUgbWFpbiBjb250YWluZXIgZm9yIGFsbCB0YWJzIHBhZ2VzIHRvIGdvIGluXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgY29udGVudC5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gIC8vIEFwcGVuZCBsb2FkSG9tZSB0byBzaG93IGl0IHdoZW4gcGFnZSBpcyBpbml0aWFsbHkgb3BlbmVkXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG5cbiAgcmV0dXJuIHsgY29udGVudCwgYnRuQ29udGFpbmVyLCBtYWluQ29udGFpbmVyIH07XG59XG5cbi8vIENob29zZSBwYWdlXG5mdW5jdGlvbiBjaG9vc2VQYWdlKCkge1xuICBjb25zdCBwYWdlU3RydWN0dXJlID0gY3JlYXRlUGFnZVN0cnVjdHVyZSgpO1xuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG5cIik7XG5cbiAgLy8gU2VsZWN0IHBhZ2VcbiAgYnRuLmZvckVhY2goKGkpID0+IHtcbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImhvbWUtYnRuXCIpIHtcbiAgICAgICAgaWYgKHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlc1swXS5pZCAhPT0gXCJob21lLWNvbnRhaW5lclwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzWzBdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwibWVudS1idG5cIikge1xuICAgICAgICBpZiAocGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmlkICE9PSBcIm1lbnUtY29udGFpbmVyXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXNbMF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjb250YWN0LWJ0blwiKSB7XG4gICAgICAgIGlmIChwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0uaWQgIT09IFwiY29udGFjdC1jb250YWluZXJcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlc1swXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkQ29udGFjdCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDb250YWN0KCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBJbml0YXRlIGFsbFxuZnVuY3Rpb24gaW5pdGlhdGVQYWdlKCkge1xuICBjaG9vc2VQYWdlKCk7XG59XG5cbmluaXRpYXRlUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9