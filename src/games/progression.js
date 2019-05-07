import makeGame from '..';
import random from '../utils';

const progressionQuestion = () => { // Поиск НОД: если правильно угадано, возвращаем true
  const start = random(30);
  const step = random(10, -10);
  const progressionLenght = 10;
  const position = random(progressionLenght, 1);
  let question = '';
  const answer = `${start + position * step}`;
  for (let progressionStep = 1; progressionStep <= progressionLenght; progressionStep += 1) {
    if (progressionStep === position) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + progressionStep * step}`;
    }
  }
  question = question.trim();
  return [question, answer];
};
const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(progressionQuestion, gameDescription);
