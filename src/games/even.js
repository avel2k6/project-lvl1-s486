import {
  makeGame, random,
} from '..';

const evenQuestion = () => { // Проверка четности: если правильно угадана, возвращаем true
  const targetNumber = random(30);
  const targetAnswer = targetNumber % 2 === 0 ? 'yes' : 'no';
  return [targetNumber, targetAnswer];
};

const evenGame = () => makeGame(evenQuestion, 'Answer "yes" if number even otherwise answer "no"');

export default evenGame;
