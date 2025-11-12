// Array of dice images (each image represents a dice, from 1 through 6)
var arrayImages = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
];

// Select the HTML elements for images, title, roll button and score
const imag1 = document.querySelector(".img1");
const imag2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const totalScore = document.querySelector("#score");
const roll_Button = document.querySelector("#roll_Button");
const reset_Button = document.querySelector("#reset_Button");

// Initialize players score
let scorePlayer1 = 0;
let scorePlayer2 = 0;    

if(roll_Button){
    roll_Button.addEventListener('click', rollDice);  // When button is clicked, roll the dice
}

// Attach event listener to reset button (if it exists)
if(reset_Button){
    reset_Button.addEventListener('click', resetGame);
}

function updateScore() {
    if(totalScore){
        totalScore.textContent = `Score: ${scorePlayer1} - ${scorePlayer2}`;
    }
}

function rollDice() {
    // Generate random numbers from 0 to 5 for each player
    var randomNumber1 = Math.floor(Math.random() * arrayImages.length);
    var randomNumber2 = Math.floor(Math.random() * arrayImages.length);

    // Select the images randomly from the array for each player
    var randomImage1 = arrayImages[randomNumber1];
    imag1.setAttribute("src", randomImage1);
    var randomImage2 = arrayImages[randomNumber2];
    imag2.setAttribute("src", randomImage2);

    // Conditions to determine the winner with numeric rolls
    if(randomNumber1 === randomNumber2) {
        title.innerHTML = "Draw!";
    } 
    else if(randomNumber1 > randomNumber2) {
        title.innerHTML = "🚩Player 1 Wins!"   
        scorePlayer1++;
        //console.log(scorePlayer1);
    }
    else {
        title.innerHTML = "Player 2 Wins!🚩"
        scorePlayer2++;
        //console.log(scorePlayer2);
    }
    
    // Update the score shown on the page after each roll
    updateScore();
    
}

function resetGame() {
    // Reset players score
    scorePlayer1 = 0;
    scorePlayer2 = 0;

    // Update the score on the page
    updateScore();

    // Reset the title text
    title.innerHTML = "Let's Play With Dice 🎲";
}


