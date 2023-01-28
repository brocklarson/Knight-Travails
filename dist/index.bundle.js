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
            square.id = `${i}-${j}`;
            square.classList.add(`box`);
            //square.innerText = `${i},${j}`;
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

function validateInput(value){
    //return undefined if the value is empty
    //make sure the input follows format
}

button.addEventListener(`click`, handleClick);
function handleClick(){
    const start = validateInput(startInput.value);
    const end = validateInput(endInput.value);
    const path = chessboard.findShortestPath(start, end);
    console.log(chessboard.convertOutput(path));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQix1QkFBdUIsT0FBTztBQUM5QjtBQUNBLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtBQUNsQztBQUNBLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQ2YvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsT0FBTztBQUM5QiwyQkFBMkIsT0FBTztBQUNsQyxtQ0FBbUMsRUFBRSxHQUFHLEVBQUU7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLLEdBQUcsS0FBSztBQUNqRDtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsR0FBRyxVQUFVO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxPQUFPLEVBQUUsT0FBTztBQUNsRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7OztVQ3RGOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDRDs7OztBQUl4QyxtREFBZ0I7QUFDaEIsdUJBQXVCLGlEQUFlOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDaGVzc2JvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZENvbnRhaW5lcmApO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA4OyBqKyspeyAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICAgICAgICAgIHNxdWFyZS5pZCA9IGAke2l9LSR7an1gO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYGJveGApO1xuICAgICAgICAgICAgLy9zcXVhcmUuaW5uZXJUZXh0ID0gYCR7aX0sJHtqfWA7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaGVzc2JvYXJkOyIsImNsYXNzIHVuZGlyZWN0ZWRHcmFwaHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFkZE5vZGVzKCk7XG4gICAgICAgIHRoaXMuYWRkRWRnZXMoKTtcbiAgICB9XG5cbiAgICBhZGROb2Rlcygpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA4OyBqKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGBbJHtpfSwke2p9XWAsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVkZ2VzKCl7XG4gICAgICAgIGNvbnN0IGtuaWdodE1vdmVtZW50ID0gW1sxLDJdLFsyLDFdLFsxLC0yXSxbMiwtMV0sWy0xLC0yXSxbLTIsLTFdLFstMSwyXSxbLTIsMV1dO1xuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMuYm9hcmQua2V5cygpKXtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuYm9hcmQuZ2V0KGtleSk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWCA9IHBhcnNlSW50KGtleVsxXSk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWSA9IHBhcnNlSW50KGtleVszXSk7XG5cbiAgICAgICAgICAgIGtuaWdodE1vdmVtZW50LmZvckVhY2gob2Zmc2V0ID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc1ggPSBtb3ZlWCArIG9mZnNldFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NZID0gbW92ZVkgKyBvZmZzZXRbMV07XG4gICAgICAgICAgICAgICAgaWYocG9zWCA+PSAwICYmIHBvc1ggPD0gNyAmJiBwb3NZID49IDAgJiYgcG9zWSA8PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goYFske3Bvc1h9LCR7cG9zWX1dYCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kU2hvcnRlc3RQYXRoKHN0YXJ0ID0gYGE1YCwgZW5kID0gYGY2YCl7XG4gICAgICAgIC8vVXNlcyBicmVhZHRoLWZpcnN0IHNlYXJjaFxuICAgICAgICBzdGFydCA9IHRoaXMuY29udmVydElucHV0KHN0YXJ0KTtcbiAgICAgICAgZW5kID0gdGhpcy5jb252ZXJ0SW5wdXQoZW5kKTtcblxuICAgICAgICBjb25zdCB2aXNpdGVkID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBub2RlUGFyZW50cyA9IG5ldyBNYXAoKTsgLy9rZWVwcyB0cmFjayBvZiBwYXJlbnQgb2YgZWFjaCB2YWx1ZSBzbyB3ZSBjYW4gcmV2ZXJzZSB0aGUgcGF0aFxuICAgICAgICBjb25zdCBxdWV1ZSA9IFtzdGFydF07XG4gICAgICAgIFxuICAgICAgICB3aGlsZShxdWV1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYobm9kZSA9PSBlbmQpIHJldHVybiB0aGlzLnJldmVyc2VQYXRoKHN0YXJ0LCBlbmQsIG5vZGVQYXJlbnRzKTtcbiAgICAgICAgICAgIGlmKCFub2RlICYmIHZpc2l0ZWQuaGFzKG5vZGUpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmlzaXRlZC5zZXQobm9kZSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmdldChub2RlKS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZighbm9kZVBhcmVudHMuaGFzKHZhbHVlKSkgbm9kZVBhcmVudHMuc2V0KHZhbHVlLG5vZGUpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VQYXRoKHN0YXJ0LCBlbmQsIG5vZGVQYXJlbnRzKXtcbiAgICAgICAgY29uc3QgcGF0aCA9IFtlbmRdO1xuICAgICAgICBsZXQgbm9kZSA9IGVuZDtcblxuICAgICAgICB3aGlsZShub2RlICE9IHN0YXJ0KXtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlUGFyZW50cy5nZXQobm9kZSk7XG4gICAgICAgICAgICBwYXRoLnVuc2hpZnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgY29udmVydElucHV0KHN0cil7XG4gICAgICAgIC8vQ29udmVydHMgY2hlc3Mgbm9tZW5jbGF0dXJlIGludG8gbnVtYmVycyBmb3IgY29kZSBhcnJheVxuICAgICAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZmlyc3ROdW0gPSBzdHIuY2hhckNvZGVBdCgwKSAtIDk3O1xuICAgICAgICBjb25zdCBzZWNvbmROdW0gPSBwYXJzZUludChzdHJbMV0pIC0gMTtcbiAgICAgICAgcmV0dXJuIGBbJHtmaXJzdE51bX0sJHtzZWNvbmROdW19XWA7XG4gICAgfVxuXG4gICAgY29udmVydE91dHB1dChwYXRoKXtcbiAgICAgICAgLy9Db252ZXJ0cyBiYWNrIHRvIG5vcm1hbCBjaGVzcyBub21lbmNsYXR1cmVcbiAgICAgICAgbGV0IGNvbnZlcnRlZFBhdGggPSBbXTtcbiAgICAgICAgcGF0aC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIHBhcnNlSW50KG5vZGVbMV0pKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bSA9IHBhcnNlSW50KG5vZGVbM10pICsgMTtcbiAgICAgICAgICAgIGNvbnZlcnRlZFBhdGgucHVzaChgJHtsZXR0ZXJ9JHtuZXdOdW19YCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRQYXRoO1xuICAgIH0gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdW5kaXJlY3RlZEdyYXBoOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHVuZGlyZWN0ZWRHcmFwaCBmcm9tIFwiLi9ncmFwaC5qc1wiO1xuaW1wb3J0IGNyZWF0ZUNoZXNzYm9hcmQgZnJvbSBcIi4vZG9tLmpzXCI7XG5cblxuXG5jcmVhdGVDaGVzc2JvYXJkKCk7XG5jb25zdCBjaGVzc2JvYXJkID0gbmV3IHVuZGlyZWN0ZWRHcmFwaCgpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2VhcmNoQnRuYCk7XG5jb25zdCBzdGFydElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0SW5wdXRgKTtcbmNvbnN0IGVuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZElucHV0YCk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQodmFsdWUpe1xuICAgIC8vcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgdmFsdWUgaXMgZW1wdHlcbiAgICAvL21ha2Ugc3VyZSB0aGUgaW5wdXQgZm9sbG93cyBmb3JtYXRcbn1cblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgaGFuZGxlQ2xpY2spO1xuZnVuY3Rpb24gaGFuZGxlQ2xpY2soKXtcbiAgICBjb25zdCBzdGFydCA9IHZhbGlkYXRlSW5wdXQoc3RhcnRJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgZW5kID0gdmFsaWRhdGVJbnB1dChlbmRJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgcGF0aCA9IGNoZXNzYm9hcmQuZmluZFNob3J0ZXN0UGF0aChzdGFydCwgZW5kKTtcbiAgICBjb25zb2xlLmxvZyhjaGVzc2JvYXJkLmNvbnZlcnRPdXRwdXQocGF0aCkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==