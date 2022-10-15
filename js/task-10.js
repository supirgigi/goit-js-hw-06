function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsInputEl = document.querySelector("#controls input");
const collectionEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnClick);

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    boxes.push(box);
  }

  collectionEl.append(...boxes);
}

function onDestroyBtnClick() {
  collectionEl.innerHTML = "";
  controlsInputEl.value = "";
}

function onCreateBtnClick() {
  createBoxes(controlsInputEl.value);
}
