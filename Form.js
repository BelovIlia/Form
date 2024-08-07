const buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click', function rerov(e) {
        e.preventDefault();

    const form = this.parentNode;
    const currentStep = form.dataset.step;
    const nextStep = Number(currentStep) + 1;
    form.style = 'display: none;';
    const nextForm = document.querySelector(`form[data-step="${nextStep}"]`);
    nextForm.style = 'display: block;'
    });
}


let reg = /[A-Za-zA-Яа-яЁё]/;
document.getElementById('.ContButton').onclick = function(e){
  e.preventDefault();
  if(!reg.test(inp.value)){
    rerov();
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
const point = document.querySelectorAll('point');
const active = document.querySelector('active');
const pointOne = document.getElementById('pointOne');
const pointTwo = document.getElementById('pointTwo');
const pointThree = document.getElementById('pointThree');



ConfButton.addEventListener('click',function(e) {
    alert("Спасибо");
})

inputName.addEventListener('input', () => SumName.value = inputName.value);
inputEmail.addEventListener('input', () => SumEmail.value = inputEmail.value);
inputExperiemce.addEventListener('input', () => SumExperience.value = inputExperiemce.value);
inputDesign.addEventListener('input', () => SumDesign.value = inputDesign.value);

let index = 0;

  function UpdateTabColor(NewIndex) {
    for (let i = 0; i < 3; i++) {
      if (i == NewIndex) {
        point[i].querySelectorall('.point').className = "point active";
      } else {
        point[i].querySelectorall('.point').className = "point";
      }
    }
  }


  function UpdateTabColor(NewIndex) {
    for (let i = 0; i < 3; i++) {
      if (i == NewIndex) {
        listItemElement[i].querySelector('.item__link').className = "item__link item__color";
      } else {
        listItemElement[i].querySelector('.item__link').className = "item__link";
      }
    }
  }



  pointOne.onclick = function (e) {
    index = 0;
    UpdateTabColor(index);
  
  }

  pointTwo.onclick = function (e) {
    index = 1;
    UpdateTabColor(index);
  
  }
  
  // нажатие на правую  точку
  
  pointThree.onclick = function (e) {
    index = 2;
    UpdateTabColor(index);
  
  }