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

// Bin functions
const startGame = (rules = '') => { // Приветствуем пользователя и показывае правила игры, если они заданы
  welcome(rules);
  const userName = askName();
  hello(userName);
  return userName;
};

const evenGame = () => { // Игра на поиск четного числа
  const userName = startGame('Answer "yes" if number even otherwise answer "no"');
  let i = 3; // Задаем количетво вопросов в игре
  while (i) {
    if (evenQuestion() === false) { // Если ответ неверен, завершаем опрос
      echo(`Let's try again, ${userName}!`);
      return false;
    }
    i -= 1;
  }
  echo(`Congratulations, ${userName}!`);
  return true;
};

export { startGame, evenGame };
