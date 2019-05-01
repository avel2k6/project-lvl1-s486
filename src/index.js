import readlineSync from 'readline-sync';

// Print and read functions
const echo = (str = '') => console.log(str);
const answer = () => readlineSync.question('Your answer: ');

// Welcome and ask name functions
const welcome = (rules) => { echo('Welcome to the Brain Games!'); echo(rules); };
const askName = () => readlineSync.question('May I have your name?: ');
const hello = str => echo(`Hello, ${str}`);


// Games functions
const random = x => Math.floor(Math.random() * x); // Рандомизатор


// Bin functions
const startGame = (rules = '') => { // Приветствуем пользователя и показывае правила игры, если они заданы
  welcome(rules);
  const userName = askName();
  hello(userName);
  return userName;
};

const ask = (func) => { // Задаем вопрос на основе входящей функции
  const qestion = func;
  const qestionStr = qestion[0]; // От функции мы ждем строковый вопрос
  const qestionTarget = qestion[1]; // И целевой ответ
  echo(`Question: ${qestionStr}`);
  const userAnswer = answer(); // Приводим ответ к числу
  if (`${qestionTarget}` === userAnswer) {
    echo('Correct!');
    return true;
  }
  echo(`'${userAnswer}' is wrong answer ;(. Correct answer was '${qestionTarget}'`);
  return false;
};

const makeGame = (func, rules) => { // Основной игровой движок
  const userName = startGame(rules);
  let i = 3; // Задаем количетво вопросов в игре
  while (i) {
    if (ask(func()) === false) { // Если ответ неверен, завершаем опрос
      echo(`Let's try again, ${userName}!`);
      return false;
    }
    i -= 1;
  }
  echo(`Congratulations, ${userName}!`);
  return true;
};

export {
  startGame, makeGame, random,
};
