const form = document.querySelector(".form-container");
const password = document.querySelector(".password");
const passwordConfirm = document.querySelector('.password-confirm');
const error = document.querySelector('.error');
const allInputs = document.querySelectorAll('input');

const realArray = [...allInputs];





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

realArray.forEach((input)=> {
  input.addEventListener('keyup',(e) => {
    if(e.target.value.length > 0) {
      console.log('ovde')
      e.target.classList.add('checked');
    } else {
      e.target.classList.remove('checked');
    }
  })
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




