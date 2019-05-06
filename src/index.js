import readlineSync from 'readline-sync';

// Bin functions
const startGame = (rules = '') => { // Приветствуем пользователя и показывае правила игры, если они заданы
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const ask = (questionData) => { // Задаем вопрос на основе входящей функции
  const [qestion, answer] = questionData;
  console.log(`Question: ${qestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (`${answer}` === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  return false;
};

const makeGame = (questionData, rules) => { // Основной игровой движок
  const userName = startGame(rules);
  for (let round = 1; round <= 3; round += 1) {
    if (ask(questionData()) === false) { // Если ответ неверен, завершаем опрос
      console.log(`Let's try again, ${userName}!`);
      return undefined;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return undefined;
};

export default makeGame;
