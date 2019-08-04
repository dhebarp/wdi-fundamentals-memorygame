var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png',
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png',
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png',
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-hearts.png',
},
];

var cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  if (cardsInPlay.length === 2) {
  console.log("You've found a match");
  } else {
    console.log("Sorry, Try Again");
}
}
}
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
checkForMatch();
    }
flipCard (0);
flipCard (2);
