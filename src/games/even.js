import {
  makeGame, echo, answer, random,
} from '..';

const evenQuestion = () => { // Проверка четности: если правильно угадана, возвращаем true
  const targetNumber = random(30);
  const targetAnswer = targetNumber % 2 === 0 ? 'yes' : 'no';
  echo(`Question: ${targetNumber}`);
  const userAnswer = answer();
  if (targetAnswer === userAnswer) {
    echo('Correct!');
    return true;
  }
  echo(`'${userAnswer}' is wrong answer ;(. Correct answer was '${targetAnswer}'`);
  return false;
};

const evenGame = () => makeGame(evenQuestion, 'Answer "yes" if number even otherwise answer "no"');

export default evenGame;
