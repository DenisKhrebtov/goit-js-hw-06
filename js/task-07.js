const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onControl);

function onControl() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
