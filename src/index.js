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

const makeGame = (func, rules) => { // Игра на поиск четного числа
  const userName = startGame(rules);
  let i = 3; // Задаем количетво вопросов в игре
  while (i) {
    if (func() === false) { // Если ответ неверен, завершаем опрос
      echo(`Let's try again, ${userName}!`);
      return false;
    }
    i -= 1;
  }
  echo(`Congratulations, ${userName}!`);
  return true;
};

export {
  startGame, makeGame, echo, answer, random,
};
