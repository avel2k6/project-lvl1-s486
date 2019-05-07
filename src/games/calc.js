import makeGame from '..';
import random from '../utils';

const summ = (x, y) => [`${x} + ${y}`, `${x + y}`];
const mult = (x, y) => [`${x} * ${y}`, `${x * y}`];
const diff = (x, y) => [`${x} - ${y}`, `${x - y}`];

const calcQuestion = () => {
  const number1 = random(10, -5);
  const number2 = random(30);
  // Рандомно выбираем функцию для игры
  let gameData;
  const a = random(2);
  switch (a) {
    case 0:
      gameData = diff(number1, number2);
      break;
    case 1:
      gameData = mult(number1, number2);
      break;
    default:
      gameData = summ(number1, number2);
  }
  return gameData;
};
const gameDescription = 'What is the result of the expression?';

export default () => makeGame(calcQuestion, gameDescription);
