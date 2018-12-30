const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const ApiKeys = require('../../public/media/apikeys/recipeapikeys.js');

const Recipe = function () {
    this.data = null;
    this.recipe = "chicken";
    this.Api_Id = ApiKeys.api_id;
    this.Api_Key = ApiKeys.api_key 
  };

  Recipe.prototype.bindEvents = function() {
    PubSub.subscribe('RecipeForm:inputtedText', (event) => {
        let recipeSearch = event.detail;
        console.log('subbed to recipe model', recipeSearch)
        this.recipe = recipeSearch;
        this.getRecipe(this.recipe);  
    });
    
    Recipe.prototype.getRecipe = function (recipe) {
        const url = `https://api.edamam.com/search?q=${this.recipe}&app_id=${this.Api_Id}&app_key=${this.Api_Key}`
        console.log(url)
        const request = new Request(url);
        request.get()
        .then((data) => {
            this.data = data;
            //publish ingredients to results view
            console.log(this.data)
            PubSub.publish('Recipe:api-results', this.data);    
        })
        .catch((message) => {
            console.error(message);
        });
    };
};

module.exports = Recipe;