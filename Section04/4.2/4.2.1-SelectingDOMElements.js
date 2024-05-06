// select all unordered list (ul) elements
const ulist1 = document.querySelectorAll("ul");
const ulist2 = document.getElementsByTagName("ul");
// select all elements with the class "class-week"
const list1 = document.getElementsByClassName("class-week");
const list2 = document.querySelectorAll(".class-week");
// select all elements with the class "nav-bar"
//const list3 = document.getElementsByClassName("nav-bar");
const list3 = document.querySelectorAll("ul.nav-bar");
// select the element with the id "dog-picture" and save it to a variable
const pic = document.querySelector("#dog-picture");
/// Demonstrate complex selector that finds all the child li element under a ul with the class of nav-bar
const list4 = document.querySelectorAll("ul.nav-bar li");

//4.2.2-NodeRelationships.js

// select the root node
const root = document.querySelector("body");
// select the last child of the root node
const lastChild = root.lastElementChild;
// select all the children of the body element
const children = root.children;
// select the next sibling of the h2 node
const sibling = document.querySelector("h2").nextElementSibling;
// select the parent element of the h1 node
const parent = document.querySelector("h1").parentElement;

//4.2.3-ChangingElements.js

// print the outer HTML of the navigation bar
console.log(document.getElementById("unorderList").outerHTML);
// print the inner HTML of the navigation bar
console.log(document.getElementById("unorderList").innerHTML);
// print the text content of the h6 element
console.info(document.querySelector("h6").textContent);
// select the classList for the first class-week, then add the class "week-1"
document.querySelector("h2").classList.add("small text");
// select the img element and add a src attribute
document.querySelector("img").src = "https://path to image";

// change the font color of the h1 element
document.querySelector("h1").style.color = "purple";

//4.2.4-CreatingElements.js

// create a new unordered list (ul) element
// add your new ul element to the nav-bar
// create two new list item (li) elements, and add some text to them
// add the li elements to the ul in the nav-bar

const unorderdList = document.createElement("ul");
const listItem = document.createElement("li");
listItem.textContent = " My first Item";
listItem.style.color = "pink";
listItem.id = "my-item";
unorderdList.appendChild(listItem);
document.querySelector("body").appendChild(unorderdList);
// alternative to the above :
const unorderdList2 = document.createElement("ul");
unorderdList2.innerText = '<li style ="color:blue">my first item<li>';
document.querySelector("body").appendChild(unorderdList2);

// remove the paragraph element in the nav-bar
const h1Element = document.querySelector("h1");
h1Element.innerTtext = "something new";
h1Element.remove();

// alternative to the above :

const h1Element2 = document.querySelector("h1");
h1Element2.outerHTML = "";
h1Element2.outerHTML = "<h2>I just replaced the h1</h2>";

//4.2.5-EventListeners.js

// add an event listener to the dog picture that listens for a "click" and gives an alert
document.getElementById("my-items").addEventListener("click", event => {
  alert("my item was clicked");
  console.info("event", event);
});
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector("h3").addEventListener("mouseover", event => {
  event.target.stye.color = "red";
});

document.querySelector("h3").addEventListener("mouseout", event => {
  event.target.stye.color = "black";
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed

document
  .querySelector("a[href=hhtp://www.google.com]")
  .addEventListener("click", event => {
    event.preventDefault();
  });
