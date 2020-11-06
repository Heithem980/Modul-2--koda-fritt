const box = document.querySelector(".box");
const addColorForm = document.querySelector(".addColor");
const userInput = document.querySelector(".input");
const colorName = document.querySelector(".header");
let selectedColor;

// IIFE
(function () {
  addColorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    selectedColor = userInput.value;
    changeColor();
    userInput.value = "";
  });

  // event listeners to custom Event
  box.addEventListener("addedColor", (e) => {
    box.style.backgroundColor = e.detail.color;
  });

  colorName.addEventListener("addedColor", (e) => {
    colorName.innerText = e.detail.color;
  });

  // function changeColor creates new costum Event
  function changeColor() {
    const event = new CustomEvent("addedColor", {
      detail: { color: selectedColor },
    });
    box.dispatchEvent(event);
    colorName.dispatchEvent(event);
  }
})();
