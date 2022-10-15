const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsItems = [];

ingredients.forEach((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add("item");
  ingredientsItems.push(ingredientsItemEl);
});

ingredientsListEl.append(...ingredientsItems);
