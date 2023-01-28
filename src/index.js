import undirectedGraph from "./graph.js";
import createChessboard from "./dom.js";



createChessboard();
const chessboard = new undirectedGraph();

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