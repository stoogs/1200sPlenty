const FormView = require('./views/form_view.js')

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded from bundle.js to app.js');

    const formView = new FormView();
    formView.bindEvents();


  });