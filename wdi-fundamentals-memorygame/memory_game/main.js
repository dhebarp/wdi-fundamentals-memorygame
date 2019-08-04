var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You've found a match");
  } else {
    console.log("Sorry, Try Again");
}
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
checkForMatch();
    }
flipCard (0);
flipCard (2);
