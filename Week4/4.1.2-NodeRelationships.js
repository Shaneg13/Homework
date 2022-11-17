// select the root node

const main = document.querySelector(".main-content");
const body = document.querySelector("body");
const header = document.querySelector("h2");

// select the last child of the root node

console.log(main.lastElementChild);

// select all the children of the body element

console.log(body.children[1]);

// select the next sibling of the h2 node

console.log(header.nextElementSibling);

// select the parent element of the h1 node

console.log(document.querySelector("h1").parentElement);
