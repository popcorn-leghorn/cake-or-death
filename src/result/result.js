const playAgain = document.getElementById('play-again');
const endMessageNode = document.getElementById('end-message');
const endImageNode = document.getElementById('end-image');
const searchParams = new URLSearchParams(window.location.search);
const resultToFind = searchParams.get('result');
const json = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(json);

if(resultToFind === 'cake') {
    endMessageNode.textContent = userInfo.playerCake;
    endMessageNode.innerHTML += ' wins!<br> Let them eat Cake!';
    endImageNode.src = '../../assets/cake-1.png';
    endImageNode.id = 'cake-wins';
    endImageNode.alt = 'There is an image of a wedding cake';
}
if(resultToFind === 'death') {
    endMessageNode.textContent = userInfo.playerDeath;
    endMessageNode.innerHTML += ' wins! 1000 years of Death falls upon the land...';
    endImageNode.src = '../../assets/death-1.png';
    endImageNode.id = 'death-wins';
    endImageNode.alt = 'There is an image of the grim reaper';
}
if(resultToFind === 'tie') {
    endMessageNode.textContent = userInfo.playerCake + ' and ' + userInfo.playerDeath;
    endMessageNode.innerHTML += ' were not strong enough to defeat one another, an unfortunate tie has resulted from their inadequacies.';
    endImageNode.src = '../../assets/newthumb_3__2.png';
    endImageNode.id = 'tie';
    endImageNode.alt = 'There is an image of a cake and a skull that reads cake or death';
}

playAgain.addEventListener('click', function() {
    window.location = 'game.html';
});