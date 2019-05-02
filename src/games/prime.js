import {
  makeGame, random,
} from '..';

const isPrime = (x, acc) => {
  if (x === acc) return true;
  return (x % acc === 0 || x < 2) ? false : isPrime(x, acc + 1);
};

const primeQuestion = () => { // Проверка простого числа: если правильно угадана, возвращаем true
  const targetNumber = random(30);
  const targetAnswer = isPrime(targetNumber, 2) ? 'yes' : 'no';
  return [targetNumber, targetAnswer];
};

const primeGame = () => makeGame(primeQuestion, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default primeGame;
