const fontControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
