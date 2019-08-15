const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

var card, turn1, turn2, turn3;

beforeEach(function() {
  card = new Card({ id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
  turn1 = new Turn();
  turn2 = new Turn('sea otter', card);
  turn3 = new Turn('pug', card);
});

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should return the user\'s guess', function() {
    expect(turn3.returnGuess('pug')).to.equal('pug')
  }); 

  it('should return the Card', function() {
    expect(turn3.returnCard()).to.eql(card.id)
  }); 

  it('should determine whether guess matches correct answer', function() {
    expect(turn3.evaluateGuess()).to.eql(false);
  }); 

  it('should tell the user if their guess is correct', function() {
    expect(turn2.giveFeedback()).to.eql('correct!');
    expect(turn3.giveFeedback()).to.eql('incorrect!');
  }); 
});