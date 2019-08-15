const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

var card1, card2, card3, deck, round1;

beforeEach(function() {
  card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

  deck = new Deck([card1, card2, card3]);

  round1 = new Round(deck);
});

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should have a deck of cards', function() {
    expect(round1.deck.cards).to.eql([card1, card2, card3]);
  });

  it('should return the current card', function() {
    expect(round1.returnCurrentCard()).to.eql(card1);
  });

  it('should take a turn', function() {
    expect(round1.takeTurn('capybara')).to.eql('incorrect!');
    expect(round1.takeTurn('spleen')).to.eql('incorrect!');
  });

  it('should count turns', function() {
    expect(round1.turns).to.eql(0);
    round1.takeTurn('capybara');
    expect(round1.turns).to.eql(1);
  });

  it('should change cards after a turn', function() {

  });

  it('should calculate the percent correct', function() {

  });
});