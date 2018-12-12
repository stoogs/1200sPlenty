const FormView = require('./views/form_view.js')
const Ingredient = require('./models/ingredient.js')
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded from bundle.js to app.js');

    //VIEWS CREATED AND BOUND HERE. REQUIRED.
    //Get value from submitted form
    const ingredientForm = document.querySelector('#ingredient-form');
    const formView = new FormView(ingredientForm);
    formView.bindEvents();
  
    const ingredientFound = document.querySelector('#search-result');
    const resultView = new ResultView(ingredientFound);
    resultView.bindEvents();
   
    const ingredientSearch = new Ingredient();
    ingredientSearch.bindEvents();

  });