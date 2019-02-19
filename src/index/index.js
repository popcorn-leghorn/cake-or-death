const formNode = document.getElementById('user-input');

formNode.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(formNode);

    const userInfo = {
        playerCake: formData.get('player-cake'),
        playerDeath: formData.get('player-death') 
        winner: '',
        loser: ''   
    };

    const json = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', json);

    window.location = './game.html';
});