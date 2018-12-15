const PubSub = require('../helpers/pub_sub.js');

const FormView = function (ingredientForm) {
    this.ingredientForm = ingredientForm;  
    this.mealTime = "" 
};

FormView.prototype.bindEvents = function() {
        this.ingredientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputtedText = event.target.text.value;
        // console.log(inputtedText);
        PubSub.publish('IngredientForm:inputtedText', inputtedText);
        this.ingredientForm.reset(); //reset form values
    });
       // radioButtons.addEventListener('select')
       let radioButtons = document.getElementsByName('meal_time');
       for(let i = 0; i < radioButtons.length; i++){
           console.log(radioButtons[i].checked)
           radioButtons[i].onclick = function() {
               this.mealTime = this.value;
               console.log(this.mealTime);
       };
   };   
};

module.exports = FormView;