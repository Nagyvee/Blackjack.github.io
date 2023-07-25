//Giving variables
let totalCards = 0
let isAlive = false
let hasBlackjack = false
let cards = []
let sumEl = document.getElementById("sum-el")
let currentCards = document.getElementById("current-cards")
let messageEl = document.getElementById("message-el")
let playerStatus = document.getElementById("player-status")
let nagyVee = document.getElementById("nagy-vee")
let playerCredits = 1000;

//inserting game-cards images 
function getCardImage(cardValue) {
    return cardValue + ".jpg"; 
  }

// to generate a new card
function getRandomCard(){
   let cardRoute = Math.floor (Math.random()*13)+1 
   if (cardRoute === 1) {
    return 11; 
  } else if (cardRoute === 11 || cardRoute === 12 || cardRoute === 13) {
    return 10; 
  } else {
    return cardRoute;
  }
}
 // to start the game

function start(){

    if (playerCredits > 4) {
    let isAlive = false
    let hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     totalCards = firstCard + secondCard
    renderGame()
    playBlackjackMusic()}
   
    if (playerCredits <= 12) {
        alert("You don't have enough credits. Refresh the  page to start again.");
        document.getElementById("btn-start").disabled = true;
      }
}
// render the game
function renderGame() {
    isAlive = true;
    hasBlackjack = false;
    currentCards.innerHTML = "";

//card images size
    for (let i = 0; i < cards.length; i++) {
      let cardImage = document.createElement("img");
      cardImage.src = "images/card" + getCardImage(cards[i]);

      cardImage.width = 60; 
      cardImage.height = 95; 
      currentCards.appendChild(cardImage);
      
    }

    sumEl.textContent = "Total " + totalCards;
// game running
    if (totalCards <= 20) {
      message = "Do you want to pick another card 😊";
      playerCredits -= 24;
    updatePlayerCredits();
    } else if (totalCards === 21) {
      message = "You WIN. You got the Blackjack 🤩 +(180)";
      hasBlackjack = true;
      playerCredits += 280;
    updatePlayerCredits();
    } else if (totalCards === 31) {
      message = "Jackpot 🔥🔥🔥🔥+(750)";
      hasBlackjack = true;
      playerCredits += 750;
    updatePlayerCredits();
    } 
    else {
      message = "You LOSE. You're out of the game 😭";
      isAlive = false;
      playerCredits -= 30;
    updatePlayerCredits();
    }
    
    messageEl.textContent = message;
  }


// to get a new card
 function newCard(){
    if (playerCredits > 4) { if (isAlive === true && hasBlackjack === false){
    let thirdcard = getRandomCard()
    cards.push(thirdcard)
    totalCards += thirdcard
    renderGame()}
 }
 if (playerCredits <= 12) {
    alert("You don't have enough credits. Refresh the page to start again.");
    document.getElementById("btn-new").disabled = true;
  }
}
 // adding music
 function playBlackjackMusic() {
    let audio = document.getElementById("blackjack-audio");
    audio.play();
  }

// player credits function
  function updatePlayerCredits() {
    let creditsDisplay = document.getElementById("credits");
    creditsDisplay.textContent = "R " + playerCredits;
  }

  