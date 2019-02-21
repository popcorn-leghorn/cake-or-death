function returnWinningCells(gameboard, player) {
    let winningCellArray = [];
    let initArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    if(gameboard[0] === player && gameboard[1] === player && gameboard[2] === player) {
        winningCellArray[0] = initArray[0];
        winningCellArray[1] = initArray[1];
        winningCellArray[2] = initArray[2];
        return winningCellArray;
    }
    if(gameboard[3] === player && gameboard[4] === player && gameboard[5] === player) {
        winningCellArray[0] = initArray[3];
        winningCellArray[1] = initArray[4];
        winningCellArray[2] = initArray[5];
        return winningCellArray;
    } 
    if(gameboard[6] === player && gameboard[7] === player && gameboard[8] === player) {
        winningCellArray[0] = initArray[6];
        winningCellArray[1] = initArray[7];
        winningCellArray[2] = initArray[8];
        return winningCellArray;
    }
    if(gameboard[0] === player && gameboard[3] === player && gameboard[6] === player) {
        winningCellArray[0] = initArray[0];
        winningCellArray[1] = initArray[3];
        winningCellArray[2] = initArray[6];
        return winningCellArray;
    }
    if(gameboard[1] === player && gameboard[4] === player && gameboard[7] === player) {
        winningCellArray[0] = initArray[1];
        winningCellArray[1] = initArray[4];
        winningCellArray[2] = initArray[7];
        return winningCellArray;
    }
    if(gameboard[2] === player && gameboard[5] === player && gameboard[8] === player) {
        winningCellArray[0] = initArray[2];
        winningCellArray[1] = initArray[5];
        winningCellArray[2] = initArray[8];
        return winningCellArray;
    }
    if(gameboard[2] === player && gameboard[4] === player && gameboard[6] === player) {
        winningCellArray[0] = initArray[2];
        winningCellArray[1] = initArray[4];
        winningCellArray[2] = initArray[6];
        return winningCellArray;
    }
    if(gameboard[0] === player && gameboard[4] === player && gameboard[8] === player) {
        winningCellArray[0] = initArray[0];
        winningCellArray[1] = initArray[4];
        winningCellArray[2] = initArray[8];
        return winningCellArray;
    }
}

export default returnWinningCells;