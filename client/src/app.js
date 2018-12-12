const FormView = require('./views/form_view.js')

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded from bundle.js to app.js');

    //Get value from submitted form
    const formView = new FormView();
    formView.bindEvents();
  

  });