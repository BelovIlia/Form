
function UpdateTabColor(NewIndex) {
  for (let i = 0; i < 3; i++) {
    if (i == NewIndex) {
      point[i].className = "point active";  
    } else {
      point[i].className = "point";
    }
  }
}

function changeChoosedValues(values) {
  labelForm.innerHTML = "";
  if (values.length === 0) {
    labelForm.innerHTML = "<li>Ничего не выбрано</li>";
    return;
  }

  for (const value of values) {
    labelForm.innerHTML = `${labelForm.innerHTML}<li>${value}</li>`;
  }
}
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputExperiemce = document.getElementById('experience');
const inputDesign = document.getElementById('design');
const sumName = document.getElementById('sumName');
const sumEmail = document.getElementById('sumEmail');
const sumExperience = document.getElementById('sumExperience');
const sumDesign = document.getElementById('sumDesign');
const confButton = document.getElementById('confButton');
const point = document.querySelectorAll('.point');
const active = document.querySelector('.active');
const pointOne = document.getElementById('pointOne');
const pointTwo = document.getElementById('pointTwo');
const pointThree = document.getElementById('pointThree');
const form = document.querySelectorAll('form');
const contButton1 = document.getElementById('contButton1');
const contButton2 = document.getElementById('contButton2');
const labelForm = document.querySelector('.elem__form-topic');
const checkboxes = document.querySelectorAll(".custom-checkbox > input");
const step = document.querySelector('.step');

confButton.addEventListener('click', function (e) {
  alert("Спасибо");
});

contButton1.addEventListener('click', function (e){
  e.preventDefault();
  const hasAt = inputEmail.value.includes('@');
  const errors = [];
  if(inputName.value.length == 0 ){
    inputName.classList.add('border'); 
    errors.push(inputName.name);
  }else if(inputName.value.length !== 0 ){
    inputName.classList.remove('border'); 
  }
  if(!hasAt){
    inputEmail.classList.add('border'); 
    errors.push(inputEmail.name);
  }else if(hasAt){
    inputEmail.classList.remove('border'); 
  }
  if(errors.length !== 0){
    return;
  }
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${2}"]`);
  nextForm.style = 'display: block;';
  index = 1;
  UpdateTabColor(index);
})

inputName.addEventListener('input', () => sumName.value = inputName.value);
inputEmail.addEventListener('input', () => sumEmail.value = inputEmail.value);



// pointOne.addEventListener('click', function (e) {
//   for(i = 0;  i < form.length ; i++){
//     form[i].style = 'display: none';
//   }
//   const nextForm = document.querySelector(`form[data-step="${1}"]`);
//   nextForm.style = 'display: block;';
//   index = 0;
//   UpdateTabColor(index);
// });

// pointTwo.addEventListener('click', function (e) {
//   for(i = 0;  i < form.length ; i++){
//     form[i].style = 'display: none';
//   }
//   const nextForm = document.querySelector(`form[data-step="${2}"]`);
//   nextForm.style = 'display: block;'
//   index = 1;
//   UpdateTabColor(index);
// });

// pointThree.addEventListener('click', function (e) {
//   for(i = 0;  i < form.length ; i++){
//     form[i].style = 'display: none';
//   }
//   const nextForm = document.querySelector(`form[data-step="${3}"]`);
//   nextForm.style = 'display: block;';
//   index = 2;
//   UpdateTabColor(index);
// });

contButton2.addEventListener('click', function (e){
  e.preventDefault();
  const choosedValues = [];
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      choosedValues.push(checkbox.name);
    }
  }
  if(choosedValues.length == 0){
    return;
  }
  changeChoosedValues(choosedValues);
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${3}"]`);
  nextForm.style = 'display: block;';
  index = 2;
  UpdateTabColor(index);
})
