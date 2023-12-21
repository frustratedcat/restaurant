"use strict";

// Import functions
import { createDiv } from "./shared";
import { createH1 } from "./shared";
import { createH2 } from "./shared";
import { createH3 } from "./shared";
import { createP } from "./shared";
import { createUl } from "./shared";
import { createLi } from "./shared";

// Create contact info
export default function loadContact() {
  const contactContainer = createDiv();
  contactContainer.id = "contact-container";
  contactContainer.appendChild(createH1("Contact"));

  // Add items
  const createList = () => {
    const list = createUl();

    const address = createLi();
    address.classList.add("contact-grid");
    address.appendChild(createH3("Address:"));
    address.appendChild(createP("123 Nunya Biz"));

    const phone = createLi();
    phone.classList.add("contact-grid");
    phone.appendChild(createH3("Phone Number:"));
    phone.appendChild(createP("1-800-0GO-AWAY"));

    const email = createLi();
    email.classList.add("contact-grid");
    email.appendChild(createH3("Email:"));
    email.appendChild(createP("frustratedcat@go.away"));

    list.appendChild(address);
    list.appendChild(phone);
    list.appendChild(email);

    return list;
  };

  // Append items
  contactContainer.appendChild(createH2("The Frustrated Cat"));
  contactContainer.appendChild(createList());

  return contactContainer;
}
