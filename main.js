/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shared */ "./src/modules/shared.js");


// Import items






// Put buttons in content div
function createPageStructure() {
  const content = document.getElementById("content");

  // Create button container
  const btnContainer = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_3__.createDiv)();
  btnContainer.id = "btn-container";

  const createBtns = () => {
    //Create button elements
    const homeBtn = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_3__.createBtn)("Home");
    const menuBtn = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_3__.createBtn)("Menu");
    const contactBtn = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_3__.createBtn)("Contact");

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
  const mainContainer = (0,_modules_shared__WEBPACK_IMPORTED_MODULE_3__.createDiv)();
  mainContainer.id = "main-container";

  // Append items
  content.appendChild(btnContainer);
  content.appendChild(mainContainer);

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
        if (pageStructure.content.childNodes.length > 2) {
          if (pageStructure.content.childNodes[2].id !== "home-container") {
            pageStructure.content.removeChild(
              pageStructure.content.childNodes[2]
            );
            pageStructure.content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
          }
        } else if (pageStructure.content.childNodes.length === 2) {
          pageStructure.content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
        }
      } else if (e.target.id === "menu-btn") {
        if (pageStructure.content.childNodes.length > 2) {
          if (pageStructure.content.childNodes[2].id !== "menu-container") {
            pageStructure.content.removeChild(
              pageStructure.content.childNodes[2]
            );
            pageStructure.content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
          }
        } else if (pageStructure.content.childNodes.length === 2) {
          pageStructure.content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
        }
      } else if (e.target.id === "contact-btn") {
        if (pageStructure.content.childNodes.length > 2) {
          if (pageStructure.content.childNodes[2].id !== "contact-container") {
            pageStructure.content.removeChild(
              pageStructure.content.childNodes[2]
            );
            pageStructure.content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
          }
        } else if (pageStructure.content.childNodes.length === 2) {
          pageStructure.content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO0FBQ3pEO0FBQ0EsVUFBVTtBQUNWLDRDQUE0Qyw0REFBVztBQUN2RDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEltcG9ydCBmdW5jdGlvbnNcbmltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlSDEgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgyIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVQIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVVbCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlTGkgfSBmcm9tIFwiLi9zaGFyZWRcIjtcblxuLy8gQ3JlYXRlIGNvbnRhY3QgaW5mb1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhY3RTZWN0aW9uLmlkID0gXCJjb250YWN0LXNlY3Rpb25cIjtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlSDEoXCJDb250YWN0XCIpKTtcblxuICAvLyBBZGQgaXRlbXNcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlVWwoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJUaGUgRnJ1c3RyYXRlZCBDYXRcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJBZGRyZXNzXCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiUGhvbmUgTnVtYmVyXCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiRW1haWxcIikpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEltcG9ydCBmdW5jdGlvbnNcbmltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlSDEgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgyIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVQIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVVbCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlTGkgfSBmcm9tIFwiLi9zaGFyZWRcIjtcblxuLy8gQ3JlYXRlIGFib3V0IHNlY3Rpb24gb2YgcGFnZVxuZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIC8vIENyZWF0ZSBkaXYgY29udGFpbmVyIGFuZCBhZGQgSURcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgYWJvdXRDb250YWluZXIuaWQgPSBcImFib3V0LWNvbnRhaW5lclwiO1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIMihcIkFib3V0OlwiKSk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVAoXG4gICAgICBcIkdyZWV0aW5ncywgdHJhdmVsZXIsIEkgYW0gdGhlIEZydXN0cmF0ZWQgQ2F0LiBUaGUgRnJ1c3RyYXRlZCBDYXQgaXMgdGhlIGdyZWF0ZXN0IHJlc3RhdXJhbnQgZXZlci4gVGhhdCdzIGFsbCB5b3UgbmVlZCB0byBrbm93LlwiXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBhYm91dENvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlIGZ1bmN0aW9uIHRvIHNob3cgcmVzdGF1cmFudCBob3VycyBvbiBzY3JlZW5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xuICAvLyBDcmVhdGUgZGl2IGNvbnRhaW5lciBhbmQgYWRkIElEXG4gIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGhvdXJzQ29udGFpbmVyLmlkID0gXCJob3Vycy1jb250YWluZXJcIjtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSDIoXCJIb3VyczpcIikpO1xuXG4gIC8vIENyZWF0ZSBsaXN0IG9mIGhvdXJzXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZVVsKCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiTW9uZGF5XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiVHVlc2RheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIldlZG5lc2RheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlRodXJzZGF5XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiRnJpZGF5XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiU2F0dXJkYXlcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJTdW5kYXlcIikpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGhvdXJzQ29udGFpbmVyO1xufVxuXG4vLyBDcmVhdGUgY29udGFjdCBzZWN0aW9uIG9mIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICAvLyBDcmVhdGUgZGl2IGNvbnRhaW5lciBhbmQgYWRkIElEXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgY29udGFjdENvbnRhaW5lci5pZCA9IFwibG9jYXRpb24tY29udGFpbmVyXCI7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSDIoXCJMb2NhdGlvbjpcIikpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVAoXCIxMjMgbnVueWEgYml6XCIpKTtcblxuICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbn1cblxuLy8gQWRkIGFsbCBpdGVtcyB0byBwYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBob21lQ29udGFpbmVyLmlkID0gXCJob21lLWNvbnRhaW5lclwiO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUgxKFwiV2VsY29tZSB0byB0aGUgRnJ1c3RyYXRlZCBDYXRcIikpO1xuXG4gIC8vIEFwcGVuZCBlYWNoIHNlY3Rpb25cbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBYm91dCgpKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcblxuICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBJbXBvcnQgZnVuY3Rpb25zXG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgxIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlUCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlVWwgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUxpIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5cbi8vIENyZWF0ZSBiZXZlcmFnZXMgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzKCkge1xuICBjb25zdCBiZXZlcmFnZXNTZWN0aW9uID0gY3JlYXRlRGl2KCk7XG4gIGJldmVyYWdlc1NlY3Rpb24uaWQgPSBcImJldmVyYWdlcy1zZWN0aW9uXCI7XG5cbiAgLy8gQ3JlYXRlIGxpc3Qgb2YgaXRlbXNcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlVWwoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJXYXRlclwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlRlYVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkxlbW9uYWRlXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBiZXZlcmFnZXNTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGJldmVyYWdlc1NlY3Rpb247XG59XG5cbi8vIENyZWF0ZSBhcHBldGl6ZXJzIHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUFwcGV0aXplcnMoKSB7XG4gIGNvbnN0IGFwcGV0aXplcnNTZWN0aW9uID0gY3JlYXRlRGl2KCk7XG4gIGFwcGV0aXplcnNTZWN0aW9uLmlkID0gXCJhcHBldGl6ZXJzLXNlY3Rpb25cIjtcblxuICAvLyBDcmVhdGUgbGlzdCBvZiBpdGVtc1xuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVVbCgpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIk5hY2hvc1wiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIk51Z2dzXCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiRnJpZXNcIikpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgLy9BcHBlbmQgaXRlbXNcbiAgYXBwZXRpemVyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKTtcblxuICByZXR1cm4gYXBwZXRpemVyc1NlY3Rpb247XG59XG5cbi8vIENyZWF0ZSBlbnRyZSBzZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVFbnRyZSgpIHtcbiAgY29uc3QgZW50cmVTZWN0aW9uID0gY3JlYXRlRGl2KCk7XG4gIGVudHJlU2VjdGlvbi5pZCA9IFwiZW50cmUtc2VjdGlvblwiO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZVVsKCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiU3RlYWtcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJDaGlja2VuXCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiVGFjb3NcIikpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGVudHJlU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBlbnRyZVNlY3Rpb247XG59XG5cbi8vIENyZWF0ZSBkZXNlcnQgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlRGVzZXQoKSB7XG4gIGNvbnN0IGRlc2VydFNlY3Rpb24gPSBjcmVhdGVEaXYoKTtcbiAgZGVzZXJ0U2VjdGlvbi5pZCA9IFwiZGVzZXJ0LXNlY3Rpb25cIjtcblxuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVVbCgpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkNvb2tpZVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkljZSBDcmVhbVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkNha2VcIikpO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGRlc2VydFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKTtcblxuICByZXR1cm4gZGVzZXJ0U2VjdGlvbjtcbn1cblxuLy8gQWRkIGFsbCBpdGVtcyB0byBwYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBtZW51Q29udGFpbmVyLmlkID0gXCJtZW51LWNvbnRhaW5lclwiO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUgxKFwiTWVudVwiKSk7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQmV2ZXJhZ2VzKCkpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFwcGV0aXplcnMoKSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRW50cmUoKSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVzZXQoKSk7XG5cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVEaXYoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUgxKHRleHQpIHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGgxO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIMih0ZXh0KSB7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBoMjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUCh0ZXh0KSB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbCgpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGkodGV4dCkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ0bih0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gYnRuO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVEaXYsXG4gIGNyZWF0ZUgxLFxuICBjcmVhdGVIMixcbiAgY3JlYXRlUCxcbiAgY3JlYXRlVWwsXG4gIGNyZWF0ZUxpLFxuICBjcmVhdGVCdG4sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gSW1wb3J0IGl0ZW1zXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9tb2R1bGVzL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlQnRuIH0gZnJvbSBcIi4vbW9kdWxlcy9zaGFyZWRcIjtcblxuLy8gUHV0IGJ1dHRvbnMgaW4gY29udGVudCBkaXZcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VTdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIGJ1dHRvbiBjb250YWluZXJcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGJ0bkNvbnRhaW5lci5pZCA9IFwiYnRuLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGNyZWF0ZUJ0bnMgPSAoKSA9PiB7XG4gICAgLy9DcmVhdGUgYnV0dG9uIGVsZW1lbnRzXG4gICAgY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUJ0bihcIkhvbWVcIik7XG4gICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUJ0bihcIk1lbnVcIik7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bihcIkNvbnRhY3RcIik7XG5cbiAgICAvLyBBZGQgSURzXG4gICAgaG9tZUJ0bi5pZCA9IFwiaG9tZS1idG5cIjtcbiAgICBtZW51QnRuLmlkID0gXCJtZW51LWJ0blwiO1xuICAgIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3QtYnRuXCI7XG5cbiAgICAvLyBBZGQgY2xhc3Nlc1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuXG4gICAgcmV0dXJuIHsgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0biB9O1xuICB9O1xuXG4gIC8vIEFkZCB0YWIgYnV0dG9uc1xuICBjb25zdCBjcmVhdGVkQnRucyA9IGNyZWF0ZUJ0bnMoKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRCdG5zLmhvbWVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZEJ0bnMubWVudUJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkQnRucy5jb250YWN0QnRuKTtcblxuICAvLyBDcmVhdGUgbWFpbiBjb250YWluZXIgZm9yIGFsbCB0YWJzIHBhZ2VzIHRvIGdvIGluXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgY29udGVudC5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gIHJldHVybiB7IGNvbnRlbnQsIGJ0bkNvbnRhaW5lciwgbWFpbkNvbnRhaW5lciB9O1xufVxuXG4vLyBDaG9vc2UgcGFnZVxuZnVuY3Rpb24gY2hvb3NlUGFnZSgpIHtcbiAgY29uc3QgcGFnZVN0cnVjdHVyZSA9IGNyZWF0ZVBhZ2VTdHJ1Y3R1cmUoKTtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpO1xuXG4gIC8vIFNlbGVjdCBwYWdlXG4gIGJ0bi5mb3JFYWNoKChpKSA9PiB7XG4gICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJob21lLWJ0blwiKSB7XG4gICAgICAgIGlmIChwYWdlU3RydWN0dXJlLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgaWYgKHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5jaGlsZE5vZGVzWzJdLmlkICE9PSBcImhvbWUtY29udGFpbmVyXCIpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb250ZW50LmNoaWxkTm9kZXNbMl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJtZW51LWJ0blwiKSB7XG4gICAgICAgIGlmIChwYWdlU3RydWN0dXJlLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgaWYgKHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5jaGlsZE5vZGVzWzJdLmlkICE9PSBcIm1lbnUtY29udGFpbmVyXCIpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb250ZW50LmNoaWxkTm9kZXNbMl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjb250YWN0LWJ0blwiKSB7XG4gICAgICAgIGlmIChwYWdlU3RydWN0dXJlLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgaWYgKHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5jaGlsZE5vZGVzWzJdLmlkICE9PSBcImNvbnRhY3QtY29udGFpbmVyXCIpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb250ZW50LmNoaWxkTm9kZXNbMl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3QoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29udGVudC5hcHBlbmRDaGlsZChsb2FkQ29udGFjdCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gSW5pdGF0ZSBhbGxcbmZ1bmN0aW9uIGluaXRpYXRlUGFnZSgpIHtcbiAgY2hvb3NlUGFnZSgpO1xufVxuXG5pbml0aWF0ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==