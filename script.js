const lubang = document.querySelectorAll('div.lubang');
const tikus = document.querySelectorAll('div.tikus');
const mulai = document.querySelector('button');
const skorGame = document.querySelector('h1');
const whack = document.querySelectorAll('.whack');

// variable
let skor;
let wMuncul;
let gameJalan = false;

// memunculkan tikus
function waktuMuncul(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function tikusMuncul(tikus) {
    let nomorRandom = tikus[Math.floor(Math.random() * tikus.length)];
    !nomorRandom.classList.contains('keluar')
        ? nomorRandom.classList.add('keluar')
        : tikusMuncul(tikus);

    setTimeout(function () {
        nomorRandom.classList.remove('keluar');
    }, wMuncul);
}

// mulai game
mulai.addEventListener('click', mulaiGame);
function mulaiGame() {
    if (gameJalan == false) {
        skor = 0;
        skorGame.innerText = skor;
        wMuncul = waktuMuncul(400, 800);
        let gameMulai = setInterval(function () {
            tikusMuncul(tikus);
        }, wMuncul);
        setTimeout(function () {
            clearInterval(gameMulai);
        }, 15000);
        setTimeout(function () {
            alert(`Skor Anda ${skor}`);
            gameJalan = false;
            console.clear();
        }, 16000);
    }
    gameJalan = true;
}

function pukulAudio(whack) {
    let randomAudio = whack[Math.floor(Math.random() * whack.length)];
    !randomAudio.play()
        ? randomAudio.play()
        : pukulAudio(whack);
}

// skor game
tikus.forEach(function (vTikus) {
    vTikus.addEventListener('click', function () {
        skor++;
        skorGame.innerText = skor;
        pukulAudio(whack);
        this.classList.remove('keluar');
    });
});