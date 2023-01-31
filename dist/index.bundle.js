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

    findShortestPath(start = `a2`, end = `h4`){
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



const chessboard = (() => {
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

    function validateInput(value, errorSection){
        value = value.toLowerCase();

        if (value == "") {
            showError(errorSection);
            return null; 
        }
        else if (value.length != 2) {
            showError(errorSection);
            return null; 
        }
        else if (value.charCodeAt(0) < 97 || value.charCodeAt(0) > 104) {
            showError(errorSection);
            return null; 
        }
        else if (value.charCodeAt(1) < 49 || value.charCodeAt(1) > 56) {
            showError(errorSection);
            return null; 
        }

        removeError(errorSection);
        return value;   
    }

    function getInput(){
        const start = validateInput(startInput.value, startError);
        const end = validateInput(endInput.value, endError);
        if (start == null || end == null) return null;
        return {start, end};
    }

    const delay = ms => new Promise(res => {
        setTimeout(res, ms)
    });

    async function highlightSquares(path){
        for (let i in path){
            const square = Array.from(squares).find(square => square.id == path[i])

            square.style.border = "solid 2px white";
            const img = document.createElement("img");
            img.src = "./icon.png";
            square.appendChild(img);
            
            await delay(750);

            square.removeChild(img);
        }
    }

    function resetChessboard(){
        Array.from(squares).forEach(square => square.style.border = "");
    }

    async function handleClick(){
        button.disabled = true;
        resetChessboard();

        const input = getInput();
        if(input) {
            const path = chessboard.findShortestPath(input.start, input.end);
            await highlightSquares(path);
            console.log(chessboard.convertOutput(path));
        }
        
        button.disabled = false;
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQix1QkFBdUIsT0FBTztBQUM5QjtBQUNBLDRCQUE0QixFQUFFLEdBQUcsSUFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7QUNiL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLE9BQU87QUFDbEMsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsS0FBSyxHQUFHLEtBQUs7QUFDakQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLEdBQUcsVUFBVTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTyxFQUFFLE9BQU87QUFDbEQsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7VUN0RjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0Q7O0FBRXhDO0FBQ0EsSUFBSSxtREFBZ0I7O0FBRXBCLDJCQUEyQixpREFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ2hlc3Nib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmRDb250YWluZXJgKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgODsgaisrKXsgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgICAgICAgICBzcXVhcmUuaWQgPSBgWyR7an0sJHs3LWl9XWA7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgYm94YCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2hlc3Nib2FyZDsiLCJjbGFzcyB1bmRpcmVjdGVkR3JhcGh7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hZGROb2RlcygpO1xuICAgICAgICB0aGlzLmFkZEVkZ2VzKCk7XG4gICAgfVxuXG4gICAgYWRkTm9kZXMoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgODsgaisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgWyR7aX0sJHtqfV1gLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFZGdlcygpe1xuICAgICAgICBjb25zdCBrbmlnaHRNb3ZlbWVudCA9IFtbMSwyXSxbMiwxXSxbMSwtMl0sWzIsLTFdLFstMSwtMl0sWy0yLC0xXSxbLTEsMl0sWy0yLDFdXTtcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLmJvYXJkLmtleXMoKSl7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmJvYXJkLmdldChrZXkpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVggPSBwYXJzZUludChrZXlbMV0pO1xuICAgICAgICAgICAgY29uc3QgbW92ZVkgPSBwYXJzZUludChrZXlbM10pO1xuXG4gICAgICAgICAgICBrbmlnaHRNb3ZlbWVudC5mb3JFYWNoKG9mZnNldCA9PntcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NYID0gbW92ZVggKyBvZmZzZXRbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zWSA9IG1vdmVZICsgb2Zmc2V0WzFdO1xuICAgICAgICAgICAgICAgIGlmKHBvc1ggPj0gMCAmJiBwb3NYIDw9IDcgJiYgcG9zWSA+PSAwICYmIHBvc1kgPD0gNyl7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGBbJHtwb3NYfSwke3Bvc1l9XWApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNob3J0ZXN0UGF0aChzdGFydCA9IGBhMmAsIGVuZCA9IGBoNGApe1xuICAgICAgICAvL1VzZXMgYnJlYWR0aC1maXJzdCBzZWFyY2hcbiAgICAgICAgc3RhcnQgPSB0aGlzLmNvbnZlcnRJbnB1dChzdGFydCk7XG4gICAgICAgIGVuZCA9IHRoaXMuY29udmVydElucHV0KGVuZCk7XG5cbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3Qgbm9kZVBhcmVudHMgPSBuZXcgTWFwKCk7IC8va2VlcHMgdHJhY2sgb2YgcGFyZW50IG9mIGVhY2ggdmFsdWUgc28gd2UgY2FuIHJldmVyc2UgdGhlIHBhdGhcbiAgICAgICAgY29uc3QgcXVldWUgPSBbc3RhcnRdO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmKG5vZGUgPT0gZW5kKSByZXR1cm4gdGhpcy5yZXZlcnNlUGF0aChzdGFydCwgZW5kLCBub2RlUGFyZW50cyk7XG4gICAgICAgICAgICBpZighbm9kZSAmJiB2aXNpdGVkLmhhcyhub2RlKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIHZpc2l0ZWQuc2V0KG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5nZXQobm9kZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIW5vZGVQYXJlbnRzLmhhcyh2YWx1ZSkpIG5vZGVQYXJlbnRzLnNldCh2YWx1ZSxub2RlKTtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXZlcnNlUGF0aChzdGFydCwgZW5kLCBub2RlUGFyZW50cyl7XG4gICAgICAgIGNvbnN0IHBhdGggPSBbZW5kXTtcbiAgICAgICAgbGV0IG5vZGUgPSBlbmQ7XG5cbiAgICAgICAgd2hpbGUobm9kZSAhPSBzdGFydCl7XG4gICAgICAgICAgICBub2RlID0gbm9kZVBhcmVudHMuZ2V0KG5vZGUpO1xuICAgICAgICAgICAgcGF0aC51bnNoaWZ0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIGNvbnZlcnRJbnB1dChzdHIpe1xuICAgICAgICAvL0NvbnZlcnRzIGNoZXNzIG5vbWVuY2xhdHVyZSBpbnRvIG51bWJlcnMgZm9yIGNvZGUgYXJyYXlcbiAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGZpcnN0TnVtID0gc3RyLmNoYXJDb2RlQXQoMCkgLSA5NztcbiAgICAgICAgY29uc3Qgc2Vjb25kTnVtID0gcGFyc2VJbnQoc3RyWzFdKSAtIDE7XG4gICAgICAgIHJldHVybiBgWyR7Zmlyc3ROdW19LCR7c2Vjb25kTnVtfV1gO1xuICAgIH1cblxuICAgIGNvbnZlcnRPdXRwdXQocGF0aCl7XG4gICAgICAgIC8vQ29udmVydHMgYmFjayB0byBub3JtYWwgY2hlc3Mgbm9tZW5jbGF0dXJlXG4gICAgICAgIGxldCBjb252ZXJ0ZWRQYXRoID0gW107XG4gICAgICAgIHBhdGguZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBwYXJzZUludChub2RlWzFdKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW0gPSBwYXJzZUludChub2RlWzNdKSArIDE7XG4gICAgICAgICAgICBjb252ZXJ0ZWRQYXRoLnB1c2goYCR7bGV0dGVyfSR7bmV3TnVtfWApO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29udmVydGVkUGF0aDtcbiAgICB9ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVuZGlyZWN0ZWRHcmFwaDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB1bmRpcmVjdGVkR3JhcGggZnJvbSBcIi4vZ3JhcGguanNcIjtcbmltcG9ydCBjcmVhdGVDaGVzc2JvYXJkIGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jb25zdCBjaGVzc2JvYXJkID0gKCgpID0+IHtcbiAgICBjcmVhdGVDaGVzc2JvYXJkKCk7XG5cbiAgICBjb25zdCBjaGVzc2JvYXJkID0gbmV3IHVuZGlyZWN0ZWRHcmFwaCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzZWFyY2hCdG5gKTtcbiAgICBjb25zdCBzdGFydElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0SW5wdXRgKTtcbiAgICBjb25zdCBlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmRJbnB1dGApO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYm94YClcbiAgICBjb25zdCBzdGFydEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXJ0SW5wdXQgKyBzcGFuLmVycm9yYCk7XG4gICAgY29uc3QgZW5kRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZW5kSW5wdXQgKyBzcGFuLmVycm9yYCk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBoYW5kbGVDbGljayk7XG5cbiAgICBmdW5jdGlvbiBzaG93RXJyb3IoZXJyb3Ipe1xuICAgICAgICBlcnJvci5pbm5lclRleHQgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoYGFjdGl2ZWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVycm9yKGVycm9yKXtcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBgYDtcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZShgYWN0aXZlYCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dCh2YWx1ZSwgZXJyb3JTZWN0aW9uKXtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBzaG93RXJyb3IoZXJyb3JTZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5sZW5ndGggIT0gMikge1xuICAgICAgICAgICAgc2hvd0Vycm9yKGVycm9yU2VjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA8IDk3IHx8IHZhbHVlLmNoYXJDb2RlQXQoMCkgPiAxMDQpIHtcbiAgICAgICAgICAgIHNob3dFcnJvcihlcnJvclNlY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmNoYXJDb2RlQXQoMSkgPCA0OSB8fCB2YWx1ZS5jaGFyQ29kZUF0KDEpID4gNTYpIHtcbiAgICAgICAgICAgIHNob3dFcnJvcihlcnJvclNlY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlRXJyb3IoZXJyb3JTZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlOyAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElucHV0KCl7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdmFsaWRhdGVJbnB1dChzdGFydElucHV0LnZhbHVlLCBzdGFydEVycm9yKTtcbiAgICAgICAgY29uc3QgZW5kID0gdmFsaWRhdGVJbnB1dChlbmRJbnB1dC52YWx1ZSwgZW5kRXJyb3IpO1xuICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB7c3RhcnQsIGVuZH07XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXkgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlcywgbXMpXG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoaWdobGlnaHRTcXVhcmVzKHBhdGgpe1xuICAgICAgICBmb3IgKGxldCBpIGluIHBhdGgpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gQXJyYXkuZnJvbShzcXVhcmVzKS5maW5kKHNxdWFyZSA9PiBzcXVhcmUuaWQgPT0gcGF0aFtpXSlcblxuICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJvcmRlciA9IFwic29saWQgMnB4IHdoaXRlXCI7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IFwiLi9pY29uLnBuZ1wiO1xuICAgICAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDc1MCk7XG5cbiAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVDaGlsZChpbWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDaGVzc2JvYXJkKCl7XG4gICAgICAgIEFycmF5LmZyb20oc3F1YXJlcykuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLnN0eWxlLmJvcmRlciA9IFwiXCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJlc2V0Q2hlc3Nib2FyZCgpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgICAgaWYoaW5wdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjaGVzc2JvYXJkLmZpbmRTaG9ydGVzdFBhdGgoaW5wdXQuc3RhcnQsIGlucHV0LmVuZCk7XG4gICAgICAgICAgICBhd2FpdCBoaWdobGlnaHRTcXVhcmVzKHBhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hlc3Nib2FyZC5jb252ZXJ0T3V0cHV0KHBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=