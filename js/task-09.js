function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector('.color');
const butnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

butnEl.addEventListener('click', function () {
  let fu = getRandomHexColor();
  bodyEl.style.backgroundColor = fu;
  colorEl.textContent = fu;
});
