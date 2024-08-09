// 1. Функции
// 2. глобальный поиск элементов
// 3. Навешивание листенеров


const buttons = document.querySelectorAll('button');
function NextSlide(e) {
  e.preventDefault();

  // проверка 
  
  const form = this.parentNode;
  const currentStep = form.dataset.step;
  const nextStep = Number(currentStep) + 1;
  form.style = 'display: none;';
  const nextForm = document.querySelector(`form[data-step="${nextStep}"]`);
  nextForm.style = 'display: block;'
}

for (let button of buttons) {
  button.addEventListener('click', NextSlide );
}


// TODO: Если в строке есть символ @ — то всё корректно
// Сделать проверку, и покрасить инпут в красный цвет, если неприавльно. Не давать форме листаться дальше
let reg = /[A-Za-zA-Яа-яЁё]/;
document.getElementById('ContButton').onclick = function (e) {
  e.preventDefault();
  if (reg.test(inputName.value)) {
    NextSlide();
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
const form = document.querySelectorAll('form')



ConfButton.addEventListener('click', function (e) {
  alert("Спасибо");
})

inputName.addEventListener('input', () => SumName.value = inputName.value);
inputEmail.addEventListener('input', () => SumEmail.value = inputEmail.value);
inputExperiemce.addEventListener('input', () => SumExperience.value = inputExperiemce.value);
inputDesign.addEventListener('input', () => SumDesign.value = inputDesign.value);

let Newindex = 0;

function UpdateTabColor(NewIndex) {
  for (let i = 0; i < 3; i++) {
    if (i == NewIndex) {
      point[i].className = "point active";  
    } else {
      point[i].className = "point";
    }
  }
}

// вместо двух листенеров на поинте делать один
pointOne.addEventListener('click', function (e) {
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${1}"]`);
  nextForm.style = 'display: block;'
})

pointTwo.addEventListener('click', function (e) {
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${2}"]`);
  nextForm.style = 'display: block;'
})


pointThree.addEventListener('click', function (e) {
  for(i = 0;  i < form.length ; i++){
    form[i].style = 'display: none';
  }
  const nextForm = document.querySelector(`form[data-step="${3}"]`);
  nextForm.style = 'display: block;'
})


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