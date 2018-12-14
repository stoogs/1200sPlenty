const FormView = require('./views/form_view.js')
const Ingredient = require('./models/ingredient.js')
const ResultView = require('./views/result_view.js');
const DiaryView = require('./views/diary_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded from bundle.js to app.js');

    //VIEWS CREATED AND BOUND HERE. REQUIRED.
    //Get value from submitted form
    const ingredientForm = document.querySelector('#ingredient-form');
    const formView = new FormView(ingredientForm);
    formView.bindEvents();
  
    const searchResultContainer = document.querySelector('.results-container');
    const resultView = new ResultView(searchResultContainer);
    resultView.bindEvents();

    const diary = document.querySelector('.diary');
    const diaryView = new DiaryView(diary);
    diaryView.bindEvents();

    const ingredientSearch = new Ingredient();
    ingredientSearch.bindEvents();

  });