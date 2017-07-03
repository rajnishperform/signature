function rollDice(){

var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");
var status = document.getElementById("status");
var p1Score = document.getElementById("player1Score");
var p2Score = document.getElementById("player2Score");
var score1 = 0;
var score2 = 0;
var moves = 0;

var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
var moves = 1;

var diceTotal = d1 + d2;
die1.innerHTML = d1;
die2.innerHTML = d2;
status.innerHTML = "You rolled "+diceTotal+".";

if (moves == 1) {
    if (d1 == 1 && d2 == 1) { // if both dice equal 1, set the score to equal 0
        diceTotal = 0;
        moves++;
        score1 = score1 + diceTotal;
        p1Score.innerHTML += score1;
        status.innerHTML += " Your score has been reset to zero";
    } else {
        if(d1 == d2) {        //if both dice are the same, double the players score
            diceTotal = diceTotal*2;
            moves++;
            score1 = score1 + diceTotal;
            p1Score.innerHTML += score1;
            status.innerHTML += " Lucky! your total has been doubled to "+(diceTotal)+".";
        } else{
            moves++;
            score1 = score1 + diceTotal;
            p1Score.innerHTML += score1;
            status.innerHTML += " Your Turn "+player2+".";
            console.log(score1);
        }
    }
} else {
    if (d1 == 1 && d2 == 1) { // if both dice equal 1, set the score to equal 0
        diceTotal = 0;
        moves++;
        score2 = score2 + diceTotal;
        p2Score.innerHTML += score2;
        status.innerHTML += player2+" score has been reset to zero";
    } else {
        if(d1 == d2) {        //if both dice are the same, double the players score
            diceTotal = diceTotal*2;
            moves++;
            score2 = score2 + diceTotal;
            p2Score.innerHTML += score2;
            status.innerHTML += " Lucky! your total has been doubled to "+(diceTotal)+".";
        } else{
            moves++;
            score2 = score2 + diceTotal;
            p2Score.innerHTML += score2;
            status.innerHTML += " Your Turn "+player1+"."; 
        }
    }
}
