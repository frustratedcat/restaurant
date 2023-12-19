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

function createBtn(text) {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.textContent = text;
  return btn;
}

export {
  createDiv,
  createH1,
  createH2,
  createP,
  createUl,
  createLi,
  createBtn,
};
