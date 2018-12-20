const PubSub = require('../helpers/pub_sub.js');
const DiaryView = function(diary) {
    this.diary = diary;
    this.diaryArray = [];
};



DiaryView.prototype.bindEvents = function () {
        PubSub.subscribe('ResultView:infoArray', (event) => {
            this.diaryArray = event.detail;
            console.log("diary SUB", this.diaryArray);
        });
        PubSub.subscribe('IngredientForm:mealType', (event) => {
            let mealType = event.detail;
            console.log("meal Type is ", mealType);
        });
        // radioButtons.addEventListener('select')
       
}

module.exports = DiaryView;