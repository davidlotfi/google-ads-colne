let stepform =document.getElementsByClassName('form_etap');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev');
let terminerBtn = document.getElementById('terminer-btn');
let succcessDiv = document.getElementById('success');


let count = stepform.length
let current_step = 0;
let stepCount = count - 1; // or declarer tel que variable static avec 3(nbr of form) :

stepform[current_step].classList.add('d-block');
if (current_step == 0) {
prevBtn.classList.add('d-none');
terminerBtn.classList.add('d-none');
}


const progress = (value) => {
document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click',() => {
current_step++;
let previous_step = current_step - 1;
if ((current_step > 0) && (current_step <= stepCount)) {
  prevBtn.classList.remove('d-none');
  prevBtn.classList.add('d-block');
  stepform[current_step].classList.remove('d-none');
  stepform[current_step].classList.add('d-block');
  stepform[previous_step].classList.remove('d-block');
  stepform[previous_step].classList.add('d-none');
  if (current_step == stepCount) {
    terminerBtn.classList.remove('d-none');
    terminerBtn.classList.add('d-block');
    nextBtn.classList.remove('d-block');
    nextBtn.classList.add('d-none');
  }
}
progress((100 / stepCount) * current_step);
});

prevBtn.addEventListener('click',() =>{
  if (current_step > 0) {
    current_step--;
let previous_step = current_step + 1;
stepform[current_step].classList.remove('d-none');
stepform[current_step].classList.add('d-block')
stepform[previous_step].classList.remove('d-block');
stepform[previous_step].classList.add('d-none');
if (current_step < stepCount) {
  terminerBtn.classList.remove('d-block');
  terminerBtn.classList.add('d-none');
  nextBtn.classList.remove('d-none');
  nextBtn.classList.add('d-block');
  prevBtn.classList.remove('d-none');
  prevBtn.classList.add('d-block');

}
  }
  if (current_step == 0) {
    prevBtn.classList.remove('d-block');
    prevBtn.classList.add('d-none');
  }
progress((100 / stepCount) * current_step);
});

terminerBtn.addEventListener('click', ()=>{

  stepform[stepCount].classList.remove('d-block');
  stepform[stepCount].classList.add('d-none');
  prevBtn.classList.remove('d-block');
  prevBtn.classList.add('d-none');
  terminerBtn.classList.remove('d-block');
  terminerBtn.classList.add('d-none');
  succcessDiv.classList.remove('d-none');
  succcessDiv.classList.add('d-block');

});
