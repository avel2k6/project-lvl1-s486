import {
  makeGame, random,
} from '..';

const divider = (n1, n2) => { // Алгоритм Евклида для нахождения НОД
  let a = n1; // Иначе линтер ругается на перепоределение входящих параметров
  let b = n2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gcdQuestion = () => { // Поиск НОД: если правильно угадано, возвращаем true
  const number1 = random(100);
  const number2 = random(100);
  const targetAnswer = divider(number1, number2);
  return [`${number1} ${number2}`, targetAnswer];
};

const gcdGame = () => makeGame(gcdQuestion, 'Find the greatest common divisor of given numbers.');

export default gcdGame;
