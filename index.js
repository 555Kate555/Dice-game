let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

function changeBtns() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}


rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(player1Turn) {
        player1Score += randomNumber;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 turn";
        player1Scoreboard.textContent = player1Score;
    }else {
        player2Score += randomNumber;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 turn";
        player2Scoreboard.textContent = player2Score;
    }
    if(player1Score >= 20) {
       message.textContent = "Player 1 has won! 🥳";
       changeBtns();
    } else if(player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉";
        changeBtns();
    }

    player1Turn = !player1Turn;

});

function reset() {
    message.textContent = "Player 1 Turn";
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}


resetBtn.addEventListener("click", function() {
    reset();
});



