const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(searchResultContainer) {
    this.src = searchResultContainer;
    this.ingredientFound = "subscribed to Ingredient:api-results";
    this.chosenFood = "subscribed to IngredientForm:inputtedText";
    this.infoArray = "consolidated from key info";
    this.recipes = ["array","of","recipes"]
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
            PubSub.subscribe('IngredientForm:mealType', (event) => {
            let mealType = event.detail;
    });
            PubSub.subscribe('Recipe:api-results', (event) => {
            this.recipes = event.detail;
            this.renderRecipes();

});
};

ResultView.prototype.render = function(){
    this.displayText(); //Show searched for item in Results Card
    this.displayResult(); //Change color of Heading 'Result to suit calories'
    this.addToDiaryButton(); //create button to publish to Diary Model
};

ResultView.prototype.displayResult = function(){
    let heading = document.getElementById("result-result") ;
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

ResultView.prototype.displayText = function(){
    let quantity = this.chosenFood.split(' ')[0];   
    let chosenFood = this.chosenFood.split(' ').slice(1, this.chosenFood.length).join(' ');
    let { calories, totalWeight, dietLabels }  = this.ingredientFound;  //destructuring
    
    document.getElementById("result-quantity").textContent = `${quantity}`;
    document.getElementById("result-food-name").textContent = `${chosenFood}`;
    // let displayText = `${chosenFood} has ${calories} calories and weighs ${weight}grams`;
    document.getElementById("result-calories").textContent = `${calories}`;
    document.getElementById("result-weight").textContent = `${totalWeight} grams`;
    document.getElementById("result-diet-label").textContent = `TAG: ${dietLabels}`;
    this.infoArray = [quantity,chosenFood,calories,totalWeight,dietLabels];
    // PubSub.publish('ResultView:infoArray', this.infoArray); 
}

// ResultView.prototype.addToDiaryButton = function(){   
    
//     let button = document.getElementById("addtoDiaryButton");
//     button.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('clicked');
//     //button on click
//     PubSub.publish('ResultView:infoArray', this.infoArray);
//     })
// };

ResultView.prototype.renderRecipes = function(){
    let button =''
    
    let aside = document.querySelector(".recipe-card")
    let numOfRecipes = this.recipes.hits.length;

    for(let i = 0; i<numOfRecipes; i++) {
        let servings = this.recipes.hits[i].recipe.yield
        let { calories,dietLabels, healthLabels, ingredientLines, 
                label, source, totalTime, totalWeight,image, totalDaily, 
                totalNutrients, url, uri } = this.recipes.hits[i].recipe;
    if(totalTime === 0 ? totalTime = "n/a" : totalTime +=" mins.")
    aside.innerHTML += `
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
        <button id="addtoDiaryButton">Add To Diary</button>`
        button = document.querySelector('addToDiaryButton')
    
}
}

module.exports = ResultView;