const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const turn = new Turn('pug', card);

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const turn = new Turn('pug', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the user\'s guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const turn = new Turn('pug', card);

    expect(turn.returnGuess('pug')).to.equal('pug')
  }); 

  it('should return the Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).deep.equal(card.id)
  }); 

  it('should determine whether guess matches correct answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).deep.equal(false);
  }); 

    it('should tell the user if their guess is correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const turn = new Turn('pug', card);

    expect(turn.giveFeedback()).deep.equal('incorrect!');
  }); 
});