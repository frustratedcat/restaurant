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

  // Create list of items
  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Water"));
    list.appendChild(createLi("Tea"));
    list.appendChild(createLi("Lemonade"));

    return list;
  };

  // Append items
  beveragesSection.appendChild(createList());

  return beveragesSection;
}

// Create appetizers section
function createAppetizers() {
  const appetizersSection = createDiv();
  appetizersSection.id = "appetizers-section";

  // Create list of items
  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Nachos"));
    list.appendChild(createLi("Nuggs"));
    list.appendChild(createLi("Fries"));

    return list;
  };

  //Append items
  appetizersSection.appendChild(createList());

  return appetizersSection;
}

// Create entre section
function createEntre() {
  const entreSection = createDiv();
  entreSection.id = "entre-section";

  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Steak"));
    list.appendChild(createLi("Chicken"));
    list.appendChild(createLi("Tacos"));

    return list;
  };

  // Append items
  entreSection.appendChild(createList());

  return entreSection;
}

// Create desert section
function createDeset() {
  const desertSection = createDiv();
  desertSection.id = "desert-section";

  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Cookie"));
    list.appendChild(createLi("Ice Cream"));
    list.appendChild(createLi("Cake"));

    return list;
  };

  // Append items
  desertSection.appendChild(createList());

  return desertSection;
}

// Add all items to page
export default function loadMenu() {
  const menuContainer = createDiv();
  menuContainer.id = "menu-container";
  menuContainer.appendChild(createH1("Menu"));

  // Append items
  menuContainer.appendChild(createBeverages());
  menuContainer.appendChild(createAppetizers());
  menuContainer.appendChild(createEntre());
  menuContainer.appendChild(createDeset());

  return menuContainer;
}
