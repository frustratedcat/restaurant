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

  // Append loadHome to show it when page is initially opened
  mainContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

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
            pageStructure.mainContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
        }
      } else if (e.target.id === "menu-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "menu-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
        }
      } else if (e.target.id === "contact-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "contact-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCw0REFBVztBQUMvRDtBQUNBLFVBQVU7QUFDVixrREFBa0QsNERBQVc7QUFDN0Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvc2hhcmVkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBJbXBvcnQgZnVuY3Rpb25zXG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgxIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlUCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlVWwgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUxpIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5cbi8vIENyZWF0ZSBjb250YWN0IGluZm9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBjb250YWN0U2VjdGlvbi5pZCA9IFwiY29udGFjdC1zZWN0aW9uXCI7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUgxKFwiQ29udGFjdFwiKSk7XG5cbiAgLy8gQWRkIGl0ZW1zXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZVVsKCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiVGhlIEZydXN0cmF0ZWQgQ2F0XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiQWRkcmVzc1wiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlBob25lIE51bWJlclwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkVtYWlsXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBjb250YWN0U2VjdGlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBJbXBvcnQgZnVuY3Rpb25zXG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUgxIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMiB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlUCB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlVWwgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUxpIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5cbi8vIENyZWF0ZSBhYm91dCBzZWN0aW9uIG9mIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICAvLyBDcmVhdGUgZGl2IGNvbnRhaW5lciBhbmQgYWRkIElEXG4gIGNvbnN0IGFib3V0Q29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGFib3V0Q29udGFpbmVyLmlkID0gXCJhYm91dC1jb250YWluZXJcIjtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSDIoXCJBYm91dDpcIikpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQKFxuICAgICAgXCJHcmVldGluZ3MsIHRyYXZlbGVyLCBJIGFtIHRoZSBGcnVzdHJhdGVkIENhdC4gVGhlIEZydXN0cmF0ZWQgQ2F0IGlzIHRoZSBncmVhdGVzdCByZXN0YXVyYW50IGV2ZXIuIFRoYXQncyBhbGwgeW91IG5lZWQgdG8ga25vdy5cIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gYWJvdXRDb250YWluZXI7XG59XG5cbi8vIENyZWF0ZSBmdW5jdGlvbiB0byBzaG93IHJlc3RhdXJhbnQgaG91cnMgb24gc2NyZWVuXG5mdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcbiAgLy8gQ3JlYXRlIGRpdiBjb250YWluZXIgYW5kIGFkZCBJRFxuICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBob3Vyc0NvbnRhaW5lci5pZCA9IFwiaG91cnMtY29udGFpbmVyXCI7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUgyKFwiSG91cnM6XCIpKTtcblxuICAvLyBDcmVhdGUgbGlzdCBvZiBob3Vyc1xuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVVbCgpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIk1vbmRheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlR1ZXNkYXlcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJXZWRuZXNkYXlcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJUaHVyc2RheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkZyaWRheVwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlNhdHVyZGF5XCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiU3VuZGF5XCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBob3Vyc0NvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlIGNvbnRhY3Qgc2VjdGlvbiBvZiBwYWdlXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgLy8gQ3JlYXRlIGRpdiBjb250YWluZXIgYW5kIGFkZCBJRFxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIGNvbnRhY3RDb250YWluZXIuaWQgPSBcImxvY2F0aW9uLWNvbnRhaW5lclwiO1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUgyKFwiTG9jYXRpb246XCIpKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQKFwiMTIzIG51bnlhIGJpelwiKSk7XG5cbiAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbi8vIEFkZCBhbGwgaXRlbXMgdG8gcGFnZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgaG9tZUNvbnRhaW5lci5pZCA9IFwiaG9tZS1jb250YWluZXJcIjtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIMShcIldlbGNvbWUgdG8gdGhlIEZydXN0cmF0ZWQgQ2F0XCIpKTtcblxuICAvLyBBcHBlbmQgZWFjaCBzZWN0aW9uXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XG5cbiAgcmV0dXJuIGhvbWVDb250YWluZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gSW1wb3J0IGZ1bmN0aW9uc1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVIMSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgY3JlYXRlSDIgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZVAgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZVVsIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBjcmVhdGVMaSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuXG4vLyBDcmVhdGUgYmV2ZXJhZ2VzIHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUJldmVyYWdlcygpIHtcbiAgY29uc3QgYmV2ZXJhZ2VzU2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBiZXZlcmFnZXNTZWN0aW9uLmlkID0gXCJiZXZlcmFnZXMtc2VjdGlvblwiO1xuXG4gIC8vIENyZWF0ZSBsaXN0IG9mIGl0ZW1zXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZVVsKCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiV2F0ZXJcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJUZWFcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJMZW1vbmFkZVwiKSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICAvLyBBcHBlbmQgaXRlbXNcbiAgYmV2ZXJhZ2VzU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KCkpO1xuXG4gIHJldHVybiBiZXZlcmFnZXNTZWN0aW9uO1xufVxuXG4vLyBDcmVhdGUgYXBwZXRpemVycyBzZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVBcHBldGl6ZXJzKCkge1xuICBjb25zdCBhcHBldGl6ZXJzU2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBhcHBldGl6ZXJzU2VjdGlvbi5pZCA9IFwiYXBwZXRpemVycy1zZWN0aW9uXCI7XG5cbiAgLy8gQ3JlYXRlIGxpc3Qgb2YgaXRlbXNcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlVWwoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJOYWNob3NcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJOdWdnc1wiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIkZyaWVzXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vQXBwZW5kIGl0ZW1zXG4gIGFwcGV0aXplcnNTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGFwcGV0aXplcnNTZWN0aW9uO1xufVxuXG4vLyBDcmVhdGUgZW50cmUgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlRW50cmUoKSB7XG4gIGNvbnN0IGVudHJlU2VjdGlvbiA9IGNyZWF0ZURpdigpO1xuICBlbnRyZVNlY3Rpb24uaWQgPSBcImVudHJlLXNlY3Rpb25cIjtcblxuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVVbCgpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlN0ZWFrXCIpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpKFwiQ2hpY2tlblwiKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaShcIlRhY29zXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBlbnRyZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKTtcblxuICByZXR1cm4gZW50cmVTZWN0aW9uO1xufVxuXG4vLyBDcmVhdGUgZGVzZXJ0IHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZURlc2V0KCkge1xuICBjb25zdCBkZXNlcnRTZWN0aW9uID0gY3JlYXRlRGl2KCk7XG4gIGRlc2VydFNlY3Rpb24uaWQgPSBcImRlc2VydC1zZWN0aW9uXCI7XG5cbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlVWwoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJDb29raWVcIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJJY2UgQ3JlYW1cIikpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoXCJDYWtlXCIpKTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBkZXNlcnRTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoKSk7XG5cbiAgcmV0dXJuIGRlc2VydFNlY3Rpb247XG59XG5cbi8vIEFkZCBhbGwgaXRlbXMgdG8gcGFnZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVEaXYoKTtcbiAgbWVudUNvbnRhaW5lci5pZCA9IFwibWVudS1jb250YWluZXJcIjtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIMShcIk1lbnVcIikpO1xuXG4gIC8vIEFwcGVuZCBpdGVtc1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJldmVyYWdlcygpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBcHBldGl6ZXJzKCkpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVudHJlKCkpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlc2V0KCkpO1xuXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlRGl2KCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIMSh0ZXh0KSB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBoMTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSDIodGV4dCkge1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gaDI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVAodGV4dCkge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVWwoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpKHRleHQpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdG4odGV4dCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlRGl2LFxuICBjcmVhdGVIMSxcbiAgY3JlYXRlSDIsXG4gIGNyZWF0ZVAsXG4gIGNyZWF0ZVVsLFxuICBjcmVhdGVMaSxcbiAgY3JlYXRlQnRuLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEltcG9ydCBpdGVtc1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL21vZHVsZXMvY29udGFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSBcIi4vbW9kdWxlcy9zaGFyZWRcIjtcbmltcG9ydCB7IGNyZWF0ZUJ0biB9IGZyb20gXCIuL21vZHVsZXMvc2hhcmVkXCI7XG5cbi8vIFB1dCBidXR0b25zIGluIGNvbnRlbnQgZGl2XG5mdW5jdGlvbiBjcmVhdGVQYWdlU3RydWN0dXJlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vIENyZWF0ZSBidXR0b24gY29udGFpbmVyXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGNyZWF0ZURpdigpO1xuICBidG5Db250YWluZXIuaWQgPSBcImJ0bi1jb250YWluZXJcIjtcblxuICBjb25zdCBjcmVhdGVCdG5zID0gKCkgPT4ge1xuICAgIC8vQ3JlYXRlIGJ1dHRvbiBlbGVtZW50c1xuICAgIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVCdG4oXCJIb21lXCIpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVCdG4oXCJNZW51XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBjcmVhdGVCdG4oXCJDb250YWN0XCIpO1xuXG4gICAgLy8gQWRkIElEc1xuICAgIGhvbWVCdG4uaWQgPSBcImhvbWUtYnRuXCI7XG4gICAgbWVudUJ0bi5pZCA9IFwibWVudS1idG5cIjtcbiAgICBjb250YWN0QnRuLmlkID0gXCJjb250YWN0LWJ0blwiO1xuXG4gICAgLy8gQWRkIGNsYXNzZXNcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcblxuICAgIHJldHVybiB7IGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4gfTtcbiAgfTtcblxuICAvLyBBZGQgdGFiIGJ1dHRvbnNcbiAgY29uc3QgY3JlYXRlZEJ0bnMgPSBjcmVhdGVCdG5zKCk7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkQnRucy5ob21lQnRuKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRCdG5zLm1lbnVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZEJ0bnMuY29udGFjdEJ0bik7XG5cbiAgLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyIGZvciBhbGwgdGFicyBwYWdlcyB0byBnbyBpblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRGl2KCk7XG4gIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAvLyBBcHBlbmQgbG9hZEhvbWUgdG8gc2hvdyBpdCB3aGVuIHBhZ2UgaXMgaW5pdGlhbGx5IG9wZW5lZFxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuXG4gIHJldHVybiB7IGNvbnRlbnQsIGJ0bkNvbnRhaW5lciwgbWFpbkNvbnRhaW5lciB9O1xufVxuXG4vLyBDaG9vc2UgcGFnZVxuZnVuY3Rpb24gY2hvb3NlUGFnZSgpIHtcbiAgY29uc3QgcGFnZVN0cnVjdHVyZSA9IGNyZWF0ZVBhZ2VTdHJ1Y3R1cmUoKTtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpO1xuXG4gIC8vIFNlbGVjdCBwYWdlXG4gIGJ0bi5mb3JFYWNoKChpKSA9PiB7XG4gICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJob21lLWJ0blwiKSB7XG4gICAgICAgIGlmIChwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0uaWQgIT09IFwiaG9tZS1jb250YWluZXJcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlc1swXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcIm1lbnUtYnRuXCIpIHtcbiAgICAgICAgaWYgKHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlc1swXS5pZCAhPT0gXCJtZW51LWNvbnRhaW5lclwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzWzBdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiY29udGFjdC1idG5cIikge1xuICAgICAgICBpZiAocGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmlkICE9PSBcImNvbnRhY3QtY29udGFpbmVyXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5tYWluQ29udGFpbmVyLmNoaWxkTm9kZXNbMF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3QoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkQ29udGFjdCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gSW5pdGF0ZSBhbGxcbmZ1bmN0aW9uIGluaXRpYXRlUGFnZSgpIHtcbiAgY2hvb3NlUGFnZSgpO1xufVxuXG5pbml0aWF0ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==