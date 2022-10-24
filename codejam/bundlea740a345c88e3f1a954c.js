/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/areEqual.js":
/*!*************************!*\
  !*** ./src/areEqual.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function areEqual(numberMatrix, matrixResult, a) {
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
      if (numberMatrix[i][j] !== matrixResult[i][j]) {
        return false;
      }
    }
  }

  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (areEqual);

/***/ }),

/***/ "./src/getBody.js":
/*!************************!*\
  !*** ./src/getBody.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTiles */ "./src/getTiles.js");


function getBody(a, numberMatrix) {
  var body = document.querySelector('body'); //buttons block

  var header = document.createElement('header');
  body.append(header);
  var navigation = document.createElement('nav');
  navigation.classList.add('navigation__header');
  var ul = document.createElement('ul');
  ul.classList.add('navigation');
  ul.append(getList());
  navigation.append(ul);
  header.append(navigation);
  body.append(header); //time and moves

  var main = document.createElement('main');
  var divProgress = document.createElement('div');
  divProgress.classList.add('progress');
  var spanMoves = document.createElement('span');
  spanMoves.classList.add('moves');
  spanMoves.append('Moves: 0');
  divProgress.append(spanMoves);
  var spanTime = document.createElement('span');
  spanTime.classList.add('time');
  spanTime.append('Time: 00:00');
  divProgress.append(spanTime);
  main.append(divProgress); //tiles

  main.append((0,_getTiles__WEBPACK_IMPORTED_MODULE_0__["default"])(a, numberMatrix));
  body.append(main); //size-block

  var divSize = document.createElement('div');
  divSize.classList.add('size_block');
  var spanSize = document.createElement('span');
  spanSize.classList.add('current_size');
  spanSize.append("Frame size: ".concat(a, "x").concat(a));
  divSize.append(spanSize);
  var otherSizeSpan = document.createElement('span');
  otherSizeSpan.classList.add('other_size');
  otherSizeSpan.append('Other sizes: ');
  var a3 = document.createElement('a');
  a3.classList.add('a_size');
  a3.classList.add('a_3');
  ;
  a3.setAttribute('href', '#');
  a3.append('3x3');
  otherSizeSpan.append(a3);
  otherSizeSpan.append(' ');
  var a4 = document.createElement('a');
  a4.classList.add('a_size');
  a4.classList.add('a_4');
  a4.setAttribute('href', '#');
  a4.append('4x4');
  otherSizeSpan.append(a4);
  otherSizeSpan.append(' ');
  var a5 = document.createElement('a');
  a5.classList.add('a_size');
  a5.classList.add('a_5');
  a5.setAttribute('href', '#');
  a5.append('5x5');
  otherSizeSpan.append(a5);
  otherSizeSpan.append(' ');
  var a6 = document.createElement('a');
  a6.classList.add('a_size');
  a6.classList.add('a_6');
  a6.setAttribute('href', '#');
  a6.append('6x6');
  otherSizeSpan.append(a6);
  otherSizeSpan.append(' ');
  var a7 = document.createElement('a');
  a7.classList.add('a_size');
  a7.classList.add('a_7');
  a7.setAttribute('href', '#');
  a7.append('7x7');
  otherSizeSpan.append(a7);
  otherSizeSpan.append(' ');
  var a8 = document.createElement('a');
  a8.classList.add('a_size');
  a8.classList.add('a_8');
  a8.setAttribute('href', '#');
  a8.append('8x8');
  otherSizeSpan.append(a8);
  divSize.append(otherSizeSpan);
  main.append(divSize);
}

function getList() {
  var buttonTextArr = ['Shuffle and start', 'Pause', 'Save', 'Results'];
  var buttonIdArr = ['shuffle', 'pause', 'save', 'results'];
  var fragment = new DocumentFragment();

  for (var i = 0; i < 5; i++) {
    var li = document.createElement('li');
    li.classList.add('navigation__item');
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('button__navigation');

    if (i === 4) {
      button.classList.add('sound_on');
      button.setAttribute('id', 'sound');
      var span = document.createElement('span');
      button.append(span);
    } else {
      button.setAttribute('id', "".concat(buttonIdArr[i]));
      button.append("".concat(buttonTextArr[i]));
    }

    li.append(button);
    fragment.append(li);
  }

  ;
  return fragment;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBody);

/***/ }),

/***/ "./src/getMatrixResult.js":
/*!********************************!*\
  !*** ./src/getMatrixResult.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getMatrixResult(a) {
  var matrixResult = [];
  var number = 1;

  for (var i = 0; i < a; i++) {
    var rowMatrix = [];

    for (var j = 0; j < a; j++) {
      rowMatrix.push(number);
      number++;
    }

    matrixResult.push(rowMatrix);
  }

  return matrixResult;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMatrixResult);

/***/ }),

