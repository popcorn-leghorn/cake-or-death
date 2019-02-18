const test = QUnit.test;
import win from '../src/game/calculations/win.js';

test('if cake owns spots 0, 1, & 2, win function returns true', function(assert) {
    const gameboard = ['C', 'C', 'C', 3, 4, 5, 6, 7, 8];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});

test('if cake owns spots 3, 4, & 5, win function returns true', function(assert) {
    const gameboard = [0, 1, 2, 'C', 'C', 'C', 6, 7, 8];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});

test('if cake owns spots 6, 7, & 8, win function returns true', function(assert) {
    const gameboard = [0, 1, 2, 3, 4, 5, 'C', 'C', 'C'];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});

test('if cake owns spots 0, 3, & 6, win function returns true', function(assert) {
    const gameboard = ['C', 1, 2, 'C', 4, 5, 'C', 7, 8];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});

test('if cake owns spots 1, 4, & 7, win function returns true', function(assert) {
    const gameboard = [0, 'C', 2, 3, 'C', 5, 6, 'C', 8];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});

test('if cake owns spots 2, 5, & 8, win function returns true', function(assert) {
    const gameboard = [0, 1, 'C', 3, 4, 'C', 6, 7, 'C'];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});
test('if cake owns spots 2, 4, & 6, win function returns true', function(assert) {
    const gameboard = [0, 1, 'C', 3, 'C', 5, 'C', 7, 8];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});
test('if cake owns spots 0, 4, & 8, win function returns true', function(assert) {
    const gameboard = ['C', 1, 2, 3, 'C', 5, 6, 7, 'C'];
    const player = 'C';
    const expected = true;
    const result = win(gameboard, player);
    assert.deepEqual(result, expected);
});