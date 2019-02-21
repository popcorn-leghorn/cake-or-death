function returnWinningCells(gameboard, player) {
    let cellArray = [];
    if(gameboard[0] === player && gameboard[1] === player && gameboard[2] === player) {
        cellArray[0] = gameboard[0];
        cellArray[1] = gameboard[1];
        cellArray[2] = gameboard[2];
        return cellArray;
    }
    if(gameboard[3] === player && gameboard[4] === player && gameboard[5] === player) {
        cellArray[0] = gameboard[3];
        cellArray[1] = gameboard[4];
        cellArray[2] = gameboard[5];
        return cellArray;
    } 
    if(gameboard[6] === player && gameboard[7] === player && gameboard[8] === player) {
        cellArray[0] = gameboard[6];
        cellArray[1] = gameboard[7];
        cellArray[2] = gameboard[8];
        return cellArray;
    }
    if(gameboard[0] === player && gameboard[3] === player && gameboard[6] === player) {
        cellArray[0] = gameboard[0];
        cellArray[1] = gameboard[3];
        cellArray[2] = gameboard[6];
        return cellArray;
    }
    if(gameboard[1] === player && gameboard[4] === player && gameboard[7] === player) {
        cellArray[0] = gameboard[1];
        cellArray[1] = gameboard[4];
        cellArray[2] = gameboard[7];
        return cellArray;
    }
    if(gameboard[2] === player && gameboard[5] === player && gameboard[8] === player) {
        cellArray[0] = gameboard[2];
        cellArray[1] = gameboard[5];
        cellArray[2] = gameboard[8];
        return cellArray;
    }
    if(gameboard[2] === player && gameboard[4] === player && gameboard[6] === player) {
        cellArray[0] = gameboard[2];
        cellArray[1] = gameboard[4];
        cellArray[2] = gameboard[6];
        return cellArray;
    }
    if(gameboard[0] === player && gameboard[4] === player && gameboard[8] === player) {
        cellArray[0] = gameboard[0];
        cellArray[1] = gameboard[4];
        cellArray[2] = gameboard[8];
        return cellArray;
    }
}

export default returnWinningCells;