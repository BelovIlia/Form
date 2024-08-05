const buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click', function (e) {
        e.preventDefault();

    const form = this.parentNode;
    const currentStep = form.dataset.step;
    const nextStep = Number(currentStep) + 1;
    form.style = 'display: none;';
    const nextForm = document.querySelector(`form[data-step="${nextStep}"]`);
    nextForm.style = 'display: block;'
    });
}

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputExperiemce = document.getElementById('experience');
const inputDesign = document.getElementById('design');
const SumName = document.getElementById('SumName');
const SumEmail = document.getElementById('SumEmail');
const SumExperience = document.getElementById('SumExperience');
const SumDesign = document.getElementById('SumDesign');



inputName.addEventListener('input', () => SumName.value = inputName.value);
inputEmail.addEventListener('input', () => SumEmail.value = inputEmail.value);
inputExperiemce.addEventListener('input', () => SumExperience.value = inputExperiemce.value);
inputDesign.addEventListener('input', () => SumDesign.value = inputDesign.value);


