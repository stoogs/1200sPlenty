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
        this.render(this.ingredientFound)
    });
    PubSub.subscribe('IngredientForm:inputtedText', (event) => {
        this.chosenFood = event.detail
    });
};

ResultView.prototype.render = function(){
    
    this.displayText();
    this.displayResult();
};

ResultView.prototype.displayResult = function(){

    let heading = document.getElementById("result-result")
    heading.textContent = "";
    headingHeader = document.createElement('h4')
    headingHeader.textContent = "Result";
        if(this.ingredientFound.calories > 400) {
            headingHeader.style.color = "red";
        } else if(this.ingredientFound.calories > 300) {
            headingHeader.style.color = "orange";
        } else { headingHeader.style.color = "green";
        }
    heading.appendChild(headingHeader);
    // document.getElementById("result-quantity").textContent = `${quantity}`;
    }

ResultView.prototype.displayText = function(){
    let quantity = this.chosenFood.split(' ')[0];   
    let chosenFood = this.chosenFood.split(' ').slice(1, this.chosenFood.length).join(' ');
    let calories = this.ingredientFound.calories;
    let weight = this.ingredientFound.totalWeight;
    let dietLabel = this.ingredientFound.dietLabels;
    console.log( chosenFood,calories,weight,dietLabel);
    // this.resultContainer.innerHTML = '';
    document.getElementById("result-quantity").textContent = `${quantity}`;
    document.getElementById("result-food-name").textContent = `${chosenFood}`;
    // let displayText = `${chosenFood} has ${calories} calories and weighs ${weight}grams`;
    document.getElementById("result-calories").textContent = `${calories} calories + ${dietLabel}`;
    
    console.log(dietLabel)
    }

module.exports = ResultView;