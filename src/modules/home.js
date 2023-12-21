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
  aboutContainer.classList.add("home-grid");

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
  hoursContainer.classList.add("home-grid");

  // Append items
  hoursContainer.appendChild(createH2("Hours:"));

  // Create list of hours
  const createList = () => {
    const list = createUl();

    const createMonday = createLi();
    createMonday.classList.add("hours-of-operation");
    createMonday.appendChild(createP("Monday"));
    createMonday.appendChild(createP("8am - 6pm"));

    const createTuesday = createLi();
    createTuesday.classList.add("hours-of-operation");
    createTuesday.appendChild(createP("Tuesday"));
    createTuesday.appendChild(createP("8am - 6pm"));

    const createWednesday = createLi();
    createWednesday.classList.add("hours-of-operation");
    createWednesday.appendChild(createP("Wednesday"));
    createWednesday.appendChild(createP("8am - 6pm"));

    const createThursday = createLi();
    createThursday.classList.add("hours-of-operation");
    createThursday.appendChild(createP("Thursday"));
    createThursday.appendChild(createP("8am - 6pm"));

    const createFriday = createLi();
    createFriday.classList.add("hours-of-operation");
    createFriday.appendChild(createP("Friday"));
    createFriday.appendChild(createP("8am - 6pm"));

    const createSaturday = createLi();
    createSaturday.classList.add("hours-of-operation");
    createSaturday.appendChild(createP("Saturday"));
    createSaturday.appendChild(createP("8am - Until we say go away"));

    const createSunday = createLi();
    createSunday.classList.add("hours-of-operation");
    createSunday.appendChild(createP("Sunday"));
    createSunday.appendChild(createP("Go away"));

    list.appendChild(createMonday);
    list.appendChild(createTuesday);
    list.appendChild(createWednesday);
    list.appendChild(createThursday);
    list.appendChild(createFriday);
    list.appendChild(createSaturday);
    list.appendChild(createSunday);

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
  contactContainer.classList.add("home-grid");

  // Append items
  contactContainer.appendChild(createH2("Location:"));
  contactContainer.appendChild(createP("123 Nunya Biz"));

  return contactContainer;
}

// Add all items to page
export default function loadHome() {
  const homeContainer = createDiv();
  homeContainer.id = "home-container";
  homeContainer.appendChild(createH1("Welcome to the Frustrated Cat"));

  // Append each section
  homeContainer.appendChild(createAbout());
  homeContainer.appendChild(createHours());
  homeContainer.appendChild(createLocation());

  return homeContainer;
}
