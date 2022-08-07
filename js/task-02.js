const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsConteinerEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingridientsEl = document.createElement('li');
  ingridientsEl.textContent = ingredient;
  ingridientsEl.classList.add('item');

  return ingridientsEl;
});

ingredientsConteinerEl.append(...elements);
