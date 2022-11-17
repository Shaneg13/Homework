// print the outer HTML of the navigation bar

// print the inner HTML of the navigation bar

// print the text content of the #class-schedule-list element

// select the classList for the first class-week, then add the class "week-1"

// select the img element and add a src attribute

// change the font color of the h1 element

// original HTML:

// <img id="dog-photo" src="https://live.staticflickr.com/5216/5520217922_93a02fae7c_b.jpg">

document.querySelector("#dog-photo").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// current HTML:
// <img id="dog-photo" src="https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg">

// To set multiple styles in a single statement ...
document.querySelector("main > p").style.cssText =
  "color: blue; border: 1px solid black";

// To Set a specific style while leaving other inline style values untouched
document.querySelector("main > p").style.color = "red";

// HTML code includes:
// <header>
//  <h1>Site Title</h1>
// <header>

document.querySelector(`header`).textContent;
// returns:
//  Site Title

document.querySelector(`header > h1`).textContent;
// returns:
//  Site Title

// HTML includes:
// <main>
//  <h2>Some Header</h2>
//  <p>Some text. <a href="https://www.lipsum.com/">Lorem ipsum.</a></p>
// </main>

document.querySelector("main > p").textContent;
// returns:
//  Some text. Lorem ipsum.

document.querySelector("main").textContent;
// returns:
//  Some Header
//  Some text. Lorem ipsum.
//
document.querySelector("header").innerHTML;
// returns:
//  <h1>Site Title</h1>

document.querySelector(`header > h1`).innerHTML;
// returns:
//  Site Title
// HTML code includes:
// <header>
//  <h1>Site Title</h1>
// <header>

document.querySelector("header").outerHTML;
// returns:
//  <header>
//    <h1>Site Title</h1>
//  <header>