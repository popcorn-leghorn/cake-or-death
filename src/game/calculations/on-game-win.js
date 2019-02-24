import returnWinningCells from './return-winning-cells.js';
function playSparkle() {
    const winSound = document.getElementById('win-sound');
    winSound.play();
}
// OnGameWin is a very long function with a few loops and conditional blocks.
// As we move forward in the course you'll see how powerful it is to break those
// parts into their own functions, much like you did with playSparkle above.

function onGameWin(gameboard, player, userInfo) {
    const allButtons = document.getElementsByClassName('gameboard-buttons');

    for (let index = 0; index < allButtons.length; index++) {
        allButtons[index].disabled = true;
    }

    playSparkle();

    // the if block and loop below and the one on line 33 are almost exactly the same;
    // this is a great opportunity to create a function and pass the 
    // differences (playerXWins and selectX) as arguments.

    if (player === 'C') {
        userInfo.result = 'cake';
        userInfo.playerCakeWins++;
        const selectCake = returnWinningCells(gameboard, 'C');
        for (let i = 0; i < selectCake.length; i++) {
            const winningCakeCell = document.getElementById('cell-' + selectCake[i]);
            winningCakeCell.classList.add('animate-win');
        }
    }

    if (player === 'D') {
        userInfo.result = 'death';
        userInfo.playerDeathWins++;
        const selectDeath = returnWinningCells(gameboard, 'D');
        for (let i = 0; i < selectDeath.length; i++) {
            const winningDeathCell = document.getElementById('cell-' + selectDeath[i]);
            winningDeathCell.classList.add('animate-win');
        }
    }

    const logWin = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', logWin);

    setTimeout(function () {
        window.location = 'result.html?result=' + encodeURIComponent(userInfo.result);
    }, 3500);
}

export default onGameWin;