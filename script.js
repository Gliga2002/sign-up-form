const form = document.querySelector(".form-container");
const password = document.querySelector(".password");
const passwordConfirm = document.querySelector('.password-confirm');
const error = document.querySelector('.error');


let prevClickedSpan;
let passwordUser = '';
let confirmedPasswordUser = '';


form.addEventListener('click', (e) => {
  let clickedSpan;
  let clickedInput;
  clickedSpan = e.target.closest('span');
  clickedInput = e.target.closest('input');
  if(!clickedInput && !clickedSpan) {
    if(prevClickedSpan) prevClickedSpan.classList.remove('clicked');
    return;
  }
  console.log('clicked');
  if(clickedInput) {
    clickedSpan = clickedInput.nextElementSibling ;
  } else if (clickedSpan) {
    clickedInput = clickedSpan.previousElementSibling;
  }
  clickedInput.focus();
  if(prevClickedSpan) prevClickedSpan.classList.remove('clicked');
  clickedSpan.classList.add('clicked');
  prevClickedSpan = clickedSpan;
})

password.addEventListener('keypress', (e) => {
  passwordUser += e.key;
  console.log(passwordUser);
  if(passwordUser.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")) {
    password.classList.remove('password')
  }
})

password.addEventListener('keydown', (e) => {
  if(e.key === 'Backspace' && passwordUser.length > 0) {
    passwordUser = passwordUser.slice(0,-1);
  }

})

passwordConfirm.addEventListener('keypress', (e) => {
  confirmedPasswordUser += e.key
  if(confirmedPasswordUser === passwordUser) {
    error.textContent = "";
    passwordConfirm.classList.remove('password-confirm');
  } else {
    error.textContent = "*Password did not match!" 
  }
  console.log(e.key);
})

passwordConfirm.addEventListener('keydown', (e) => {
  if(e.key === 'Backspace' && confirmedPasswordUser.length > 0) {
    confirmedPasswordUser = confirmedPasswordUser.slice(0,-1);
  }

})


// formm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const inputs = document.querySelectorAll('inputs');
//   inputs.forEach(input=> {
//     console.log(input);
//   })
// })
