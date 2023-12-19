"use strict";

// Create all elements
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
function createContact() {
  // Create div container and add ID
  const contactContainer = createDiv();
  contactContainer.id = "hours-container";

  // Append items
  contactContainer.appendChild(createH2("Contact:"));
  contactContainer.appendChild(createP("123 nunya biz"));

  return contactContainer;
}

// Add all items to page
function createHome() {
  const mainContainer = createDiv();
  mainContainer.id = "main-container";
  mainContainer.appendChild(createH1("Welcome to the Frustrated Cat"));

  // Append About section
  mainContainer.appendChild(createAbout());

  //Append Hours section
  mainContainer.appendChild(createHours());

  //Append Contact section
  mainContainer.appendChild(createContact());

  return mainContainer;
}

// Push all items to main page
function loadHome() {
  const content = document.getElementById("content");
  content.appendChild(createHome());
}

export default loadHome;
