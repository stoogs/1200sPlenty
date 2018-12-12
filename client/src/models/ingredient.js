const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Ingredient = function () {
    this.data = null;
    this.ingredient = "empty";
  }

  
  Ingredient.prototype.bindEventsAbv = function() {
    PubSub.subscribe('MinAbvForm:abv-value', (event) => {
        this.abvNum = event.detail;
        //this.minAbv = (abvNum);
        console.log(this.abvNum)
        this.getDataAbv(this.abvNum);
    });
}