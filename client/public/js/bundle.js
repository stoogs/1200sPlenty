/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/public/media/apikeys/ingredientapikeys.js":
/*!**********************************************************!*\
  !*** ./client/public/media/apikeys/ingredientapikeys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const IngredientApiKeys = {   \n    api_id: \"9c7587e4\",\n    api_key: \"bf4649b98929448d4e4311d01dd4be83\",\n    exampleAPI: \"https://api.edamam.com/api/nutrition-data?app_id=9c7587e4&app_key=bf4649b98929448d4e4311d01dd4be83&ingr=1%20brazil%20nut\"\n    };\n\nmodule.exports = IngredientApiKeys;\n\n//# sourceURL=webpack:///./client/public/media/apikeys/ingredientapikeys.js?");

/***/ }),

/***/ "./client/public/media/apikeys/recipeapikeys.js":
/*!******************************************************!*\
  !*** ./client/public/media/apikeys/recipeapikeys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RecipeApiKeys = {   \n    api_id: \"75c3ef82\",\n    api_key: \"da1a8599b81a41b1885c8b5755067143\",\n    exampleAPI: \"https://api.edamam.com/search?q=chicken&app_id=75c3ef82&app_key=da1a8599b81a41b1885c8b5755067143&from=0&to=3&calories=200-400&health=alcohol-free\"\n    };\n\nmodule.exports = RecipeApiKeys;\n\n//# sourceURL=webpack:///./client/public/media/apikeys/recipeapikeys.js?");

/***/ }),

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormView = __webpack_require__(/*! ./views/form_view.js */ \"./client/src/views/form_view.js\")\nconst Ingredient = __webpack_require__(/*! ./models/ingredient.js */ \"./client/src/models/ingredient.js\")\nconst ResultView = __webpack_require__(/*! ./views/result_view.js */ \"./client/src/views/result_view.js\");\nconst DiaryView = __webpack_require__(/*! ./views/diary_view.js */ \"./client/src/views/diary_view.js\");\nconst RecipeView = __webpack_require__(/*! ./views/recipe_view.js */ \"./client/src/views/recipe_view.js\");\nconst Recipe = __webpack_require__(/*! ./models/recipe.js */ \"./client/src/models/recipe.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log('JavaScript loaded from bundle.js to app.js');\n\n    //VIEWS CREATED AND BOUND HERE. REQUIRED.\n    //Get value from submitted form\n    const ingredientForm = document.querySelector('#ingredient-form');\n    const formView = new FormView(ingredientForm);\n    formView.bindEvents();\n\n    const recipeForm = document.querySelector('#recipe-form');\n    const recipeView = new RecipeView(recipeForm);\n    recipeView.bindEvents();\n  \n    const searchResultContainer = document.querySelector('.results-container');\n    const resultView = new ResultView(searchResultContainer);\n    resultView.bindEvents();\n\n    const diary = document.querySelector('.diary');\n    const diaryView = new DiaryView(diary);\n    diaryView.bindEvents();\n\n    const ingredientSearch = new Ingredient();\n    ingredientSearch.bindEvents();\n\n    const recipeSearch = new Recipe();\n    recipeSearch.bindEvents();\n\n  });\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request.js":
/*!***************************************!*\
  !*** ./client/src/helpers/request.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n}\n\nRequest.prototype.get = function () {\n  \n  return fetch(this.url)\n    .then((res) => res.json());\n}\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request.js?");

/***/ }),

/***/ "./client/src/models/ingredient.js":
/*!*****************************************!*\
  !*** ./client/src/models/ingredient.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ApiKeys = __webpack_require__(/*! ../../public/media/apikeys/ingredientapikeys.js */ \"./client/public/media/apikeys/ingredientapikeys.js\");\n\nconst Ingredient = function () {\n    this.data = null;\n    this.ingredient = \"empty\";\n    this.Api_Id = ApiKeys.api_id;\n    this.Api_Key = ApiKeys.api_key \n  };\n\n  Ingredient.prototype.bindEvents = function(searched) {\n    PubSub.subscribe('IngredientForm:inputtedText', (event) => {\n        let sortedIngredient = event.detail;\n        console.log(sortedIngredient)\n        this.ingredient = sortedIngredient;\n        this.getIngredient(this.ingredient);  \n    });\n    \n    Ingredient.prototype.getIngredient = function (ingredient) {\n        \n        const url = `https://api.edamam.com/api/nutrition-data?app_id=${this.Api_Id}&app_key=${this.Api_Key}&ingr=${this.ingredient}`\n        console.log(url)\n        const request = new Request(url);\n        request.get()\n        .then((data) => {\n            this.data = data;\n            //publish ingredients to results view\n            PubSub.publish('Ingredient:api-results', this.data);    \n        })\n        .catch((message) => {\n            console.error(message);\n        });\n    };\n};\n\nmodule.exports = Ingredient;\n\n//# sourceURL=webpack:///./client/src/models/ingredient.js?");

