import makeGame from '..';
import random from '../utils';

// Алгоритм Евклида для нахождения НОД
const gcd = (n1, n2) => ((n1 === 0 || n2 === 0)
  ? n1 + n2
  : gcd(Math.max(n1, n2) % Math.min(n1, n2), Math.min(n1, n2)));

const gcdQuestion = () => {
  const number1 = random(100);
  const number2 = random(100);
  const question = `${number1} ${number2}`;
  const answer = `${gcd(number1, number2)}`;
  return [question, answer];
};
const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => makeGame(gcdQuestion, gameDescription);
