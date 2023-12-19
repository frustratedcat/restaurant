"use strict";

// Import functions
import { createDiv } from "./shared";
import { createH1 } from "./shared";
import { createH2 } from "./shared";
import { createP } from "./shared";
import { createUl } from "./shared";
import { createLi } from "./shared";

// Create beverages section
function createBeverages() {
  const beveragesSection = createDiv();
  beveragesSection.id = "beverages-section";
}

// Add all items to page
function createMenu() {
  const menuContainer = createDiv();
  menuContainer.id = "menu-container";
  menuContainer.appendChild(createH1("Menu"));

  // Append items
}
