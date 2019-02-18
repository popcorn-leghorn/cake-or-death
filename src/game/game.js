const gameBodyNode = document.getElementById('game-body');
// dynamically creates table elements for game board
import buildGameboard from './calculations/build-gameboard.js';
import updateGameboard from './calculations/update-gameboard.js';
import win from './calculations/win.js';

let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let turnCount = 0;
let player = 'C';

for(let i = 0; i < 3; i++) {
    const tr = document.createElement('tr');
    gameBodyNode.appendChild(tr);
    for(let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        const button = document.createElement('button');
        button.value = buildGameboard[i][j].value;
        button.addEventListener('click', function() {
            if(turnCount % 2 === 0) {
                player = 'C';
            }
            else {
                player = 'D';
            }
            updateGameboard(gameboard, button.value, player);
            turnCount++;
        
        });
        td.id = 'cell-' + buildGameboard[i][j].value;
        // can use above method to add additional attributes to buttons.
        tr.appendChild(td);
        td.appendChild(button);
    }
}
