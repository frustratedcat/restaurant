"use strict";

import loadHome from "./modules/home";

// Create buttons
function createBtns(text) {
  const newBtn = document.createElement("button");
  newBtn.setAttribute("type", "button");
  newBtn.textContent = text;

  return newBtn;
}

// Put buttons in content div
function createPageStructure() {
  const content = document.getElementById("content");

  // Create button container
  const btnContainer = document.createElement("div");
  btnContainer.id = "btn-container";

  //Create button elements
  const homeBtn = createBtns("Home");
  const menuBtn = createBtns("Menu");
  const contactBtn = createBtns("Contact");

  // Add IDs
  homeBtn.id = "home-btn";
  menuBtn.id = "menu-btn";
  contactBtn.id = "contact-btn";

  // Add classes
  homeBtn.classList.add("btn");
  menuBtn.classList.add("btn");
  contactBtn.classList.add("btn");

  // Add tab buttons
  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);

  // Create main container for all tabs pages to go in
  const mainContainer = document.createElement("div");
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
