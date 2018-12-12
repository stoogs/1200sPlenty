const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const ApiKeys = require('../../public/media/apikeys/apikeys.js');

const Ingredient = function () {
    this.data = null;
    this.ingredient = "empty";
    this.Api_Id = ApiKeys.api_id;
    this.Api_Key = ApiKeys.api_key

  };
  
  Ingredient.prototype.bindEventsSearchIngredient = function() {
    PubSub.subscribe('IngredientForm:inputtedText', (event) => {
        this.ingredient = event.detail;
        // console.log('subscribed ingredient...',this.ingredient);
        // console.log('apikey app_id...', this.Api_Id);
        // console.log('apikey app_key...', this.Api_Key);
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
            //Prove ingredients are here.
            // console.log('Ingredients API Results...' , this.data);
            // console.log('Ingredients API calories...' , this.data.calories);
        })
        .catch((message) => {
            console.error(message);
        });
};
};

module.exports = Ingredient;