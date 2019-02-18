const gameBodyNode = document.getElementById('game-body');
// dynamically creates table elements for game board
const buildGameboard = [
    [
        {
            value: 0,
            row: 1,
            img: '',
            owner: ''
        },
        {
            value: 1,
            row: 1,
            img: '',
            owner: ''
        },
        {
            value: 2,
            row: 1,
            img: '',
            owner: ''
        }],

    [
        {
            value: 3,
            row: 2,
            img: '',
            owner: ''
        },
        {
            value: 4,
            row: 2,
            img: '',
            owner: ''
        },
        {
            value: 5,
            row: 2,
            img: '',
            owner: ''
        }],

    [
        {
            value: 6,
            row: 3,
            img: '',
            owner: ''
        },
        {
            value: 7,
            row: 3,
            img: '',
            owner: ''
        },
        {
            value: 8,
            row: 3,
            img: '',
            owner: ''
        }]
];

for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr');
    gameBodyNode.appendChild(tr);
    for (let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        const button = document.createElement('button');
        button.value = buildGameboard[i][j].value;
        // can use above method to add additional attributes to buttons.
        tr.appendChild(td);
        td.appendChild(button);
    }
};
