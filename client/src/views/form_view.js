
const FormView = function () {
        
};

FormView.prototype.bindEvents = function() {
    const form = document.querySelector('#ingredient-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputtedText = event.target.text.value;
        console.log(inputtedText);
    })
};

module.exports = FormView;