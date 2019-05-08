import readlineSync from 'readline-sync';

const ask = (qestion, answer) => { // Задаем вопрос пользователю на основе входящих данных
  console.log(`Question: ${qestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (answer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  return false;
};

const makeGame = (questionData, rules) => { // Основной игровой движок
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [qestion, answer] = questionData();
    const isWin = ask(qestion, answer);
    if (!isWin) { // Если ответ неверен, завершаем опрос
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default makeGame;
