const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const trimmedValue = event.target.value.trim();
  if (trimmedValue.length !== 0) {
    output.textContent = trimmedValue;
  } else {
    output.textContent = 'Anonymous';
  }
});
