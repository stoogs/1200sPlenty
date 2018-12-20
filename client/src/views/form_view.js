const PubSub = require('../helpers/pub_sub.js');

const FormView = function (ingredientForm) {
    this.inputtedText = "";
    this.ingredientForm = ingredientForm;
    this.searchHistory = [];
};

FormView.prototype.bindEvents = function () {
    this.ingredientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.inputtedText = event.target.text.value;
        PubSub.publish('IngredientForm:inputtedText', this.inputtedText);
        this.ingredientForm.reset(); //reset form values
        this.render();
    });
};

FormView.prototype.render = function () {
    this.radioButtons();
    this.makeSearchList();
    this.clickPreviousItem();
};

FormView.prototype.radioButtons = function () {
    let radioButtons = document.getElementsByName('meal_time');
    for (let i = 0; i < radioButtons.length; i++) {
        console.log(radioButtons[i].checked)
        radioButtons[i].onclick = function () {
            this.mealType = this.value; 
            PubSub.publish('IngredientForm:mealType', this.mealType);
        }
    };
};

FormView.prototype.makeSearchList = function () {
    this.searchHistory.push(this.inputtedText);
    // Show Searched For after first search.
    let searchedHeader = document.getElementById("just-typed");
    searchedHeader.style.visibility = "visible";
    let searchList = document.getElementById("search-results");
    searchList.innerHTML = '';

    this.searchHistory.forEach(function (item) {
        results = document.createElement('h4');
        results.textContent = `${item}`;
        searchList.appendChild(results);
    });
};


FormView.prototype.clickPreviousItem = function () {
    let list = document.getElementById("search-results");
    list.addEventListener('click', (event) => {
        // event.preventDefault();
        let item = event.target.textContent
        console.log(event.target.textContent);
        this.ingredientForm.text.value = `${item}`
    });

}

module.exports = FormView;