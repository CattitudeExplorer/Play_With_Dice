// Array of dice images (each image represents a dice, from 1 through 6)
var arrayImages = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
];

// Generate random numbers from 0 to 5 for each player
var randomNumber1 = Math.floor(Math.random() * arrayImages.length);
var randomNumber2 = Math.floor(Math.random() * arrayImages.length);

// Select the HTML elements for images, title and subtitle to manipulate them
var imag1 = document.querySelector(".img1");
var imag2 = document.querySelector(".img2");
var title = document.querySelector("h1");
var refresh = document.querySelector("p");

// Select the images randomly from the array for each player
var randomImage1 = arrayImages[randomNumber1];
imag1.setAttribute("src", randomImage1);
var randomImage2 = arrayImages[randomNumber2];
imag2.setAttribute("src", randomImage2);

//subtitle
refresh.innerHTML = "Refresh the page to play again!";

// Conditions to determine the winner
if(randomImage1 === randomImage2) {
    title.innerHTML = "Draw!";
} 
else if(randomImage1 > randomImage2) {
    title.innerHTML = "🚩Player 1 Wins!"   
}
else {
    title.innerHTML = "Player 2 Wins!🚩"
}