/***/ "./src/getMessage.js":
/*!***************************!*\
  !*** ./src/getMessage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getMessage(counter, totalSeconds) {
  var main = document.querySelector('main');
  var wrapperMessage = document.createElement('div');
  wrapperMessage.classList.add('message__wrapper');
  var divMessage = document.createElement('div');
  divMessage.classList.add('message_block');
  var cross = document.createElement('span');
  cross.classList.add('cross');
  divMessage.append(cross);
  var h1 = document.createElement('h1');
  var minute = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds - minute * 60;

  if (minute < 10) {
    minute = "0" + minute;
  }

  ;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  h1.append("Hooray! You solved the puzzle in ".concat(minute, ":").concat(seconds, " and ").concat(counter, " moves!"));
  divMessage.append(h1);
  var buttonRestart = document.querySelector('#shuffle');
  var clonedButtonRestart = buttonRestart.cloneNode();
  clonedButtonRestart.append('Play again');
  clonedButtonRestart.classList.add('restart');
  divMessage.appendChild(clonedButtonRestart);
  wrapperMessage.append(divMessage);
  main.append(wrapperMessage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMessage);

/***/ }),

/***/ "./src/getMousePosition.js":
/*!*********************************!*\
  !*** ./src/getMousePosition.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTileSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTileSize */ "./src/getTileSize.js");


function getMousePosition(canvas, event, a) {
  var screenWidth = window.screen.width;
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  var j;
  var i;
  var selectedTile = {};
  /*  let screenWidth=window.screen.width;
    if (screenWidth <= 500){
    canvas.width  = 300;
    canvas.height = 300;
   };
  if ((screenWidth > 500)&&(screenWidth < 1000)){
    canvas.width  = 400;
    canvas.height = 400;
   }
  if ((screenWidth > 1000)){
    canvas.width  = 600;
    canvas.height = 600;
   };
    let tileSize = (canvas.width -20 -a*1)/a;*/

  var tileSize = (0,_getTileSize__WEBPACK_IMPORTED_MODULE_0__["default"])(screenWidth, a);
  /* if (a=== 4){
      tileSize = 69;
     }   
     if (a ===3){
      tileSize = 92.5;
     }
     if (a===5){
       tileSize = 55.2;
     }
     if (a===6){
      tileSize = 45.8;
     }
     if (a===7){
       tileSize = 39.1;
     }
     if (a===8){
       tileSize = 34.125;
     }*/

  for (j = 0; j < a; j++) {
    if (x > 10 + j * tileSize && x <= 10 + (j + 1) * tileSize) {
      selectedTile.j = j;
      break;
    }
  }

  for (i = 0; i < a; i++) {
    if (y > 10 + i * tileSize && y <= 10 + (i + 1) * tileSize) {
      selectedTile.i = i;
      break;
    }
  }

  return selectedTile;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMousePosition);

/***/ }),

/***/ "./src/getNumberMatrix.js":
/*!********************************!*\
  !*** ./src/getNumberMatrix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getNumbersMatrix(a) {
  var numberMatrix = [];
  var size = a * a;
  var numberTileArray = shuffle(size);

  for (var i = 0; i < a; i++) {
    var tilesRow = [];

    for (var j = 0; j < a; j++) {
      var numberOfTile = numberTileArray.pop();
      tilesRow.push(numberOfTile);
    }

    numberMatrix.push(tilesRow);
  }

  if (isMatrixSolvable(a, numberMatrix)) {
    return numberMatrix;
  } else {
    return getNumbersMatrix(a);
  }
}

function shuffle(size) {
  var randomNumber = Math.floor(Math.random() * size) + 1;
  var shuffledArr = [];

  while (shuffledArr.length !== size) {
    while (shuffledArr.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * size) + 1;
    }

    ;
    shuffledArr.push(randomNumber);
  }

  ;
  return shuffledArr;
}

function isMatrixSolvable(a, numberMatrix) {
  var space = a * a;
  var arrFromMatrix = [];
  var rowOfSpaceFromBottom; //getting arr from matrix

  for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
      if (numberMatrix[i][j] === space) {
        //number of space row from the bottom
        rowOfSpaceFromBottom = a - i;
      } else {
        arrFromMatrix.push(numberMatrix[i][j]);
      }
    }
  }

  ; //getting inversions

  var invers = arrFromMatrix.reduce(function (invers, e, i, arrFromMatrix) {
    for (var n = i; n < arrFromMatrix.length; n++) {
      if (arrFromMatrix[n - 1] < arrFromMatrix[n]) {
        invers++;
      }
    }

    return invers;
  });

  if (a % 2 === 0) {
    if (rowOfSpaceFromBottom % 2 === 0 && invers % 2 !== 0 || rowOfSpaceFromBottom % 2 !== 0 && invers % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (invers % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumbersMatrix);

/***/ }),

/***/ "./src/getResults.js":
/*!***************************!*\
  !*** ./src/getResults.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getResults(bestResults) {
  var main = document.querySelector('main');
  var wrapperresults = document.createElement('div');
  wrapperresults.classList.add('results__wrapper');
  var divResults = document.createElement('div');
  divResults.classList.add('results_block');
  var cross = document.createElement('span');
  cross.classList.add('cross');
  divResults.append(cross);
  var h1 = document.createElement('h1');
  h1.append('TOP 10');
  divResults.append(h1);
  var ol = document.createElement('ol');
  ol.append(getResultList(bestResults));
  divResults.append(ol);
  wrapperresults.append(divResults);
  main.append(wrapperresults);
}

function getResultList(bestResults) {
  if (bestResults) {
    bestResults;
    var fragment = new DocumentFragment();

    for (var i = 0; i < 10; i++) {
      var li = document.createElement('li');
      li.classList.add('result__item');
      li.append("".concat(bestResults[i], " moves"));
      fragment.append(li);
    }

    return fragment;
  }

  ;
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResults);

/***/ }),

