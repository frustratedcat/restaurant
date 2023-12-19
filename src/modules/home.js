"use strict";

// Import functions
import { createDiv } from "./shared";
import { createH1 } from "./shared";
import { createH2 } from "./shared";
import { createP } from "./shared";
import { createUl } from "./shared";
import { createLi } from "./shared";

// Create about section of page
function createAbout() {
  // Create div container and add ID
  const aboutContainer = createDiv();
  aboutContainer.id = "about-container";

  // Append items
  aboutContainer.appendChild(createH2("About:"));
  aboutContainer.appendChild(
    createP(
      "Greetings, traveler, I am the Frustrated Cat. The Frustrated Cat is the greatest restaurant ever. That's all you need to know."
    )
  );

  return aboutContainer;
}

// Create function to show restaurant hours on screen
function createHours() {
  // Create div container and add ID
  const hoursContainer = createDiv();
  hoursContainer.id = "hours-container";

  // Append items
  hoursContainer.appendChild(createH2("Hours:"));

  // Create list of hours
  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("Monday"));
    list.appendChild(createLi("Tuesday"));
    list.appendChild(createLi("Wednesday"));
    list.appendChild(createLi("Thursday"));
    list.appendChild(createLi("Friday"));
    list.appendChild(createLi("Saturday"));
    list.appendChild(createLi("Sunday"));

    return list;
  };

  // Append items
  hoursContainer.appendChild(createList());

  return hoursContainer;
}

// Create contact section of page
function createLocation() {
  // Create div container and add ID
  const contactContainer = createDiv();
  contactContainer.id = "location-container";

  // Append items
  contactContainer.appendChild(createH2("Location:"));
  contactContainer.appendChild(createP("123 nunya biz"));

  return contactContainer;
}

// Add all items to page
function createHome() {
  const homeContainer = createDiv();
  homeContainer.id = "home-container";
  homeContainer.appendChild(createH1("Welcome to the Frustrated Cat"));

  // Append each section
  homeContainer.appendChild(createAbout());
  homeContainer.appendChild(createHours());
  homeContainer.appendChild(createLocation());

  return homeContainer;
}

// Push all items to home page
export default function loadHome() {
  const content = document.getElementById("content");
  content.appendChild(createHome());
}
