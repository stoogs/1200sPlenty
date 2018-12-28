const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(searchResultContainer) {
    this.src = searchResultContainer;
    this.ingredientFound = "subscribed to Ingredient:api-results";
    this.chosenFood = "subscribed to IngredientForm:inputtedText";
    this.infoArray = "consolidated from key info";
    this.recipes = ["array","of","recipes"]
    this.aside = ''
    this.ingredient = ''
};

ResultView.prototype.bindEvents = function () {
    console.log("Result view bindEvents Function");
    PubSub.subscribe('Ingredient:api-results', (event) => {
        this.ingredientFound = event.detail; 
        this.renderIngredient()
    });
            PubSub.subscribe('IngredientForm:inputtedText', (event) => {
            this.chosenFood = event.detail
    });
            PubSub.subscribe('IngredientForm:mealType', (event) => {
            let mealType = event.detail;
    });
            PubSub.subscribe('Recipe:api-results', (event) => {
            this.recipes = event.detail;
            this.renderFoundRecipes();
});
};

ResultView.prototype.renderIngredient = function(){
    this.displayHeading(); //Change color of Heading 'Result to suit calories'
    this.displayText(); //Show searched for item in Results Card
}

ResultView.prototype.renderFoundRecipes = function(){
    this.renderRecipes();
    this.addToDiaryButton(); //create button to publish to Diary Model
};

// INGREDIENTS RENDERING

ResultView.prototype.displayText = function(){
    this.ingredient = document.querySelector(".results-container")
    let quantity = this.chosenFood.split(' ')[0];   
    let chosenFood = this.chosenFood.split(' ').slice(1, this.chosenFood.length).join(' ');
    let { calories, totalWeight, dietLabels }  = this.ingredientFound;  //destructuring
    
    this.ingredient.innerHTML = `
    <article>
    <h6>${totalWeight}</h6>
		<h2>${dietLabels}</h2>
		<h3><a href="${chosenFood}">${dietLabels}</h3></a>
        <ul>
        <li><span class="fas fa-chart-pie"></span><span>${quantity}</span></li>
			<li><span class="far fa-scales"></span><span>${totalWeight}</span></li>
			<li><span class="fas fa-burn"></span><span>${calories}</span></li>
		</ul>
		<p class="ingredients"><span>${dietLabels}</p>
        <button class="addtoDiaryButton">Add To Diary </button>`;
        


    // document.getElementById("result-quantity").textContent = `${quantity}`;
    // document.getElementById("result-food-name").textContent = `${chosenFood}`;
    // // let displayText = `${chosenFood} has ${calories} calories and weighs ${weight}grams`;
    // document.getElementById("result-calories").textContent = `${calories}`;
    // document.getElementById("result-weight").textContent = `${totalWeight} grams`;
    // document.getElementById("result-diet-label").textContent = `TAG: ${dietLabels}`;
    this.infoArray = [quantity,chosenFood,calories,totalWeight,dietLabels];
    // PubSub.publish('ResultView:infoArray', this.infoArray); 
}

ResultView.prototype.displayHeading = function(){
    let heading = document.getElementById("result-header") ;
    headingHeader = document.createElement('h4');
    headingHeader.textContent = "Result";

        if(this.ingredientFound.calories > 400) {
            headingHeader.style.color = "red";
        } else if(this.ingredientFound.calories > 300) {
            headingHeader.style.color = "orange";
        } else { headingHeader.style.color = "green";
        }
        heading.textContent = "";
    heading.appendChild(headingHeader);
    }

// RECIPES RENDERING

ResultView.prototype.renderRecipes = function(){
    
    this.aside = document.querySelector(".recipe-card")
    let numOfRecipes = this.recipes.hits.length;

    for(let i = 0; i<numOfRecipes; i++) {
        let servings = this.recipes.hits[i].recipe.yield
        let { calories,dietLabels, healthLabels, ingredientLines, 
                label, source, totalTime, totalWeight,image, totalDaily, 
                totalNutrients, url, uri } = this.recipes.hits[i].recipe;
    if(totalTime === 0 ? totalTime = "n/a" : totalTime +=" mins.")
    this.aside.innerHTML += `
  <aside>
		<img src="${image}" alt="" />
		<a href="${uri}" class="buttonplay"><span class="icon icon-play"></span></a>
	</aside>
    <article>
    <h6>${i}</h6>
		<h2>${label}</h2>
		<h3><a href="${url}">${source}</h3></a>
        <ul>
        <li><span class="fas fa-chart-pie"></span><span>${this.recipes.hits[i].recipe.yield}</span></li>
			<li><span class="far fa-clock"></span><span>${totalTime}</span></li>
			<li><span class="fas fa-burn"></span><span>${calories}</span></li>
		</ul>
		<p>${ingredientLines}</p>
		<p class="ingredients"><span>${dietLabels}, ${healthLabels}</p>
        <button class="addtoDiaryButton">${i} Add To Diary </button>`;
        
}
}

ResultView.prototype.addToDiaryButton = function(){   
    console.log(this.aside)
    console.log(this.recipes)
    document.querySelector('.recipe-card').addEventListener('click', function(event) {
        console.log(`You clicked on button ${event.target.innerText}`);
      });
    
    this.aside.addEventListener('click', (event) => {
    event.preventDefault();
    
    //button on click
    PubSub.publish('ResultView:infoArray', this.infoArray);
    })
};

module.exports = ResultView;