/***/ "./src/getTileSize.js":
/*!****************************!*\
  !*** ./src/getTileSize.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getTileSize(screenWidth, a) {
  var tileSize;
  var canvasWidthSmall = 300;
  var canvasWidthMiddle = 400;
  var canvasWidthBig = 500;

  if (screenWidth <= 500) {
    tileSize = (canvasWidthSmall - 20 - a * 1) / a;
  }

  ;

  if (screenWidth > 500 && screenWidth < 1000) {
    tileSize = (canvasWidthMiddle - 20 - a * 1) / a;
  }

  if (screenWidth > 1000) {
    tileSize = (canvasWidthBig - 20 - a * 1) / a;
  }

  ;
  return tileSize;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTileSize);

/***/ }),

/***/ "./src/getTiles.js":
/*!*************************!*\
  !*** ./src/getTiles.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getTiles(a, numberMatrix) {
  var size = a * a;
  var fragment = new DocumentFragment();
  var canvas = document.createElement('canvas');
  canvas.classList.add('canvas');
  var ctx = canvas.getContext('2d');
  var screenWidth = window.screen.width;

  if (screenWidth <= 500) {
    canvas.width = 300;
    canvas.height = 300;
  }

  ;

  if (screenWidth > 500 && screenWidth < 1000) {
    canvas.width = 400;
    canvas.height = 400;
  }

  if (screenWidth > 1000) {
    canvas.width = 500;
    canvas.height = 500;
  }

  ;
  var tileSize = (canvas.width - 20 - a * 1) / a; //let tileSize;

  var fontSize;

  if (a === 4) {
    // tileSize = 69;
    fontSize = 48;
  }
  /* if (a ===3){
     tileSize = 92.66;
   }
   if (a===5){
    tileSize = 55.2;
   }
   if (a===6){
    tileSize = 45.8;
   }
   if (a===7){
   tileSize = 39.1;
   }
   if (a===8){
    tileSize = 34.125;
     fontSize = 24;
   }*/
  //canvas.width  = 300;
  // canvas.height = 300;


  for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
      var numberOfTile = numberMatrix[i][j];

      if (numberOfTile === size) {
        // let tile = new Tile(`${numberOfTile}`, 10+j*70, 10+i*70, 69, 69, '#929699');
        // tile.draw();
        ctx.fillStyle = '#929699';
        ctx.fillRect(10 + j * (tileSize + 1), 10 + i * (tileSize + 1), tileSize, tileSize);
      } else {
        ctx.fillStyle = '#fcda69';
        ctx.fillRect(10 + j * (tileSize + 1), 10 + i * (tileSize + 1), tileSize, tileSize);
        ctx.fillStyle = '#333B41';
        ctx.font = "".concat(fontSize, "px san-serif ");
        ctx.textAlign = 'center';
        ctx.fillText("".concat(numberOfTile), 10 + j * (tileSize + 1) + tileSize / 2, 10 + i * (tileSize + 1) + tileSize / 2 + fontSize / 3);
      }
    }
  }

  fragment.append(canvas);
  return fragment;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTiles);

/***/ }),

/***/ "./src/getTilesAgain.js":
/*!******************************!*\
  !*** ./src/getTilesAgain.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getTilesAgain(canvas, a, numberMatrix) {
  var screenWidth = window.screen.width;

  if (screenWidth <= 500) {
    canvas.width = 300;
    canvas.height = 300;
  }

  ;

  if (screenWidth > 500 && screenWidth < 1000) {
    canvas.width = 400;
    canvas.height = 400;
  }

  if (screenWidth > 1000) {
    canvas.width = 500;
    canvas.height = 500;
  }

  ;
  var tileSize = (canvas.width - 20 - a * 1) / a; //let tileSize;

  var fontSize;

  if (a === 4) {
    // tileSize = 69;
    fontSize = 48;
  }

  if (a === 3) {
    //tileSize = 92.66;
    fontSize = 48;
  }

  if (a === 5) {
    // tileSize = 55.2;
    fontSize = 36;
  }

  if (a === 6) {
    // tileSize = 45.8;
    fontSize = 32;
  }

  if (a === 7) {
    //tileSize = 39.1;
    fontSize = 30;
  }

  if (a === 8) {
    // tileSize = 34.125;
    fontSize = 24;
  }

  var size = a * a;
  var ctx = canvas.getContext('2d'); // canvas.width  = 300;
  // canvas.height = 300;

  for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
      var numberOfTile = numberMatrix[i][j];

      if (numberOfTile === size) {
        // let tile = new Tile(`${numberOfTile}`, 10+j*70, 10+i*70, 69, 69, '#929699');
        // tile.draw();
        ctx.fillStyle = '#929699';
        ctx.fillRect(10 + j * (tileSize + 1), 10 + i * (tileSize + 1), tileSize, tileSize);
      } else {
        ctx.fillStyle = '#fcda69';
        ctx.fillRect(10 + j * (tileSize + 1), 10 + i * (tileSize + 1), tileSize, tileSize);
        ctx.fillStyle = '#333B41';
        ctx.font = "".concat(fontSize, "px san-serif ");
        ctx.textAlign = 'center';
        ctx.fillText("".concat(numberOfTile), 10 + j * (tileSize + 1) + tileSize / 2, 10 + i * (tileSize + 1) + tileSize / 2 + fontSize / 3);
      }
    }
  }

  return canvas;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTilesAgain);

/***/ }),

