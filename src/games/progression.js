import makeGame from '..';
import random from '../utils';

const progressionLenght = 10;

const progressionQuestion = () => {
  const start = random(30);
  const step = random(10, -10);
  const hiddenElementPosition = random(progressionLenght - 1, 0);
  let question = '';
  const answer = `${start + hiddenElementPosition * step}`;
  for (let i = 0; i < progressionLenght; i += 1) {
    if (i === hiddenElementPosition) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + i * step}`;
    }
  }
  question = question.trim();
  return [question, answer];
};
const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(progressionQuestion, gameDescription);
