const lubang = document.querySelectorAll('div.lubang');
const tikus = document.querySelectorAll('div.tikus');
const mulai = document.querySelector('button');
const skorGame = document.querySelector('h1');
const whack = document.querySelector('.whack');

// variable
let skor;
let wMuncul = waktuMuncul(400, 700);
let gameJalan = false;

// memunculkan tikus
function waktuMuncul(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function tikusMuncul(tikus) {
    let nomorRandom = tikus[Math.floor(Math.random() * tikus.length)];
    if (!nomorRandom.classList.contains('keluar')) {
        nomorRandom.classList.add('keluar');
    } else {
        tikusMuncul(tikus);
    }

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
        let gameMulai = setInterval(function () {
            tikusMuncul(tikus);
        }, wMuncul);
        setTimeout(function () {
            clearInterval(gameMulai);
        }, 15000);
        setTimeout(function () {
            alert(`Skor Anda ${skor}`);
            gameJalan = false;
        }, 16000);
    }
    gameJalan = true;
}

// skor game
tikus.forEach(function (vTikus) {
    vTikus.addEventListener('click', function () {
        skor++;
        skorGame.innerText = skor;
        whack.play();
        this.classList.remove('keluar');
    });
});