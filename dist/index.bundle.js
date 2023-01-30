/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createChessboard = () => {
    const container = document.getElementById(`boardContainer`);

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){        
            const square = document.createElement(`div`);
            square.id = `[${j},${7-i}]`;
            square.classList.add(`box`);
            container.appendChild(square);
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createChessboard);

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class undirectedGraph{
    constructor(){
        this.board = new Map();
        this.addNodes();
        this.addEdges();
    }

    addNodes(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.board.set(`[${i},${j}]`, []);
            }
        }
    }

    addEdges(){
        const knightMovement = [[1,2],[2,1],[1,-2],[2,-1],[-1,-2],[-2,-1],[-1,2],[-2,1]];
        for(const key of this.board.keys()){
            const values = this.board.get(key);
            const moveX = parseInt(key[1]);
            const moveY = parseInt(key[3]);

            knightMovement.forEach(offset =>{
                const posX = moveX + offset[0];
                const posY = moveY + offset[1];
                if(posX >= 0 && posX <= 7 && posY >= 0 && posY <= 7){
                    values.push(`[${posX},${posY}]`); 
                }
            })
        }
    }

    findShortestPath(start = `a5`, end = `f6`){
        //Uses breadth-first search
        start = this.convertInput(start);
        end = this.convertInput(end);

        const visited = new Map();
        const nodeParents = new Map(); //keeps track of parent of each value so we can reverse the path
        const queue = [start];
        
        while(queue.length > 0){
            const node = queue.shift();
            if(node == end) return this.reversePath(start, end, nodeParents);
            if(!node && visited.has(node)) continue;

            visited.set(node);
            this.board.get(node).forEach(value => {
                if(!nodeParents.has(value)) nodeParents.set(value,node);
                queue.push(value);
            });
            
        }
    }

    reversePath(start, end, nodeParents){
        const path = [end];
        let node = end;

        while(node != start){
            node = nodeParents.get(node);
            path.unshift(node);
        }
        return path;
    }

    convertInput(str){
        //Converts chess nomenclature into numbers for code array
        str = str.toLowerCase();
        const firstNum = str.charCodeAt(0) - 97;
        const secondNum = parseInt(str[1]) - 1;
        return `[${firstNum},${secondNum}]`;
    }

    convertOutput(path){
        //Converts back to normal chess nomenclature
        let convertedPath = [];
        path.forEach(node => {
            const letter = String.fromCharCode(97 + parseInt(node[1]));
            const newNum = parseInt(node[3]) + 1;
            convertedPath.push(`${letter}${newNum}`);
        })
        return convertedPath;
    }   
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (undirectedGraph);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph.js */ "./src/graph.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const chessboard = new _graph_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

const button = document.getElementById(`searchBtn`);
const startInput = document.getElementById(`startInput`);
const endInput = document.getElementById(`endInput`);
const squares = document.querySelectorAll(`.box`)

const startError = document.querySelector(`#startInput + span.error`);
const endError = document.querySelector(`#endInput + span.error`);

button.addEventListener(`click`, handleClick);

function showError(error){
    error.innerText = `Invalid input`;
    error.classList.add(`active`);
}

function removeError(error){
    error.textContent = ``;
    error.classList.remove(`active`);
}

function validateInput(value, error){
    value = value.toLowerCase();

    if (value == "") {
        showError(error);
        return null; 
    }
    else if (value.length != 2) {
        showError(error);
        return null; 
    }
    else if (value.charCodeAt(0) < 97 || value.charCodeAt(0) > 104) {
        showError(error);
        return null; 
    }
    else if (value.charCodeAt(1) < 49 || value.charCodeAt(1) > 56) {
        showError(error);
        return null; 
    }

    removeError(error);
    return value;   
}

const delay = ms => new Promise(res => {
    console.log('waiting');
    setTimeout(res, ms)
});

function highlightSquares(path){
    let i = 0; 
    path.forEach(value =>{
        const square = Array.from(squares).find(square =>{
            if(square.id == value) {
                i += 1;
                return true;
            }
        });
        square.style.backgroundColor = "red";
        square.innerText = i;

    });
}

function resetSquares(){
    Array.from(squares).forEach(square => {
        square.style.backgroundColor = "";
        square.innerText = "";
    })
}

