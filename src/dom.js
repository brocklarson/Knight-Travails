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

export default createChessboard;