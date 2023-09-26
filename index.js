randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImg1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute('src', randomImg1);

randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute('src', randomImg2);

var flagImg = "<span style='font-size:100px;'>&#128681;</span>"

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = flagImg + "Player1 win!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 win!" + flagImg
} else {
    document.querySelector("h1").innerHTML = "Draw"
};