function handleClick(){
    resetSquares();
    const start = validateInput(startInput.value, startError);
    const end = validateInput(endInput.value, endError);
    if (start == null || end == null) return;
    const path = chessboard.findShortestPath(start, end);
    highlightSquares(path)
    console.log(chessboard.convertOutput(path));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQix1QkFBdUIsT0FBTztBQUM5QjtBQUNBLDRCQUE0QixFQUFFLEdBQUcsSUFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDZC9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLDJCQUEyQixPQUFPO0FBQ2xDLG1DQUFtQyxFQUFFLEdBQUcsRUFBRTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUssR0FBRyxLQUFLO0FBQ2pEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxHQUFHLFVBQVU7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU8sRUFBRSxPQUFPO0FBQ2xELFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7O1VDdEY5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNEOzs7O0FBSXhDLG1EQUFnQjtBQUNoQix1QkFBdUIsaURBQWU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNoZXNzYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvYXJkQ29udGFpbmVyYCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDg7IGorKyl7ICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgICAgICAgICAgc3F1YXJlLmlkID0gYFske2p9LCR7Ny1pfV1gO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYGJveGApO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2hlc3Nib2FyZDsiLCJjbGFzcyB1bmRpcmVjdGVkR3JhcGh7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hZGROb2RlcygpO1xuICAgICAgICB0aGlzLmFkZEVkZ2VzKCk7XG4gICAgfVxuXG4gICAgYWRkTm9kZXMoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgODsgaisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgWyR7aX0sJHtqfV1gLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFZGdlcygpe1xuICAgICAgICBjb25zdCBrbmlnaHRNb3ZlbWVudCA9IFtbMSwyXSxbMiwxXSxbMSwtMl0sWzIsLTFdLFstMSwtMl0sWy0yLC0xXSxbLTEsMl0sWy0yLDFdXTtcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLmJvYXJkLmtleXMoKSl7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmJvYXJkLmdldChrZXkpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVggPSBwYXJzZUludChrZXlbMV0pO1xuICAgICAgICAgICAgY29uc3QgbW92ZVkgPSBwYXJzZUludChrZXlbM10pO1xuXG4gICAgICAgICAgICBrbmlnaHRNb3ZlbWVudC5mb3JFYWNoKG9mZnNldCA9PntcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NYID0gbW92ZVggKyBvZmZzZXRbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zWSA9IG1vdmVZICsgb2Zmc2V0WzFdO1xuICAgICAgICAgICAgICAgIGlmKHBvc1ggPj0gMCAmJiBwb3NYIDw9IDcgJiYgcG9zWSA+PSAwICYmIHBvc1kgPD0gNyl7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGBbJHtwb3NYfSwke3Bvc1l9XWApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNob3J0ZXN0UGF0aChzdGFydCA9IGBhNWAsIGVuZCA9IGBmNmApe1xuICAgICAgICAvL1VzZXMgYnJlYWR0aC1maXJzdCBzZWFyY2hcbiAgICAgICAgc3RhcnQgPSB0aGlzLmNvbnZlcnRJbnB1dChzdGFydCk7XG4gICAgICAgIGVuZCA9IHRoaXMuY29udmVydElucHV0KGVuZCk7XG5cbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3Qgbm9kZVBhcmVudHMgPSBuZXcgTWFwKCk7IC8va2VlcHMgdHJhY2sgb2YgcGFyZW50IG9mIGVhY2ggdmFsdWUgc28gd2UgY2FuIHJldmVyc2UgdGhlIHBhdGhcbiAgICAgICAgY29uc3QgcXVldWUgPSBbc3RhcnRdO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmKG5vZGUgPT0gZW5kKSByZXR1cm4gdGhpcy5yZXZlcnNlUGF0aChzdGFydCwgZW5kLCBub2RlUGFyZW50cyk7XG4gICAgICAgICAgICBpZighbm9kZSAmJiB2aXNpdGVkLmhhcyhub2RlKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIHZpc2l0ZWQuc2V0KG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5nZXQobm9kZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIW5vZGVQYXJlbnRzLmhhcyh2YWx1ZSkpIG5vZGVQYXJlbnRzLnNldCh2YWx1ZSxub2RlKTtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXZlcnNlUGF0aChzdGFydCwgZW5kLCBub2RlUGFyZW50cyl7XG4gICAgICAgIGNvbnN0IHBhdGggPSBbZW5kXTtcbiAgICAgICAgbGV0IG5vZGUgPSBlbmQ7XG5cbiAgICAgICAgd2hpbGUobm9kZSAhPSBzdGFydCl7XG4gICAgICAgICAgICBub2RlID0gbm9kZVBhcmVudHMuZ2V0KG5vZGUpO1xuICAgICAgICAgICAgcGF0aC51bnNoaWZ0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIGNvbnZlcnRJbnB1dChzdHIpe1xuICAgICAgICAvL0NvbnZlcnRzIGNoZXNzIG5vbWVuY2xhdHVyZSBpbnRvIG51bWJlcnMgZm9yIGNvZGUgYXJyYXlcbiAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGZpcnN0TnVtID0gc3RyLmNoYXJDb2RlQXQoMCkgLSA5NztcbiAgICAgICAgY29uc3Qgc2Vjb25kTnVtID0gcGFyc2VJbnQoc3RyWzFdKSAtIDE7XG4gICAgICAgIHJldHVybiBgWyR7Zmlyc3ROdW19LCR7c2Vjb25kTnVtfV1gO1xuICAgIH1cblxuICAgIGNvbnZlcnRPdXRwdXQocGF0aCl7XG4gICAgICAgIC8vQ29udmVydHMgYmFjayB0byBub3JtYWwgY2hlc3Mgbm9tZW5jbGF0dXJlXG4gICAgICAgIGxldCBjb252ZXJ0ZWRQYXRoID0gW107XG4gICAgICAgIHBhdGguZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBwYXJzZUludChub2RlWzFdKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW0gPSBwYXJzZUludChub2RlWzNdKSArIDE7XG4gICAgICAgICAgICBjb252ZXJ0ZWRQYXRoLnB1c2goYCR7bGV0dGVyfSR7bmV3TnVtfWApO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29udmVydGVkUGF0aDtcbiAgICB9ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVuZGlyZWN0ZWRHcmFwaDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB1bmRpcmVjdGVkR3JhcGggZnJvbSBcIi4vZ3JhcGguanNcIjtcbmltcG9ydCBjcmVhdGVDaGVzc2JvYXJkIGZyb20gXCIuL2RvbS5qc1wiO1xuXG5cblxuY3JlYXRlQ2hlc3Nib2FyZCgpO1xuY29uc3QgY2hlc3Nib2FyZCA9IG5ldyB1bmRpcmVjdGVkR3JhcGgoKTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNlYXJjaEJ0bmApO1xuY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydElucHV0YCk7XG5jb25zdCBlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmRJbnB1dGApO1xuY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ib3hgKVxuXG5jb25zdCBzdGFydEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXJ0SW5wdXQgKyBzcGFuLmVycm9yYCk7XG5jb25zdCBlbmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlbmRJbnB1dCArIHNwYW4uZXJyb3JgKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgaGFuZGxlQ2xpY2spO1xuXG5mdW5jdGlvbiBzaG93RXJyb3IoZXJyb3Ipe1xuICAgIGVycm9yLmlubmVyVGV4dCA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKGBhY3RpdmVgKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3IoZXJyb3Ipe1xuICAgIGVycm9yLnRleHRDb250ZW50ID0gYGA7XG4gICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZShgYWN0aXZlYCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQodmFsdWUsIGVycm9yKXtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodmFsdWUgPT0gXCJcIikge1xuICAgICAgICBzaG93RXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgIHNob3dFcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA8IDk3IHx8IHZhbHVlLmNoYXJDb2RlQXQoMCkgPiAxMDQpIHtcbiAgICAgICAgc2hvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDEpIDwgNDkgfHwgdmFsdWUuY2hhckNvZGVBdCgxKSA+IDU2KSB7XG4gICAgICAgIHNob3dFcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG5cbiAgICByZW1vdmVFcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHZhbHVlOyAgIFxufVxuXG5jb25zdCBkZWxheSA9IG1zID0+IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgY29uc29sZS5sb2coJ3dhaXRpbmcnKTtcbiAgICBzZXRUaW1lb3V0KHJlcywgbXMpXG59KTtcblxuZnVuY3Rpb24gaGlnaGxpZ2h0U3F1YXJlcyhwYXRoKXtcbiAgICBsZXQgaSA9IDA7IFxuICAgIHBhdGguZm9yRWFjaCh2YWx1ZSA9PntcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gQXJyYXkuZnJvbShzcXVhcmVzKS5maW5kKHNxdWFyZSA9PntcbiAgICAgICAgICAgIGlmKHNxdWFyZS5pZCA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzcXVhcmUuaW5uZXJUZXh0ID0gaTtcblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldFNxdWFyZXMoKXtcbiAgICBBcnJheS5mcm9tKHNxdWFyZXMpLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgIHNxdWFyZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gICAgcmVzZXRTcXVhcmVzKCk7XG4gICAgY29uc3Qgc3RhcnQgPSB2YWxpZGF0ZUlucHV0KHN0YXJ0SW5wdXQudmFsdWUsIHN0YXJ0RXJyb3IpO1xuICAgIGNvbnN0IGVuZCA9IHZhbGlkYXRlSW5wdXQoZW5kSW5wdXQudmFsdWUsIGVuZEVycm9yKTtcbiAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IHBhdGggPSBjaGVzc2JvYXJkLmZpbmRTaG9ydGVzdFBhdGgoc3RhcnQsIGVuZCk7XG4gICAgaGlnaGxpZ2h0U3F1YXJlcyhwYXRoKVxuICAgIGNvbnNvbGUubG9nKGNoZXNzYm9hcmQuY29udmVydE91dHB1dChwYXRoKSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9