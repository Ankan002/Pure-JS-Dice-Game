//Player 1

var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImages1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomImages1;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

//Player 2

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImages2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomImages2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//Heading Change

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 has won the game";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 has won the game 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 Match Drawn 🚩";
}