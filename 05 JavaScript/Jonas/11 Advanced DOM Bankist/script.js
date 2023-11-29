"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTO = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTO.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Lectures

// Selecting Elements...
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector(".header"));
console.log(document.querySelectorAll(".section"));

console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByClassName("btn"));

// Creating and Inserting elements...
// First Create Element Then Add Class Then Add Content or Add Content with Element and Then Inserting it!
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = `We use cookied for improved functionality and analytics.`;
message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn-close-cookie">Got it!</button>`;
// document.querySelector(".header").prepend(message);
// document.querySelector(".header").append(message);
// document.querySelector(".header").before(message);
// document.querySelector(".header").after(message);

// Deleting Elements...
// document
//   .querySelector(".btn-close-cookie")
//   .addEventListener("click", () => message.remove());

// Styles...
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes...
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";
logo.setAttribute("designer", "Jouns");
console.log(logo.alt);
console.log(logo.designer);
console.log(logo.getAttribute("designer"));

console.log(logo.src);
console.log(logo.getAttribute("src"));

// Classes
logo.classList.add("c");
logo.classList.toggle("c");
logo.classList.remove("c");
console.log(logo.classList.contains("c"));

// Don't use
// logo.className = "Diab";
