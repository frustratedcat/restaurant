"use strict";

// Import functions
import { createDiv } from "./shared";
import { createH1 } from "./shared";
import { createH2 } from "./shared";
import { createP } from "./shared";
import { createUl } from "./shared";
import { createLi } from "./shared";

// Create contact info
export default function loadContact() {
  const contactSection = createDiv();
  contactSection.id = "contact-section";
  contactSection.appendChild(createH1("Contact"));

  // Add items
  const createList = () => {
    const list = createUl();

    list.appendChild(createLi("The Frustrated Cat"));
    list.appendChild(createLi("Address"));
    list.appendChild(createLi("Phone Number"));
    list.appendChild(createLi("Email"));

    return list;
  };

  // Append items
  contactSection.appendChild(createList());

  return contactSection;
}
