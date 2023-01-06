'use strict';

let secretNum = Number(Math.trunc(Math.random() * 20) + 1);
// console.log(secretNum);
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    let num = document.querySelector('.enterNo').value
    // console.log(num);

    if (num == secretNum) {
        document.querySelector('.info').textContent = "🎉 You Won";
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#1e5b0c';
        document.querySelector('.check').style.display = 'none';
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    } else if (num > secretNum) {
        document.querySelector('.info').textContent = "📈 Too High";
        score--;
        document.querySelector('.score').textContent = score;
    } else if (num < secretNum) {
        document.querySelector('.info').textContent = "📉 Too Low";
        score--;
        document.querySelector('.score').textContent = score;
    }

    if (score == 0) {
        document.querySelector('.info').textContent = "⛔ You Lose";
        document.querySelector('body').style.backgroundColor = '#a00';
        document.querySelector('.check').style.display = 'none';
    }
});

// RESTART:
document.querySelector('.restart').addEventListener('click', function () {
    secretNum = Number(Math.trunc(Math.random() * 20) + 1);
    // console.log(secretNum);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = 'auto';
    document.querySelector('.info').textContent = "Start guessing...";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.enterNo').value = "";
    document.querySelector('body').style.backgroundColor = '#140202';
    document.querySelector('.check').style.display = 'inline-block';
});