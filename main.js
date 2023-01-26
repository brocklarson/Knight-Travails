const chessBoard = () => {
    const board = new Map();
    
    function addVertices(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                board.set([i,j], []);
            }
        }
    }

    function addEdges(value, key, map){
        const offsets = [[1,2],[2,1],[1,-2],[2,-1],[-1,-2],[-2,-1],[-1,2],[-2,1]];
        const posX = key[0];
        const posY = key[1];

        offsets.forEach(offset =>{
            if(posX + offset[0] >= 0 && posX + offset[0] <= 7 && posY + offset[1] >= 0 && posY + offset[1] <= 7){
                board.get(key).push([posX + offset[0], posY + offset[1]]);
            }
        })
    }

    (function init(){
        addVertices();
        board.forEach(addEdges);  
    }());
}


chessBoard();