/***/ }),

/***/ "./client/src/models/recipe.js":
/*!*************************************!*\
  !*** ./client/src/models/recipe.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ApiKeys = __webpack_require__(/*! ../../public/media/apikeys/recipeapikeys.js */ \"./client/public/media/apikeys/recipeapikeys.js\");\n\nconst Recipe = function () {\n    this.data = null;\n    this.recipe = \"chicken\";\n    this.Api_Id = ApiKeys.api_id;\n    this.Api_Key = ApiKeys.api_key \n  };\n\n  Recipe.prototype.bindEvents = function() {\n    PubSub.subscribe('RecipeForm:inputtedText', (event) => {\n        let recipeSearch = event.detail;\n        console.log('subbed to recipe model', recipeSearch)\n        this.recipe = recipeSearch;\n        this.getRecipe(this.recipe);  \n    });\n    \n    Recipe.prototype.getRecipe = function (recipe) {\n        const url = `https://api.edamam.com/search?q=${this.recipe}&app_id=${this.Api_Id}&app_key=${this.Api_Key}`\n        console.log(url)\n        const request = new Request(url);\n        request.get()\n        .then((data) => {\n            this.data = data;\n            //publish ingredients to results view\n            console.log(this.data)\n            PubSub.publish('Recipe:api-results', this.data);    \n        })\n        .catch((message) => {\n            console.error(message);\n        });\n    };\n};\n\nmodule.exports = Recipe;\n\n//# sourceURL=webpack:///./client/src/models/recipe.js?");

/***/ }),

/***/ "./client/src/views/diary_view.js":
/*!****************************************!*\
  !*** ./client/src/views/diary_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst DiaryView = function(diary) {\n    this.diary = diary;\n    this.diaryArray = [];\n};\n\n\n\nDiaryView.prototype.bindEvents = function () {\n        PubSub.subscribe('ResultView:infoArray', (event) => {\n            this.diaryArray = event.detail;\n            console.log(\"diary SUB\", this.diaryArray);\n        });\n        PubSub.subscribe('IngredientForm:mealType', (event) => {\n            let mealType = event.detail;\n            console.log(\"meal Type is \", mealType);\n        });\n        // radioButtons.addEventListener('select')\n       \n}\n\nmodule.exports = DiaryView;\n\n//# sourceURL=webpack:///./client/src/views/diary_view.js?");

/***/ }),

/***/ "./client/src/views/form_view.js":
/*!***************************************!*\
  !*** ./client/src/views/form_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst FormView = function (ingredientForm) {\n    this.inputtedText = \"\";\n    this.ingredientForm = ingredientForm;\n    this.searchHistory = [];\n    this.mealType= \"Breafkast\";\n};\n\nFormView.prototype.bindEvents = function () {\n        this.ingredientForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        this.inputtedText = event.target.text.value;\n        this.radioButtons();\n        PubSub.publish('IngredientForm:inputtedText', this.inputtedText);\n        this.ingredientForm.reset(); //reset form values\n        this.render();\n    });\n};\n\nFormView.prototype.render = function () {\n    // this.radioButtons();\n    this.makeSearchList();\n    this.clickPreviousItem();\n};\n\nFormView.prototype.radioButtons = function () {\n    let radioButtons = document.getElementsByName('meal_time');\n    for (let i = 0; i < radioButtons.length; i++) {\n        console.log(radioButtons[i].checked)\n        radioButtons[i].onclick = function () {\n            console.log(radioButtons[i].checked)\n            console.log(radioButtons[i])\n            this.mealType = this.value;\n            PubSub.publish('IngredientForm:mealType', this.mealType);\n        }\n    };\n};\n\nFormView.prototype.makeSearchList = function () {\n    this.searchHistory.push(this.inputtedText);\n    // Show Searched For after first search.\n    let searchedHeader = document.getElementById(\"just-typed\");\n    searchedHeader.style.visibility = \"visible\";\n    let searchList = document.getElementById(\"search-results\");\n    searchList.innerHTML = '';\n\n    this.searchHistory.forEach(function (item) {\n        results = document.createElement('h4');\n        results.textContent = `${item}`;\n        searchList.appendChild(results);\n    });\n};\n\n\nFormView.prototype.clickPreviousItem = function () {\n    let list = document.getElementById(\"search-results\");\n    list.addEventListener('click', (event) => {\n        // event.preventDefault();\n        let item = event.target.textContent\n        console.log(event.target.textContent);\n        this.ingredientForm.text.value = `${item}`\n    });\n\n}\n\nmodule.exports = FormView;\n\n//# sourceURL=webpack:///./client/src/views/form_view.js?");

/***/ }),

