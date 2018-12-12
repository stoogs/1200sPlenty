const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(resultContainer) {
    this.resultContainer = resultContainer;
};

ResultView.prototype.bindEvents = function () {
    console.log("Result view bindEvents Function");
    PubSub.subscribe('Ingredient:api-results', (event) => {
        const ingredientFound = event.detail; 
        console.log('The ingredient is here! from results view', ingredientFound.calories, ingredientFound); 
        // this.render(ingredientFound);
    });
};

module.exports = ResultView;