/***/ "./src/myComment.js":
/*!**************************!*\
  !*** ./src/myComment.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function myComment() {
  alert('Hi');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myComment);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/sound-on-new.svg */ "./src/assets/svg/sound-on-new.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/sound-off-new.svg */ "./src/assets/svg/sound-off-new.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/cross.svg */ "./src/assets/svg/cross.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aladin&family=Aleo:ital,wght@0,400;0,700;1,700&family=Roboto:wght@100;300;400;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nsection, main, footer, header, article {\n  display: block;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Roboto\", Verdana, Geneva, Tahoma, sans-serif;\n  scroll-behavior: smooth;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #39838a;\n}\n\n.main {\n  position: relative;\n}\n\n.text_subtitle {\n  font-size: 24px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 120%;\n}\n\n.text_btn {\n  font-size: 16px;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 140%;\n}\n\n.text_smallParagraph {\n  font-size: 15px;\n  font-weight: 300;\n  font-style: normal;\n  line-height: 120%;\n}\n\n.feed__mainText {\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 130%;\n}\n\n.feed__commentText {\n  font-size: 16px;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 130%;\n}\n\n.text__donate {\n  font-size: 16.3px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 140%;\n}\n\n.button__navigation {\n  color: #F1F3F2;\n  line-height: 140%;\n  text-align: center;\n  text-transform: uppercase;\n  background: #f9804b;\n  border-radius: 10px;\n  border-style: none;\n  font-family: \"Roboto\", Verdana, Geneva, Tahoma, sans-serif;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.button__navigation:hover {\n  background: #ab2f35;\n}\n.button__navigation:active {\n  background: #7d3950;\n}\n\n.sound_on {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  padding: 6.4px;\n}\n.sound_on span {\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  height: 18px;\n  width: 18px;\n  background-size: cover;\n}\n\n.sound_off span {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.active {\n  background: #7d3950;\n}\n\n.navigation {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  gap: 3%;\n}\n.navigation .navigation__item {\n  list-style: none;\n}\n\nheader {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.canvas {\n  display: block;\n  margin: 0 auto;\n  background: #929699;\n  border: 4px solid #fcda69;\n  color: #333B41;\n  transition: all 1s ease-in;\n}\n\n.size_block {\n  margin: 1rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.a_size {\n  color: #333B41;\n}\n\n.progress {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.results__wrapper {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: rgba(51, 59, 65, 0.5);\n}\n.results__wrapper .results_block {\n  margin: 0 auto;\n  width: 80%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fcda69;\n  padding: 20px 10px;\n}\n.results__wrapper .results_block h1 {\n  margin: 0;\n}\n.results__wrapper .results_block ol {\n  padding: 0;\n  font-weight: 800;\n  background-color: rgba(51, 59, 65, 0.5);\n}\n.results__wrapper .results_block ol li {\n  background-color: #f9804b;\n}\n.results__wrapper .results_block .cross {\n  position: absolute;\n  top: 2%;\n  right: 2%;\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  width: 15px;\n  height: 15px;\n  background-size: cover;\n}\n\n.message__wrapper {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: rgba(51, 59, 65, 0.5);\n}\n.message__wrapper .message_block {\n  margin: 0 auto;\n  width: 80%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fcda69;\n  padding: 20px 10px;\n}\n.message__wrapper .message_block h1 {\n  margin: 0;\n  color: #333B41;\n  margin-bottom: 10px;\n}\n.message__wrapper .message_block .cross {\n  position: absolute;\n  top: 2%;\n  right: 2%;\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  width: 15px;\n  height: 15px;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_normalize.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_base.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/abstracts/_mixins.scss","webpack://./src/styles/components/_button.scss","webpack://./src/styles/components/_navigation.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_canvas.scss","webpack://./src/styles/layout/_size.scss","webpack://./src/styles/layout/_progress.scss","webpack://./src/styles/layout/_results.scss","webpack://./src/styles/layout/_message.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  \r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }\r\n\r\n  section, main, footer, header, article{\r\n    display: block;\r\n  }\r\n  *{\r\n    box-sizing: border-box;\r\n  }\r\n  ","@import \"abstracts/variables\";\r\n@import \"abstracts/mixins\";\r\n\r\n\r\n//Base\r\n@import \"base/normalize\";\r\n@import \"base/base\";\r\n@import url('https://fonts.googleapis.com/css2?family=Aladin&family=Aleo:ital,wght@0,400;0,700;1,700&family=Roboto:wght@100;300;400;500;700&display=swap');\r\n\r\n//Components\r\n@import \"components/button\";\r\n@import \"components/navigation\";\r\n\r\n//layout\r\n@import \"layout/header\";\r\n@import \"layout/canvas\";\r\n@import \"layout/size\";\r\n@import \"layout/progress\";\r\n@import \"layout/results\";\r\n@import \"layout/message\";\r\n\r\n\r\n","\r\nhtml{\r\n    font-size: 10px;\r\n}\r\n\r\nbody{\r\n    font-size: 1.6rem;\r\n    font-family: \"Roboto\", Verdana, Geneva, Tahoma, sans-serif;\r\n    scroll-behavior: smooth;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: $color-primary;\r\n}\r\n\r\n.main{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.text_subtitle{\r\n    @include font(24px, 120%, 400);\r\n\r\n}\r\n\r\n.text_btn{\r\n    @include font(16px, 140%, 500);\r\n\r\n}\r\n\r\n.text_smallParagraph{\r\n    @include font(15px, 120%, 300);\r\n\r\n}\r\n\r\n.feed__mainText{\r\n    @include font(16px, 130%, 400);\r\n\r\n}\r\n.feed__commentText{\r\n    @include font(16px, 130%, 500);\r\n\r\n}\r\n\r\n.text__donate{\r\n    @include font(16.3px, 140%, 400);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","$color-primary:#39838a;\r\n$color-additional:#fcda69;\r\n$color-empty-space: #929699;\r\n$color-buttons:#f9804b;\r\n$color-button-hover:#ab2f35;\r\n$color-button-active:#7d3950;\r\n$color-text-dark:#333B41;\r\n$color-white:#FFFFFF;\r\n$color-text-light:#F1F3F2;\r\n\r\n\r\n\r\n$breakpoints: (\r\n    'small':(min-width: 320px),\r\n  'medium': (min-width: 768px),\r\n  'large': (min-width: 1280px),\r\n);\r\n\r\n\r\n\r\n\r\n\r\n\r\n","@mixin font($size, $height, $weight, $style:normal){\r\n   font-size: $size;\r\n   font-weight: $weight;\r\n   font-style: $style;\r\n   line-height: $height;\r\n    }\r\n\r\n    //padding from px to vw\r\n\r\n@mixin padding($media, $top:0, $right:0, $bottom:0, $left:0){\r\n     padding: #{calc($top/$media*100)}vw #{calc($right/$media*100)}vw #{calc($bottom/$media*100)}vw #{calc($left/$media*100)}vw;\r\n       }\r\n\r\n@mixin height($media, $height){\r\n  height: #{calc($height/$media*100)}vw;\r\n}     \r\n\r\n@mixin width($media, $width) {\r\n  width: #{calc($width/$media*100)}vw;\r\n}\r\n\r\n@mixin gap($media, $gap){\r\n  gap: #{calc($gap/$media*100)}vw;\r\n}\r\n@mixin row-gap($media, $row-gap) {\r\n  row-gap: #{calc($row-gap/$media*100)}vw;\r\n}\r\n\r\n@mixin column-gap($media, $column-gap) {\r\n  column-gap: #{calc($column-gap/$media*100)}vw;\r\n}\r\n\r\n@mixin margin($media, $top:0, $right:0, $bottom:0, $left:0){\r\n  margin: #{calc($top/$media*100)}vw #{calc($right/$media*100)}vw #{calc($bottom/$media*100)}vw #{calc($left/$media*100)}vw;\r\n    }\r\n\r\n@mixin left($media, $left:0){\r\n  left: #{calc($left/$media*100)}vw;\r\n}\r\n\r\n@mixin right($media, $right:0){\r\n  right: #{calc($right/$media*100)}vw;\r\n}\r\n@mixin top ($media, $top:0){\r\n  top: #{calc($top/$media*100)}vw;\r\n}\r\n@mixin bottom ($media, $bottom:0){\r\n  bottom: #{calc($bottom/$media*100)}vw;\r\n  \r\n}\r\n\r\n@mixin font-size ($media, $font-size) {\r\n  font-size: #{calc($font-size/$media*100)}vw;;\r\n}\r\n\r\n\r\n// Управление отзывчивостью.\r\n// @access public\r\n// @param {String} $breakpoint - точка останова\r\n// @requires $breakpoints\r\n@mixin respond-to($breakpoint) {\r\n  $raw-query: map-get($breakpoints, $breakpoint);\r\n\r\n  @if $raw-query {\r\n    $query: if(\r\n      type-of($raw-query) == 'string',\r\n      unquote($raw-query),\r\n      inspect($raw-query)\r\n    );\r\n\r\n    @media #{$query} {\r\n      @content;\r\n    }\r\n  } @else {\r\n  @error 'Не указано значение для `#{$breakpoint}`. '\r\n       + 'Пожалуйста, убедитесь, что точка останова объявлена в карте `$breakpoints`.';\r\n  }\r\n}\r\n    \r\n\r\n \r\n\r\n\r\n\r\n\r\n",".button__navigation{\r\n    color: $color-text-light;\r\n    line-height: 140%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background: $color-buttons;\r\n    border-radius: 10px;\r\n    border-style: none;\r\n    font-family: \"Roboto\", Verdana, Geneva, Tahoma, sans-serif;\r\n    transition:all .3s;\r\n    cursor: pointer;\r\n    &:hover{\r\n        background: $color-button-hover;\r\n    }\r\n    &:active{\r\n        background: $color-button-active;\r\n    }\r\n}\r\n\r\n\r\n.sound_on{\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 6.4px;\r\n    span{\r\n        display: inline-block;\r\n        background-image: url('../../assets/svg/sound-on-new.svg');\r\n        background-repeat: no-repeat;\r\n        height: 18px;\r\n        width: 18px;\r\n        background-size:cover;\r\n    }\r\n}\r\n\r\n.sound_off{\r\n    span{\r\n        background-image: url('../../assets/svg/sound-off-new.svg');\r\n    }\r\n\r\n}\r\n\r\n.active{\r\n    background: $color-button-active;\r\n}\r\n\r\n\r\n","\r\n.navigation{\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    gap: 3%;\r\n    .navigation__item{\r\n      list-style: none;\r\n    }\r\n}\r\n\r\n\r\n","header{\r\n  width: 90%; \r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n    \r\n",".canvas{\r\n    display: block;\r\n    margin: 0 auto;\r\n    background: $color-empty-space;\r\n    border: 4px solid $color-additional;\r\n    color: $color-text-dark;\r\n    transition: all 1s ease-in;\r\n}",".size_block{\r\n    margin: 1rem 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.a_size{\r\n    color: $color-text-dark;\r\n}",".progress{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}",".results__wrapper{\r\n    position: absolute;\r\n    top:0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index:2;\r\n    background-color: rgba($color: #333B41, $alpha: 0.5) ;\r\n    .results_block{\r\n        margin: 0 auto;\r\n        width: 80%;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        background-color: $color-additional;\r\n        padding: 20px 10px;\r\n        h1{\r\n            margin: 0;\r\n        }\r\n        ol{\r\n            padding: 0;\r\n            font-weight: 800;\r\n            background-color: rgba($color: #333B41, $alpha: 0.5);\r\n            li{\r\n                background-color: $color-buttons;\r\n            }\r\n        }\r\n        .cross{ \r\n            position: absolute;\r\n            top: 2%;\r\n            right: 2%;\r\n            display: inline-block;\r\n            background-image: url('../../assets/svg/cross.svg');\r\n            width: 15px;\r\n            height: 15px;\r\n            background-size: cover;\r\n    \r\n        }\r\n    }\r\n\r\n}",".message__wrapper{\r\n    position: absolute;\r\n    top:0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index:2;\r\n    background-color: rgba($color: #333B41, $alpha: 0.5) ;\r\n    .message_block{\r\n        margin: 0 auto;\r\n        width: 80%;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        background-color: $color-additional;\r\n        padding: 20px 10px;\r\n        h1{\r\n            margin: 0;\r\n            color: $color-text-dark;\r\n            margin-bottom: 10px;\r\n        }\r\n        \r\n        .cross{ \r\n            position: absolute;\r\n            top: 2%;\r\n            right: 2%;\r\n            display: inline-block;\r\n            background-image: url('../../assets/svg/cross.svg');\r\n            width: 15px;\r\n            height: 15px;\r\n            background-size: cover;\r\n    \r\n        }\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/svg/cross.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/cross.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cross.svg";

