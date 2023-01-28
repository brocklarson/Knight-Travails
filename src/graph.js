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

export default undirectedGraph;