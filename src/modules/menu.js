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
  beveragesSection.classList.add("menu-grid");

  // Create list of items
  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Water"));
    list.appendChild(createLi("Tea"));
    list.appendChild(createLi("Lemonade"));

    return list;
  };

  // Append items
  beveragesSection.appendChild(createH2("Beverages:"));
  beveragesSection.appendChild(createList());

  return beveragesSection;
}

// Create appetizers section
function createAppetizers() {
  const appetizersSection = createDiv();
  appetizersSection.id = "appetizers-section";
  appetizersSection.classList.add("menu-grid");

  // Create list of items
  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Nachos"));
    list.appendChild(createLi("Nuggs"));
    list.appendChild(createLi("Fries"));

    return list;
  };

  //Append items
  appetizersSection.appendChild(createH2("Appetizers:"));
  appetizersSection.appendChild(createList());

  return appetizersSection;
}

// Create entree section
function createEntree() {
  const entreeSection = createDiv();
  entreeSection.id = "entree-section";
  entreeSection.classList.add("menu-grid");

  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Steak"));
    list.appendChild(createLi("Chicken"));
    list.appendChild(createLi("Tacos"));

    return list;
  };

  // Append items
  entreeSection.appendChild(createH2(`Entr\u00e9es:`));
  entreeSection.appendChild(createList());

  return entreeSection;
}

// Create dessert section
function createDeset() {
  const dessertSection = createDiv();
  dessertSection.id = "dessert-section";
  dessertSection.classList.add("menu-grid");

  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Cookie"));
    list.appendChild(createLi("Ice Cream"));
    list.appendChild(createLi("Cake"));

    return list;
  };

  // Append items
  dessertSection.appendChild(createH2("Desserts:"));
  dessertSection.appendChild(createList());

  return dessertSection;
}

// Add all items to page
export default function loadMenu() {
  const menuContainer = createDiv();
  menuContainer.id = "menu-container";
  menuContainer.appendChild(createH1("Menu"));

  // Append items
  menuContainer.appendChild(createBeverages());
  menuContainer.appendChild(createAppetizers());
  menuContainer.appendChild(createEntree());
  menuContainer.appendChild(createDeset());

  return menuContainer;
}
