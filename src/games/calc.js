import {
  makeGame, random,
} from '..';

const summ = (x, y) => [`${x} + ${y}`, x + y];
const mult = (x, y) => [`${x} * ${y}`, x * y];
const diff = (x, y) => [`${x} - ${y}`, x - y];

const calcQuestion = () => { // Проверка калькулятора: если правильно, возвращаем true
  const number1 = random(30);
  const number2 = random(30);
  // Рандомно выбираем функцию для игры
  let target;
  const a = random(2);
  switch (a) {
    case 0:
      target = diff(number1, number2);
      break;
    case 1:
      target = mult(number1, number2);
      break;
    default:
      target = summ(number1, number2);
  }
  return [target[0], target[1]];
};

const calcGame = () => makeGame(calcQuestion, 'What is the result of the expression?');

export default calcGame;
