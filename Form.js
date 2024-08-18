
function UpdateTabColor(NewIndex) {
  for (let i = 0; i < 3; i++) {
    if (i == NewIndex) {
      point[i].className = "point active";  
    } else {
      point[i].className = "point";
    }
  }
}

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
  let boolName = false;
  let boolEmail = false;
  if(inputName.value.length == 0 ){
    inputName.classList.add('border'); 
    boolName = true;
  }else if(inputName.value.length !== 0 ){
    inputName.classList.remove('border'); 
    boolName = false;
  }
  if(!hasAt){
    inputEmail.classList.add('border'); 
    boolEmail = true;
  }else if(hasAt){
    inputEmail.classList.remove('border'); 
    boolEmail = false;
  }
  if(boolName == true || boolEmail == true){
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
