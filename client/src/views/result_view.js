const PubSub = require('../helpers/pub_sub.js');
const Ingredient = require('../models/ingredient.js');
const ResultView = function(resultContainer) {
    this.resultContainer = resultContainer;
    this.ingredientFound = "started empty";
    this.chosenFood = "started empty";
};


ResultView.prototype.bindEvents = function () {
    console.log("Result view bindEvents Function");
    PubSub.subscribe('Ingredient:api-results', (event) => {
        this.ingredientFound = event.detail; 
        console.log('The ingredient is here! from results view', this.ingredientFound.calories, this.ingredientFound); 
        this.render()
    });
    PubSub.subscribe('IngredientForm:inputtedText', (event) => {
        this.chosenFood = event.detail
        console.log('The ingredient is here! from results view', this.chosenFood); 
    });
};

ResultView.prototype.render = function(){
    this.resultContainer.innerHTML = '';
    let chosenFood = this.chosenFood;
    let calories = this.ingredientFound.calories;
    let weight = this.ingredientFound.totalWeight;
    let dietLabel = this.ingredientFound.dietLabels;
    console.log('---------------------------------');
    console.log( chosenFood,calories,weight,dietLabel);
};

module.exports = ResultView;