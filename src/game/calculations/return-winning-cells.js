function returnWinningCells(gameboard, player) {
    let cellArray = [];
    let blankArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if(gameboard[0] === player && gameboard[1] === player && gameboard[2] === player) {
        cellArray[0] = blankArray[0];
        cellArray[1] = blankArray[1];
        cellArray[2] = blankArray[2];
        return cellArray;
    }
    if(gameboard[3] === player && gameboard[4] === player && gameboard[5] === player) {
        cellArray[0] = blankArray[3];
        cellArray[1] = blankArray[4];
        cellArray[2] = blankArray[5];
        return cellArray;
    } 
    if(gameboard[6] === player && gameboard[7] === player && gameboard[8] === player) {
        cellArray[0] = blankArray[6];
        cellArray[1] = blankArray[7];
        cellArray[2] = blankArray[8];
        return cellArray;
    }
    if(gameboard[0] === player && gameboard[3] === player && gameboard[6] === player) {
        cellArray[0] = blankArray[0];
        cellArray[1] = blankArray[3];
        cellArray[2] = blankArray[6];
        return cellArray;
    }
    if(gameboard[1] === player && gameboard[4] === player && gameboard[7] === player) {
        cellArray[0] = blankArray[1];
        cellArray[1] = blankArray[4];
        cellArray[2] = blankArray[7];
        return cellArray;
    }
    if(gameboard[2] === player && gameboard[5] === player && gameboard[8] === player) {
        cellArray[0] = blankArray[2];
        cellArray[1] = blankArray[5];
        cellArray[2] = blankArray[8];
        return cellArray;
    }
    if(gameboard[2] === player && gameboard[4] === player && gameboard[6] === player) {
        cellArray[0] = blankArray[2];
        cellArray[1] = blankArray[4];
        cellArray[2] = blankArray[6];
        return cellArray;
    }
    if(gameboard[0] === player && gameboard[4] === player && gameboard[8] === player) {
        cellArray[0] = blankArray[0];
        cellArray[1] = blankArray[4];
        cellArray[2] = blankArray[8];
        return cellArray;
    }
}

export default returnWinningCells;