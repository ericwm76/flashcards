class Turn {
  constructor(guess, cardObject) {
    this.guess = guess;
    this.id = cardObject.id;
    this.question = cardObject.question;
    this.answers = cardObject.answers;
    this.correctAnswer = cardObject.correctAnswer;
  };

  returnGuess() {
    return this.guess
  };

  returnCard() {
    return this.id
  };

  evaluateGuess() {
    if (this.guess === this.correctAnswer) {
      return true;
    } else {
      return false;
    };
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'You got it!'
    } else {
      return 'incorrect!'
    };
  };
};

module.exports = Turn;