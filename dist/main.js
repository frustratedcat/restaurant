(()=>{"use strict";function t(){return document.createElement("div")}function n(t){const n=document.createElement("h2");return n.textContent=t,n}function e(t){const n=document.createElement("p");return n.textContent=t,n}function d(t){const n=document.createElement("li");return n.textContent=t,n}function a(t){const n=document.createElement("button");return n.setAttribute("type","button"),n.textContent=t,n}function o(){const a=t();return a.id="home-container",a.appendChild(function(t){const n=document.createElement("h1");return n.textContent="Welcome to the Frustrated Cat",n}()),a.appendChild(function(){const d=t();return d.id="about-container",d.appendChild(n("About:")),d.appendChild(e("Greetings, traveler, I am the Frustrated Cat. The Frustrated Cat is the greatest restaurant ever. That's all you need to know.")),d}()),a.appendChild(function(){const e=t();return e.id="hours-container",e.appendChild(n("Hours:")),e.appendChild((()=>{const t=document.createElement("ul");return t.appendChild(d("Monday")),t.appendChild(d("Tuesday")),t.appendChild(d("Wednesday")),t.appendChild(d("Thursday")),t.appendChild(d("Friday")),t.appendChild(d("Saturday")),t.appendChild(d("Sunday")),t})()),e}()),a.appendChild(function(){const d=t();return d.id="location-container",d.appendChild(n("Location:")),d.appendChild(e("123 nunya biz")),d}()),a}!function(){const n=document.getElementById("content"),e=t();e.id="btn-container";const d=(()=>{const t=a("Home"),n=a("Menu"),e=a("Contact");return t.id="home-btn",n.id="menu-btn",e.id="contact-btn",t.classList.add("btn"),n.classList.add("btn"),e.classList.add("btn"),{homeBtn:t,menuBtn:n,contactBtn:e}})();e.appendChild(d.homeBtn),e.appendChild(d.menuBtn),e.appendChild(d.contactBtn);const o=t();o.id="main-container",n.appendChild(e),n.appendChild(o)}(),document.querySelectorAll(".btn").forEach((t=>{t.addEventListener("click",(t=>{"home-btn"===t.target.id?document.getElementById("content").appendChild(o()):"menu-btn"===t.target.id||t.target.id}))}))})();