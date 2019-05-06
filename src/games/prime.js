import makeGame from '..';
import random from '../utils';

const isPrime = (num) => {
  const checkPrime = (x, acc) => {
    if (x === acc) return true;
    return (x % acc === 0 || x < 2) ? false : checkPrime(x, acc + 1);
  };
  return checkPrime(num, 2);
};

const primeQuestion = () => {
  const question = random(30);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => makeGame(primeQuestion, gameDescription);

export default primeGame;