/***/ "./client/src/views/recipe_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/recipe_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst RecipeView = function (recipeForm) {\n    this.inputtedText = \"\";\n    this.recipeForm = recipeForm;\n    this.searchHistory = [];\n};\n\nRecipeView.prototype.bindEvents = function () {\n        this.recipeForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        console.log('clicked recipe button',event.target.text.value)\n        this.inputtedText = event.target.text.value;\n        PubSub.publish('RecipeForm:inputtedText', this.inputtedText);\n        this.recipeForm.reset(); //reset form values\n        // this.render();\n    });\n};\n\n// FormView.prototype.render = function () {\n//     this.radioButtons();\n//     this.makeSearchList();\n//     this.clickPreviousItem();\n// };\n\n// FormView.prototype.radioButtons = function () {\n//     let radioButtons = document.getElementsByName('meal_time');\n//     for (let i = 0; i < radioButtons.length; i++) {\n//         console.log(radioButtons[i].checked)\n//         radioButtons[i].onclick = function () {\n//             this.mealType = this.value; \n//             PubSub.publish('IngredientForm:mealType', this.mealType);\n//         }\n//     };\n// };\n\n// FormView.prototype.makeSearchList = function () {\n//     this.searchHistory.push(this.inputtedText);\n//     // Show Searched For after first search.\n//     let searchedHeader = document.getElementById(\"just-typed\");\n//     searchedHeader.style.visibility = \"visible\";\n//     let searchList = document.getElementById(\"search-results\");\n//     searchList.innerHTML = '';\n\n//     this.searchHistory.forEach(function (item) {\n//         results = document.createElement('h4');\n//         results.textContent = `${item}`;\n//         searchList.appendChild(results);\n//     });\n// };\n\n\n// FormView.prototype.clickPreviousItem = function () {\n//     let list = document.getElementById(\"search-results\");\n//     list.addEventListener('click', (event) => {\n//         // event.preventDefault();\n//         let item = event.target.textContent\n//         console.log(event.target.textContent);\n//         this.ingredientForm.text.value = `${item}`\n//     });\n\n// }\n\nmodule.exports = RecipeView;\n\n//# sourceURL=webpack:///./client/src/views/recipe_view.js?");

/***/ }),

