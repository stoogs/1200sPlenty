const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
    this.element = element;   
};

FormView.prototype.bindEventsSearchIngredient = function() {
        this.element.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputtedText = event.target.text.value;
        // console.log(inputtedText);
        PubSub.publish('IngredientForm:inputtedText', inputtedText);
        this.element.reset();
    });
};

module.exports = FormView;