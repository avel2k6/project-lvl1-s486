import makeGame from '..';
import random from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const primeQuestion = () => {
  const question = random(30);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => makeGame(primeQuestion, gameDescription);
