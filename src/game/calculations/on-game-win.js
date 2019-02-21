import returnWinningCells from './return-winning-cells.js';

function onGameWin(gameboard, player, userInfo) {
    const allButtons = document.getElementsByClassName('gameboard-buttons');
    // disables buttons on win
    for(let index = 0; index < allButtons.length; index++) {
        allButtons[index].disabled = true;
    }
    //controls gameboard if player cake wins
    if(player === 'C') {
        userInfo.result = 'cake';
        userInfo.playerCakeWins++;
        const selectCake = returnWinningCells(gameboard, 'C');
        for(let i = 0; i < selectCake.length; i++) {
            const winningCakeCell = document.getElementById('cell-' + selectCake[i]);
            winningCakeCell.classList.add('animate-win');
        }
    }
    // controls gameboard if player death wins
    if(player === 'D') {
        userInfo.result = 'death';
        userInfo.playerDeathWins++;
        const selectDeath = returnWinningCells(gameboard, 'D');
        for(let i = 0; i < selectDeath.length; i++) {
            const winningDeathCell = document.getElementById('cell-' + selectDeath[i]);
            winningDeathCell.classList.add('animate-win');
        }
    }
    // logs winner info to local storage
    const logWin = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', logWin);
    // delays before going to results page
    setTimeout(function() {
        window.location = 'result.html?result=' + encodeURIComponent(userInfo.result);
    }, 3500);
}

export default onGameWin;