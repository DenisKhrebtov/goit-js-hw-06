const minus = document.querySelector('[data-action="decrement"]');
const plus = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let startValue = 0;

plus.addEventListener('click', () => {
  startValue += 1;
  counterValue.textContent = startValue;
});

minus.addEventListener('click', () => {
  startValue -= 1;
  counterValue.textContent = startValue;
});
