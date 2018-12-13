const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const ApiKeys = require('../../public/media/apikeys/apikeys.js');

const Ingredient = function () {
    this.data = null;
    this.ingredient = "empty";
    this.Api_Id = ApiKeys.api_id;
    this.Api_Key = ApiKeys.api_key 
  };
  
  Ingredient.prototype.bindEvents = function(searched) {
    PubSub.subscribe('IngredientForm:inputtedText', (event) => {
        let sortedIngredient = event.detail;
        this.ingredient = sortedIngredient;
        this.getIngredient(this.ingredient);
        
    });
    
    Ingredient.prototype.getIngredient = function (ingredient) {
        
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${this.Api_Id}&app_key=${this.Api_Key}&ingr=${this.ingredient}`
        console.log(url)
        const request = new Request(url);
        request.get()
        .then((data) => {
            this.data = data;
            //publish ingredients to results view
            PubSub.publish('Ingredient:api-results', this.data);    
        })
        .catch((message) => {
            console.error(message);
        });
};
};

module.exports = Ingredient;