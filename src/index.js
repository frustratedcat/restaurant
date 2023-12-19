"use strict";

import loadHome from "./modules/home";
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

  const createdBtns = createBtns();
  // Add tab buttons
  btnContainer.appendChild(createdBtns.homeBtn);
  btnContainer.appendChild(createdBtns.menuBtn);
  btnContainer.appendChild(createdBtns.contactBtn);

  // Create main container for all tabs pages to go in
  const mainContainer = createDiv();
  mainContainer.id = "main-container";

  // Append items
  content.appendChild(btnContainer);
  content.appendChild(mainContainer);

  return content, btnContainer, mainContainer;
}

// Choose page
function choosePage() {
  let btn = document.querySelectorAll(".btn");

  // Select page
  btn.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (e.target.id === "home-btn") {
        loadHome();
      } else if (e.target.id === "menu-btn") {
      } else if (e.target.id === "contact-btn") {
      }
    });
  });
}

// Initate all
function initiatePage() {
  createPageStructure();
  choosePage();
}

initiatePage();
