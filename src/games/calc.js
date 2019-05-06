import makeGame from '..';
import random from '../utils';

const summ = (x, y) => {
  const question = `${x} + ${y}`;
  const answer = x + y;
  return [question, answer];
};
const mult = (x, y) => {
  const question = `${x} * ${y}`;
  const answer = x * y;
  return [question, answer];
};
const diff = (x, y) => {
  const question = `${x} - ${y}`;
  const answer = x - y;
  return [question, answer];
};

const calcQuestion = () => {
  const number1 = random(10, -5);
  const number2 = random(30);
  // Рандомно выбираем функцию для игры
  let randomQuestion;
  const a = random(2);
  switch (a) {
    case 0:
      randomQuestion = diff(number1, number2);
      break;
    case 1:
      randomQuestion = mult(number1, number2);
      break;
    default:
      randomQuestion = summ(number1, number2);
  }
  return randomQuestion;
};
const gameDescription = 'What is the result of the expression?';

const calcGame = () => makeGame(calcQuestion, gameDescription);

export default calcGame;
