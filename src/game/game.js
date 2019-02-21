import buildGameboard from './calculations/build-gameboard.js';
import updateGameboard from './calculations/update-gameboard.js';
import win from './calculations/win.js';
import returnWinningCells from './calculations/return-winning-cells.js';

const gameBodyNode = document.getElementById('game-body');
const json = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(json);
const cakeNameNode = document.getElementById('cake-name');
const deathNameNode = document.getElementById('death-name');
const turnDisplayNode = document.getElementById('turn-display');
const cakeWinNode = document.getElementById('cake-wins');
const deathWinNode = document.getElementById('death-wins');

cakeNameNode.textContent = userInfo.playerCake;
deathNameNode.textContent = userInfo.playerDeath;
deathWinNode.textContent = userInfo.playerDeathWins;
cakeWinNode.textContent = userInfo.playerCakeWins;

let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let turnCount = 0;
let player = 'C';
turnDisplayNode.textContent = 'It\'s ' + userInfo.playerCake + '\'s turn!';

function playSound() {
    const bodySound = document.getElementById('click-sound');
    bodySound.play();
}

for(let i = 0; i < 3; i++) {
    const tr = document.createElement('tr');
    gameBodyNode.appendChild(tr);
    for(let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        td.id = 'cell-' + buildGameboard[i][j].value;
        td.classList.add('game-cell');
        const button = document.createElement('button');
        button.value = buildGameboard[i][j].value;
        button.id = 'button-' + buildGameboard[i][j].value;
        button.classList.add('gameboard-buttons');

        button.addEventListener('click', function() {
            playSound();
            const selectedButton = document.getElementById('button-' + button.value);
            selectedButton.style.visibility = 'hidden';
            const selectedCell = document.getElementById('cell-' + button.value);
            if(turnCount % 2 === 0) {
                player = 'C';
                selectedCell.classList.add('cake-cell');
            }
            else {
                player = 'D';
                selectedCell.classList.add('death-cell');
            }

            if(player === 'D') {
                turnDisplayNode.textContent = 'It\'s ' + userInfo.playerCake + '\'s turn!';
            }
            else if(player === 'C') {
                turnDisplayNode.textContent = 'It\'s ' + userInfo.playerDeath + '\'s turn!';
            }

            const allButtons = document.getElementsByClassName('gameboard-buttons');
            updateGameboard(gameboard, button.value, player);
            
            if(win(gameboard, player) === true) {
                for(let index = 0; index < allButtons.length; index++) {
                    allButtons[index].disabled = true;
                }
                if(player === 'C') {
                    userInfo.result = 'cake';
                    userInfo.playerCakeWins++;
                    const selectCake = returnWinningCells(gameboard, 'C');
                    for(let i = 0; i < selectCake.length; i++) {
                        const winningCakeCell = document.getElementById('cell-' + selectCake[i]);
                        winningCakeCell.classList.add('animate-win');
                    }
                }
                if(player === 'D') {
                    userInfo.result = 'death';
                    userInfo.playerDeathWins++;
                    const selectDeath = returnWinningCells(gameboard, 'D');
                    for(let i = 0; i < selectDeath.length; i++) {
                        const winningDeathCell = document.getElementById('cell-' + selectDeath[i]);
                        winningDeathCell.classList.add('animate-win');
                    }
                }

                const logWin = JSON.stringify(userInfo);
                window.localStorage.setItem('userInfo', logWin);

                setTimeout(function() {
                    window.location = 'result.html?result=' + encodeURIComponent(userInfo.result);
                }, 3500);
            }
            else if(win(gameboard, player) === false && turnCount === 8) {
                userInfo.result = 'tie';
                window.location = 'result.html?result=' + encodeURIComponent(userInfo.result);
            }
            else {
                turnCount++;
            }

        });
        tr.appendChild(td);
        td.appendChild(button);
    }
}
