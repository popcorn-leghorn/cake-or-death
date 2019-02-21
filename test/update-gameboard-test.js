const test = QUnit.test;
import updateGameboard from '../src/game/calculations/update-gameboard.js';

test('if user cake inputs zero, update gameboard[0] to "C"', function(assert) {
    let player = 'C';
    const input = 0;
    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];   
    const results = updateGameboard(gameBoard, input, player);
    const expected = ['C', 1, 2, 3, 4, 5, 6, 7, 8];
    assert.deepEqual(results, expected);
});

test('if user death inputs one, update gameboard[1] to "D"', function(assert) {
    let player = 'D';
    const input = 1;
    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];   
    const results = updateGameboard(gameBoard, input, player);
    const expected = [0, 'D', 2, 3, 4, 5, 6, 7, 8];
    assert.deepEqual(results, expected);
});

test('if user cakes second input is two, update gameboard[2] to "C"', function(assert) {
    let player = 'C';
    const input = 2;
    const gameBoard = ['C', 'D', 2, 3, 4, 5, 6, 7, 8];   
    const results = updateGameboard(gameBoard, input, player);
    const expected = ['C', 'D', 'C', 3, 4, 5, 6, 7, 8];
    assert.deepEqual(results, expected);
});

test('if user cakes second input is two, update gameboard[2] to "C"', function(assert) {
    const init = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let player = 'C';
    const input = 2;
    const gameBoard = updateGameboard(updateGameboard(init, 0, 'C'), 1, 'D');     
    const results = updateGameboard(gameBoard, input, player);
    const expected = ['C', 'D', 'C', 3, 4, 5, 6, 7, 8];
    assert.deepEqual(results, expected);
});

