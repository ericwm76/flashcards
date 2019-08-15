const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  };

  takeTurn(guess) {
    const turn1 = new Turn(guess, this.deck.cards[this.turns]);

    if (turn1.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    };

    this.turns++;
    return turn1.giveFeedback();
  };

  calculatePercentCorrect() {
    return parseInt((this.turns - this.incorrectAnswers.length) / this.turns * 100)
  };

};

module.exports = Round;