/***/ }),

/***/ "./src/assets/svg/sound-off-new.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/sound-off-new.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sound-off-new.svg";

/***/ }),

/***/ "./src/assets/svg/sound-on-new.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/sound-on-new.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sound-on-new.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _myComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myComment */ "./src/myComment.js");
/* harmony import */ var _getNumberMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNumberMatrix */ "./src/getNumberMatrix.js");
/* harmony import */ var _getMatrixResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMatrixResult */ "./src/getMatrixResult.js");
/* harmony import */ var _getBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getBody */ "./src/getBody.js");
/* harmony import */ var _getMousePosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getMousePosition */ "./src/getMousePosition.js");
/* harmony import */ var _getTilesAgain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getTilesAgain */ "./src/getTilesAgain.js");
/* harmony import */ var _getResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getResults */ "./src/getResults.js");
/* harmony import */ var _getTileSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getTileSize */ "./src/getTileSize.js");
/* harmony import */ var _getMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getMessage */ "./src/getMessage.js");
/* harmony import */ var _areEqual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./areEqual */ "./src/areEqual.js");










 //import countTime from "./timer";

var a = 4;
var maxNumber = a * a;
var numberMatrix = (0,_getNumberMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(a);
var matrixResult = (0,_getMatrixResult__WEBPACK_IMPORTED_MODULE_3__["default"])(a);
(0,_getBody__WEBPACK_IMPORTED_MODULE_4__["default"])(a, numberMatrix); //size of frame

var otherSize = document.querySelector('.other_size');
var currentSize = document.querySelector('.current_size');
otherSize.addEventListener('click', function (e) {
  if (e.target.classList.contains('a_3')) {
    a = 3;
  }

  ;

  if (e.target.classList.contains('a_4')) {
    a = 4;
  }

  if (e.target.classList.contains('a_5')) {
    a = 5;
  }

  if (e.target.classList.contains('a_6')) {
    a = 6;
  }

  if (e.target.classList.contains('a_7')) {
    a = 7;
  }

  if (e.target.classList.contains('a_8')) {
    a = 8;
  }

  maxNumber = a * a;
  numberMatrix = (0,_getNumberMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(a);
  matrixResult = (0,_getMatrixResult__WEBPACK_IMPORTED_MODULE_3__["default"])(a);
  (0,_getTilesAgain__WEBPACK_IMPORTED_MODULE_6__["default"])(canvas, a, numberMatrix);
  currentSize.innerHTML = "Frame size: ".concat(a, "x").concat(a);
  moves.innerHTML = "Moves: 0";
  counter = 0;
  clearInterval(timer);
  totalSeconds = 0;

  if (!buttonPause.classList.contains('on_pause')) {
    timer = setInterval(countTime, 1000);
  } else {
    time.innerHTML = 'Timer: ' + '00' + ":" + '00';
  }

  return numberMatrix;
}); //timer

var time = document.querySelector(".time");
var timer = setInterval(countTime, 1000);
var totalSeconds = 0;

function countTime() {
  ++totalSeconds;
  var minute = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds - minute * 60;

  if (minute < 10) {
    minute = "0" + minute;
  }

  ;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.innerHTML = 'Timer: ' + minute + ":" + seconds;
}

var buttonPause = document.querySelector('#pause');
buttonPause.addEventListener('click', function () {
  buttonPause.classList.toggle('on_pause');

  if (buttonPause.classList.contains('on_pause')) {
    buttonPause.innerHTML = 'Play';
    buttonPause.style.background = '#ab2f35';
    clearInterval(timer);
  } else {
    buttonPause.innerHTML = 'Pause';
    buttonPause.style.background = '';
    timer = setInterval(countTime, 1000);
  }
}); //sound

var sound = new Audio('sound_tile.mp3');
var soundButton = document.querySelector('#sound');
soundButton.addEventListener('click', function () {
  soundButton.classList.toggle('sound_off');
});
var canvas = document.querySelector("canvas"); //let ctx = canvas.getContext('2d');

var moves = document.querySelector('.moves');
var counter = 0; //let matrixResult = getMatrixResult();
//restart

var buttonShuffle = document.querySelector('#shuffle');
buttonShuffle.addEventListener('click', restart);

function restart() {
  numberMatrix = (0,_getNumberMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(a);
  (0,_getTilesAgain__WEBPACK_IMPORTED_MODULE_6__["default"])(canvas, a, numberMatrix);
  moves.innerHTML = "Moves: 0";
  counter = 0;
  clearInterval(timer);
  totalSeconds = 0;

  if (!buttonPause.classList.contains('on_pause')) {
    timer = setInterval(countTime, 1000);
  } else {
    time.innerHTML = 'Timer: ' + '00' + ":" + '00';
  }
} //canvas onclick


var bestResults = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109];
canvas.addEventListener("click", function (e) {
  if (!buttonPause.classList.contains('on_pause') && numberMatrix !== matrixResult) {
    var position = (0,_getMousePosition__WEBPACK_IMPORTED_MODULE_5__["default"])(canvas, e, a);
    var iOfTileClicked = position.i;
    var jOfTileClicked = position.j; //let ctx = canvas.getContext('2d');

    if (jOfTileClicked + 1 < a) {
      if (numberMatrix[iOfTileClicked][jOfTileClicked + 1] === maxNumber) {
        getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked + 1);
      }
    }

    if (jOfTileClicked - 1 >= 0) {
      if (numberMatrix[iOfTileClicked][jOfTileClicked - 1] === maxNumber) {
        getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked - 1);
      }
    }

    if (iOfTileClicked + 1 < a) {
      if (numberMatrix[iOfTileClicked + 1][jOfTileClicked] === maxNumber) {
        getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked + 1, jOfTileClicked);
      }
    }

    if (iOfTileClicked - 1 >= 0) {
      if (numberMatrix[iOfTileClicked - 1][jOfTileClicked] === maxNumber) {
        getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked - 1, jOfTileClicked);
      }
    }

    if ((0,_areEqual__WEBPACK_IMPORTED_MODULE_10__["default"])(numberMatrix, matrixResult, a)) {
      clearInterval(timer);
      console.log('yes');
      bestResults.push(counter);
      bestResults.sort(function (a, b) {
        return a - b;
      });

      if (bestResults.length > 10) {
        bestResults.pop();
      }

      (0,_getMessage__WEBPACK_IMPORTED_MODULE_9__["default"])(counter, totalSeconds);
      var messageWrapper = document.querySelector('.message__wrapper');

      if (messageWrapper) {
        var cross = document.querySelector('.cross');
        var buttonRestart = document.querySelector('.restart');
        var wrapperMessage = document.querySelector('.message__wrapper');
        wrapperMessage.addEventListener('click', function (e) {
          if (e.target === wrapperMessage) {
            wrapperMessage.remove();
          }
        });
        cross.addEventListener('click', function () {
          wrapperMessage.remove();
        });
        buttonRestart.addEventListener('click', function () {
          wrapperMessage.remove();
          restart();
        });
      }
    }

    return numberMatrix;
  }
}); //close message block

