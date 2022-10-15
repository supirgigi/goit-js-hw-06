function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const documentBodyEl = document.querySelector("body");
const changeBodyBackgroundColorBtn = document.querySelector(
  "button.change-color"
);
const colorValueEl = document.querySelector("span.color");

changeBodyBackgroundColorBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  documentBodyEl.style.backgroundColor = color;
  colorValueEl.textContent = color;
});
