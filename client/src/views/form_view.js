const PubSub = require('../helpers/pub_sub.js');

const FormView = function (ingredientForm) {
    this.ingredientForm = ingredientForm;   
};

FormView.prototype.bindEvents = function() {
        this.ingredientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputtedText = event.target.text.value;
        // console.log(inputtedText);
        PubSub.publish('IngredientForm:inputtedText', inputtedText);
        this.ingredientForm.reset(); //reset form values
    });
};

module.exports = FormView;