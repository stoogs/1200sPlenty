const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(searchResultContainer) {
    this.src = searchResultContainer;
    this.ingredientFound = "subscribed to Ingredient:api-results";
    this.chosenFood = "subscribed to IngredientForm:inputtedText";
    this.infoArray = "consolidated from key info";
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
    this.displayText(); //Show searched for item in Results Card
    this.displayResult(); //Change color of Heading 'Result to suit calories'
    this.addToDiaryButton(); //create button to publish to Diary Model
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
    this.infoArray = [quantity,chosenFood,calories,weight,dietLabel];
    // PubSub.publish('ResultView:infoArray', this.infoArray); 
}

    ResultView.prototype.addToDiaryButton = function(){   

        let button = document.getElementById("addtoDiaryButton");
        button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('clicked');
        //button on click
        PubSub.publish('ResultView:infoArray', this.infoArray);
    })
};


module.exports = ResultView;