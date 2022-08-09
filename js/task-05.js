const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputEl);

function onInputEl() {
  if (inputEl.value === '') {
    return (outputEl.textContent = 'Anonymous');
  }
  return (outputEl.textContent = event.currentTarget.value);
}
