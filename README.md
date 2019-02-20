# cake-or-death
gameboard array

init
[0, 1, 2, 3, 4, 5, 6, 7, 8];
userC chooses 0
[C, 1, 2, 3, 4, 5, 6, 7, 8];
userD chooses 4
[C, 1, 2, 3, D, 5, 6, 7, 8];

[C, 1, 2, C, 4, 5, C, 7, 8]

gameboard[0];

IN RESULTS.JS
if(userInfo.result === "tie") {
    node.textcontent = 'It was a tie! You both lose!'
}
if(userInfo.result === "cake") {
    node.textcontent = 'Cake rules supreme' + userInfo.winner + ', You are the winner!'
}


if (userInfo.winner === userInfo.cakePlayer) {
    'display cake message'
}

if (userInfo.results === cake) {
    'display cake message' + userInfo.cakePlayer
}

To do the redirect

Option 1: 
Repackage the userInfo object and send it via JSON

Option 2: 
Encode the URI component for userInfo.result
window.location = 'result.html?=banana' + encodeURI(userInfo.result);

font-family: 'Coiny', cursive;
font-family: 'Indie Flower', cursive;
font-family: 'Anton', sans-serif;
font-family: 'Gloria Hallelujah', cursive;
font-family: 'Luckiest Guy', cursive;