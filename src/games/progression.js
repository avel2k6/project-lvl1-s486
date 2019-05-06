import makeGame from '..';
import random from '../utils';

const progressionQuestion = () => { // Поиск НОД: если правильно угадано, возвращаем true
  const start = random(30);
  const step = random(10, -10);
  const progressionLenght = 10;
  const position = random(progressionLenght);
  let question = '';
  let answer = 0;
  for (let progressionStep = 0; progressionStep <= progressionLenght; progressionStep += 1) {
    if (progressionStep === position) {
      question = `${question} ..`;
      answer = start + progressionStep * step;
    } else {
      question = `${question} ${start + progressionStep * step}`;
    }
  }
  question = question.trim();
  return [question, answer];
};
const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => makeGame(progressionQuestion, gameDescription);

export default progressionGame;
