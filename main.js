(()=>{"use strict";function e(){return document.createElement("div")}function t(e){const t=document.createElement("h2");return t.textContent=e,t}function n(e){const t=document.createElement("p");return t.textContent=e,t}function d(e){const t=document.createElement("li");return t.textContent=e,t}function a(){const a=e();return a.id="main-container",a.appendChild(function(e){const t=document.createElement("h1");return t.textContent="Welcome to the Frustrated Cat",t}()),a.appendChild(function(){const d=e();return d.id="about-container",d.appendChild(t("About:")),d.appendChild(n("Greetings, traveler, I am the Frustrated Cat. The Frustrated Cat is the greatest restaurant ever. That's all you need to know.")),d}()),a.appendChild(function(){const n=e();return n.id="hours-container",n.appendChild(t("Hours:")),n.appendChild((()=>{const e=document.createElement("ul");return e.appendChild(d("Monday")),e.appendChild(d("Tuesday")),e.appendChild(d("Wednesday")),e.appendChild(d("Thursday")),e.appendChild(d("Friday")),e.appendChild(d("Saturday")),e.appendChild(d("Sunday")),e})()),n}()),a.appendChild(function(){const d=e();return d.id="hours-container",d.appendChild(t("Contact:")),d.appendChild(n("123 nunya biz")),d}()),a}document.getElementById("content"),document.getElementById("content").appendChild(a())})();