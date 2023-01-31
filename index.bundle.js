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

    function resetSquares(){
        Array.from(squares).forEach(square => square.style.border = "");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQix1QkFBdUIsT0FBTztBQUM5QjtBQUNBLDRCQUE0QixFQUFFLEdBQUcsSUFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7QUNiL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLE9BQU87QUFDbEMsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsS0FBSyxHQUFHLEtBQUs7QUFDakQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLEdBQUcsVUFBVTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTyxFQUFFLE9BQU87QUFDbEQsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7VUN0RjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0Q7O0FBRXhDO0FBQ0EsSUFBSSxtREFBZ0I7O0FBRXBCLDJCQUEyQixpREFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDaGVzc2JvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZENvbnRhaW5lcmApO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA4OyBqKyspeyAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICAgICAgICAgIHNxdWFyZS5pZCA9IGBbJHtqfSwkezctaX1dYDtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGBib3hgKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaGVzc2JvYXJkOyIsImNsYXNzIHVuZGlyZWN0ZWRHcmFwaHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFkZE5vZGVzKCk7XG4gICAgICAgIHRoaXMuYWRkRWRnZXMoKTtcbiAgICB9XG5cbiAgICBhZGROb2Rlcygpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA4OyBqKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGBbJHtpfSwke2p9XWAsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVkZ2VzKCl7XG4gICAgICAgIGNvbnN0IGtuaWdodE1vdmVtZW50ID0gW1sxLDJdLFsyLDFdLFsxLC0yXSxbMiwtMV0sWy0xLC0yXSxbLTIsLTFdLFstMSwyXSxbLTIsMV1dO1xuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMuYm9hcmQua2V5cygpKXtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuYm9hcmQuZ2V0KGtleSk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWCA9IHBhcnNlSW50KGtleVsxXSk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWSA9IHBhcnNlSW50KGtleVszXSk7XG5cbiAgICAgICAgICAgIGtuaWdodE1vdmVtZW50LmZvckVhY2gob2Zmc2V0ID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc1ggPSBtb3ZlWCArIG9mZnNldFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NZID0gbW92ZVkgKyBvZmZzZXRbMV07XG4gICAgICAgICAgICAgICAgaWYocG9zWCA+PSAwICYmIHBvc1ggPD0gNyAmJiBwb3NZID49IDAgJiYgcG9zWSA8PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goYFske3Bvc1h9LCR7cG9zWX1dYCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kU2hvcnRlc3RQYXRoKHN0YXJ0ID0gYGEyYCwgZW5kID0gYGg0YCl7XG4gICAgICAgIC8vVXNlcyBicmVhZHRoLWZpcnN0IHNlYXJjaFxuICAgICAgICBzdGFydCA9IHRoaXMuY29udmVydElucHV0KHN0YXJ0KTtcbiAgICAgICAgZW5kID0gdGhpcy5jb252ZXJ0SW5wdXQoZW5kKTtcblxuICAgICAgICBjb25zdCB2aXNpdGVkID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBub2RlUGFyZW50cyA9IG5ldyBNYXAoKTsgLy9rZWVwcyB0cmFjayBvZiBwYXJlbnQgb2YgZWFjaCB2YWx1ZSBzbyB3ZSBjYW4gcmV2ZXJzZSB0aGUgcGF0aFxuICAgICAgICBjb25zdCBxdWV1ZSA9IFtzdGFydF07XG4gICAgICAgIFxuICAgICAgICB3aGlsZShxdWV1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYobm9kZSA9PSBlbmQpIHJldHVybiB0aGlzLnJldmVyc2VQYXRoKHN0YXJ0LCBlbmQsIG5vZGVQYXJlbnRzKTtcbiAgICAgICAgICAgIGlmKCFub2RlICYmIHZpc2l0ZWQuaGFzKG5vZGUpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmlzaXRlZC5zZXQobm9kZSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmdldChub2RlKS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZighbm9kZVBhcmVudHMuaGFzKHZhbHVlKSkgbm9kZVBhcmVudHMuc2V0KHZhbHVlLG5vZGUpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VQYXRoKHN0YXJ0LCBlbmQsIG5vZGVQYXJlbnRzKXtcbiAgICAgICAgY29uc3QgcGF0aCA9IFtlbmRdO1xuICAgICAgICBsZXQgbm9kZSA9IGVuZDtcblxuICAgICAgICB3aGlsZShub2RlICE9IHN0YXJ0KXtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlUGFyZW50cy5nZXQobm9kZSk7XG4gICAgICAgICAgICBwYXRoLnVuc2hpZnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgY29udmVydElucHV0KHN0cil7XG4gICAgICAgIC8vQ29udmVydHMgY2hlc3Mgbm9tZW5jbGF0dXJlIGludG8gbnVtYmVycyBmb3IgY29kZSBhcnJheVxuICAgICAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZmlyc3ROdW0gPSBzdHIuY2hhckNvZGVBdCgwKSAtIDk3O1xuICAgICAgICBjb25zdCBzZWNvbmROdW0gPSBwYXJzZUludChzdHJbMV0pIC0gMTtcbiAgICAgICAgcmV0dXJuIGBbJHtmaXJzdE51bX0sJHtzZWNvbmROdW19XWA7XG4gICAgfVxuXG4gICAgY29udmVydE91dHB1dChwYXRoKXtcbiAgICAgICAgLy9Db252ZXJ0cyBiYWNrIHRvIG5vcm1hbCBjaGVzcyBub21lbmNsYXR1cmVcbiAgICAgICAgbGV0IGNvbnZlcnRlZFBhdGggPSBbXTtcbiAgICAgICAgcGF0aC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIHBhcnNlSW50KG5vZGVbMV0pKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bSA9IHBhcnNlSW50KG5vZGVbM10pICsgMTtcbiAgICAgICAgICAgIGNvbnZlcnRlZFBhdGgucHVzaChgJHtsZXR0ZXJ9JHtuZXdOdW19YCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRQYXRoO1xuICAgIH0gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdW5kaXJlY3RlZEdyYXBoOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHVuZGlyZWN0ZWRHcmFwaCBmcm9tIFwiLi9ncmFwaC5qc1wiO1xuaW1wb3J0IGNyZWF0ZUNoZXNzYm9hcmQgZnJvbSBcIi4vZG9tLmpzXCI7XG5cbmNvbnN0IGNoZXNzYm9hcmQgPSAoKCkgPT4ge1xuICAgIGNyZWF0ZUNoZXNzYm9hcmQoKTtcblxuICAgIGNvbnN0IGNoZXNzYm9hcmQgPSBuZXcgdW5kaXJlY3RlZEdyYXBoKCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNlYXJjaEJ0bmApO1xuICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRJbnB1dGApO1xuICAgIGNvbnN0IGVuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZElucHV0YCk7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ib3hgKVxuICAgIGNvbnN0IHN0YXJ0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3RhcnRJbnB1dCArIHNwYW4uZXJyb3JgKTtcbiAgICBjb25zdCBlbmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlbmRJbnB1dCArIHNwYW4uZXJyb3JgKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGhhbmRsZUNsaWNrKTtcblxuICAgIGZ1bmN0aW9uIHNob3dFcnJvcihlcnJvcil7XG4gICAgICAgIGVycm9yLmlubmVyVGV4dCA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZChgYWN0aXZlYCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRXJyb3IoZXJyb3Ipe1xuICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKGBhY3RpdmVgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KHZhbHVlLCBlcnJvclNlY3Rpb24pe1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIHNob3dFcnJvcihlcnJvclNlY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgICBzaG93RXJyb3IoZXJyb3JTZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApIDwgOTcgfHwgdmFsdWUuY2hhckNvZGVBdCgwKSA+IDEwNCkge1xuICAgICAgICAgICAgc2hvd0Vycm9yKGVycm9yU2VjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuY2hhckNvZGVBdCgxKSA8IDQ5IHx8IHZhbHVlLmNoYXJDb2RlQXQoMSkgPiA1Nikge1xuICAgICAgICAgICAgc2hvd0Vycm9yKGVycm9yU2VjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVFcnJvcihlcnJvclNlY3Rpb24pO1xuICAgICAgICByZXR1cm4gdmFsdWU7ICAgXG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXkgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlcywgbXMpXG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoaWdobGlnaHRTcXVhcmVzKHBhdGgpe1xuICAgICAgICBmb3IgKGxldCBpIGluIHBhdGgpe1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gQXJyYXkuZnJvbShzcXVhcmVzKS5maW5kKHNxdWFyZSA9PiBzcXVhcmUuaWQgPT0gcGF0aFtpXSlcblxuICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJvcmRlciA9IFwic29saWQgMnB4IHdoaXRlXCI7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IFwiLi9pY29uLnBuZ1wiO1xuICAgICAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDc1MCk7XG5cbiAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVDaGlsZChpbWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRTcXVhcmVzKCl7XG4gICAgICAgIEFycmF5LmZyb20oc3F1YXJlcykuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLnN0eWxlLmJvcmRlciA9IFwiXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHJlc2V0U3F1YXJlcygpO1xuICAgICAgICBjb25zdCBzdGFydCA9IHZhbGlkYXRlSW5wdXQoc3RhcnRJbnB1dC52YWx1ZSwgc3RhcnRFcnJvcik7XG4gICAgICAgIGNvbnN0IGVuZCA9IHZhbGlkYXRlSW5wdXQoZW5kSW5wdXQudmFsdWUsIGVuZEVycm9yKTtcbiAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgcGF0aCA9IGNoZXNzYm9hcmQuZmluZFNob3J0ZXN0UGF0aChzdGFydCwgZW5kKTtcbiAgICAgICAgaGlnaGxpZ2h0U3F1YXJlcyhwYXRoKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGVzc2JvYXJkLmNvbnZlcnRPdXRwdXQocGF0aCkpO1xuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9