const tikus = document.querySelectorAll('div.tikus');
const mulai = document.querySelector('button');
const skorGame = document.querySelector('.skor-tampil span:first-child');
const waktuGamePapan = document.querySelector('.skor-tampil span:last-child');
const whack = document.querySelectorAll('.whack');

// variable
let skor;
let waktuGame;
let selesai;
let gameJalan = false;

// memunculkan tikus
function waktuMuncul(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function tikusMuncul(tikus) {
    let nomorRandom = tikus[Math.floor(Math.random() * tikus.length)];
    let wMuncul = waktuMuncul(400, 700);
    tikus.forEach(valTikus => {
        valTikus.addEventListener('click', tambahSkor);
    });
    !nomorRandom.classList.contains('keluar')
        ? nomorRandom.classList.add('keluar')
        : tikusMuncul(tikus);

    setTimeout(function () {
        nomorRandom.classList.remove('keluar');
        if (!selesai) {
            tikusMuncul(tikus);
        }
    }, wMuncul);
}

// mulai game
function mulaiGame() {
    if (gameJalan == false) {
        skor = 0;
        skorGame.innerText = skor;
        waktuGame = 15;
        waktuGamePapan.innerText = waktuGame;
        selesai = false;
        tikusMuncul(tikus);
        let wSekarang = setInterval(function () {
            waktuGame--;
            waktuGamePapan.innerText = waktuGame;
        }, 1000);
        setTimeout(function () {
            selesai = true;
            clearInterval(wSekarang);
        }, 15000);
        setTimeout(function () {
            alert(`Skor Anda ${skor}\nYour Score ${skor}`);
            gameJalan = false;
        }, 16000);
    }
    gameJalan = true;
}

function pukulAudio(whack) {
    let randomAudio = whack[Math.floor(Math.random() * whack.length)];
    return randomAudio.play();
}

// skor game
function tambahSkor() {
    skor++;
    skorGame.innerText = skor;
    pukulAudio(whack);
    this.removeEventListener('click', tambahSkor);
    this.classList.remove('keluar');
}