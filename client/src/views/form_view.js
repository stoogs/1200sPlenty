const PubSub = require('../helpers/pub_sub.js');

const FormView = function (ingredientForm) {
    this.ingredientForm = ingredientForm;
};

FormView.prototype.bindEvents = function() {
    let radioButtons = document.getElementsByName('meal_time');
        this.ingredientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputtedText = event.target.text.value;
      
        // console.log(inputtedText);
        PubSub.publish('IngredientForm:inputtedText', inputtedText);
        this.ingredientForm.reset(); //reset form values
    });
    console.log(radioButtons);
    for(let i = 0; i < radioButtons.length; i++){
        console.log(radioButtons[i].checked)
        radioButtons[i].onclick = function() {
            this.mealType = this.value;
            PubSub.publish('IngredientForm:mealType', this.mealType);
    }
};      
};

module.exports = FormView;