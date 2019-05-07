import makeGame from '..';
import random from '../utils';

const isEven = number => number % 2 === 0;

const evenQuestion = () => {
  const question = random(30);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

export default () => makeGame(evenQuestion, gameDescription);
