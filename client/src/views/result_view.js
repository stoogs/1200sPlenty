const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(resultContainer) {
    this.resultContainer = resultContainer;
};

ResultView.prototype.bindEvents = function () {
    console.log("Result view bindEvents Function");
    PubSub.subscribe('Ingredient:api-results', (event) => {
        const ingredientFound = event.detail; 
        console.log('The ingredient is here! from results view', ingredientFound.calories, ingredientFound); 
        this.render(ingredientFound);
    });
};

ResultView.prototype.render = function(ingredientFound){
    this.resultContainer.innerHTML = '';
    PubSub.subscribe('IngredientForm:inputtedText', (event) => {
    console.log(event.detail); 
    });

    console.log('PRERENDER RENDER',ingredientFound);
    
    let calories = ingredientFound.calories;
    let weight = ingredientFound.totalWeight;
    let dietLabel = ingredientFound.dietLabels;
    console.log('---------------------------------');
    console.log( calories,weight,dietLabel);
};

module.exports = ResultView;