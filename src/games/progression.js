import {
  makeGame, random,
} from '..';

const progressionQuestion = () => { // Поиск НОД: если правильно угадано, возвращаем true
  const start = random(30);
  const step = random(10);
  const position = random(9);
  let str = '';
  let target = 0;
  for (let i = 0; i <= 10; i += 1) {
    if (i === position) {
      str = `${str} ..`;
      target = start + i * step;
    } else {
      str = `${str} ${start + i * step}`;
    }
  }
  return [str, target];
};

const progressionGame = () => makeGame(progressionQuestion, 'Find the greatest common divisor of given numbers.');

export default progressionGame;
