const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('click', onControl);

function onControl() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
