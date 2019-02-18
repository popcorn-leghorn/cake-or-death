function updateGameboard(gameBoard, input, player) {
    gameBoard[input] = player;
    return gameBoard;
}

export default updateGameboard;