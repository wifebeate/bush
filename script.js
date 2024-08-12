function showApology() {
    document.querySelector('.welcome-section').style.display = 'none';
    document.getElementById('apology-section').style.display = 'block';
}

function showLove() {
    document.getElementById('apology-section').style.display = 'none';
    document.getElementById('love-section').style.display = 'block';
}

function showFinalMessage() {
    document.getElementById('love-section').style.display = 'none';
    document.getElementById('final-message-section').style.display = 'block';
}

function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play();
    alert("Playing our song...");
}
