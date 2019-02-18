const gameBodyNode = document.getElementById('game-body');
// dynamically creates table elements for game board
import buildGameboard from './calculations/build-gameboard.js';

for(let i = 0; i < 3; i++) {
    const tr = document.createElement('tr');
    gameBodyNode.appendChild(tr);
    for(let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        const button = document.createElement('button');
        button.value = buildGameboard[i][j].value;
        td.id = 'cell-' + buildGameboard[i][j].value;
        // can use above method to add additional attributes to buttons.
        tr.appendChild(td);
        td.appendChild(button);
    }
}
