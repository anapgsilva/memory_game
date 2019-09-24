// console.log("Up and running!");

const cards = [
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
	];

var cardsInPlay = [];
var cardsInPlaySuit = [];

var numberWins = 0;
var numberGames = 0;

var userScore = document.createElement('p');
document.getElementById('score').appendChild(userScore);


function updateScore() {
	userScore.textContent = "You have won " + numberWins + " out of " + numberGames + " games.";
};


function shuffle(cards) {
	cards.sort(() => Math.random() - 0.5);
}


function createBoard() {
	shuffle(cards);
	for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	cardsInPlaySuit.push(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay[0] === cardsInPlay[1] && cardsInPlaySuit[0] === cardsInPlaySuit[1]) {
		//alert("Card has already been flipped.");
		cardsInPlay.pop();
		cardsInPlaySuit.pop();
	}
	else if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		numberWins++;
	} else {
		alert("Sorry, try again.");
	}
	numberGames++;
	updateScore();
};


function resetBoard(cardElement) {
	document.getElementById('game-board').innerHTML = "";
	createBoard();
	cardsInPlay = [];
	cardsInPlaySuit = [];
};


createBoard();
updateScore();

var resetButton = document.getElementById('resetGame');
resetButton.addEventListener('click', resetBoard);

