const chessBoard = () => {
    const board = new Map();
    
    function addVertices(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                board.set(`[${i},${j}]`, []);
            }
        }
    }

    function addEdges(value, key, map){
        const offsets = [[1,2],[2,1],[1,-2],[2,-1],[-1,-2],[-2,-1],[-1,2],[-2,1]];
        const posX = parseInt(key[1]);
        const posY = parseInt(key[3]);

        offsets.forEach(offset =>{
            if(posX + offset[0] >= 0 && posX + offset[0] <= 7 && posY + offset[1] >= 0 && posY + offset[1] <= 7){
                board.get(key).push(`[${posX + offset[0]},${posY + offset[1]}]`); 
            }
        })
    }

    function findReverse(start, end, reversePath){
        const path = [end];
        let node = end;

        while(node != start){
            node = reversePath.get(node);
            path.unshift(node);
        }
        return path;
    }

    function convertInput(str){
        console.log(str);

        //d4 > f8
        //3,3 > 5,7
    }

    function bfs(start, end){
        start = convertInput(start);
        end = convertInput(end); 
        let visited = new Map();
        let reversePath = new Map();
        let queue = [start];
        
        while(queue.length > 0){
            const node = queue.shift();
            if(node == end) return findReverse(start, end, reversePath);

            if(node && !visited.has(node)){
                visited.set(node);
                board.get(node).forEach(adj => {
                    if(!reversePath.has(adj)) reversePath.set(adj,node);
                    queue.push(adj)
                });
            }
        }
    }

    function display(path){
        let convertedPath = '';
        path.forEach(node => {
            const letter = String.fromCharCode(97 + parseInt(node[1]));
            const newNum = parseInt(node[3]) + 1;
            convertedPath += `${letter}${newNum} > `;
        })
        convertedPath = convertedPath.substring(0, convertedPath.length - 3);
        console.log(convertedPath)
    }

    (function init(){
        addVertices();
        board.forEach(addEdges);  
        const path = bfs(`d4`,`f8`);
        display(path);
    }());
}


chessBoard();