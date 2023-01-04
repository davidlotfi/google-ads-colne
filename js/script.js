let stepform =document.getElementsByClassName('form_etap');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev');
let terminer = document.getElementById('terminer-btn');

let current_step = 0;
let stepCount = 3;

stepform[current_step].classList.add('d-block');
prevBtn.classList.add('d-none');
