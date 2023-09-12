const form = document.querySelector(".form-container");
const inputContainerPasswordConfirm = document.querySelector('.password--confirm');
const errorEl = document.querySelector('.error-message');
const inputsNodeList = document.querySelectorAll('input');
const inputsArray = [...inputsNodeList];

let prevClickedContainerEl;
form.addEventListener('click', (e) => {
  const inputContainerEl = e.target.closest('.input-container');
  const inputContainerPasswordEl = e.target.closest('.password')
  if (prevClickedContainerEl) removeClickedClass(prevClickedContainerEl);

  if (!inputContainerEl || inputContainerPasswordEl) return;

  inputContainerEl.classList.add('clicked');

  const inputContainerInputEl = inputContainerEl.children[0];
  inputContainerInputEl.focus();

  prevClickedContainerEl = inputContainerEl;
})

function removeClickedClass(el) {
  el.classList.remove('clicked');
}

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

let passwordFirstValue;
let passwordConfirmValue;

function handleDebouncedInput(e) {
  const inputValue = e.target.value;
  const inputContainerEl = e.target.closest('.input-container');
  const passwordFirstEl = e.target.closest('.password--first');
  const passwordConfirmEl = e.target.closest('.password--confirm');

  if (passwordFirstEl) {
    passwordFirstValue = inputValue;
    checkIfIsSame()
  }
  if (passwordConfirmEl) {
    passwordConfirmValue = inputValue;
    checkIfIsSame()
  }

  if (inputValue && !passwordConfirmEl) {
    inputContainerEl.classList.add('typed')
    if (passwordFirstEl) passwordFirstEl.classList.remove('error');
  } else {
    inputContainerEl.classList.remove('typed')
    if (passwordFirstEl) passwordFirstEl.classList.add('error');
  }

}

function checkIfIsSame() {
  if (passwordConfirmValue === passwordFirstValue) displayCorrectInput()
  else displayErrorInput();
}

function displayCorrectInput() {
  inputContainerPasswordConfirm.classList.add('correct');
  inputContainerPasswordConfirm.classList.remove('error');
  errorEl.innerHTML = '';
}

function displayErrorInput() {
  inputContainerPasswordConfirm.classList.remove('correct');
  inputContainerPasswordConfirm.classList.add('error');
  errorEl.innerHTML = 'Passwords do not match!'
}

const debouncedInput = debounce
  // Debounce for 500 milliseconds
  (handleDebouncedInput, 500);

inputsArray.forEach((input) => {
  input.addEventListener('input', debouncedInput)
})







