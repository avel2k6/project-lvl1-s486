import makeGame from '..';
import random from '../utils';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const evenQuestion = () => {
  const question = random(30);
  const answer = isEven(question);
  return [question, answer];
};

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const evenGame = () => makeGame(evenQuestion, gameDescription);

export default evenGame;
