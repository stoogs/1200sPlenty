const FormView = require('./views/form_view.js')

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded from bundle.js to app.js');

    //VIEWS CREATED AND BOUND HERE. REQUIRED.
    //Get value from submitted form
    const ingredientForm = document.querySelector('#ingredient-form');
    const formView = new FormView(ingredientForm);
    formView.bindEventsSearchIngredient();
  

    const ingredientSearch = new Ingredient();
    ingredientSearch.bindEventsSearchIngredient();

  });