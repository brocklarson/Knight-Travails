import undirectedGraph from "./graph.js";
import createChessboard from "./dom.js";



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