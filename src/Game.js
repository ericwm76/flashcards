const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
    // this.currentRound = currentRound;
  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
    const deck1 = new Deck(prototypeQuestions);
    const round1 = new Round(deck1);
    this.printMessage(deck1, round1);
    this.printQuestion(round1);
  };
};

module.exports = Game;