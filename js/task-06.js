const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    textInputEl.classList.remove("invalid");
    textInputEl.classList.add("valid");
    return;
  }

  textInputEl.classList.remove("valid");
  textInputEl.classList.add("invalid");
});
