
// Selecting Elements:
// Select by ID
var elementById = document.getElementById("myElementId");

// Select by class name
var elementsByClass = document.getElementsByClassName("myClassName");

// Select by tag name
var elementsByTag = document.getElementsByTagName("div");

// Select using CSS selector
var elementBySelector = document.querySelector("#myElementId .myClassName");


// Modifying Elements:
// Change text content
elementById.textContent = "New content";

// Change HTML content
elementById.innerHTML = "<strong>New content</strong>";

// Change attribute value
elementById.setAttribute("src", "new-image.jpg");

// Change CSS styles
elementById.style.color = "red";


// Creating and Appending Elements:
// Create a new element
var newElement = document.createElement("div");

// Set content or attributes
newElement.textContent = "New element content";
newElement.setAttribute("class", "newElementClass");

// Append to an existing element
document.body.appendChild(newElement);


// Event Handling:
// Add a click event listener
elementById.addEventListener("click", function () {
    alert("Element clicked!");
});


// Traversing the DOM:
// Get parent element
var parentElement = elementById.parentNode;

// Get first child element
var firstChild = parentElement.firstChild;

// Get next sibling element
var nextSibling = elementById.nextSibling;
