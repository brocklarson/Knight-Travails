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

export default createChessboard;