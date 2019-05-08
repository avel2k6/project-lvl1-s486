import makeGame from '..';
import random from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  const maxDivider = num / 2;
  for (let divider = 2; divider < maxDivider; divider += 1) {
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