function getTileMoved(iOfTileClicked, jOfTileClicked, iOfSpace, jOfSpace) {
  var screenWidth = window.screen.width;
  var tileSize = (0,_getTileSize__WEBPACK_IMPORTED_MODULE_8__["default"])(screenWidth, a);
  var fontSize;

  if (a === 4) {
    // tileSize = 69;
    fontSize = 48;
  }

  if (a === 3) {
    // tileSize = 92.66;
    fontSize = 48;
  }

  if (a === 5) {
    // tileSize = 55.2;
    fontSize = 36;
  }

  if (a === 6) {
    // tileSize = 45.8;
    fontSize = 32;
  }

  if (a === 7) {
    // tileSize = 39.1;
    fontSize = 30;
  }

  if (a === 8) {
    // tileSize = 34.125;
    fontSize = 24;
  }

  var ctx = canvas.getContext('2d');
  var numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
  numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
  ctx.fillStyle = '#929699';
  ctx.fillRect(10 + jOfTileClicked * (tileSize + 1), 10 + iOfTileClicked * (tileSize + 1), tileSize, tileSize);
  numberMatrix[iOfSpace][jOfSpace] = numberOfClickedTile;
  ctx.fillStyle = '#fcda69';
  ctx.fillRect(10 + jOfSpace * (tileSize + 1), 10 + iOfSpace * (tileSize + 1), tileSize, tileSize);
  ctx.fillStyle = '#333B41';
  ctx.font = "".concat(fontSize, "px san-serif ");
  ctx.textAlign = 'center';
  ctx.fillText("".concat(numberOfClickedTile), 10 + jOfSpace * (tileSize + 1) + tileSize / 2, 10 + iOfSpace * (tileSize + 1) + tileSize / 2 + fontSize / 3); //animation

  /* let position =0;
    setInterval(function () {
     //clear the empty space
    /* ctx.clearRect(10+jOfSpace*(tileSize+1), 10+iOfSpace*(tileSize+1), tileSize, tileSize);*/

  /*if (position !== tileSize){
     position++;
     ctx.fillStyle = '#fcda69';
     ctx.fillRect(10+jOfSpace*(tileSize+1)-position*(jOfTileClicked-jOfSpace)/tileSize, 10+iOfSpace*(tileSize+1)-position*(iOfTileClicked-iOfSpace)/tileSize, tileSize, tileSize);
     ctx.fillStyle = '#333B41';
     ctx.font = `${fontSize}px san-serif `;
     ctx.textAlign = 'center';
     ctx.fillText(`${numberOfClickedTile}`, 10+jOfSpace*(tileSize+1)+tileSize/2-position*(jOfTileClicked-jOfSpace)/tileSize, 10+iOfSpace*(tileSize+1)+tileSize/2+fontSize/3-position*(iOfTileClicked-iOfSpace)/tileSize);
   }
  }, 120);
  */

  counter += 1;
  moves.innerHTML = "Moves: ".concat(counter);

  if (!soundButton.classList.contains('sound_off')) {
    sound.play();
  }
} //save


