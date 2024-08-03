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

document.getElementById('1').addEventListener('change', function(e){
    document.getElementById('2').value = e.target.value;
})