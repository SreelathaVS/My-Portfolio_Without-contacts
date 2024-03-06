var dice1;
dice1 =Math.floor( Math.random()*6 )+ 1;
var imageName1 = "dice" + dice1 + ".png";
var randomDiceImg1 = "images/" + imageName1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImg1);
var dice2;
dice2 = Math.floor(Math.random()*6) + 1;
var imageName2 = "dice" + dice2 + ".png";
var randomDiceImg2 = "images/" + imageName2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImg2);
if (dice1 === dice2) {
    document.querySelector("h1").innerHTML = "Game is Tie, Refresh to play the game again";
} else if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Player 1 is the Winner!, Refresh to play the game again";
} else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 is the Winner!, Refresh to play the game again";
}