/***/ "./client/src/views/result_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/result_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ResultView = function(searchResultContainer) {\n    this.src = searchResultContainer;\n    this.ingredientFound = \"subscribed to Ingredient:api-results\";\n    this.chosenFood = \"subscribed to IngredientForm:inputtedText\";\n    this.infoArray = \"consolidated from key info\";\n    this.recipes = [\"array\",\"of\",\"recipes\"]\n    this.aside = ''\n    this.ingredient = ''\n};\n\nResultView.prototype.bindEvents = function () {\n    console.log(\"Result view bindEvents Function\");\n    PubSub.subscribe('Ingredient:api-results', (event) => {\n        this.ingredientFound = event.detail; \n        this.renderIngredient()\n    });\n            PubSub.subscribe('IngredientForm:inputtedText', (event) => {\n            this.chosenFood = event.detail\n    });\n            PubSub.subscribe('IngredientForm:mealType', (event) => {\n            let mealType = event.detail;\n    });\n            PubSub.subscribe('Recipe:api-results', (event) => {\n            this.recipes = event.detail;\n            this.renderFoundRecipes();\n});\n};\n\nResultView.prototype.renderIngredient = function(){\n    this.displayHeading(); //Change color of Heading 'Result to suit calories'\n    this.displayText(); //Show searched for item in Results Card\n}\n\nResultView.prototype.renderFoundRecipes = function(){\n    this.renderRecipes();\n    this.addToDiaryButton(); //create button to publish to Diary Model\n};\n\n// INGREDIENTS RENDERING\n\nResultView.prototype.displayText = function(){\n    this.ingredient = document.querySelector(\".results-container\")\n    let quantity = this.chosenFood.split(' ')[0];   \n    let chosenFood = this.chosenFood.split(' ').slice(1, this.chosenFood.length).join(' ');\n    let { calories, totalWeight, dietLabels }  = this.ingredientFound;  //destructuring\n    \n    this.ingredient.innerHTML = `\n    <article>\n    <h6>${totalWeight}</h6>\n\t\t<h2>${dietLabels}</h2>\n\t\t<h3><a href=\"${chosenFood}\">${dietLabels}</h3></a>\n        <ul>\n        <li><span class=\"fas fa-chart-pie\"></span><span>${quantity}</span></li>\n\t\t\t<li><span class=\"far fa-scales\"></span><span>${totalWeight}</span></li>\n\t\t\t<li><span class=\"fas fa-burn\"></span><span>${calories}</span></li>\n\t\t</ul>\n\t\t<p class=\"ingredients\"><span>${dietLabels}</p>\n        <button class=\"addtoDiaryButton\">Add To Diary </button>`;\n        \n\n\n    // document.getElementById(\"result-quantity\").textContent = `${quantity}`;\n    // document.getElementById(\"result-food-name\").textContent = `${chosenFood}`;\n    // // let displayText = `${chosenFood} has ${calories} calories and weighs ${weight}grams`;\n    // document.getElementById(\"result-calories\").textContent = `${calories}`;\n    // document.getElementById(\"result-weight\").textContent = `${totalWeight} grams`;\n    // document.getElementById(\"result-diet-label\").textContent = `TAG: ${dietLabels}`;\n    this.infoArray = [quantity,chosenFood,calories,totalWeight,dietLabels];\n    // PubSub.publish('ResultView:infoArray', this.infoArray); \n}\n\nResultView.prototype.displayHeading = function(){\n    let heading = document.getElementById(\"result-header\") ;\n    headingHeader = document.createElement('h4');\n    headingHeader.textContent = \"Result\";\n\n        if(this.ingredientFound.calories > 400) {\n            headingHeader.style.color = \"red\";\n        } else if(this.ingredientFound.calories > 300) {\n            headingHeader.style.color = \"orange\";\n        } else { headingHeader.style.color = \"green\";\n        }\n        heading.textContent = \"\";\n    heading.appendChild(headingHeader);\n    }\n\n// RECIPES RENDERING\n\nResultView.prototype.renderRecipes = function(){\n    \n    this.aside = document.querySelector(\".recipe-card\")\n    let numOfRecipes = this.recipes.hits.length;\n\n    for(let i = 0; i<numOfRecipes; i++) {\n        let servings = this.recipes.hits[i].recipe.yield\n        let { calories,dietLabels, healthLabels, ingredientLines, \n                label, source, totalTime, totalWeight,image, totalDaily, \n                totalNutrients, url, uri } = this.recipes.hits[i].recipe;\n    if(totalTime === 0 ? totalTime = \"n/a\" : totalTime +=\" mins.\")\n    this.aside.innerHTML += `\n  <aside>\n\t\t<img src=\"${image}\" alt=\"\" />\n\t\t<a href=\"${uri}\" class=\"buttonplay\"><span class=\"icon icon-play\"></span></a>\n\t</aside>\n    <article>\n    <h6>${i}</h6>\n\t\t<h2>${label}</h2>\n\t\t<h3><a href=\"${url}\">${source}</h3></a>\n        <ul>\n        <li><span class=\"fas fa-chart-pie\"></span><span>${this.recipes.hits[i].recipe.yield}</span></li>\n\t\t\t<li><span class=\"far fa-clock\"></span><span>${totalTime}</span></li>\n\t\t\t<li><span class=\"fas fa-burn\"></span><span>${calories}</span></li>\n\t\t</ul>\n\t\t<p>${ingredientLines}</p>\n\t\t<p class=\"ingredients\"><span>${dietLabels}, ${healthLabels}</p>\n        <button class=\"addtoDiaryButton\">${i} Add To Diary </button>`;\n        \n}\n}\n\nResultView.prototype.addToDiaryButton = function(){   \n    console.log(this.aside)\n    console.log(this.recipes)\n    document.querySelector('.recipe-card').addEventListener('click', function(event) {\n        console.log(`You clicked on button ${event.target.innerText}`);\n      });\n    \n    this.aside.addEventListener('click', (event) => {\n    event.preventDefault();\n    \n    //button on click\n    PubSub.publish('ResultView:infoArray', this.infoArray);\n    })\n};\n\nmodule.exports = ResultView;\n\n//# sourceURL=webpack:///./client/src/views/result_view.js?");

/***/ })

/******/ });