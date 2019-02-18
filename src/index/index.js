const formNode = document.getElementById('user-input');



formNode.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(formNode);



    const userInfo = {
        playerCake: formData.get('player-cake'),
        playerDeath: formData.get('player-death')    
    };
    console.log(userInfo);
})