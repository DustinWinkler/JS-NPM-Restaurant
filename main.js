/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildAbout\": () => (/* binding */ buildAbout)\n/* harmony export */ });\nconst buildAbout = () => {\n  const tab = document.getElementById(\"tab\")\n  \n  let header = document.createElement('h2')\n  header.innerHTML = \"ABOUT\"\n  tab.appendChild(header)\n\n  let firstParagraph = document.createElement('p')\n  firstParagraph.innerHTML = \"We here at Cheese Town love cheese so freaking much. So much, in fact, that we created our own nation for cheese. That's right, this isn't just a restaurant, you're on soveriegn, hallowed, cheesy ground here. \"\n  tab.appendChild(firstParagraph)\n\n  let secondParagraph = document.createElement('p')\n  secondParagraph.innerHTML = \"Here's a list of Cheeses: (All used in our Cheese Soup)\"\n  tab.appendChild(secondParagraph)\n\n  let list = document.createElement('ul')\n\n  const cheeses = ['12 month Aged White Cheddar',\n    'Gorgonzola',\n    'Gouda',\n    'Muenster',\n    'Paneer',\n    'Remoudou',\n    'Food 4 Less&reg; Medium Cheddar',\n    'Bosnian Smoked Cheese',\n    'Havarti',\n    'Feta',\n    'Goat Cheese',\n    '11 month Aged Cheddar',\n    'Sharp Ched',]\n\n  for (let i = 0; i < cheeses.length; i++) {\n    const element = cheeses[i];\n\n    let cheeseItem = document.createElement('li')\n    cheeseItem.innerHTML = element\n    list.appendChild(cheeseItem)\n    \n  }\n\n  tab.appendChild(list)\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\nconst tab = document.getElementById(\"tab\")\n\nconst clear = () => {\n  tab.innerHTML = \"\"\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/clear.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildContact\": () => (/* binding */ buildContact)\n/* harmony export */ });\nconst buildContact = () => {\n  const tab = document.getElementById(\"tab\")\n\n  let header = document.createElement('h2')\n  header.innerHTML = \"CONTACT\"\n  tab.appendChild(header)\n\n  let paragraph = document.createElement('p')\n  paragraph.innerHTML = \"If you have any complaints, frick off. But if you have something lovely to say about our restaurant and nation, then leave those thoughts below.\"\n  tab.appendChild(paragraph)\n\n  let form = document.createElement('form')\n  \n  let nameLabel = document.createElement('label')\n  nameLabel.innerHTML = \"Your Name\"\n  form.appendChild(nameLabel)\n  form.appendChild(document.createElement('input'))\n\n  let locationLabel = document.createElement('label')\n  locationLabel.innerHTML = \"Your GPS Location\"\n  form.appendChild(locationLabel)\n  form.appendChild(document.createElement('input'))\n  \n  let commentsLabel = document.createElement('label')\n  commentsLabel.innerHTML = \"Comments\"\n  form.appendChild(commentsLabel)\n  let textarea = document.createElement('textarea')\n  textarea.cols = \"75\"\n  textarea.rows = \"10\"\n  form.appendChild(textarea)\n\n  let submit = document.createElement('input')\n  submit.type = 'submit'\n  form.appendChild(submit)\n\n  tab.appendChild(form)\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/clear.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\ndocument.getElementById('about').addEventListener('click', () => {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clear)()\n  ;(0,_about__WEBPACK_IMPORTED_MODULE_2__.buildAbout)()\n  console.log('built about page')\n})\n\ndocument.getElementById('menu').addEventListener('click', () => {\n  ;(0,_clear__WEBPACK_IMPORTED_MODULE_0__.clear)()\n  ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.buildMenu)()\n  console.log('built menu page')\n})\n\ndocument.getElementById('contact').addEventListener('click', () => {\n  ;(0,_clear__WEBPACK_IMPORTED_MODULE_0__.clear)()\n  ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.buildContact)()\n  console.log('built about page')\n})\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildMenu\": () => (/* binding */ buildMenu)\n/* harmony export */ });\nconst buildMenu = () => {\n\n  const tab = document.getElementById(\"tab\")\n  \n  let header = document.createElement('h2')\n  header.innerHTML = \"MENU\"\n  tab.appendChild(header)\n\n  \n  \n  const menuItems = [[\"1) Super Ultimate Grilled Cheese Deluxe\", 'This super yummy-rific griddled sandwich with 12.5 different cheeses will you make you say \"holy moly thats a lot of cheese\"'], [\"2) Cheese Town Super Special Soup\",\"It's truly just a Béchamel sauce with an unbelievable amount of cheese melted up in there, crackers available upon request\"], [\"3) Mac and Cheese for the Whole Extended Family\",\"It's 2 heaping gallons of our delicious cheese soup poured over 10 pounds of Spongebob Squarepants&reg; whole-wheat pasta\"], [\"4) Cheese Milkshake...\",\"ahem... The perfect desert befitting a restaurant of this stature. Our Ice cream is churned with our yummy cheese soup, and then blended together with milk and more cheese to get a creamy, cheesy milkshake.\"] ]\n  \n\n\n  let menuItemsDiv = document.createElement(\"div\")\n  menuItemsDiv.id = 'menu-items'\n  \n\n  for (let i = 0; i < menuItems.length; i++) {\n    let item = menuItems[i]\n\n    let newItemDiv = document.createElement('div')\n    newItemDiv.classList.add('menu-item')\n\n    let newH3 = document.createElement('h3')\n    let newP = document.createElement('p')\n\n    newH3.innerHTML = item[0]\n    newP.innerHTML = item[1]\n\n    newItemDiv.appendChild(newH3)\n    newItemDiv.appendChild(newP)\n\n    menuItemsDiv.appendChild(newItemDiv)\n\n  }\n\n  tab.appendChild(menuItemsDiv)\n  \n  let more = document.createElement('div')\n  more.id = 'more'\n  more.innerHTML = \"🧀 MORE COMING SOON 🧀\"\n  \n  tab.appendChild(more)\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;