"use strict";

// Import items
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";
import { createDiv } from "./modules/shared";
import { createBtn } from "./modules/shared";

// Put buttons in content div
function createPageStructure() {
  const content = document.getElementById("content");

  // Create button container
  const btnContainer = createDiv();
  btnContainer.id = "btn-container";

  const createBtns = () => {
    //Create button elements
    const homeBtn = createBtn("Home");
    const menuBtn = createBtn("Menu");
    const contactBtn = createBtn("Contact");

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
  const mainContainer = createDiv();
  mainContainer.id = "main-container";

  // Append items
  content.appendChild(btnContainer);
  content.appendChild(mainContainer);

  // Append loadHome to show it when page is initially opened
  mainContainer.appendChild(loadHome());

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
            pageStructure.mainContainer.appendChild(loadHome());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild(loadHome());
        }
      } else if (e.target.id === "menu-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "menu-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild(loadMenu());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild(loadMenu());
        }
      } else if (e.target.id === "contact-btn") {
        if (pageStructure.mainContainer.childNodes.length > 0) {
          if (
            pageStructure.mainContainer.childNodes[0].id !== "contact-container"
          ) {
            pageStructure.mainContainer.removeChild(
              pageStructure.mainContainer.childNodes[0]
            );
            pageStructure.mainContainer.appendChild(loadContact());
          }
        } else if (pageStructure.mainContainer.childNodes.length === 0) {
          pageStructure.mainContainer.appendChild(loadContact());
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
