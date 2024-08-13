
const buttons = document.querySelectorAll('button');
function NextSlide(e) {
  e.preventDefault();

  // проверка 
  const hasAt = inputEmail.value.includes('@');
  const reg = /[A-Za-zA-Яа-яЁё]/;
  if(!reg){
    inputName.className = 'border'; 
  }else{

  }
  if(!hasAt){
    inputEmail.className = 'border'; 
  }else{

  }

  const form = this.parentNode;
  const currentStep = form.dataset.step;
  const nextStep = Number(currentStep) + 1;
  form.style = 'display: none;';
  const nextForm = document.querySelector(`form[data-step="${nextStep}"]`);
  nextForm.style = 'display: block;'
}

function UpdateTabColor(NewIndex) {
  for (let i = 0; i < 3; i++) {
    if (i == NewIndex) {
      point[i].className = "point active";  
    } else {
      point[i].className = "point";
    }
  }
}

// TODO: Если в строке есть символ @ — то всё корректно
// Сделать проверку, и покрасить инпут в красный цвет, если неприавльно. Не давать форме листаться дальше
// let reg = /[A-Za-zA-Яа-яЁё]/;
// document.getElementById('ContButton1').onclick = function (e) {
//   e.preventDefault();
//   if (reg.test(inputName.value)) {
//     NextSlide();
//   }
// }

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputExperiemce = document.getElementById('experience');
const inputDesign = document.getElementById('design');
const SumName = document.getElementById('SumName');
const SumEmail = document.getElementById('SumEmail');
const SumExperience = document.getElementById('SumExperience');
const SumDesign = document.getElementById('SumDesign');
const ConfButton = document.getElementById('ConfButton');
const point = document.querySelectorAll('.point');
const active = document.querySelector('.active');
const pointOne = document.getElementById('pointOne');
const pointTwo = document.getElementById('pointTwo');
const pointThree = document.getElementById('pointThree');
const form = document.querySelectorAll('form');
const ContButton1 = document.getElementById('ContButton1');
const ContButton2 = document.getElementById('ContButton2');

ConfButton.addEventListener('click', function (e) {
  alert("Спасибо");
});

ContButton1.addEventListener('click', function (e){
  e.preventDefault();
  const hasAt = inputEmail.value.includes('@');
  let bool = false;
  if(inputName.value.length == 0 ){
    inputName.classList.add('border'); 
    bool = true;
  }
  if(!hasAt){
    inputEmail.classList.add('border'); 
    bool = true;
  }
  if(bool == true){
    return;
  }
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${2}"]`);
  nextForm.style = 'display: block;';
})
ContButton2.addEventListener('click', function (e){
  e.preventDefault();
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${3}"]`);
  nextForm.style = 'display: block;';
})
inputName.addEventListener('input', () => SumName.value = inputName.value);
inputEmail.addEventListener('input', () => SumEmail.value = inputEmail.value);
inputExperiemce.addEventListener('input', () => SumExperience.value = inputExperiemce.value);
inputDesign.addEventListener('input', () => SumDesign.value = inputDesign.value);

pointOne.addEventListener('click', function (e) {
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${1}"]`);
  nextForm.style = 'display: block;';
  index = 0;
  UpdateTabColor(index);
});

pointTwo.addEventListener('click', function (e) {
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${2}"]`);
  nextForm.style = 'display: block;'
  index = 1;
  UpdateTabColor(index);
});

pointThree.addEventListener('click', function (e) {
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${3}"]`);
  nextForm.style = 'display: block;';
  index = 2;
  UpdateTabColor(index);
});
