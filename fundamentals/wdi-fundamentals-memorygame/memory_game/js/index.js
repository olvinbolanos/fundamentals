let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
]

let cardsInPlay = [];
let cardOne, cardTwo, cardThree, cardFour;
var score = 0;

let checkForMatch = () => {
  if(cardsInPlay.length === 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        score++;
        alert("You found a match! You scored " + score);
      
      } else {
        alert("Sorry, try again.");
        
      }
  } else {
     return;
  }
}

var resetButton = () => {
  var button = document.createElement('button');
  button.textContent = 'Reset';
  button.addEventListener('click', redoOver, false);
  document.getElementById('game-board').appendChild(button);
}



//this is to start the game over again
function redoOver() {
  var pic = document.getElementsByTagName('img');
  for(var x=0; x<pic.length; x++) {
    pic[x].src = 'images/back.png';
  }
  cardsInPlay = [];
}
//this appends all the back.png cards on the board
let createBoard = () => {
  for(var x=0; x<cards.length; x++) {
    var cardElement = document.createElement('img');
    cardElement.src = 'images/back.png';
    cardElement.setAttribute('class', 'board');
    cardElement.setAttribute('data-id', x);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', flipCard, false);
  }
  resetButton()
}

//this flip switch turns the cards into their rightful card
function flipCard() {
  var cardId = this.getAttribute('data-id');
  var cardPic = this.getAttribute('src');
  console.log(cardPic);
  console.log(cardId);
  switch (cards[cardId].rank) {
    case 'queen':
        var pic = document.querySelectorAll('img')[cardId];
        pic.src = cards[cardId].cardImage;
        cardsInPlay.push(cards[cardId]);
        checkForMatch()
        break;
    case 'king':
        var pic = document.querySelectorAll('img')[cardId];
        pic.src = cards[cardId].cardImage;
        cardsInPlay.push(cards[cardId]);
        checkForMatch()
        break;
        default: 
        console.log('You ran out of cards to flip');
   }
}

createBoard()
