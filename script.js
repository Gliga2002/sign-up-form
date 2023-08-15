const form = document.querySelector(".form-container");

let prevClickedSpan;


form.addEventListener('click', (e) => {
  let clickedSpan;
  let clickedInput;
  clickedSpan = e.target.closest('span');
  clickedInput = e.target.closest('input');
  if(!clickedInput && !clickedSpan) return;
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
