// client-side JavaScript to handle events in the browser

// the querySelector function returns the first element in the document
// that matches the specified CSS selector (e.g., h1)

const myHeading = document.querySelector("h1");

// javascript can modify an attribute of an HTML element
myHeading.textContent = "Hello world!";

// the querySelector method can also be used to select elements by class name
const button = document.querySelector("button.demo");

// the addEventListener function attaches an event handler (i.e., function)
// to the specified element (i.e., button) for the specified event (i.e., "click")
button.addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