var buttonSave = document.querySelector('#save');
buttonSave.addEventListener('click', function () {
  buttonSave.classList.toggle('active');
});
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  if (buttonSave.classList.contains('active')) {
    localStorage.setItem('numberMatrix', numberMatrix);
    localStorage.setItem('a', a);
    localStorage.setItem('moves', counter);
    localStorage.setItem('time', totalSeconds);
    clearInterval(timer);
  } else if (localStorage.getItem('numberMatrix')) {
    localStorage.removeItem('numberMatrix');
    localStorage.removeItem('a');
  }
}

;

function getLocalStorage() {
  if (localStorage.getItem('numberMatrix')) {
    a = Number(localStorage.getItem('a'));
    var arrOfNumberMatrix = localStorage.getItem('numberMatrix').split(',');
    var matrix = [];

    for (var i = 0; i < a; i++) {
      var rowOfMatrix = [];

      for (var j = 0; j < a; j++) {
        rowOfMatrix.push(Number(arrOfNumberMatrix.shift()));
      }

      matrix.push(rowOfMatrix);
    }

    numberMatrix = matrix;
    console.log(numberMatrix);
    counter = Number(localStorage.getItem('moves'));
    totalSeconds = Number(localStorage.getItem('time'));
    (0,_getTilesAgain__WEBPACK_IMPORTED_MODULE_6__["default"])(canvas, a, numberMatrix);
    moves.innerHTML = "Moves: ".concat(counter);
    countTime(); //timer = setInterval(countTime, 1000);
  }
} //results


var buttonResults = document.querySelector('#results');
buttonResults.addEventListener('click', function () {
  buttonResults.classList.toggle('active');

  if (buttonResults.classList.contains('active')) {
    (0,_getResults__WEBPACK_IMPORTED_MODULE_7__["default"])(bestResults);
    var cross = document.querySelector('.cross');
    var wrapperResults = document.querySelector('.results__wrapper');
    wrapperResults.addEventListener('click', function (e) {
      if (e.target === wrapperResults) {
        wrapperResults.remove();
        buttonResults.classList.toggle('active');
      }
    });
    cross.addEventListener('click', function () {
      wrapperResults.remove();
      buttonResults.classList.toggle('active');
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundlea740a345c88e3f1a954c.js.map