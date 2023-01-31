import undirectedGraph from "./graph.js";
import createChessboard from "./dom.js";

const chessboard = (() => {
    createChessboard();

    const chessboard = new undirectedGraph();
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