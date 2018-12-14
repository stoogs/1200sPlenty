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
    };

module.exports = DiaryView;